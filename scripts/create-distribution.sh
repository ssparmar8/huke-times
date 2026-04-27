#!/usr/bin/env bash
# ============================================================
# Huke Times — Create CloudFront Distribution (run once)
# Prerequisites:
#   - ./scripts/setup-infra.sh has been run
#   - ACM certificate has been validated (status: ISSUED)
# ============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/../.aws-deploy-config"

if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "ERROR: .aws-deploy-config not found."
  echo "Run ./scripts/setup-infra.sh first."
  exit 1
fi

# shellcheck source=/dev/null
source "$CONFIG_FILE"

echo "=== Huke Times — Create CloudFront Distribution ==="
echo ""

# ── Check cert is issued ──────────────────────────────────────
echo "[1/3] Verifying SSL certificate..."
CERT_STATUS=$(aws acm describe-certificate \
  --certificate-arn "$CERT_ARN" \
  --region "$REGION" \
  --query 'Certificate.Status' \
  --output text)

if [[ "$CERT_STATUS" != "ISSUED" ]]; then
  echo "ERROR: Certificate is not yet ISSUED (current status: $CERT_STATUS)."
  echo ""
  echo "Check DNS validation records with:"
  echo "  aws acm describe-certificate \\"
  echo "    --certificate-arn $CERT_ARN \\"
  echo "    --region $REGION \\"
  echo "    --query 'Certificate.DomainValidationOptions[*].{Domain:DomainName,Name:ResourceRecord.Name,Value:ResourceRecord.Value}' \\"
  echo "    --output table"
  exit 1
fi
echo "  ✓ Certificate status: ISSUED"

# ── Check distribution doesn't already exist ─────────────────
EXISTING_DIST="${DISTRIBUTION_ID:-}"
if [[ -n "$EXISTING_DIST" ]]; then
  echo ""
  echo "  Distribution already exists: $EXISTING_DIST"
  echo "  To deploy content, run: ./scripts/deploy.sh"
  exit 0
fi

# ── Create distribution ───────────────────────────────────────
echo ""
echo "[2/3] Creating CloudFront distribution..."

CALLER_REF="huketimes-$(date +%s)"
DIST_CONFIG_FILE=$(mktemp /tmp/cf-dist-config.XXXXXX.json)

python3 - <<PYEOF > "$DIST_CONFIG_FILE"
import json

config = {
  "CallerReference": "$CALLER_REF",
  "Aliases": {
    "Quantity": 2,
    "Items": ["$DOMAIN", "$WWW_DOMAIN"]
  },
  "DefaultRootObject": "index.html",
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "s3-origin",
        "DomainName": "${BUCKET_NAME}.s3.${REGION}.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        },
        "OriginAccessControlId": "$OAC_ID"
      }
    ]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "s3-origin",
    "ViewerProtocolPolicy": "redirect-to-https",
    "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6",
    "Compress": True,
    "AllowedMethods": {
      "Quantity": 2,
      "Items": ["GET", "HEAD"],
      "CachedMethods": {
        "Quantity": 2,
        "Items": ["GET", "HEAD"]
      }
    }
  },
  "CustomErrorResponses": {
    "Quantity": 2,
    "Items": [
      {
        "ErrorCode": 403,
        "ResponsePagePath": "/index.html",
        "ResponseCode": "200",
        "ErrorCachingMinTTL": 10
      },
      {
        "ErrorCode": 404,
        "ResponsePagePath": "/index.html",
        "ResponseCode": "200",
        "ErrorCachingMinTTL": 10
      }
    ]
  },
  "PriceClass": "PriceClass_All",
  "Enabled": True,
  "ViewerCertificate": {
    "ACMCertificateArn": "$CERT_ARN",
    "SSLSupportMethod": "sni-only",
    "MinimumProtocolVersion": "TLSv1.2_2021"
  },
  "HttpVersion": "http2and3",
  "IsIPV6Enabled": True,
  "Comment": "Huke Times static site"
}
print(json.dumps(config, indent=2))
PYEOF

DIST_RESULT=$(aws cloudfront create-distribution \
  --distribution-config "file://$DIST_CONFIG_FILE" \
  --output json)

rm -f "$DIST_CONFIG_FILE"

DISTRIBUTION_ID=$(echo "$DIST_RESULT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['Distribution']['Id'])")
DISTRIBUTION_DOMAIN=$(echo "$DIST_RESULT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['Distribution']['DomainName'])")

echo "  ✓ Distribution created: $DISTRIBUTION_ID"
echo "  CloudFront domain: $DISTRIBUTION_DOMAIN"

# ── Update S3 bucket policy ───────────────────────────────────
echo ""
echo "[3/3] Applying S3 bucket policy (CloudFront-only access)..."

POLICY_FILE=$(mktemp /tmp/s3-bucket-policy.XXXXXX.json)

python3 - <<PYEOF > "$POLICY_FILE"
import json

policy = {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipal",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${BUCKET_NAME}/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::${ACCOUNT_ID}:distribution/$DISTRIBUTION_ID"
        }
      }
    }
  ]
}
print(json.dumps(policy, indent=2))
PYEOF

aws s3api put-bucket-policy \
  --bucket "$BUCKET_NAME" \
  --policy "file://$POLICY_FILE" \
  --region "$REGION"

rm -f "$POLICY_FILE"
echo "  ✓ Bucket policy applied"

# ── Persist distribution info ─────────────────────────────────
{
  echo "DISTRIBUTION_ID=$DISTRIBUTION_ID"
  echo "DISTRIBUTION_DOMAIN=$DISTRIBUTION_DOMAIN"
} >> "$CONFIG_FILE"

# ── DNS instructions ──────────────────────────────────────────
echo ""
echo "================================================================"
echo "  ACTION REQUIRED: Point your domain to CloudFront"
echo "================================================================"
echo ""
echo "  Add these DNS records to your domain registrar:"
echo ""
echo "  Type   Host                 Value"
echo "  CNAME  $DOMAIN        $DISTRIBUTION_DOMAIN"
echo "  CNAME  $WWW_DOMAIN  $DISTRIBUTION_DOMAIN"
echo ""
echo "  If using AWS Route 53, use an A record (Alias) pointing to:"
echo "  $DISTRIBUTION_DOMAIN"
echo ""
echo "  CloudFront takes ~15 minutes to fully deploy globally."
echo "  Then run your first deployment: ./scripts/deploy.sh"
echo "================================================================"

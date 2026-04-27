#!/usr/bin/env bash
# ============================================================
# Huke Times — Full deploy (no custom domain, no ACM needed)
# Creates OAC + distribution if missing, then builds & syncs
# ============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$SCRIPT_DIR/.."
CONFIG_FILE="$ROOT_DIR/.aws-deploy-config"

BUCKET_NAME="huketimes-com-site"
REGION="us-east-1"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

echo "=== Huke Times — CloudFront Deploy ==="
echo ""

# ─────────────────────────────────────────────
# Load existing config if present
# ─────────────────────────────────────────────
DISTRIBUTION_ID=""
OAC_ID=""
if [[ -f "$CONFIG_FILE" ]]; then
  # shellcheck source=/dev/null
  source "$CONFIG_FILE"
fi

# ─────────────────────────────────────────────
# 1. Ensure OAC exists
# ─────────────────────────────────────────────
if [[ -z "${OAC_ID:-}" ]]; then
  echo "[1/5] Creating Origin Access Control..."
  OAC_CONFIG=$(python3 -c "
import json
print(json.dumps({
  'Name': 'huketimes-oac',
  'Description': 'OAC for huketimes-com-site',
  'SigningProtocol': 'sigv4',
  'SigningBehavior': 'always',
  'OriginAccessControlOriginType': 's3'
}))
")
  OAC_ID=$(aws cloudfront create-origin-access-control \
    --origin-access-control-config "$OAC_CONFIG" \
    --query 'OriginAccessControl.Id' \
    --output text)
  echo "  ✓ OAC: $OAC_ID"
else
  echo "[1/5] OAC already exists: $OAC_ID"
fi

# ─────────────────────────────────────────────
# 2. Ensure CloudFront distribution exists
# ─────────────────────────────────────────────
if [[ -z "${DISTRIBUTION_ID:-}" ]]; then
  echo "[2/5] Creating CloudFront distribution (no custom domain)..."

  DIST_CONFIG=$(python3 -c "
import json, time
print(json.dumps({
  'CallerReference': 'huketimes-' + str(int(time.time())),
  'Comment': 'Huke Times static site',
  'DefaultRootObject': 'index.html',
  'Origins': {
    'Quantity': 1,
    'Items': [{
      'Id': 's3-origin',
      'DomainName': '${BUCKET_NAME}.s3.${REGION}.amazonaws.com',
      'S3OriginConfig': {'OriginAccessIdentity': ''},
      'OriginAccessControlId': '$OAC_ID'
    }]
  },
  'DefaultCacheBehavior': {
    'TargetOriginId': 's3-origin',
    'ViewerProtocolPolicy': 'redirect-to-https',
    'CachePolicyId': '658327ea-f89d-4fab-a63d-7e88639e58f6',
    'Compress': True,
    'AllowedMethods': {
      'Quantity': 2,
      'Items': ['GET', 'HEAD'],
      'CachedMethods': {'Quantity': 2, 'Items': ['GET', 'HEAD']}
    }
  },
  'CustomErrorResponses': {
    'Quantity': 2,
    'Items': [
      {'ErrorCode': 403, 'ResponsePagePath': '/index.html', 'ResponseCode': '200', 'ErrorCachingMinTTL': 10},
      {'ErrorCode': 404, 'ResponsePagePath': '/index.html', 'ResponseCode': '200', 'ErrorCachingMinTTL': 10}
    ]
  },
  'PriceClass': 'PriceClass_All',
  'Enabled': True,
  'ViewerCertificate': {
    'CloudFrontDefaultCertificate': True,
    'MinimumProtocolVersion': 'TLSv1.2_2021',
    'SSLSupportMethod': 'vip'
  },
  'HttpVersion': 'http2and3',
  'IsIPV6Enabled': True
}))
")

  DIST_RESULT=$(aws cloudfront create-distribution \
    --distribution-config "$DIST_CONFIG" \
    --output json)

  DISTRIBUTION_ID=$(echo "$DIST_RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['Distribution']['Id'])")
  DISTRIBUTION_DOMAIN=$(echo "$DIST_RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['Distribution']['DomainName'])")
  echo "  ✓ Distribution: $DISTRIBUTION_ID"
  echo "  URL: https://$DISTRIBUTION_DOMAIN"
else
  echo "[2/5] Distribution already exists: $DISTRIBUTION_ID"
  DISTRIBUTION_DOMAIN=$(aws cloudfront get-distribution \
    --id "$DISTRIBUTION_ID" \
    --query 'Distribution.DomainName' \
    --output text)
fi

# ─────────────────────────────────────────────
# 3. Apply S3 bucket policy
# ─────────────────────────────────────────────
echo "[3/5] Applying S3 bucket policy..."
BUCKET_POLICY=$(python3 -c "
import json
print(json.dumps({
  'Version': '2012-10-17',
  'Statement': [{
    'Sid': 'AllowCloudFront',
    'Effect': 'Allow',
    'Principal': {'Service': 'cloudfront.amazonaws.com'},
    'Action': 's3:GetObject',
    'Resource': 'arn:aws:s3:::${BUCKET_NAME}/*',
    'Condition': {
      'StringEquals': {
        'AWS:SourceArn': 'arn:aws:cloudfront::${ACCOUNT_ID}:distribution/$DISTRIBUTION_ID'
      }
    }
  }]
}))
")
aws s3api put-bucket-policy \
  --bucket "$BUCKET_NAME" \
  --policy "$BUCKET_POLICY" \
  --region "$REGION"
echo "  ✓ Bucket policy applied"

# ─────────────────────────────────────────────
# 4. Build
# ─────────────────────────────────────────────
echo "[4/5] Building..."
cd "$ROOT_DIR"
pnpm build
echo "  ✓ Build complete"

# ─────────────────────────────────────────────
# 5. Sync to S3 + invalidate
# ─────────────────────────────────────────────
echo "[5/5] Uploading to S3..."
aws s3 sync dist/ "s3://$BUCKET_NAME/" \
  --delete \
  --exclude "index.html" \
  --cache-control "public, max-age=31536000, immutable" \
  --region "$REGION"

aws s3 cp dist/index.html "s3://$BUCKET_NAME/index.html" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html; charset=utf-8" \
  --region "$REGION"

echo "  ✓ Files uploaded"

echo "  Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text > /dev/null
echo "  ✓ Cache invalidated"

# ─────────────────────────────────────────────
# Save config
# ─────────────────────────────────────────────
cat > "$CONFIG_FILE" <<EOF
ACCOUNT_ID=$ACCOUNT_ID
BUCKET_NAME=$BUCKET_NAME
REGION=$REGION
OAC_ID=$OAC_ID
DISTRIBUTION_ID=$DISTRIBUTION_ID
DISTRIBUTION_DOMAIN=$DISTRIBUTION_DOMAIN
EOF

echo ""
echo "================================================================"
echo "  LIVE at: https://$DISTRIBUTION_DOMAIN"
echo "================================================================"
echo ""
echo "  CloudFront takes ~5-15 min to propagate globally."
echo "  For future deployments, run: pnpm deploy"
echo "================================================================"

#!/usr/bin/env bash
# ============================================================
# Huke Times — AWS Infrastructure Setup (run once)
# Creates: S3 bucket, CloudFront OAC, ACM SSL certificate
# After running: add DNS CNAME records to validate cert,
#                then run ./scripts/create-distribution.sh
# ============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/../.aws-deploy-config"

DOMAIN="huketimes.com"
WWW_DOMAIN="www.huketimes.com"
BUCKET_NAME="huketimes-com-site"
REGION="us-east-1"   # CloudFront requires ACM certs in us-east-1

echo "=== Huke Times — AWS Infrastructure Setup ==="
echo "Domain : $DOMAIN"
echo "Bucket : $BUCKET_NAME"
echo "Region : $REGION"
echo ""

# ── Check prerequisites ──────────────────────────────────────
if ! command -v aws &>/dev/null; then
  echo "ERROR: AWS CLI not found. Install: https://aws.amazon.com/cli/"
  exit 1
fi
if ! command -v python3 &>/dev/null; then
  echo "ERROR: python3 not found."
  exit 1
fi

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
echo "AWS Account: $ACCOUNT_ID"
echo ""

# ── 1. S3 Bucket ─────────────────────────────────────────────
echo "[1/3] S3 Bucket"
if aws s3api head-bucket --bucket "$BUCKET_NAME" --region "$REGION" 2>/dev/null; then
  echo "  ✓ Bucket '$BUCKET_NAME' already exists"
else
  aws s3api create-bucket \
    --bucket "$BUCKET_NAME" \
    --region "$REGION" \
    --output text > /dev/null
  echo "  ✓ Created bucket '$BUCKET_NAME'"
fi

aws s3api put-public-access-block \
  --bucket "$BUCKET_NAME" \
  --public-access-block-configuration \
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true" \
  --region "$REGION"
echo "  ✓ Public access blocked (CloudFront-only access)"

# ── 2. ACM SSL Certificate (must be us-east-1 for CloudFront) ─
echo ""
echo "[2/3] ACM SSL Certificate"
EXISTING_CERT=$(aws acm list-certificates \
  --region "$REGION" \
  --query "CertificateSummaryList[?DomainName=='$DOMAIN'].CertificateArn" \
  --output text)

if [[ -n "$EXISTING_CERT" ]]; then
  CERT_ARN="$EXISTING_CERT"
  CERT_STATUS=$(aws acm describe-certificate \
    --certificate-arn "$CERT_ARN" \
    --region "$REGION" \
    --query 'Certificate.Status' \
    --output text)
  echo "  ✓ Found existing certificate: $CERT_ARN"
  echo "  Status: $CERT_STATUS"
else
  CERT_ARN=$(aws acm request-certificate \
    --domain-name "$DOMAIN" \
    --subject-alternative-names "$WWW_DOMAIN" \
    --validation-method DNS \
    --region "$REGION" \
    --query 'CertificateArn' \
    --output text)
  CERT_STATUS="PENDING_VALIDATION"
  echo "  ✓ Certificate requested: $CERT_ARN"
fi

# ── 3. CloudFront Origin Access Control ──────────────────────
echo ""
echo "[3/3] CloudFront Origin Access Control"
EXISTING_OAC=$(aws cloudfront list-origin-access-controls \
  --query "OriginAccessControlList.Items[?Name=='${DOMAIN}-oac'].Id" \
  --output text)

if [[ -n "$EXISTING_OAC" ]]; then
  OAC_ID="$EXISTING_OAC"
  echo "  ✓ OAC already exists: $OAC_ID"
else
  OAC_CONFIG=$(python3 -c "
import json, sys
print(json.dumps({
  'Name': '${DOMAIN}-oac',
  'Description': 'OAC for ${DOMAIN} static site',
  'SigningProtocol': 'sigv4',
  'SigningBehavior': 'always',
  'OriginAccessControlOriginType': 's3'
}))
")
  OAC_ID=$(aws cloudfront create-origin-access-control \
    --origin-access-control-config "$OAC_CONFIG" \
    --query 'OriginAccessControl.Id' \
    --output text)
  echo "  ✓ Created OAC: $OAC_ID"
fi

# ── Save config ───────────────────────────────────────────────
cat > "$CONFIG_FILE" <<EOF
ACCOUNT_ID=$ACCOUNT_ID
DOMAIN=$DOMAIN
WWW_DOMAIN=$WWW_DOMAIN
BUCKET_NAME=$BUCKET_NAME
REGION=$REGION
CERT_ARN=$CERT_ARN
OAC_ID=$OAC_ID
EOF
echo ""
echo "  Config saved to .aws-deploy-config"

# ── Next steps ────────────────────────────────────────────────
if [[ "$CERT_STATUS" == "PENDING_VALIDATION" ]]; then
  echo ""
  echo "================================================================"
  echo "  ACTION REQUIRED: Validate your SSL certificate via DNS"
  echo "================================================================"
  echo ""
  echo "  Wait ~30 seconds for AWS to generate CNAME records, then run:"
  echo ""
  echo "  aws acm describe-certificate \\"
  echo "    --certificate-arn $CERT_ARN \\"
  echo "    --region $REGION \\"
  echo "    --query 'Certificate.DomainValidationOptions[*].{Domain:DomainName,Name:ResourceRecord.Name,Value:ResourceRecord.Value}' \\"
  echo "    --output table"
  echo ""
  echo "  Add the CNAME records shown to your DNS provider."
  echo "  Validation usually completes within 30 minutes."
  echo ""
  echo "  Once the cert status is ISSUED, run:"
  echo "    ./scripts/create-distribution.sh"
  echo "================================================================"
elif [[ "$CERT_STATUS" == "ISSUED" ]]; then
  echo ""
  echo "  Certificate already ISSUED."
  echo "  Run: ./scripts/create-distribution.sh"
else
  echo ""
  echo "  Certificate status: $CERT_STATUS"
fi

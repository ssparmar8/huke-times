#!/usr/bin/env bash
# ============================================================
# Huke Times — Build & Deploy to S3 + CloudFront
# Prerequisites:
#   - ./scripts/create-distribution.sh has been run
#   - pnpm is installed
# Usage: ./scripts/deploy.sh
# ============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$SCRIPT_DIR/.."
CONFIG_FILE="$ROOT_DIR/.aws-deploy-config"

if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "ERROR: .aws-deploy-config not found."
  echo "Run ./scripts/setup-infra.sh first, then ./scripts/create-distribution.sh"
  exit 1
fi

# shellcheck source=/dev/null
source "$CONFIG_FILE"

if [[ -z "${DISTRIBUTION_ID:-}" ]]; then
  echo "ERROR: DISTRIBUTION_ID not set in .aws-deploy-config."
  echo "Run ./scripts/create-distribution.sh first."
  exit 1
fi

echo "=== Huke Times — Deploy ==="
echo "Bucket      : s3://$BUCKET_NAME"
echo "Distribution: $DISTRIBUTION_ID"
echo ""

# ── 1. Build ──────────────────────────────────────────────────
echo "[1/3] Building..."
cd "$ROOT_DIR"
pnpm build
echo "  ✓ Build complete (out/)"

# ── 2. Sync to S3 ────────────────────────────────────────────
# Hashed assets (JS/CSS/images) get long-lived cache headers.
# index.html is always served fresh so the browser picks up
# new asset hashes immediately.
echo ""
echo "[2/3] Syncing to S3..."

# Upload hashed assets with immutable long-term cache
aws s3 sync out/ "s3://$BUCKET_NAME/" \
  --delete \
  --exclude "index.html" \
  --cache-control "public, max-age=31536000, immutable" \
  --region "$REGION"

# Upload index.html with no-cache so users always get latest
aws s3 cp out/index.html "s3://$BUCKET_NAME/index.html" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html; charset=utf-8" \
  --region "$REGION"

echo "  ✓ Files synced"

# ── 3. Invalidate CloudFront cache ───────────────────────────
echo ""
echo "[3/3] Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)
echo "  ✓ Invalidation created: $INVALIDATION_ID"
echo ""
echo "  Live at: https://$DOMAIN"
echo ""
echo "  To watch invalidation progress:"
echo "  aws cloudfront wait invalidation-completed \\"
echo "    --distribution-id $DISTRIBUTION_ID \\"
echo "    --id $INVALIDATION_ID"

#!/usr/bin/env bash
# Push local Apps Script code + redeploy the live /exec web app in one command.
# Usage: ./apps-script/growth-assessment/deploy.sh "description"
set -e
cd "$(dirname "$0")/../.."   # repo root (where .clasp.json lives)
DEPLOY_ID="AKfycbz3hz4aYftMPlEZ0TuoN-nyrI5toIjBPk-JjzRGHFHJzfWjXEQEQujmMyKZUzQd7ZpD"
clasp push --force
clasp deploy -i "$DEPLOY_ID" -d "${1:-v1.1 update}"
echo "Deployed. /exec: https://script.google.com/macros/s/${DEPLOY_ID}/exec"

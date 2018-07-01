#!/usr/bin/env bash

echo "Building started ⚠️"
npm run build && \
# npm run build-prod && \
 echo "Built ✅" || echo "Error 🔴"
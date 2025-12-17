#!/bin/bash
# Build script for Netlify deployment
# This script injects the OPENAI_API_KEY environment variable into index.html

if [ -n "$OPENAI_API_KEY" ]; then
  echo "Injecting API key into index.html..."
  # Create a temporary file with the API key injected
  sed "s|NETLIFY_API_KEY_PLACEHOLDER|$OPENAI_API_KEY|g" index.html > index.html.tmp
  mv index.html.tmp index.html
  echo "API key injected successfully"
else
  echo "Warning: OPENAI_API_KEY not set. AI generation will require manual API key entry."
fi

#!/bin/sh

set -e

echo "🚀 Bumping version ($VERSION_TYPE)..."
npm version $VERSION_TYPE

echo "📦 Publishing to npm..."
npm publish --access public

echo "✅ Release completed!"

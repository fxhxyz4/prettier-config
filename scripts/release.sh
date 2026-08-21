#!/bin/sh

set -e

VERSION_TYPE=$1

if [ -z "$VERSION_TYPE" ]; then
    VERSION_TYPE="patch"
fi

echo "🚀 Bumping version ($VERSION_TYPE)..."
npm version $VERSION_TYPE

echo "📦 Publishing to npm..."
npm publish

echo "✅ Release completed!"

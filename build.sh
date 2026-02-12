#!/bin/bash
set -e

echo "Installing npm dependencies..."
npm install

echo "Building Vite assets..."
npm run build

echo "Build complete!"


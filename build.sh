#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Building Vite assets..."
npm run build

echo "Installing Composer dependencies..."
curl -sS https://getcomposer.org/installer | php
php composer.phar install --no-dev --prefer-dist --optimize-autoloader --no-scripts
rm composer.phar

echo "Build complete!"

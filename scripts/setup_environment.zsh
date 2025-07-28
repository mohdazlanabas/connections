#!/bin/zsh

# Update Homebrew and install core tools
echo "🔧 Updating Homebrew..."
brew update

echo "📦 Installing Go..."
brew install go

echo "🐘 Installing PostgreSQL..."
brew install postgresql

echo "🚀 Installing Redis..."
brew install redis

echo "📂 Installing Git..."
brew install git

echo "🧰 Installing Docker and Docker Compose..."
brew install --cask docker

echo "📦 Installing Node.js (includes npm)..."
brew install node

echo "📦 Installing yarn (optional alternative to npm)..."
brew install yarn

echo "🌐 Installing Next.js and TypeScript globally..."
npm install -g next typescript

echo "🔍 Installing helper tools..."
brew install wget curl

echo "✅ Setup complete!"

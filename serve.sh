#!/bin/bash
# Rebuild and serve the Jekyll site locally
# Usage: bash serve.sh

set -e
cd "$(dirname "$0")"

# Kill any existing server on port 8080
kill $(lsof -t -i:8080) 2>/dev/null || true

# Build with Jekyll
docker run --rm \
  -v "$(pwd):/srv/jekyll" \
  -v "$(pwd)/_site:/srv/jekyll/_site" \
  jekyll/builder:latest /bin/bash -c "
    chmod -R 777 /srv/jekyll &&
    rm -rf /srv/jekyll/_site/* &&
    cd /srv/jekyll &&
    mv Gemfile Gemfile.bak 2>/dev/null
    jekyll build --future
    chmod -R 777 /srv/jekyll/_site
    mv Gemfile.bak Gemfile 2>/dev/null
    true
  "

# Serve in background
cd _site
python3 -m http.server 8080 &
SERVER_PID=$!
cd ..

echo ""
echo "Build complete. Serving at http://localhost:8080 (PID: $SERVER_PID)"
echo "To stop: kill $SERVER_PID"
echo ""

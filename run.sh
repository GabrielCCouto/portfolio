#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8000}"
FRONTEND_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/frontend"

if ! [[ "$PORT" =~ ^[0-9]+$ ]] || [ "$PORT" -lt 1 ] || [ "$PORT" -gt 65535 ]; then
  echo "Usage: ./run.sh [port]" >&2
  echo "Port must be a number between 1 and 65535." >&2
  exit 1
fi

if command -v python3 >/dev/null 2>&1; then
  echo "Serving $FRONTEND_DIR at http://localhost:$PORT"
  echo "Press Ctrl+C to stop."
  exec python3 -m http.server "$PORT" --directory "$FRONTEND_DIR"
elif command -v npx >/dev/null 2>&1; then
  echo "Serving $FRONTEND_DIR at http://localhost:$PORT"
  echo "Press Ctrl+C to stop."
  exec npx serve -l "$PORT" "$FRONTEND_DIR"
else
  echo "Error: python3 or Node.js (npx) is required to run the server." >&2
  exit 1
fi

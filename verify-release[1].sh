#!/usr/bin/env sh
set -eu
cd frontend
npm run check
npm test
npm run build
cd ../backend
mvn -B test

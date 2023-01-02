#!/usr/bin/env sh

set -e

npm run build

cd dist

git init 
git add -A
git commit -m "New deployment"
git push -f git@github.com:Iris-Digital-Sas/Iris-front.git main:gh-pages

cd -
#!/usr/bin/env sh

set -env

npm run build

cd dist

git init 
git add -add
git commit - m "New deployment"
git push -f git@github.com:Iris-Digital-Sas/Iris-front.git main:gh-pages

cd -
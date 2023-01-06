#!/usr/bin/env sh

set -e

npm run build --prefix-paths && gh-pages -d public -b master

cd dist

git init 

git add -A
git commit -m 'New deployment'
git push -f git@github.com:Iris-Digital-Sas/Iris-front.git master:gh-pages

cd -
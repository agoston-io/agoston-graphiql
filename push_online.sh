#!/usr/bin/env sh
# docs: https://vuepress.vuejs.org/guide/deploy.html#github-pages
# abort on errors
set -e

# cleanup
rm -rf ./.npm
rm -rf ./dist
rm -rf ./node_modules

# build
npm ci --cache .npm --prefer-offline --silent --no-optional
npm ci @vue/cli --cache .npm --prefer-offline --silent
npm run build

# navigate into the build output directory
cd dist

# Workaround page 404
cp index.html 404.html

echo 'graphiql.agoston.io' > CNAME

git init
git branch -m master main
git add -A
git commit -m 'deploy'

git push -f git@github.com:agoston-io/agoston-graphiql.git main:gh-pages


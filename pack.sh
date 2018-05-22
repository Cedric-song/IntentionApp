#!/bin/sh

npm run build

git add -A

git commit -m 'build'

git push 
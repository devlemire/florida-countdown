#! /bin/sh

cd /home/james/florida-countdown

git checkout master
git pull

yarn install-dependencies
yarn build

pm2 stop florida-countdown
pm2 delete florida-countdown
pm2 start /home/james/florida-countdown/index.js --name florida-countdown
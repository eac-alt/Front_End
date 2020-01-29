#!/bin/bash


sudo apt install npm

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -


echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list



sudo apt update && sudo apt install yarn
yarn add react-bootstrap

npm run build

docker build -t cookbook .
docker run -d -p1900:80 cookbook

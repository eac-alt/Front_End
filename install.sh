#!/bin/bash
sudo apt-get update

sudo apt-get remove docker docker-engine docker.io

sudo apt install docker.io

docker version 

sudo usermod -aG docker $(whoami)

exit



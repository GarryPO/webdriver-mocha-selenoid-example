#!/usr/bin/env bash

docker-compose down
docker-compose --version
echo pulling lates browser images
docker pull selenoid/vnc:chrome_71.0
docker pull selenoid/video-recorder:latest-release
echo building up selenoid environment
docker-compose up --build -d
#!/usr/bin/env bash
cd flask-api/ && sudo docker build -t flask-api .
cd ..
sudo docker-compose up -d


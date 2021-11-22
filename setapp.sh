#!/usr/bin/env bash
sudo docker run -d -it --network="host" -p 4000:4000 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=books --name mysql-db mysql

sudo docker run -d -it --network="host" -v $(pwd)/flask-api:/api -p 3000:3000 --name flask-api python
sudo docker exec flask-api pip3 install -r api/requirements.txt
sudo docker exec flask-api python3 api/index.py

sudo docker run -d -it --network="host" -v $(pwd)/angular-ui:/ui -p 4200:4200 --name angular-ui node:16.13.0-alpine3.12
sudo docker exec angular-ui npm install -g @angular/cli
sudo docker exec angular-ui ui/ng serve

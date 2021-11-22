#!/usr/bin/env bash
sudo docker run -d -it --network="host" -v $(pwd)/angular-ui:/ui -p 4200:4200 --name angular-ui node:16.13.0-alpine3.12
sudo docker exec angular-ui npm install -g @angular/cli
sudo docker exec angular-ui "cd /ui"
sudo docker exec angular-ui "ng serve"

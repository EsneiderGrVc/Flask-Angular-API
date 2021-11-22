### Create API container
sudo docker run -d -it --network="host" -v <api_dir>:/home/api -p 3000:3000 --name flask-api python

### Run DataBase container
sudo docker run -d -it --network="host" -p 4000:4000 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=books --name mysql-db mysql

### Run UI container
```sudo docker run -d -it --network="host" -v $(pwd):/home/ui -p 4200:4200 --name angular-ui node:16.13.0-alpine3.12```
```sudo docker exec -it angular-ui sh```
``` cd ui/```
```npm install --save-dev package.json```

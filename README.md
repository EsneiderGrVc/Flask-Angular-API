## Dockerizer the project

### Create api container
sudo docker run -d -it --network="host" -v <api_dir>:/home/api -p 3000:3000 --name flask-api python

### Create Database container
sudo docker run -d -it --network="host" -p 4000:4000 \
-e MYSQL_ROOT_PASSWORD=root \
-e MYSQL_DATABASE=books \
--name mysql-db mysql

### Create UI container
sudo docker run -d -it --network="host" -v <ui-dir>:/home/ui -p 4200:4200 --name angular-ui node:16.13.0-alpine3.12
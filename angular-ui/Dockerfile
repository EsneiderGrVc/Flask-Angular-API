FROM node:16.13.0-alpine3.12

EXPOSE 4200

WORKDIR /ui

RUN npm install -g @angular/cli

COPY . /ui

CMD ng serve --host 0.0.0.0 --port 4200

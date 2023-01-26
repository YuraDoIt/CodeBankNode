# syntax: docker/dockerfile:1

FROM ubuntu:16.14.2-alpine as base
FROM node:latest

ENV NODE_ENV=production
 
WORKDIR /usr/src/app 
 
COPY ["package*.json", "./"] 
 
RUN npm install --frozen-lockfile --production

COPY . . 
 
EXPOSE 3000 

RUN npm i -g @nestjs/cli
RUN npm run build 
 
CMD [ "npm", "run", "start:prod" ]
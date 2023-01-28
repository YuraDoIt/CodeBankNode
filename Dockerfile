# syntax: docker/dockerfile:1

FROM node:16.14.2-alpine as base

WORKDIR /yura/src/app 
COPY ["package*.json", "./"] 

FROM base AS dev
WORKDIR /yura/src/app 
RUN npm install
COPY . . 
RUN npm run build
CMD [ "npm", "run", "dev" ]

FROM base AS prod
WORKDIR /yura/src/app 
RUN npm install --frozen-lockfile --production 
COPY . .
EXPOSE 3000 
RUN npm i -g @nestjs/cli
RUN npm run build 
CMD [ "npm", "run", "start:prod" ]
# syntax: docker/dockerfile:1

FROM node:16.14.2-alpine as base

WORKDIR /app 
COPY ["package*.json", "./"] 

FROM base AS dev
RUN npm install --frozen-lockfile
COPY . . 
CMD [ "npm", "run", "dev" ]

FROM base AS prod
RUN npm install --frozen-lockfile --production 
COPY . .
EXPOSE 3000 
RUN npm i -g @nestjs/cli
RUN npm run build 
CMD [ "npm", "run", "start:prod" ]
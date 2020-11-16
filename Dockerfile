FROM node:15-buster

WORKDIR /code
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install
COPY . .
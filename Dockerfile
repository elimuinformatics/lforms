FROM node:24-alpine
WORKDIR /app

RUN apk update && apk add --no-cache zip

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

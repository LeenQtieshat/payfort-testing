FROM node:lts-alpine

RUN mkdir -p /app

WORKDIR /app

COPY ./src ./src

COPY ./docs ./docs

COPY package.json package-lock.json ./

RUN npm ci 

CMD ["npm", "start"]
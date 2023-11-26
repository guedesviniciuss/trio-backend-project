FROM node:lts-alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80
CMD [ "node", "dist/src/server.js" ]

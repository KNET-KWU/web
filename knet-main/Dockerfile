FROM node:alpine

EXPOSE 8080

COPY . ./app/knet-main

WORKDIR /app

RUN npm install --prefix ./knet-main

CMD npm start --prefix ./knet-main
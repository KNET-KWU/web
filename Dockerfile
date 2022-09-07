FROM node:alpine
WORKDIR "/usr/src/app"
COPY ./knet-main ./knet-main
RUN npm install
CMD ["npm","run","start"]
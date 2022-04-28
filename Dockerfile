FROM node:16.14-alpine3.14
COPY ./ /usr/src/web
WORKDIR /usr/src/web
RUN npm i
RUN npm run build
CMD ["npm", "start"]
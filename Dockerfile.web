FROM node:16.14-alpine3.14
COPY ./ /usr/src/web
WORKDIR /usr/src/web
EXPOSE 3000
CMD [ -d "node_modules" ] && npm start || npm ci && npm start
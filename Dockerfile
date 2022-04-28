FROM node:16.14-alpine as build-stage
WORKDIR /app
COPY package*.json/ /usr/src/web
RUN npm ci
COPY ./ /usr/src/web
RUN npm run build
FROM nginx:1.21.6-alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
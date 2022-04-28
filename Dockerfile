FROM node:16.14-alpine
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY ./ /app
RUN npm run build
RUN npm install serve -g
CMD ["sh", "-c", "serve -l tcp://0.0.0.0:${PORT} -s /app/build"]
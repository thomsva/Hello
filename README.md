# Hello world app
[![Deployed to Dockerhub](https://github.com/thomsva/Hello/actions/workflows/deploy.yml/badge.svg)](https://github.com/thomsva/Hello/actions/workflows/deploy.yml)

A greeting app. 

## Starting the application

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Another alterinative is to run the project as a docker container:

`docker build . -t hello`

`docker run -p 3000:3000 -e PORT=3000 hello `


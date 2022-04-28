# Hello world app

An greeting app. 

## Starting the application

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Another alterinative is to run the project as a docker container:

`docker build . -t hello`

`docker run -p 3000:3000 -e PORT=3000 hello `

## Heroku
The project is deployed as a Docker container to Heroku using a GitHub Action.

https://hello911.herokuapp.com/
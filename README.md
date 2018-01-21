# receipt-less
Swamp Hacks 2018: https://devpost.com/software/receipt-less

Website Link: http://receipt-less.com/

## How to run locally

- Install dependencies:

    npm install -g gulp
    cd Frontend/
    npm install

- Change gulpfile.js port to any available port (eg. 3000)

- Start the app

    gulp

## Backend Docker set up:

Set up mongo:

    docker run --name mongo -d mongo

Run this inside the backend folder:

    docker build -t receipt-less-backend:1 .

Run the backed container

    docker run -p 8000:8000 -d --name backend --link mongo:mongo receipt-less:1

(Optional) Run Mongo Express to see inside DB

    docker run --link mongo:mongo -p 8081:8081 mongo-express
    
## Frontend Docker set up:

Build the image inside the "Frontend" folder

    docker build -t receipt-less-frontend:1 .

Run the Frontend container

    docker run -p 80:80 -d --name frontend receipt-less-frontend:1
    

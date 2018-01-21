# receipt-less
Swamp Hacks 2018

Backend Docker set up:

Set up mongo:

    docker run --name mongo -d mongo

Run tis inside the backend folder:

    docker build -t receipt-less:1 .

Run the backed service, include flag -d if you dont want to see it run

    docker run -p 8000:8000 --name backend --link mongo:mongo receipt-less:1

(Optional) Run Mongo Express to see inside DB

    docker run --link mongo:mongo -p 8081:8081 mongo-express
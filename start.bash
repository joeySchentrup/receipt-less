#!/bin/bash
cd receipt-less
git pull

cd Backend
docker run --name mongo -d mongo
docker run --link mongo:mongo -p 8081:8081 -d mongo-express

docker build -t receipt-less-backend:1 .
docker run -p 8000:8000 -d --name backend --link mongo:mongo receipt-less:1

cd ../Frontend
docker build -t receipt-less-frontend:1 .
docker run -p 80:80 -d --name frontend receipt-less-frontend:1

#!/bin/bash

cd Backend
docker run --name mongo -d mongo
docker run --link mongo:mongo -p 8081:8081 mongo-express

docker build -t receipt-less-backend:1 .
docker run -p 8000:8000 --name backend --link mongo:mongo receipt-less:1

cd ../Frontend
docker build -t gulp:1 -f ./gulp.dockerfile .
docker run -p 3000:3000 gulp:1

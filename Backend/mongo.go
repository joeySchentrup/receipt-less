package main

import (
	"labix.org/v2/mgo"
)

var MONGODB_URL string = "mongo:27017"
var DB_NAME string = "receipt-less"

var mongoSession, err = mgo.Dial(MONGODB_URL)

func GetCollection(email string) (*mgo.Collection) {
	errCheck(err)
	return mongoSession.DB(DB_NAME).C(email)
}
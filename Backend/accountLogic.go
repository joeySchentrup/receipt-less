package main

import (
	"net/http"
	"encoding/json"
	//"bytes"
    "github.com/gorilla/mux"
)

var ACCOUNT_COLLECTION = "Accouts"

func getAccount(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var result interface{}

	err := GetCollection(ACCOUNT_COLLECTION).Find(M{"email": params["email"]}).One(&result)
	if err != nil {
		http.Error(w, "Error!", http.StatusBadRequest)
	} else {
		json.NewEncoder(w).Encode(result)
	}
}

func createAccount(w http.ResponseWriter, r *http.Request) {
    var account Account
	_ = json.NewDecoder(r.Body).Decode(&account)

	n, _ := GetCollection(ACCOUNT_COLLECTION).Find(M{"email": account.Email}).Count()
	if n != 0 {
		http.Error(w, "Error! Does that account already exist?!", http.StatusBadRequest)
	} else {
		responce := GetCollection(ACCOUNT_COLLECTION).Insert(account)
		json.NewEncoder(w).Encode(responce)
	}
}

type Account struct {
	ID string `json:"_id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email string `json:"email"`
	PhoneNumber int `json:"phone_number"`
	Password string `json:"password"`
}
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
		http.Error(w, "Error! Does that collections exist?!", http.StatusBadRequest)
	}
	json.NewEncoder(w).Encode(result)
}

func createAccount(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
    var account Account
	_ = json.NewDecoder(r.Body).Decode(&account)

	n, err := GetCollection(ACCOUNT_COLLECTION).Find(M{"email": account.Email}).Count()
	if err != nil {
		http.Error(w, "Error! Does that account exist?!", http.StatusBadRequest)
	}

	responce := GetCollection(ACCOUNT_COLLECTION).Insert(account)
	json.NewEncoder(w).Encode(responce)
}

func deleteAccount(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	GetCollection(ACCOUNT_COLLECTION).RemoveId(params["id"])
	errCheck(err) 
}

type Account struct {
	ID string `json:"_id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email string `json:"email"`
	PhoneNumber int `json:"phone_number"`
	Password string `json:"password"`
}
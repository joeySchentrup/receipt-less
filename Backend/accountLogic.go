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


	// w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	// w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	// w.Header().Set("Access-Control-Allow-Origin", "*")
	var result interface{}

	err := GetCollection(ACCOUNT_COLLECTION).Find(M{"email": params["email"]}).One(&result)
	errCheck(err)
	json.NewEncoder(w).Encode(result)
	// w.Header().Set("Testing-Header", "Something")

}

func createAccount(w http.ResponseWriter, r *http.Request) {
    var account Account
	err := json.NewDecoder(r.Body).Decode(&account)
	errCheck(err)

	n, er := GetCollection(ACCOUNT_COLLECTION).Find(M{"email": account.Email}).Count()
	errCheck(er)
	if n != 0 {
		http.Error(w, "Error! Does that account already exist?!", http.StatusBadRequest)
	} else {
		err = GetCollection(ACCOUNT_COLLECTION).Insert(account)
		errCheck(err)
		json.NewEncoder(w).Encode(account)
	}
}

func editAccount(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var account Account
	err := json.NewDecoder(r.Body).Decode(&account)
	errCheck(err)
	_, err = GetCollection(ACCOUNT_COLLECTION).UpsertId(params["id"], account)
	errCheck(err)
	json.NewEncoder(w).Encode(account)
}

type Account struct {
	ID string `json:"_id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email string `json:"email"`
	PhoneNumber int `json:"phone_number"`
	Password string `json:"password"`
}
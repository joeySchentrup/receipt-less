package main

import (
	"net/http"
	"encoding/json"
	//"bytes"
    "github.com/gorilla/mux"
)

func addReceipt(w http.ResponseWriter, r *http.Request) {
	param := mux.Vars(r)
	var receipt Receipt
	err := json.NewDecoder(r.Body).Decode(&receipt)
	errCheck(err)

	err = GetCollection(param["collection"]).Insert(&receipt)
	errCheck(err)
	json.NewEncoder(w).Encode(receipt)
}

func removeReceipt(w http.ResponseWriter, r *http.Request) {
	param := mux.Vars(r)
	err := GetCollection(param["collection"]).RemoveId(param["id"])
	errCheck(err)
}

func getReceipts(w http.ResponseWriter, r *http.Request) {
	param := mux.Vars(r)
	receipts := make([]Receipt, 5)
	err := GetCollection(param["collection"]).Find(nil).All(&receipts)
	errCheck(err)
	json.NewEncoder(w).Encode(receipts)
}

type Receipt struct {
	ID string `json:"_id"`
	BusinessName string `json:"business_name"`
	DateAndTime  string `json:"date_and_time"`
	Amount float32 `json:"amount"`
	ItemName string `json:"item_name"`
}
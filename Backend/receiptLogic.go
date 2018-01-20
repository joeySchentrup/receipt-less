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
	_ = json.NewDecoder(r.Body).Decode(&receipt)

	responce := GetCollection(param["collection"]).Insert(&receipt)
	json.NewEncoder(w).Encode(responce)
}

func removeReceipt(w http.ResponseWriter, r *http.Request) {
	param := mux.Vars(r)
	GetCollection(param["collection"]).RemoveId(param["id"])
}

func getReceipts(w http.ResponseWriter, r *http.Request) {
	param := mux.Vars(r)
	receipts := make([]Receipt, 5)
	GetCollection(param["collection"]).Find(nil).All(&receipts)
	json.NewEncoder(w).Encode(receipts)
}

type Receipt struct {
	ID string `json:"_id"`
	BusinessName string `json:"business_name"`
	DateAndTime  string `json:"date_and_time"`
	Amount float32 `json:"amount"`
	ItemName string `json:"item_name"`
}
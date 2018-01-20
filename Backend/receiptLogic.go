package main

import (
	"net/http"
	//"encoding/json"
	//"bytes"
    //"github.com/gorilla/mux"
)

func addReceipt(w http.ResponseWriter, r *http.Request) {

}

func removeReceipt(w http.ResponseWriter, r *http.Request) {

}

func getReceipts(w http.ResponseWriter, r *http.Request) {

}

type Receipt struct {
	ID string `json:"_id"`
	BusinessName string `json:"first_name"`
	DateAndTime  string `json:"date_and_time"`
	Amount float32 `json:"amount"`
	ItemName string `json:"item_name"`
}
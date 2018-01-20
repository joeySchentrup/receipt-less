package main

import (
	"net/http"
	"log"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	
	router.HandleFunc("/account/{email}", getAccount).Methods("GET") //in accountLogic.go
    router.HandleFunc("/account", createAccount).Methods("POST") //in accountLogic.go
	router.HandleFunc("/account/{id}", deleteAccount).Methods("DELETE") //in accountLogic.go
	
    router.HandleFunc("/payments/{collection}/{id}", addReceipt).Methods("POST") //in payment logic
	
	log.Fatal(http.ListenAndServe(":8000", router))
}

func errCheck(e error) {
	if e != nil {
		panic(e)
	}
}
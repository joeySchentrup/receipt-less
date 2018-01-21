package main

import (
	"net/http"
	"log"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"}, // All origins
		AllowedMethods: []string{"GET","POST","DELETE"},
		AllowedHeaders: []string {"Content-Type"}
	})

	router := mux.NewRouter()

	router.HandleFunc("/account/{email}", getAccount).Methods("GET") 				//in accountLogic.go
	router.HandleFunc("/account", createAccount).Methods("POST") 					//in accountLogic.go
	router.HandleFunc("/account/{id}", editAccount).Methods("POST") 					//in accountLogic.go
	//router.HandleFunc("/account/{id}", deleteAccount).Methods("DELETE") 			//future work
	
	router.HandleFunc("/receipts/{collection}", addReceipt).Methods("POST") 		//in receipt logic
	router.HandleFunc("/receipts/{collection}/{id}", removeReceipt).Methods("DELETE") //in receipt logic
	router.HandleFunc("/receipts/{collection}", getReceipts).Methods("GET") 		//in receipt logic
	
	log.Fatal(http.ListenAndServe(":8000", router), c.Handler(router))
}

func errCheck(e error) {
	if e != nil {
		panic(e)
	}
}
package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Define a handler function for the "/hello" route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Welcome to my API!")
	})

	// Start the server on port 8080
	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", nil)
}

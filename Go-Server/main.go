package main

import (
	"log"
	"main/api/routes"
	"main/database"
)

func init() {
	database.Connect()
}

func main() {
	log.Fatal(routes.App.Listen(":5555"))
}

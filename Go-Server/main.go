package main

import (
	"log"
	_"main/api/models"
	"main/api/routes"
	"main/database"
)

func init() {
	database.Connect()
}

func main() {
	log.Fatal(routes.App.Listen(":5555"))
}


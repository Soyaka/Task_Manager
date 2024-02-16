package main

import (
	"log"
	"main/api/models"
	"main/api/routes"
	"main/database"
)

func init() {
	database.Connect()
}

func main() {
	//Migrate()
	log.Fatal(routes.App.Listen(":5555"))
}

func Migrate() {
	database.Db.AutoMigrate(&models.User{}, &models.Task{}, &models.Session{})
}

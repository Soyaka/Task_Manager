package database

import (
	"fmt"
	"log"
	"main/api/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Db *gorm.DB

func Connect() {
	dsn := "user=soyaka dbname=task_manager sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Error connecting to the database:", err)
	}
	fmt.Println("Database connected!!!")
	err = db.AutoMigrate(&models.User{}, &models.Task{}, &models.Session{})
	if err!=nil{
		fmt.Println("Data does not ewant to migrate she does not have a passport")
	}
	Db = db
}

package database

import (
	"fmt"
	"log"
	"main/api/models"
	"os"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Db *gorm.DB

func Connect() {

	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("host=%s port=%v user=%s password=%s dbname=%s sslmode=disable", "localhost", 5432, user, password, dbname)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Error connecting to the database:", err)
	}
	fmt.Println("Database connected!!!")
	err = db.AutoMigrate(&models.User{}, &models.Task{}, &models.Session{})
	if err != nil {
		fmt.Println("migration failed:", err)
	}
	Db = db
}

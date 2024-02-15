package database

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Db *gorm.DB

func Connect() {
	dsn := "host=localhost user=root password= dbname=tasks port=3306 sslmode=disable "
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil{

		panic("can't connect to database")
	}
	Db = db
}

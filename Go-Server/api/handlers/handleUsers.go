package handlers

import (
	"log"
	"main/api/models"
	"main/database"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

//TODO: add the admin section where it can see the users registred
//TODO: add more logi * security to the database

type User models.User

func AddUser(c *fiber.Ctx) error {
	type User models.User
	var user User
	err := c.BodyParser(&user)
	if err != nil {
		log.Print(" error parsing the user ")
		return c.Status(304).SendString(" error fetching the data")
	}
	user.ID = uuid.New()
	err = database.Db.Create(&user).Error
	if err != nil {
		log.Println(" can't create user becouse of this error:", err)
		return c.Status(304).SendString(" can't append to database something not urban")
	}

	return c.Status(201).SendString("user added with success")
}

func ListUsers(c *fiber.Ctx) error {
	var users []User
	err := database.Db.Find(&users).Error
	if err != nil {
		log.Println(" In ListUsers Function The a error acur :", err)
		return c.Status(304).SendString(" can't fetch the data from the database")
	}
	return c.Status(200).JSON(users)

}

//TODO: add the sessions logic

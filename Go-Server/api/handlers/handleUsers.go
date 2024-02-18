package handlers

import (
	"log"
	"main/api/models"
	"main/database"
	"main/utils"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

//TODO: add the admin section where it can see the users registred
//TODO: add more logi * security to the database

var jwtKey = []byte("shdG#06504c()(dasdaasgh^&3")

type User *models.User

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
//TODO: add login
//TODO: add Signup
//TODO: add change password

func Login(c *fiber.Ctx) error {
	var user User
	if err := c.BodyParser(&user); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": err.Error()})

	}
	var existingUser User
	database.Db.Where("login =?", user.Login).Find(&existingUser)
	if existingUser.ID == uuid.Nil {
		return c.Status(400).JSON(fiber.Map{"error": "there is no user with this credentionals"})

	}
	errHash := utils.CompareHashPwd(user.Pwd, existingUser.Pwd)
	if !errHash {
		return c.Status(400).JSON(fiber.Map{"error": " Wrong Credentiols"})

	}
	expirationTime := time.Now().Add(5 * time.Minute)

	claims := &models.Claims{
		ID: existingUser.ID,
		StandardClaims: jwt.StandardClaims{
			Subject:   existingUser.Login,
			ExpiresAt: expirationTime.Unix(),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "could not generate token"})
	}
	c.Cookie(&fiber.Cookie{
		Name:     "token",
		Value:    tokenString,
		Expires:  expirationTime,
		HTTPOnly: true,
		Secure:   false, // Set to true if using HTTPS
		SameSite: "Lax", // Adjust as needed
		Path:     "/",
		Domain:   "localhost",
	})
	return c.JSON(fiber.Map{"message": "cookie set true"})
}

func SignUp(c *fiber.Ctx) error {
	var user User

	if err := c.BodyParser(&user); err != nil {
		return c.Status(400).JSON("can't bind body")

	}
	var existingUser User

	database.Db.Where("login =?", user.Login).First(&existingUser)
	if existingUser.Login != "" {
		return c.Status(401).JSON(fiber.Map{"error": "user Already in"})

	}
	var errHash error
	user.Pwd, errHash = utils.GenerateHashPwd(user.Pwd)
	if errHash != nil {
		return c.Status(501).JSON(fiber.Map{"error": "can't hash pwd"})

	}
	Id := uuid.New()
	user.ID = Id
	database.Db.Create(&user)
	return c.Status(202).JSON(fiber.Map{"message": "user created"})
}

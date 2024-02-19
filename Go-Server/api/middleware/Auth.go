package middleware

import (
	"main/utils"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func Authentificator(c *fiber.Ctx) error {

	cookieString := c.Cookies("token")
	if cookieString == "" {
		return c.Status(fiber.StatusNotFound).SendString("Token cookie not found")

	}
	claims, err := utils.ParseToken(cookieString)

	if err != nil {
		return c.Status(402).JSON(fiber.Map{"error": "unauthorized"})

	}

	if claims.ID == uuid.Nil {
		return c.Status(401).JSON(fiber.Map{"error": "unauthorized Id not found"})
	}

	return c.Next()
}

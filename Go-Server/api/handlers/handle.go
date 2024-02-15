package handlers

import (
	"github.com/gofiber/fiber/v2"
	"main/api/models"
)

func GetTasks(c *fiber.Ctx) error {
	var Tasks []*models.Task
	return c.Status(200).JSON(&Tasks)

}

func AddTask(c *fiber.Ctx) error {
	return nil

}

func DeleteTask(c *fiber.Ctx) error {
	return nil

}



func GetTask(c *fiber.Ctx) error {
	var Task *models.Task
	return c.Status(200).JSON(&Task)
}

func PatchTask(c *fiber.Ctx) error {
	var Task *models.Task
	err := c.BodyParser(Task)
	if err != nil {
		return c.Status(302).SendString("Error fetching data from the clientx")
	}
	return nil
}

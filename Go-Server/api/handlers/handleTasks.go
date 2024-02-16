package handlers

import (
	"log"
	"main/api/models"
	"main/database"

	"github.com/gofiber/fiber/v2"
)

func GetTasks(c *fiber.Ctx) error {
	var tasks []models.Task
	database.Db.Find(&tasks)
	return c.Status(200).JSON(tasks)
}

func GetTask(c *fiber.Ctx) error {
	var task *models.Task
	id := c.Params("id")
	database.Db.First(&task, "ID =?", id)
	return c.Status(200).JSON(task)
}

func AddTask(c *fiber.Ctx) error {
	var task models.Task
	if err := c.BodyParser(&task); err != nil {
		log.Println("Error parsing request body:", err)
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}
	if err := database.Db.Create(&task).Error; err != nil {
		log.Println("Error creating task:", err)
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create task"})
	}
	return c.Status(201).JSON(task)
}

func DeleteTask(c *fiber.Ctx) error {
	type Task models.Task
	id := c.Params("id")
	database.Db.Delete(&Task{}, id)
	return c.Status(202).SendString("Task Deleted")
}

func PatchTask(c *fiber.Ctx) error {
	type Task models.Task
	var task Task
	id := c.Params("id")
	err := c.BodyParser(&task)
	if err != nil {
		return c.Status(302).SendString("Error fetching data from the clientx")
	}
	database.Db.Model(Task{}).Where("ID = ?", id).Updates(Task{
		Title:       task.Title,
		Description: task.Description,
		Status:      task.Status,
		Label:       task.Label,
	})
	return c.Status(203).SendString("Task Updated")
}

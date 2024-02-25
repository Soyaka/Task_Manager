package handlers

import (
	"log"
	"main/api/models"
	"main/database"
	"github.com/google/uuid"

	"github.com/gofiber/fiber/v2"
)

// FIXME: Add Authentificatin to these handlers
// TODO: remove the athentication and set a middleware for it



func GetAllTasks(c *fiber.Ctx) error {
	var tasks []models.Task
	id := c.Locals("id").(uuid.UUID)
	database.Db.Where("user_id=?", id).Find(&tasks)
	return c.Status(200).JSON(tasks)
}


func AddTask(c *fiber.Ctx) error {
	var task models.Task

	if err := c.BodyParser(&task); err != nil {
		log.Println("Error parsing request body:", err)
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}
	if task.Title=="" || task.Description=="" {
		return c.Status(304).SendString("can not send empty fields ")
	}
	task.UserID = c.Locals("id").(uuid.UUID)
	if err := database.Db.Create(&task).Error; err != nil {
		log.Println("Error creating task:", err)
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create task"})
	}
	return c.Status(201).JSON(task)
}


func DeleteTask( c *fiber.Ctx)error{
	var task models.Task
	task.UserID = c.Locals("id").(uuid.UUID)
	id := c.Params("id")
	if err:= database.Db.Where("id=?",id).Delete(&task).Error; err!=nil {
		c.Status(402).SendString("can't  delete task")
	}
	return nil 
}





































// func DeleteTask(c *fiber.Ctx) error {
// 	type Task models.Task
// 	id := c.Params("id")
// 	database.Db.Delete(&Task{}, id)
// 	return c.Status(202).SendString("Task Deleted")
// }

// func PatchTask(c *fiber.Ctx) error {
// 	type Task models.Task
// 	var task Task
// 	id := c.Params("id")
// 	err := c.BodyParser(&task)
// 	if err != nil {
// 		return c.Status(302).SendString("Error fetching data from the clientx")
// 	}
// 	database.Db.Model(Task{}).Where("ID = ?", id).Updates(Task{
// 		Title:       task.Title,
// 		Description: task.Description,
// 		Status:      task.Status,
// 		Label:       task.Label,
// 	})
// 	return c.Status(203).SendString("Task Updated")
// }


// func GetTask(c *fiber.Ctx) error {
// 	var task *models.Task
// 	id := c.Params("id")
// 	database.Db.First(&task, "ID =?", id)
// 	return c.Status(200).JSON(task)
// }

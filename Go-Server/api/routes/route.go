package routes

import (
	"main/api/handlers"
	"github.com/gofiber/fiber/v2"
)

var App *fiber.App

func init() {
	App = fiber.New()
	Api := App.Group("/api")
	Api.Get("/tasks", handlers.GetTasks)
	Api.Get("/task/:id", handlers.GetTask)
	Api.Post("/task", handlers.AddTask)
	Api.Put("/task/:id", handlers.PatchTask)
	Api.Delete("task/:id", handlers.DeleteTask)
	Api.Get("users", handlers.ListUsers)
	Api.Post("user" , handlers.AddUser)
}

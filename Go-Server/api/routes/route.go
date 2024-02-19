package routes

import (
	"main/api/handlers"
	"main/api/middleware"
	"github.com/gofiber/fiber/v2"
)

var App *fiber.App

func init() {
	App = fiber.New()
	App.Post("signup", handlers.SignUp)
	App.Post("login", handlers.Login)
	Api := App.Group("/api")
	Api.Use(middleware.Authentificator)
	Api.Get("/tasks", handlers.GetAllTasks)
	Api.Get("/task/:id", handlers.GetTask)
	Api.Post("/task", handlers.AddTask)
	Api.Put("/task/:id", handlers.PatchTask)
	Api.Delete("task/:id", handlers.DeleteTask)
	Api.Get("users", handlers.ListUsers)
}

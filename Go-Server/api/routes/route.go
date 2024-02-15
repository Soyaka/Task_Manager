package routes

import (
	"log"
	"main/api/handlers"

	"github.com/gofiber/fiber/v2"
)

var App *fiber.App

func init() {
	App = fiber.New()
	Api := App.Group("/api")
	Api.Get("/books", handlers.GetTasks)
	Api.Get("/book/:id", handlers.GetTask)
	Api.Post("/book", handlers.AddTask)
	Api.Put("/book/:id" , handlers.PatchTask)
	Api.Delete("book/:id", handlers.DeleteTask)
	log.Fatal(App.Listen(":5555"))
}

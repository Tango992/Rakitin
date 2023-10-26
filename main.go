package main

import (
	"os"
	"rakitin/handler"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/encryptcookie"

	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/logger"
	_ "github.com/joho/godotenv/autoload"
)

func main() {
	app := fiber.New()

	app.Use(logger.New(), helmet.New())
	app.Use(encryptcookie.New(encryptcookie.Config{
		Key: os.Getenv("COOKIE_KEY"),
	}))

	app.Post("/cookie", handler.SetCookie)
	app.Get("/cookie", handler.GetCookie)


	app.Listen(":8080")
}
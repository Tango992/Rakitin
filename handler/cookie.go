package handler

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
)

func SetCookie(c *fiber.Ctx) error {
	c.Status(http.StatusCreated)
	c.Cookie(&fiber.Cookie{
		Name: "test",
		Value: "SomeThing",
		Secure: true,
		HTTPOnly: true,
		SameSite: "lax",
	})

	return nil
}

func GetCookie(c *fiber.Ctx) error {
	cookieValue := c.Cookies("test")
	return c.Status(http.StatusOK).JSON(fiber.Map{
		"cookie": cookieValue,
	})
}
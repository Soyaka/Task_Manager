package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name      string
	CreatedAt time.Time
	Login     string
	Pwd       string
}

type Task struct {
	gorm.Model
	Title       string
	Description string
	Status      string
	CreatedAt   time.Time
	FinishedAt  time.Time
	DeletedAt   time.Time
	UpdatedAt time.Time
	Label 	string
}
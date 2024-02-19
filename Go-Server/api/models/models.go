package models

import (
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/google/uuid"
)

type User struct {
	ID        uuid.UUID `gorm:"type:uuid;primaryKey;default:gen_random_uuid();" json:"id"`
	Name      string    `json:"name"`
	CreatedAt time.Time
	Login     string    `json:"login"`
	Pwd       string    `json:"pwd"`
	Role	string
	Sessions  []Session `gorm:"foreignKey:UserID"`
}

type Task struct {
	ID          uuid.UUID `gorm:"type:uuid;primaryKey;default:gen_random_uuid();"`
	Title       string	`json:"title"`
	Description string	`json:"desc"`
	Status      string	`json:"status"`
	CreatedAt   time.Time
	FinishedAt  time.Time
	DeletedAt   time.Time
	UpdatedAt   time.Time
	Label       string	`json:"label"`
	UserID      uuid.UUID
	User        User `gorm:"foreignKey:UserID"`
}

type Session struct {
	ID        uuid.UUID `gorm:"type:uuid;primaryKey;default:gen_random_uuid();"`
	UserID    uuid.UUID
	User      User `gorm:"foreignKey:UserID"`
	Token     string
	ExpiresAt time.Time
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Claims struct {
	ID uuid.UUID
	jwt.StandardClaims
}

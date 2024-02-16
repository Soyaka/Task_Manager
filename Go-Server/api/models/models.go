package models

import (
	"time"
	"github.com/google/uuid"
)

type User struct {
	ID        uuid.UUID `gorm:"type:uuid;primaryKey;default:gen_random_uuid();"`
	Name      string
	CreatedAt time.Time
	Login     string
	Pwd       string
	Sessions  []Session `gorm:"foreignKey:UserID"`
}

type Task struct {
	ID          uuid.UUID `gorm:"type:uuid;primaryKey;default:gen_random_uuid();"`
	Title       string
	Description string
	Status      string
	CreatedAt   time.Time
	FinishedAt  time.Time
	DeletedAt   time.Time
	UpdatedAt   time.Time
	Label       string
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

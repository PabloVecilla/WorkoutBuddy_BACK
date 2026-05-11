# WorkoutBuddy

WorkoutBuddy is a full-stack fitness application designed to help users create, manage, and track personalized workout routines.

## Project Goals

- Learn full-stack development architecture
- Build a REST API with Node.js and Express
- Use PostgreSQL with Sequelize ORM
- Implement authentication with JWT and HTTP-only cookies
- Consume external exercise APIs
- Build a responsive React frontend
- Deploy backend and database to Render
- Deploy frontend to Netlify

---

## Tech Stack

### Backend
- Node.js
- Express
- PostgreSQL
- Sequelize
- Docker
- JWT Authentication
- bcrypt
- cookie-parser

### Frontend (planned)
- React
- React Router
- CSS / Responsive Design

---

## Current Features

### Authentication System
- User registration
- User login
- Password hashing with bcrypt
- JWT authentication
- HTTP-only cookie authentication
- Protected routes
- Current user endpoint
- Logout functionality

### Backend Architecture
- Modular route/controller structure
- Sequelize models
- PostgreSQL database connection
- Dockerized local database

---

## API Endpoints

### Auth Routes

#### Register
POST /auth/register

#### Login
POST /auth/login

#### Current User
GET /auth/me

#### Logout
POST /auth/logout

---

## Environment Variables

Create a `.env` file:

```env
PORT=3000

DB_NAME=workoutbuddy
DB_USER=workoutbuddy_user
DB_PASSWORD=workoutbuddy_password
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=your_secret
JWT_EXPIRES_IN=24h
COOKIE_MAX_AGE=86400000
```

---

## Run Locally

### Start Docker database

```bash
docker compose up -d
```

### Install dependencies

```bash
npm install
```

### Start server

```bash
npm run dev
```

---

## Learning Goals

This project is being developed as a learning-focused full-stack application with emphasis on:
- backend architecture
- authentication systems
- database design
- REST APIs
- deployment workflows
- React frontend integration
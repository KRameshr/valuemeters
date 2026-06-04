# ValueMeters — Online Banking System

Full stack banking application built with 
Java Spring Boot and React.js

## Live Demo
[Frontend URL] | [Backend Swagger URL]

## Features
- JWT Authentication & Authorization
- Account Management (Auto-created on register)
- Fund Transfer between accounts
- Expense Tracking (Food/Transport/Health/Education)
- Budget Management (Daily/Weekly/Monthly)
- Transaction History
- Responsive Mobile UI

## Tech Stack
### Backend
- Java 17, Spring Boot 4.0
- Spring Security + JWT
- MySQL + Spring Data JPA
- Swagger UI

### Frontend  
- React.js 18 + Vite
- Tailwind CSS
- Axios + React Router

## Setup Instructions
### Backend
1. Clone repo
2. Create MySQL database: banking_db
3. Update application.yml with your DB credentials
4. Run: mvn spring-boot:run

### Frontend
1. Clone repo
2. Create .env: VITE_API_BASE_URL=http://localhost:8080
3. Run: npm install
4. Run: npm run dev

## API Documentation
Swagger: http://localhost:8080/swagger-ui/index.html

## Screenshots
[Add screenshots here]

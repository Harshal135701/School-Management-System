# 🏫 Mini School Management System

A full-stack **Mini School Management System** built using **React.js, Node.js, Express.js, Sequelize ORM, JWT Authentication, and PostgreSQL**.

This project demonstrates frontend development, backend API development, authentication, database management, CRUD operations, file uploading, validation, and role-based functionality.

---

# 🚀 Features

## 🔐 Authentication Module

* Admin login using Email and Password
* Password hashing using bcrypt
* JWT token generation after successful login
* Protected routes and APIs
* Secure authentication flow

---

# 📊 Dashboard Module

Admin dashboard displays:

* Total Students
* Total Teachers
* Total Homework

A single API provides all dashboard statistics.

---

# 👨‍🎓 Student Management Module

Admin can:

* Add students
* View students
* Update students
* Delete students
* Search students

Student fields:

* Admission Number (Auto Generated)
* First Name
* Last Name
* Class
* Section
* Parent Name
* Parent Mobile
* Address

Features:

* Required field validation
* Unique admission number validation

---

# 👨‍🏫 Teacher Management Module

Admin can:

* Add teachers
* View teachers
* Update teachers
* Delete teachers

Teacher fields:

* Employee ID (Auto Generated)
* Name
* Email
* Mobile Number
* Subject

---

# 📚 Homework Management Module

Teachers can:

* Create homework
* Edit homework
* Delete homework
* Publish homework

Homework fields:

* Homework Title
* Description
* Subject
* Class
* Due Date
* Attachment

Attachment support:

* PDF files
* Image files
* Video files

File upload features:

* Multer based upload system
* Maximum file size limit: 20 MB
* File type validation

---

# 👨‍👩‍👧 Parent Portal Module

Parents can:

* View published homework
* Search homework
* Filter homework
* View homework details
* Preview attachments inside the application

Supported preview:

* PDF preview
* Image preview
* Video preview

No direct download button is provided for attachments.

---



# 📸 Screenshots

## Login Page

![Login](screenshots/login.png)


## Dashboard

![Dashboard](screenshots/dashboardAdmin.png)

## Homework Management

![Homework Portal](screenshots/homeWorkModel.png)


## Student Management

![Students](screenshots/studentModel.png)


## Parent Portal

![Parent Portal](screenshots/parentPortal.png)

## Teacher Management

![Teacher](screenshots/teacherModel.png)

# 🛠️ Technology Stack

## Frontend

* React.js (Vite)
* React Router
* Axios
* Tailwind CSS

## Backend

* Node.js
* Express.js
* Sequelize ORM
* JWT Authentication
* bcrypt
* Multer

## Database

* PostgreSQL

---

# 📁 Project Structure

```
School-Management-System

│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── api
│   │   └── App.jsx
│
├── server
│   ├── src
│   │   ├── config
│   │   ├── controller
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── validators
│   │   └── uploads
│
└── README.md
```

---

# ⚙️ Installation and Setup

## Clone Repository

```bash
git clone <https://github.com/Harshal135701/School-Management-System.git>

cd School-Management-System
```

---

# Backend Setup

Go to server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000

DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost

JWT_SECRET=your_secret_key
```

Start backend:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

# Frontend Setup

Go to client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 🔗 API Endpoints

## Authentication

```
POST /api/auth/login
```

---

## Dashboard

```
GET /api/dashboard
```

---

## Students

```
POST   /api/students

GET    /api/students

PUT    /api/students/:id

DELETE /api/students/:id
```

---

## Teachers

```
POST   /api/teachers

GET    /api/teachers

PUT    /api/teachers/:id

DELETE /api/teachers/:id
```

---

## Homework

```
POST   /api/homework

GET    /api/homework

PUT    /api/homework/:id

PUT    /api/homework/:id/publish

DELETE /api/homework/:id
```

---

## Parent Portal

```
GET /api/homework/parent
```

Search example:

```
/api/homework/parent?search=Math
```

Filter example:

```
/api/homework/parent?subject=Math&class=10
```

---

# 🔒 Security Features

Implemented security features:

* JWT authentication
* bcrypt password hashing
* Environment variables
* Input validation
* Protected APIs
* File upload validation
* Maximum file size restriction
* Error handling middleware

---

# 📦 Assignment Deliverables

Completed:

✅ GitHub Repository
✅ Backend APIs
✅ React Frontend
✅ Authentication System
✅ Database Models
✅ File Upload System
✅ Parent Portal
✅ README Documentation

---

# 👨‍💻 Author

**Harshal Borse**

BE Computer Engineering Student

Full Stack Developer | Application Security Enthusiast

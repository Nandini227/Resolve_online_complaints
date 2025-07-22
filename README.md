# 🛠️ ResolveNow - Online Complaint Registration and Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application for managing complaints
  online. Users can register, login, file complaints, and track their resolution status. Admins
   can manage complaints and update progress.

---

## 📌 Features

- 🔐 User authentication (JWT-based)
- 📋 Register complaints with category and description
- 📬 Admin panel to view, resolve, and track complaints
- ✉️ Email notifications using nodemailer
- ⚙️ MongoDB integration for data storage
- 🎨 Modern UI with MUI (Material UI)

---

## 🧱 Tech Stack

| Layer    | Technology                              |
| -------- | --------------------------------------- |
| Frontend | React, React Router, Axios, Material UI |
| Backend  | Node.js, Express.js                     |
| Database | MongoDB with Mongoose                   |
| Auth     | JWT, bcryptjs                           |
| Mailer   | Nodemailer                              |

---

## 📁 Folder Structure

```bash
Resolve_online_complaints/
│
├── backend/               # Express + MongoDB backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── .env               # Environment variables
│   ├── server.js          # Main backend entry
│   └── package.json
│
├── frontend/              # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```
## 🚀 Getting Started
### 🔧 Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB (local or Atlas)
- Git

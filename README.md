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
## 🖥️ Setup Instructions
### 1️⃣ Clone the repository
git clone https://github.com/Nandini227/Resolve_online_complaints
- cd Resolve_online_complaints

```md
### 2️⃣ Backend Setup

cd backend
npm install
# Create a .env file (see below)
npm start
```

### 📄 .env example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

## 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

## 🌐 Deployment Suggestions
- Frontend: Vercel, Netlify
- Backend: Render, Railway, or Heroku
- Database: MongoDB Atlas
## 📜 License
```
This project is licensed under the MIT License.
```

## 🙋‍♂️ Author

Nandini Naruboyuna 🔗 GitHub: https://github.com/Nandini227

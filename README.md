

# JobTraker

**JobTraker** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to manage their job applications efficiently. It includes authentication, job CRUD operations, job status tracking, filtering, and visual analytics via interactive dashboards.

## 🚀 Features

- User Authentication (Register/Login/Logout)
- Add, Edit, Delete Job Applications
- Search and Filter Jobs by Type, Status, and Location
- Statistics Dashboard with Chart.js Integration
- Protected Routes with Role-Based Access Control
- Responsive UI with clean UX design

## 🧱 Tech Stack

| Layer       | Technology     |
|------------|----------------|
| Frontend   | React.js       |
| Backend    | Node.js, Express.js |
| Database   | MongoDB        |
| Charts     | Chart.js       |
| Styling    | CSS Modules / Tailwind (if used) |
| State Mgmt | React Context API |
| Auth       | JWT + Cookies  |

---

## 📁 Project Structure


jobtraker/
│
├── client/                     # React frontend
│   ├── public/
│   └── src/
│       ├── components/         # UI components
│       ├── pages/              # Pages like Dashboard, Login, Register
│       ├── context/            # Global state (Auth, Jobs, Alerts)
│       └── App.js
│
├── controllers/               # Backend controllers
│   ├── authController.js
│   └── jobsController.js
│
├── routes/                    # Express route definitions
│   ├── authRoutes.js
│   └── jobRoutes.js
│
├── middleware/                # Express middleware
│   ├── auth.js
│   ├── error-handler.js
│   └── testUser.js
│
├── models/                    # Mongoose models
│   ├── User.js
│   └── Job.js
│
├── utils/                     # Utility functions
│   ├── attachCookies.js
│   └── checkPermissions.js
│
├── errors/                    # Custom error handling
│   └── *.js                   # (bad-request.js, not-found.js, etc.)
│
├── db/
│   └── connect.js             # MongoDB connection setup
│
├── server.js                  # Entry point for Express backend
├── .env                       # Environment variables
└── package.json


---

## 🔐 Authentication Flow

- JWT-based authentication
- Tokens stored in secure, HTTP-only cookies
- Middleware handles protected routes and test users

---

## 📊 Dashboard

- Integrated with **Chart.js** to visualize job stats
- Tracks status like pending, interview, and declined



## 📦 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/rbsuhail/jobtraker.git
cd jobtraker
```

### 2. Setup Backend

```bash
npm install
# Create a `.env` file and add:
# MONGO_URL=your_mongodb_url
# JWT_SECRET=your_jwt_secret
# JWT_LIFETIME=1d
npm start
```

### 3. Setup Frontend

```bash
cd client
npm install
npm start
```

---

## 🛠️ API Routes

| Endpoint              | Method | Description               |
|-----------------------|--------|---------------------------|
| /api/v1/auth/register | POST   | Register new user         |
| /api/v1/auth/login    | POST   | Login existing user       |
| /api/v1/jobs          | GET    | Get all jobs              |
| /api/v1/jobs          | POST   | Create a new job          |
| /api/v1/jobs/:id      | PATCH  | Update a job              |
| /api/v1/jobs/:id      | DELETE | Delete a job              |

---

## 📚 Future Enhancements

- Email notifications for job status changes
- Resume and document uploads
- Collaborative job tracking (Teams)
- Admin panel with role-based dashboards

---

## 👨‍💻 Made With

- 💙 by [Suhail Ahmed](https://github.com/rbsuhail)
- System Architecture inspired by clean MVC + REST API design patterns

---
![ren](https://github.com/user-attachments/assets/31694ed1-86d6-49f9-ad38-54d346b5139d)


## 📜 License

This project is licensed under the MIT License.
```


# 🐞 Bug Tracker App

A full-stack bug tracking system built with the MERN stack. Users can register, log in, report bugs, update bug statuses, and view all reported bugs. This project includes a clean UI, toast notifications, token-based authentication, and a dashboard summary.

## 🚀 Features

- 👤 User registration and login (merged into a single AuthPage)
- 🔐 Token-based authentication (JWT)
- 🪲 Submit and track bugs with status (Open, In Progress, Closed)
- 📊 Dashboard summary (total bugs, open, closed)
- 🌐 React Router for navigation
- 📦 Toast notifications for feedback
- 💄 Clean and responsive UI using vanilla styles

## 🛠️ Technologies Used

- Frontend: React, React Router DOM, Axios, React Toastify
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth: JWT (JSON Web Token)


## 🔧 Setup Instructions

### 1. Clone the repository


git clone https://github.com/Gowthamkumar29/bug-tracker-project.git
cd bug-tracker-project

2. Install dependencies
Backend:
cd bug-tracker-backend
npm install
Frontend:
cd ../bug-tracker-frontend
npm install

3. Environment variables
Create a .env file inside bug-tracker-backend:
PORT=5000
MONGO_URI=mongodb://localhost:27017/bugtracker
JWT_SECRET=your_jwt_secret

4. Run the app
In backend:
npm start
In frontend (in a new terminal):
npm start
Visit: http://localhost:3000

📂 Folder Structure
bug-tracker-project/
├── bug-tracker-frontend/
│   └── src/
│       ├── pages/
│       ├── components/
│       └── App.js
├── bug-tracker-backend/
│   ├── models/
│   ├── routes/
│   └── server.js
📜 License
This project is licensed under the MIT License.

# 🐞 Bug Tracker App

A full-stack bug tracking system built with the **MERN stack**. This project helps developers or teams efficiently track and manage bugs throughout a software development cycle. It includes user authentication, bug status updates, and a dashboard for quick insights.

---

## 🚀 Features

- 👤 **User Authentication** – Register/Login via a unified AuthPage
- 🔐 **JWT-based Token Authentication**
- 🐛 **Bug Reporting** – Add bugs with status: *Open*, *In Progress*, or *Closed*
- 📊 **Dashboard Summary** – View total, open, and closed bugs
- 🧭 **React Router** – Smooth client-side navigation
- 🔔 **Toast Notifications** – Instant feedback for user actions
- 💻 **Responsive UI** – Clean interface using vanilla CSS

---

## 🖼️ Demo Screenshots

### 🔐 Login Page  
![Login](screenshots/login.png)

### 📊 Dashboard Overview  
![Dashboard](screenshots/dashboard.png)

### 🐞 Bug Reporting Interface  
![Report Bug](screenshots/reportbug.png)

### 📋 View All Bugs  
![View Bugs](screenshots/viewbugs.png)

---

## 🛠️ Tech Stack

**Frontend**  
- React  
- React Router DOM  
- Axios  
- React Toastify  

**Backend**  
- Node.js  
- Express  
- MongoDB  
- Mongoose  

**Authentication**  
- JWT (JSON Web Token)

---

## ⚙️ Setup Instructions

### 🔁 1. Clone the Repository

```bash
git clone https://github.com/Gowthamkumar29/bug-tracker-project.git
cd bug-tracker-project

 2. Install Dependencies
Backend
cd bug-tracker-backend
npm install

Frontend
cd ../bug-tracker-frontend
npm install

3. Environment Variables
Create a .env file in bug-tracker-backend and add:
PORT=5000
MONGO_URI=mongodb://localhost:27017/bugtracker
JWT_SECRET=your_jwt_secret

4. Run the Application
Backend
npm start

Frontend (open a new terminal)
cd bug-tracker-frontend
npm start

Then open your browser and visit:
http://localhost:3000

📁 Folder Structure
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

🙌 Acknowledgements
Built as a learning project to demonstrate real-world full-stack development using the MERN stack. Inspired by common tools used by software teams for bug tracking and collaboration.
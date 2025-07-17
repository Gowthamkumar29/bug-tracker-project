🐞 Bug Tracker App
A full-stack bug tracking system built with the MERN stack (MongoDB, Express, React, Node.js). Users can register, log in, report bugs, and view or update bug statuses. Designed to help teams keep track of software issues with a clean UI and real-time updates.

🚀 Features
User authentication (Register/Login using JWT)

Report new bugs with title, description, and priority

View all submitted bugs in a tabular format

Update bug statuses: Open, In Progress, Closed

Toast notifications for actions (success, errors)

Responsive UI for desktop and mobile devices

🛠️ Tech Stack
🔹 Frontend
: React.js
: Axios
: React Router DOM
: Toastify

🔹 Backend
: Node.js
: Express.js
: MongoDB (via MongoDB Atlas)
: Mongoose
: JSON Web Tokens (JWT)
: bcrypt for password hashing

📦 Installation Instructions
1. Clone the repository
git clone https://github.com/Gowthamkumar29/bug-tracker-project.git
cd bug-tracker-project

2. Setup Backend
cd backend
npm install

Create a .env file in the backend folder with the following:
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_key

Run the backend server:
npm start

3. Setup Frontend
cd ../frontend
npm install
Run the React app:

npm start
4. Access the App
Open your browser and go to:

arduino
Copy
Edit
http://localhost:3000


🧠 Future Improvements
Add roles (admin/dev/tester)

Bug filtering & sorting

Assign bugs to users

Add email notifications

🙌 Acknowledgements
Built as a full-stack practice project

Inspired by real-world project management tools


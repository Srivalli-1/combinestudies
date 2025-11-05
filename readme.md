📘 Combined Studies App — Day 1 Progress
🗓️ Date

November 5, 2025

🧠 Objective

Start the backend setup for the Combined Studies App by initializing the server and implementing the user signup functionality.

🚀 Tasks Completed
✅ 1. Backend Initialization

Created a new Node.js + Express project.

Set up the basic folder structure:

backend/
├── models/
│   └── userModel.js
├── routes/
│   └── signupRoute.js
├── server.js
└── .env


Installed required dependencies:

npm install express mongoose dotenv cors

✅ 2. MongoDB Connection

Connected the app to MongoDB using Mongoose.

Verified successful connection through console logs.

✅ 3. User Model

Created a User Schema with the following fields:

{
  username: String,
  email: String,
  password: String,
  role: { type: String, enum: ['student', 'parent', 'professor'] }
}


Removed unnecessary fields like subject and experience.

✅ 4. Signup Route

Implemented a POST route:

/api/signup


Registered users by saving them to MongoDB.

Handled success and error responses properly.

✅ Example Response:

{
  "message": "User registered successfully"
}

✅ 5. Debugging and Fixes

Fixed “Cannot POST /api/signup” error by correctly defining the route in server.js.

Resolved “User validation failed” error by correcting enum values for role.

🧩 What’s Next (Day 2 Goals)

Implement Login API.

Add Password Hashing using bcrypt.

Setup JWT Authentication for login.

Start integrating the backend with the frontend signup page.

💡 Learnings

Understood the structure and flow of an Express backend.

Learned how to define and use Mongoose models.

Practiced route debugging and enum validation handling.
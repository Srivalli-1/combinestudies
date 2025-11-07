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

✅ Tasks Completed for day 2
🧩 1. Backend Enhancements

Added password encryption using bcryptjs in signup route for security.

Implemented new Login API (/api/login):

Verifies email and password.

Returns success or error messages.

Added login route import in server.js.

Files updated

backend/
 ├── routes/signupRoute.js      → added bcrypt hashing
 ├── routes/loginRoute.js       → new login route
 ├── server.js                  → added login route mount


Example:

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Incorrect password" });
  res.status(200).json({
    message: "Login successful",
    user: { username: user.username, email: user.email, role: user.role }
  });
});


✅ Tested with Bruno → working correctly.

🧩 2. MongoDB Atlas Connection Issue Fixed

Error: “Could not connect to any servers in your MongoDB Atlas cluster.”

Fixed by:

Logging into MongoDB Atlas.

Adding current IP address to Network Access whitelist.

Verified: ✅ MongoDB Connected.

🧩 3. Frontend React Improvements

Created Login.jsx component for login page UI.

Styled to match existing Signup design (black background + blue text).

Used axios for API requests.

Added proper success/error alerts.

File: frontend/src/pages/Login.jsx

🧩 4. App Component Fix

Error: Identifier 'App' has already been declared

Occurred because two App() functions existed in App.jsx.

Fixed by keeping only one main function.

Final App.jsx Example (Login version):

import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;


✅ Frontend now runs without errors.
✅ Login page visible and functional.

🧪 Testing

Signup API (Bruno)

POST /api/signup
{
  "username": "Srivalli",
  "email": "srivalli2@example.com",
  "password": "123456",
  "gender": "Female",
  "age": 20,
  "role": "Student"
}


Login API (Bruno)

POST /api/login
{
  "email": "srivalli2@example.com",
  "password": "123456"
}


Response

{
  "message": "Login successful",
  "user": {
    "username": "Srivalli",
    "email": "srivalli2@example.com",
    "role": "Student"
  }
}

🧠 What I Learned

Difference between plain and hashed passwords.

How to handle MongoDB IP whitelist issues.

Debugging React component duplication errors.

Creating secure login systems with Express + bcrypt.

Connecting backend APIs with React using axios.

🪄 Next Goals (Day 3)

Connect Signup and Login pages to work together in frontend.

Add JWT authentication for login sessions.

Redirect users based on role (Student / Professor / Parent).

Start Dashboard component.
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(""); // ✅ to show success/error messages
  const [messageType, setMessageType] = useState(""); // success or error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      setMessage(res.data.message);
      setMessageType("success");

      // store logged-in user info
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // clear form
      setFormData({ email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
      setMessageType("error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="bg-black p-10 rounded-xl w-full max-w-md shadow-lg border border-gray-700">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-8">
          LOGIN
        </h2>

        {/* Success/Error message */}
        {message && (
          <p
            className={`text-center mb-4 ${
              messageType === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 rounded-full text-black focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold text-lg">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-2 rounded-full text-black focus:outline-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-400 text-black font-bold py-2 rounded hover:bg-blue-500 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

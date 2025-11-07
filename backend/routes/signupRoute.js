import bcrypt from "bcryptjs";
import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, gender, age, role } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      gender,
      age,
      role
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error registering user", error: error.message });
  }
});

export default router;

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import signupRoute from "./routes/signupRoute.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", signupRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Database connection failed:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

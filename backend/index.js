import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { initDB } from "./utils/dbInit.js";
import foodRoutes from "./routes/foodRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://restaurant.thingkers.com"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Check DB connection
try {
  // Initialize database
  await initDB();
  console.log("✅ Connected to DB successfully");

  //routes
  app.use("/api/food", foodRoutes);
} catch (err) {
  console.error("❌ DB connection failed:", err.message);
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

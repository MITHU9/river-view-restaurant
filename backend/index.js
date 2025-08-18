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
    origin: [
      "http://localhost:5173",
      "https://riverviewpabna.com",
      "https://restaurant.thingkers.com",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

async function startServer() {
  try {
    await initDB();
    console.log("✅ Connected to DB successfully");

    app.use("/api/food", foodRoutes);
    app.get("/", (req, res) => res.send("It works!"));

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  }
}

startServer();

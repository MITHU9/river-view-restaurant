import express from "express";
import upload from "../middleware/upload.js";
import { createFoodItem } from "../controller/foodControllers.js";

const router = express.Router();

router.post("/add", upload.single("image"), createFoodItem);

export default router;

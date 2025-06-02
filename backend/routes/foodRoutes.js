import express from "express";
import upload from "../middleware/upload.js";
import {
  createFoodItem,
  getAllFoodItems,
} from "../controller/foodControllers.js";

const router = express.Router();

router.post("/add", upload.single("image"), createFoodItem);
router.get("/all-food", getAllFoodItems);

export default router;

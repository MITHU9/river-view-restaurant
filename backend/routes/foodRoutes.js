import express from "express";
import upload from "../middleware/upload.js";
import {
  createFoodItem,
  deleteFoodItem,
  getAllFoodItems,
  getFoodById,
  updateFoodItem,
} from "../controller/foodControllers.js";

const router = express.Router();

router.post("/add", upload.single("image"), createFoodItem);
router.get("/all-food", getAllFoodItems);
router.get("/:id", getFoodById);
router.put("/:id", upload.single("image"), updateFoodItem);
router.delete("/:id", deleteFoodItem);

export default router;

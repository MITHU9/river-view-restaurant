import express from "express";
import upload from "../middleware/upload.js";
import {
  createFoodItem,
  deleteFoodItem,
  getAllCategories,
  getAllFoodItems,
  getFoodById,
  getFoodsByCategory,
  getFoodsRandomly,
  updateFoodItem,
} from "../controller/foodControllers.js";

const router = express.Router();

router.post("/add", upload.single("image"), createFoodItem);
router.get("/all-food", getAllFoodItems);
router.get("/categories", getAllCategories);
router.get("/random-food", getFoodsRandomly);
router.get("/food-by-category/:category", getFoodsByCategory);
router.get("/:id", getFoodById);
router.put("/:id", upload.single("image"), updateFoodItem);
router.delete("/:id", deleteFoodItem);

export default router;

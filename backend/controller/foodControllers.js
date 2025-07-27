import pool from "../config/db.js";
import {
  createFoodQuery,
  deleteFoodQuery,
  getAllFoodQuery,
  getFoodByIdQuery,
  updateFoodQuery,
} from "../queries/sqlQuery.js";

const createFoodItem = async (req, res) => {
  const { name, category, price, is_vegetarian, description, ingredients } =
    req.body;

  const image_url = req.file?.path;

  try {
    const ingredientsArray = Array.isArray(ingredients)
      ? ingredients
      : ingredients?.split(",").map((item) => item.trim());

    const result = await pool.query(createFoodQuery, [
      name,
      category,
      price,
      is_vegetarian === "true",
      image_url,
      description,
      ingredientsArray,
    ]);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding food item");
  }
};

//get all food items
const getAllFoodItems = async (req, res) => {
  try {
    const result = await pool.query(getAllFoodQuery);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching food items");
  }
};

//update food item
const updateFoodItem = async (req, res) => {
  const { name, price, category, is_vegetarian, description, ingredients } =
    req.body;
  const { id } = req.params;

  try {
    const imageUrl = req.file ? req.file.path : null;

    const result = await pool.query(updateFoodQuery, [
      name,
      price,
      category,
      is_vegetarian === "true" || is_vegetarian === true,
      description,
      ingredients,
      imageUrl,
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Food item not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error updating food:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

//get food by id
const getFoodById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(getFoodByIdQuery, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Food item not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching food item");
  }
};

//delete food item
const deleteFoodItem = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(deleteFoodQuery, [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting food item");
  }
};

export {
  createFoodItem,
  getAllFoodItems,
  getFoodById,
  updateFoodItem,
  deleteFoodItem,
};

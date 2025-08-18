import pool from "../config/db.js";
import {
  createFoodQuery,
  deleteFoodQuery,
  GET_FOODS_BY_CATEGORY,
  getAllCategoryQuery,
  getAllFoodQuery,
  getFoodByIdQuery,
  getFoodsRandomlyQuery,
  updateFoodQuery,
} from "../queries/sqlQuery.js";

// Create food item
const createFoodItem = async (req, res) => {
  const { name, category, price, is_vegetarian, description, ingredients } =
    req.body;
  const image_url = req.file?.path;

  const ingredientsArray = Array.isArray(ingredients)
    ? ingredients
    : ingredients?.split(",").map((item) => item.trim());

  try {
    const [result] = await pool.query(createFoodQuery, [
      name,
      category,
      price,
      is_vegetarian ? 1 : 0,
      image_url,
      description,
      JSON.stringify(ingredientsArray),
    ]);

    res.status(201).json({
      id: result.insertId,
      name,
      category,
      price,
      is_vegetarian,
      description,
      ingredients: ingredientsArray,
      image_url,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding food item");
  }
};

// Get all food items
const getAllFoodItems = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * limit;

  try {
    const [rows] = await pool.query(getAllFoodQuery, [limit, offset]);
    rows.forEach((row) => {
      if (row.ingredients) row.ingredients = JSON.parse(row.ingredients);
    });
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching food items");
  }
};

// Update food item
const updateFoodItem = async (req, res) => {
  const { name, price, category, is_vegetarian, description, ingredients } =
    req.body;
  const { id } = req.params;
  const imageUrl = req.file ? req.file.path : null;

  const ingredientsArray = Array.isArray(ingredients)
    ? ingredients
    : JSON.parse(ingredients);

  try {
    const [result] = await pool.query(updateFoodQuery, [
      name,
      price,
      category,
      is_vegetarian ? 1 : 0,
      description,
      JSON.stringify(ingredientsArray),
      imageUrl,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Food item not found" });
    }

    res.json({
      id,
      name,
      price,
      category,
      is_vegetarian,
      description,
      ingredients: ingredientsArray,
      image_url: imageUrl,
    });
  } catch (err) {
    console.error("Error updating food:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get food by id
const getFoodById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query(getFoodByIdQuery, [id]);
    if (rows.length === 0)
      return res.status(404).json({ error: "Food item not found" });

    const food = rows[0];
    if (food.ingredients) food.ingredients = JSON.parse(food.ingredients);

    res.status(200).json(food);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching food item");
  }
};

// Delete food item
const deleteFoodItem = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query(deleteFoodQuery, [id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Food item not found" });

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting food item");
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const [rows] = await pool.query(getAllCategoryQuery);
    const categories = rows.map((row) => row.category);
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching categories");
  }
};

// Get foods by category
const getFoodsByCategory = async (req, res) => {
  const { category } = req.params;
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * limit;

  try {
    let rows;
    if (!category || category.toLowerCase() === "all") {
      [rows] = await pool.query(getAllFoodQuery, [limit, offset]);
    } else {
      [rows] = await pool.query(GET_FOODS_BY_CATEGORY, [
        category,
        limit,
        offset,
      ]);
    }

    rows.forEach((row) => {
      if (row.ingredients) row.ingredients = JSON.parse(row.ingredients);
    });

    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching food by category:", err);
    res.status(500).send("Error fetching food by category");
  }
};

const getFoodsRandomly = async (req, res) => {
  const limit = parseInt(req.query.limit) || 6;

  try {
    const [rows] = await pool.query(getFoodsRandomlyQuery, [limit]);
    rows.forEach((row) => {
      if (row.ingredients) row.ingredients = JSON.parse(row.ingredients);
    });
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching random food items:", err);
    res.status(500).send("Error fetching random food items");
  }
};

export {
  createFoodItem,
  getAllFoodItems,
  getFoodById,
  updateFoodItem,
  deleteFoodItem,
  getAllCategories,
  getFoodsByCategory,
  getFoodsRandomly,
};

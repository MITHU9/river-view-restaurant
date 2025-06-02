import pool from "../config/db.js";
import { createFoodQuery } from "../queries/sqlQuery.js";

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

export { createFoodItem };

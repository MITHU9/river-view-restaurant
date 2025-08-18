export const createFoodTableQuery = `
  CREATE TABLE IF NOT EXISTS food_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price DECIMAL(6, 2) NOT NULL,
    is_vegetarian BOOLEAN DEFAULT false,
    image_url TEXT,
    description TEXT,
    ingredients JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

export const createFoodQuery = `
  INSERT INTO food_table (
    name, category, price, is_vegetarian, image_url, description, ingredients
  )
  VALUES (?, ?, ?, COALESCE(?, false), ?, ?, ?);
`;

export const updateFoodQuery = `
  UPDATE food_table
  SET 
    name = ?,
    price = ?,
    category = ?,
    is_vegetarian = ?,
    description = ?,
    ingredients = ?,
    image_url = COALESCE(?, image_url)
  WHERE id = ?;
`;

export const deleteFoodQuery = `
  DELETE FROM food_table
  WHERE id = ?;
`;

export const getAllFoodQuery = `
  SELECT * FROM food_table
  ORDER BY created_at DESC
  LIMIT ? OFFSET ?;
`;

export const getFoodByIdQuery = `
  SELECT * FROM food_table
  WHERE id = ?;
`;

export const getAllCategoryQuery = `
  SELECT DISTINCT category FROM food_table;
`;

export const GET_FOODS_BY_CATEGORY = `
  SELECT * FROM food_table
  WHERE LOWER(category) = LOWER(?)
  ORDER BY created_at DESC
  LIMIT ? OFFSET ?;
`;

export const getFoodsRandomlyQuery = `
  SELECT *
  FROM food_table
  WHERE id >= FLOOR(RAND() * (SELECT MAX(id) FROM food_table))
  LIMIT ?;
`;

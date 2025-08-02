const createFoodTableQuery = `
  CREATE TABLE IF NOT EXISTS food_table (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC(6, 2) NOT NULL,
    is_vegetarian BOOLEAN DEFAULT false,
    image_url TEXT,
    description TEXT,
    ingredients TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const createFoodQuery = `
  INSERT INTO food_table (
    name, category, price, is_vegetarian, image_url, description, ingredients
  )
  VALUES ($1, $2, $3, COALESCE($4, false), $5, $6, $7)
  RETURNING *;
`;

const updateFoodQuery = `
  UPDATE food_table
  SET 
    name = $1,
    price = $2,
    category = $3,
    is_vegetarian = $4,
    description = $5,
    ingredients = $6,
    image_url = COALESCE($7, image_url)
  WHERE id = $8
  RETURNING *;
`;

const deleteFoodQuery = `
  DELETE FROM food_table
  WHERE id = $1;
`;

const getAllFoodQuery = `
  SELECT * FROM food_table
  ORDER BY created_at DESC
  LIMIT $1 OFFSET $2;
`;

const getFoodByIdQuery = `
  SELECT * FROM food_table
  WHERE id = $1;
`;

const getAllCategoryQuery = `
  SELECT DISTINCT category FROM food_table`;

const GET_FOODS_BY_CATEGORY = `
  SELECT * FROM food_table
  WHERE LOWER(category) = LOWER($1)
  ORDER BY created_at DESC
  LIMIT $2 OFFSET $3;
`;

export {
  createFoodTableQuery,
  createFoodQuery,
  getAllFoodQuery,
  getAllCategoryQuery,
  getFoodByIdQuery,
  updateFoodQuery,
  deleteFoodQuery,
  GET_FOODS_BY_CATEGORY,
};

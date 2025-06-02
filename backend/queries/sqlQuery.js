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

const getAllFoodQuery = `
  SELECT * FROM food_table
  ORDER BY created_at DESC;
`;

export { createFoodTableQuery, createFoodQuery, getAllFoodQuery };

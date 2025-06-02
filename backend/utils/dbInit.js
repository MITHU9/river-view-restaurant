import pool from "../config/db.js";
import { createFoodTableQuery } from "../queries/sqlQuery.js";

export async function initDB() {
  try {
    await pool.query(createFoodTableQuery);
    console.log("✅ Food table created or already exists");
  } catch (err) {
    console.error("❌ Failed to create food table:", err.message);
    process.exit(1);
  }
}

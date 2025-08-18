import axios from "axios";
import { baseURL } from "../constant/constant";

export const addFoodItem = async (foodData) => {
  const formData = new FormData();

  formData.append("name", foodData.name);
  formData.append("category", foodData.category);
  formData.append("price", foodData.price);
  formData.append("is_vegetarian", foodData.is_vegetarian);
  formData.append("image", foodData.image_file);
  formData.append("description", foodData.description);
  formData.append("ingredients", JSON.stringify(foodData.ingredients));
  formData.append("rating", foodData.rating);

  const response = await axios.post(`${baseURL}/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getAllFoodItems = async (
  category = "all",
  page = 1,
  limit = 10
) => {
  const endpoint =
    category.toLowerCase() === "all"
      ? `${baseURL}/all-food?limit=${limit}&page=${page}`
      : `${baseURL}/food-by-category/${encodeURIComponent(
          category
        )}?limit=${limit}&page=${page}`;

  const response = await axios.get(endpoint, { withCredentials: true });
  return response.data;
};

export const getAllCategories = async () => {
  const response = await axios.get(`${baseURL}/categories`, {
    withCredentials: true,
  });
  return response.data;
};

export const getRandomFoods = async (limit = 6) => {
  const response = await axios.get(`${baseURL}/random-food?limit=${limit}`, {
    withCredentials: true,
  });
  return response.data;
};

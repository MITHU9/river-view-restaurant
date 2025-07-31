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

export const getAllFoodItems = async () => {
  const response = await axios.get(`${baseURL}/all-food`, {
    withCredentials: true,
  });
  return response.data;
};

export const getAllCategories = async () => {
  const response = await axios.get(`${baseURL}/categories`, {
    withCredentials: true,
  });
  return response.data;
};

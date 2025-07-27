import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function EditFoodModal({ initialData, onClose, onSubmit }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      category: "",
      price: "",
      is_vegetarian: false,
      description: "",
      ingredients: "",
    },
  });

  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (initialData) {
      const { ingredients, image_url, ...rest } = initialData;

      Object.entries({
        ...rest,
        ingredients: ingredients?.join(", "),
      }).forEach(([key, val]) => setValue(key, val));

      if (image_url) {
        setImagePreview(image_url);
      } else {
        setImagePreview("");
      }

      setImageFile(null);
    }
  }, [initialData, setValue]);

  const imageFileInput = watch("image_file");

  useEffect(() => {
    if (imageFileInput && imageFileInput.length > 0) {
      const file = imageFileInput[0];
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  }, [imageFileInput]);

  const onFormSubmit = (data) => {
    const cleanedData = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      is_vegetarian: Boolean(data.is_vegetarian),
      description: data.description,
      ingredients: data.ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
      imageFile,
    };

    onSubmit(cleanedData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-900 text-white w-full max-w-2xl rounded-xl p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4">Edit Food Item</h2>

        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          encType="multipart/form-data"
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="Food name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm mb-1">Category</label>
            <input
              {...register("category", { required: true })}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="e.g. Chinese, Indian"
            />
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">Category is required</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm mb-1">Price (Tk)</label>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: true, min: 0 })}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="e.g. 250"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">Price is required</p>
            )}
          </div>

          {/* Vegetarian */}
          <div>
            <label className="block text-sm mb-1">Vegetarian</label>
            <div className="flex items-center space-x-2 mt-1">
              <input
                type="checkbox"
                {...register("is_vegetarian")}
                className="form-checkbox h-5 w-5 text-green-500 bg-gray-700 border-gray-600"
              />
              <span>Is Vegetarian</span>
            </div>
          </div>

          {/* Image Upload */}
          <div className="sm:col-span-2">
            <label className="block text-sm mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image_file")}
              className="w-full text-white"
            />
          </div>

          {/* Image Preview */}
          {imagePreview && typeof imagePreview === "string" && (
            <div className="sm:col-span-2 flex flex-col items-center">
              <label className="block text-sm mb-1 text-gray-400">
                Image Preview
              </label>
              <div className="bg-gray-800 border border-gray-700 rounded p-2">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-xs max-h-40 object-cover rounded"
                />
              </div>
            </div>
          )}

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="block text-sm mb-1">Description</label>
            <textarea
              {...register("description")}
              rows="3"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="Write a short description..."
            />
          </div>

          {/* Ingredients */}
          <div className="sm:col-span-2">
            <label className="block text-sm mb-1">
              Ingredients (comma separated)
            </label>
            <input
              {...register("ingredients")}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="e.g. Paneer, Butter, Spices"
            />
          </div>

          {/* Footer Buttons */}
          <div className="sm:col-span-2 flex justify-end mt-6 space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
            >
              Save Changes
            </button>
          </div>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadCloud, Star } from "lucide-react";

export default function FoodAddForm() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [preview, setPreview] = useState(null);
  const [rating, setRating] = useState(0);

  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    const ingredients = data.ingredients
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i);

    const foodData = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      is_vegetarian: data.is_vegetarian || false,
      image_file: data.image[0],
      description: data.description,
      ingredients,
      rating,
    };

    console.log("Form Data:", foodData);

    // TODO: Submit `foodData` to your backend (image_file is the actual File object)

    reset();
    setPreview(null);
    setRating(0);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white/10 rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Add New Food Item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input
          {...register("name", { required: true })}
          className="w-full border p-2 rounded-lg"
          placeholder="Food Name"
        />

        <input
          {...register("category", { required: true })}
          className="w-full border p-2 rounded-lg"
          placeholder="Category (e.g. Main Course)"
        />

        <input
          type="number"
          step="0.01"
          {...register("price", { required: true })}
          className="w-full border p-2 rounded-lg"
          placeholder="Price"
        />

        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" {...register("is_vegetarian")} />
          <span>Vegetarian</span>
        </label>

        {/* Local Image Preview */}
        <div className="flex items-center gap-4">
          <label className="cursor-pointer flex items-center gap-2 px-4 py-2 border rounded-lg bg-gray-50/10 hover:bg-gray-100/20">
            <UploadCloud className="w-5 h-5" />
            <span>Upload Image</span>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              onChange={onImageChange}
              className="hidden"
            />
          </label>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-16 h-16 object-cover rounded-md"
            />
          )}
        </div>

        <textarea
          {...register("description")}
          className="w-full border p-2 rounded-lg"
          placeholder="Description"
          rows={3}
        />

        <textarea
          {...register("ingredients", { required: true })}
          className="w-full border p-2 rounded-lg"
          placeholder="Ingredients (comma separated)"
          rows={2}
        />

        <button
          type="submit"
          className="w-full py-2 bg-green-600/20 text-white rounded-lg cursor-pointer hover:bg-green-700/40 transition"
        >
          Add Food
        </button>
      </form>
    </div>
  );
}

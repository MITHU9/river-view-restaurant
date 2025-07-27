import { useState } from "react";
import { useAllFood } from "../../../hooks/useAllFood";
import axios from "axios";
import EditModal from "../../../components/EditModal";
import { useEditFood } from "../../../hooks/useEditFood";

export default function ManageFoodTable() {
  const { data, isLoading, isError, error, refetch } = useAllFood();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });

  const editFoodMutation = useEditFood();

  // Handle edit modal open
  const handleEdit = (item) => {
    setEditItem(item);
    setFormData({
      name: item.name,
      price: item.price,
      category: item.category,
      is_vegetarian: item.is_vegetarian,
      description: item.description,
      ingredients: item.ingredients || [],
      imageFile: null,
      imageUrl: item.image_url,
    });
  };

  // Handle edit submit
  const handleEditSubmit = (data) => {
    const formDataToSend = new FormData();
    formDataToSend.append("name", data.name);
    formDataToSend.append("category", data.category);
    formDataToSend.append("price", data.price);
    formDataToSend.append("is_vegetarian", data.is_vegetarian);
    formDataToSend.append("description", data.description || "");
    formDataToSend.append(
      "ingredients",
      JSON.stringify(data.ingredients || [])
    );

    if (data.imageFile) {
      formDataToSend.append("image", data.imageFile);
    }

    editFoodMutation.mutate(
      { id: editItem.id, formData: formDataToSend },
      {
        onSuccess: () => setEditItem(null),
      }
    );
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`/api/food/${id}`);
        refetch();
      } catch (err) {
        console.error("Error deleting:", err);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">Loading...</div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-900 text-red-400 p-6">
        Error: {error.message}
      </div>
    );
  }

  const foodList = data || [];

  const filteredFood = foodList.filter((food) => {
    const matchSearch = food.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = categoryFilter
      ? food.category === categoryFilter
      : true;
    return matchSearch && matchCategory;
  });

  const categories = [...new Set(foodList.map((f) => f.category))];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Food (Table View)</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search food..."
          className="px-4 py-2 rounded bg-gray-800 text-white w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded bg-gray-800 text-white w-full md:w-1/4"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-xl">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Vegetarian</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFood.map((food) => (
              <tr
                key={food.id}
                className="border-b border-gray-700 hover:bg-gray-700/50"
              >
                <td className="px-4 py-3">
                  <img
                    src={food.image_url}
                    alt={food.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3">{food.name}</td>
                <td className="px-4 py-3 capitalize">{food.category}</td>
                <td className="px-4 py-3 font-semibold">Tk{food.price}</td>
                <td className="px-4 py-3">
                  {food.is_vegetarian ? (
                    <span className="text-green-400">Yes 🌱</span>
                  ) : (
                    <span className="text-red-400">No 🍗</span>
                  )}
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => handleEdit(food)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(food.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredFood.length === 0 && (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-gray-400">
                  No food items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Edit Modal */}
      {editItem && (
        <EditModal
          initialData={formData}
          onClose={() => setEditItem(null)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
}

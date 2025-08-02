import { useState } from "react";
import { useFoodItems } from "../../../hooks/useAllFood";
import axios from "axios";
import EditModal from "../../../components/EditModal";
import { useEditFood } from "../../../hooks/useEditFood";
import { baseURL } from "../../../constant/constant";
import { useAllCategories } from "../../../hooks/useAllCategories";

export default function ManageFoodTable() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [page, setPage] = useState(1); // ✅ new
  const [limit] = useState(10); // ✅ new

  const { data, isLoading, isError, error, refetch } = useFoodItems(
    categoryFilter || "all",
    page,
    limit
  );

  const { data: categories, isLoading: loadingCategories } = useAllCategories();

  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });

  const editFoodMutation = useEditFood();

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
        onSuccess: () => {
          setEditItem(null);
          refetch(); // refetch updated data
        },
      }
    );
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`${baseURL}/${id}`);
        refetch();
      } catch (err) {
        console.error("Error deleting:", err);
      }
    }
  };

  if (isLoading || loadingCategories) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="bg-gray-900 text-white p-6">Loading...</div>
      </div>
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

  const filteredFood = foodList.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  const categoriesList = categories || [];

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
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setPage(1); // reset to page 1 on filter
          }}
        >
          <option value="">All Categories</option>
          {categoriesList?.map((cat) => (
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

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={filteredFood.length < limit}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>

      {/* Edit Modal */}
      {editItem && (
        <EditModal
          initialData={formData}
          onClose={() => setEditItem(null)}
          onSubmit={handleEditSubmit}
          isLoading={editFoodMutation.isPending}
        />
      )}
    </div>
  );
}

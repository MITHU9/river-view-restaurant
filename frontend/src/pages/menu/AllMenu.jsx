import { useState } from "react";
import MenuItem from "../../components/MenuItem";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useAllCategories } from "../../hooks/useAllCategories";
import { useFoodItems } from "../../hooks/useAllFood";
import FoodDetailModal from "../../components/FoodDetailModal";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);

  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useAllCategories();
  const { data: foodItems, isLoading: loadingCategory } = useFoodItems(
    selectedCategory,
    page,
    10
  );

  const handleOpenModal = (foodItem) => {
    setSelectedFood(foodItem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(1); // reset to first page when category changes
  };

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  if (isLoading || loadingCategory)
    return (
      <div className="flex items-center justify-center h-screen bg-[#2D0900] text-white">
        <div
          className="text-2xl font-semibold animate-pulse"
          style={{ color: "#FFB300" }}
        >
          Loading....
        </div>
      </div>
    );

  return (
    <div>
      {/* Header */}
      <div className="bg-[#3A0C01] bg-center h-28 flex items-center justify-center text-white text-4xl">
        Our Menu
      </div>

      {/* Category Slider */}
      <div className="bg-[#2D0900] py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            spaceBetween={10}
            slidesPerView="auto"
            navigation
            modules={[Navigation]}
            className="!pb-6"
          >
            <SwiperSlide style={{ width: "auto" }}>
              <button
                onClick={() => handleCategoryChange("All")}
                className={`px-4 py-2 rounded-full font-semibold text-sm ${
                  selectedCategory === "All"
                    ? "bg-amber-500 text-white"
                    : "bg-white text-[#2D0900]"
                }`}
              >
                All
              </button>
            </SwiperSlide>
            {data.map((category, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <button
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full font-semibold text-sm cursor-pointer ${
                    selectedCategory === category
                      ? "bg-amber-500 text-white"
                      : "bg-white text-[#2D0900]"
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-[#2D0900]">
        <div className="w-full max-w-5xl mx-auto py-8 px-4">
          <SectionTitle
            subtitle="Check it out"
            title={selectedCategory || "All Foods"}
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {foodItems.length === 0 ? (
              <p className="text-white">No food found.</p>
            ) : (
              foodItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleOpenModal(item)}
                  className="cursor-pointer"
                >
                  <MenuItem
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image_url}
                  />
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              disabled={page === 1}
              onClick={handlePrevPage}
              className="px-4 py-2 bg-amber-500 text-white rounded disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>
            <span className="text-white text-lg">Page {page}</span>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-amber-500 text-white rounded cursor-pointer disabled:opacity-50"
              disabled={foodItems.length < 10}
            >
              Next
            </button>
          </div>

          {/* Food Detail Modal */}
          {selectedFood && (
            <FoodDetailModal
              food={selectedFood}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

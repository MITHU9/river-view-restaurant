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

  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useAllCategories();
  const { data: foodItems, isLoading: loadingCategory } =
    useFoodItems(selectedCategory);

  const handleOpenModal = (foodItem) => {
    setSelectedFood(foodItem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

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

  //console.log(foodItems);

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
                onClick={() => setSelectedCategory("All")}
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
                  onClick={() => setSelectedCategory(category)}
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

      {/* Menu Sections */}
      <div className="bg-[#2D0900]">
        <div className="w-full max-w-5xl mx-auto py-8 px-4">
          <SectionTitle
            subtitle="Check it out"
            title={selectedCategory || "All Foods"}
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {loadingCategory ? (
              <p className="text-white">Loading food...</p>
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

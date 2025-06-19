import { useState } from "react";
import MenuItem from "../../components/MenuItem";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const menuItems = [
  {
    name: "Roast Duck Breast",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Tuna Niçoise",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/salad-bg.jpg",
  },
  {
    name: "Escalope de Veau",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/soup-bg.jpg",
  },
  {
    name: "Chicken and Pizza Salad",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Fish Parmentier",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Roasted Pork Belly",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/pizza-bg.jpg",
  },
];

const sliderImages = [
  "/Asset2.png",
  "/Asset3.png",
  "/Asset5.png",
  "/Asset6.png",
  "/Asset7.png",
];

const MenuPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="bg-[#3A0C01] bg-center h-28 flex items-center justify-center text-white text-4xl">
        Our Menu
      </div>

      {/* Button to trigger popup */}
      <div className="flex justify-center bg-[#2D0900] py-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-[#2D0900] font-semibold px-6 py-2 rounded shadow hover:bg-gray-200 transition cursor-pointer"
        >
          Show Full Menu
        </button>
      </div>

      {/* Image Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white/10 rounded-lg overflow-hidden w-full max-w-3xl relative border border-amber-400">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10 cursor-pointer"
            >
              &times;
            </button>

            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={1}
              className="w-full h-[95vh]"
            >
              {sliderImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* Italian Food Section */}
      <div className="bg-[#2D0900]">
        <div className="w-full max-w-5xl mx-auto py-16 px-4">
          <SectionTitle subtitle="Check it out" title="Italian Food" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Chinese Food Section */}
      <div className="bg-[#2D0900]">
        <div className="w-full max-w-5xl mx-auto py-16 px-4">
          <SectionTitle subtitle="Check it out" title="Chinese Food" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Thai Food Section */}
      <div className="bg-[#2D0900]">
        <div className="w-full max-w-5xl mx-auto py-16 px-4">
          <SectionTitle subtitle="Check it out" title="Thai Food" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

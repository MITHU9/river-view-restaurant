// FavoriteMenu.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../../components/SectionTitle";

const menuItems = [
  {
    title: "Spicy Pepperoni Inferno",
    description:
      "Loaded with spicy pepperoni, mozzarella, and a kick of red chili flakes, this pizza brings the heat without pizza brings losing the flavor.",
    price: "10",
    image: "/pizza-bg.jpg",
  },
  {
    title: "Garden Fresh Veggie",
    description:
      "A colorful medley of bell peppers, onions, mushrooms, black olives, and sweet corn on a tomato base, finished with melty mozzarella.",
    price: "18",
    image: "/salad-bg.jpg",
  },
  {
    title: "Meat Lovers’ Feast",
    description:
      "A hearty combination of pepperoni, sausage, beef, and smoked chicken with mozzarella on a classic red sauce base—meat lover’s dream come true.",
    price: "20",
    image: "/dessert-bg.jpeg",
  },
  {
    title: "BBQ Chicken Delight",
    description:
      "Tender grilled chicken smothered in smoky BBQ sauce, layered with red onions, mozzarella, and a hint of cilantro for the perfect bite.",
    price: "15",
    image: "/soup-bg.jpg",
  },
];

const FavoriteMenu = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Layer */}
      <motion.div
        style={{
          backgroundImage: 'url("/banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 z-0"
      >
        <div className="w-full h-full bg-black/50" />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <div className="text-center mb-10 text-yellow-400">
          <SectionTitle subtitle="Explore Item" title="FAVORITE MENU" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white shadow-lg overflow-hidden ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-orange-600 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.description}</p>
                <button className="mt-4 bg-orange-600 text-white py-1 px-4 text-sm rounded">
                  Tk.{item.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteMenu;

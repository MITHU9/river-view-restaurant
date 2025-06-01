// FavoriteMenu.jsx
import React from "react";
import SectionTitle from "../../../components/SectionTitle";

const menuItems = [
  {
    title: "Neque porro quisquam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: "10",
    image: "/pizza-bg.jpg",
  },
  {
    title: "Neque porro quisquam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: "18",
    image: "/salad-bg.jpg",
  },
  {
    title: "Neque porro quisquam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: "20",
    image: "/dessert-bg.jpeg",
  },
  {
    title: "Neque porro quisquam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: "15",
    image: "/soup-bg.jpg",
  },
];

const FavoriteMenu = () => {
  return (
    <section
      className="bg-cover bg-center py-16"
      style={{
        backgroundImage: 'url("/banner.jpg")',
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="text-center mb-10 text-yellow-400">
        <SectionTitle subtitle="Explore Item" title="FAVORITE MENU" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white shadow-lg overflow-hidden">
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
              <button className="mt-4 bg-orange-600 text-white py-1 px-4 text-sm ">
                Tk.{item.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoriteMenu;

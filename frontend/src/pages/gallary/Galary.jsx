import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Event", "News", "Gallery"];

const images = [
  { src: "/pizza-bg.jpg", category: "Event" },
  { src: "/pizza-bg.jpg", category: "News" },
  { src: "/pizza-bg.jpg", category: "Gallery" },
  { src: "/pizza-bg.jpg", category: "Event" },
  { src: "/pizza-bg.jpg", category: "News" },
  { src: "/pizza-bg.jpg", category: "Gallery" },
  { src: "/pizza-bg.jpg", category: "Event" },
  { src: "/pizza-bg.jpg", category: "News" },
  { src: "/pizza-bg.jpg", category: "Gallery" },
  { src: "/pizza-bg.jpg", category: "Event" },
  { src: "/pizza-bg.jpg", category: "News" },
  { src: "/pizza-bg.jpg", category: "Gallery" },
  { src: "/pizza-bg.jpg", category: "Event" },
  { src: "/pizza-bg.jpg", category: "News" },
  { src: "/pizza-bg.jpg", category: "Gallery" },
  { src: "/pizza-bg.jpg", category: "Event" },
  { src: "/pizza-bg.jpg", category: "News" },
  { src: "/pizza-bg.jpg", category: "Gallery" },
  { src: "/pizza-bg.jpg", category: "Event" },
  { src: "/pizza-bg.jpg", category: "News" },
];

export default function FoodGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div>
      <div className="bg-[#3A0C01] bg-center h-28 flex items-center justify-center text-white text-4xl ">
        Gallary
      </div>
      <div className="bg-[#2D0900]">
        <div className="p-6 max-w-7xl mx-auto ">
          {/* Category Tabs */}
          <div className="flex space-x-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2  text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-red-700 text-white"
                    : "bg-transparent text-red-500 border border-red-500 hover:bg-red-400 hover:text-gray-100"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Image Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt="Food"
                className=" cursor-pointer hover:scale-[1.01] transition-transform duration-200 w-full shadow-md"
                onClick={() => setSelectedImage(img.src)}
              />
            ))}
          </div>

          {/* Full Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  className="relative"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage}
                    alt="Full View"
                    className="max-w-full max-h-[90vh] rounded-lg"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition"
                  >
                    <X className="w-5 h-5 cursor-pointer text-gray-700" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

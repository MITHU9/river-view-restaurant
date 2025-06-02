import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Event", "News", "Gallery"];

const images = [
  { src: "/pizza-bg.jpg", category: "Event", date: "2025-07-20" },
  { src: "/soup-bg.jpg", category: "News", date: "2025-06-15" },
  { src: "/slide1.jpg", category: "Event", date: "2025-05-10" },
  { src: "/soup-bg.jpg", category: "Event", date: "2025-07-12" },
  { src: "/pizza-bg.jpg", category: "News", date: "2025-06-20" },
  { src: "/slide3.jpg", category: "News", date: "2025-07-01" },
  { src: "/pizza-bg.jpg", category: "Gallery", date: "2025-06-22" },
  { src: "/slide5.jpg", category: "Event", date: "2025-07-08" },
  { src: "/salad-bg.jpg", category: "Gallery", date: "2025-07-05" },
  { src: "/slide2.jpg", category: "Event", date: "2025-05-30" },
  { src: "/pizza-bg.jpg", category: "News", date: "2025-06-10" },
  { src: "/slide4.jpg", category: "Gallery", date: "2025-04-25" },
];

export default function FoodGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div>
      <div className="bg-[#3A0C01] h-28 flex items-center justify-center text-white text-4xl">
        Gallery
      </div>

      <div className="bg-[#2D0900]">
        <div className="p-6 max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex space-x-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
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

          {/* Masonry Image Grid with Animation */}
          <motion.div
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            <AnimatePresence>
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.src + idx}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid bg-stone-800 rounded-md shadow-md overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt="Food"
                    className="w-full cursor-pointer hover:scale-[1.01] transition-transform duration-200"
                    onClick={() => setSelectedImage(img.src)}
                  />
                  <div className="p-2 text-sm text-gray-200">
                    {formatDate(img.date)}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

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
                    <X className="w-5 h-5 text-gray-700 cursor-pointer" />
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

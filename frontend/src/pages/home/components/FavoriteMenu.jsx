import { motion } from "framer-motion";
import SectionTitle from "../../../components/SectionTitle";
import { useRandomFoods } from "../../../hooks/useRandomFoods";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const FavoriteMenu = () => {
  const { data, isLoading, isError } = useRandomFoods(4);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching random foods</div>;

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
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
      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-10 text-yellow-400">
          <SectionTitle subtitle="Explore Item" title="FAVORITE MENU" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {data?.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={item.image_url}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              />
              <div className="p-4">
                <h3 className="text-orange-600 font-semibold text-lg mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-700">
                  {item.description.substring(0, 150) + "..."}
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 bg-orange-600 text-white py-1 px-4 text-sm rounded"
                >
                  Tk.{item.price}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FavoriteMenu;

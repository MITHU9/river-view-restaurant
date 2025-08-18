import MenuItem from "../../../components/MenuItem";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRandomFoods } from "../../../hooks/useRandomFoods";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
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

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const MenuSection = () => {
  const { data, isLoading, isError } = useRandomFoods(6);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching random foods</div>;

  return (
    <div className="bg-[#2D0900]">
      <motion.div
        className="w-full max-w-5xl mx-auto py-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle subtitle="Check it out" title="FROM OUR MENU" />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {data?.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MenuItem
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image_url}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/menu"
              className="uppercase tracking-widest text-sm border-b border-stone-400 pb-1 hover:border-stone-600 transition-all duration-300 font-medium rounded-b-xl px-2 py-2 cursor-pointer text-amber-300"
            >
              View Full Menu
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MenuSection;

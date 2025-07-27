import { Bookmark, Star, Calendar } from "lucide-react";
import InfoCard from "../../../components/WelcomeCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WelcomeSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="bg-[#2d0600] text-white py-16">
      <motion.div
        className="text-center mb-12"
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <h1 className="text-4xl font-semibold text-orange-500 mb-2">
          Welcome!
        </h1>
        <p className="text-sm text-white/80">
          Welcome to a place where every bite tells a story and every moment
          feels like home.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {[Bookmark, Star, Calendar].map((Icon, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <InfoCard
              icon={Icon}
              title={
                idx === 0
                  ? "Find Your Favorite"
                  : idx === 1
                  ? "Best Seller"
                  : "Reservation"
              }
              description="Discover the joy of choosing what speaks to you. Whether it’s a dish, a style, or a moment, finding your favorite is about connecting with what truly delights your senses and brightens your day."
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

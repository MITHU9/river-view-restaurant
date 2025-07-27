import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  Users,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SIDE_BAR = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/dashboard/overview",
  },
  {
    name: "Add Food",
    icon: ShoppingBag,
    color: "#6366f1",
    href: "/dashboard/add-food",
  },
  {
    name: "Manage Food",
    icon: ShoppingCart,
    color: "#6366f1",
    href: "/dashboard/manage-food",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#6366f1",
    href: "#",
  },
  {
    name: "Analytics",
    icon: BarChart2,
    color: "#6366f1",
    href: "#",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6366f1",
    href: "#",
  },
];

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-full hover:bg-gray-700 max-w-fit p-2"
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {SIDE_BAR.map((item) => (
            <Link key={item.name} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
        <div className="mb-5 text-center">
          <Link onClick={() => navigate("/")} className="border p-1 rounded-md">
            Back To Home Page
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

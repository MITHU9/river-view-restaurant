import { Link, useLocation } from "react-router-dom";

export default function Hero() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-screen">
      <div>
        <div className="bg-[#3A0C01] flex items-center justify-center py-14">
          <img src="/logo.png" alt="Logo" />
        </div>

        <nav className="bg-[#2D0900]">
          <ul className="flex justify-center space-x-8 py-5 text-sm font-normal text-yellow-700 h-full">
            <li>
              <Link
                to="/"
                className={`p-5 transition-all duration-300 ${
                  isActive("/")
                    ? "bg-red-900 text-white"
                    : "hover:bg-red-900 hover:text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className={`p-5 transition-all duration-300 ${
                  isActive("/menu")
                    ? "bg-red-900 text-white"
                    : "hover:bg-red-900 hover:text-white"
                }`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/gallary"
                className={`p-5 transition-all duration-300 ${
                  isActive("/gallary")
                    ? "bg-red-900 text-white"
                    : "hover:bg-red-900 hover:text-white"
                }`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`p-5 transition-all duration-300 ${
                  isActive("/about")
                    ? "bg-red-900 text-white"
                    : "hover:bg-red-900 hover:text-white"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`p-5 transition-all duration-300 ${
                  isActive("/contact")
                    ? "bg-red-900 text-white"
                    : "hover:bg-red-900 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/overview"
                className={`p-5 transition-all duration-300 ${
                  isActive("/contact")
                    ? "bg-red-900 text-white"
                    : "hover:bg-red-900 hover:text-white"
                }`}
              >
                admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

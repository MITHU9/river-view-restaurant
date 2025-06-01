import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className=" w-screen ">
      <div>
        <div className="bg-[#3A0C01] flex items-center justify-center py-14">
          <img src="/logo.png" alt="" />
        </div>

        <div>
          <nav className="bg-[#2D0900]">
            <ul className="flex justify-center space-x-8 py-5 text-sm font-normal text-yellow-700 h-full ">
              <li>
                <Link
                  to="/"
                  className=" hover:bg-red-900 hover:text-white p-5 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:bg-red-900 hover:text-white p-5 transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className=" hover:bg-red-900 hover:text-white p-5 transition-all duration-300"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className=" hover:bg-red-900 hover:text-white p-5 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/gallary"
                  className="hover:bg-red-900 hover:text-white p-5 transition-all duration-300"
                >
                  Gallary
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

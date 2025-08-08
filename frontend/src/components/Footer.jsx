import React from "react";
import { Facebook, Instagram, Twitter, Leaf } from "lucide-react"; // Replace or add icons as needed
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2d0405f8] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center ">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            Welcome to RiverView, where classic flavors meet modern elegance.
            Join us for an unforgettable dining experience.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-sm text-gray-400">
            A. Hamid Road, Icchamoti River, Boro Bridge, Pabna, Bangladesh 6600
            Pabna, Bangladesh
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Phone: +8801749148685, +8801931095577
          </p>
          <p className="text-sm text-gray-400">
            Email: riverviewresortpabna@gmail.com
          </p>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-gray-400">
            <Link
              to="https://www.facebook.com/restuarantpabnariverview"
              target="_blank"
              className="hover:text-white"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="#" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link to="#" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link to="#" className="hover:text-white">
              <Leaf className="w-5 h-5" /> {/* Use as TripAdvisor-style icon */}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 RiverView. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

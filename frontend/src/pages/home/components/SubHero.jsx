import { Link } from "react-router-dom";

export default function RestaurantSection() {
  return (
    <div className="bg-[#3A0C01]">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center p-3 md:p-2 ">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/Asset1.png"
            alt="Delicious meal"
            className="h-[60vh] rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-300">
            Welcome to Our Restaurant
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Experience the finest cuisine crafted with fresh ingredients and a
            touch of passion. Whether you're looking for a cozy dinner or a
            celebration feast, we’ve got you covered.
          </p>
          <Link
            to="/menu"
            className=" px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 cursor-pointer transition duration-300"
          >
            Explore Menu
          </Link>
        </div>
      </section>
    </div>
  );
}

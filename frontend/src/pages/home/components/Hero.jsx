import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Cozy Dinner",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/slider1.webp",
  },
  {
    title: "Romantic Ambiance",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    image: "/slider2.jpg",
  },
  {
    title: "Elegant Dining",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/slider3.jpg",
  },
];

export default function Hero() {
  return (
    <div className="h-[65vh] lg:h-screen w-screen ">
      <div>
        <div className="bg-[#3A0C01] flex items-center justify-center py-14">
          <img src="/logo.png" alt="" />
        </div>

        <div>
          <nav className="bg-[#2D0900]">
            <ul className="flex justify-center space-x-8 py-5 text-sm font-normal text-yellow-700 h-full ">
              <li>
                <Link
                  href="#"
                  className=" hover:bg-red-900 hover:text-white p-5 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:bg-red-900 hover:text-white p-5 transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" hover:bg-red-900 hover:text-white p-5 transition-all duration-300"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" hover:bg-red-900 hover:text-white p-5 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:bg-red-900 hover:text-white p-5 transition-all duration-300"
                >
                  Gallary
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        speed={1000}
        loop={true}
        className="w-full h-[58%] lg:h-[75%]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full lg:h-full relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute top-0 left-1/4 bg-gray-950/10 backdrop-blur-sm w-[40%] h-[100%] lg:w-[20%] lg:h-[70%]  flex items-center justify-start">
                  <div className="max-w-2xl text-white p-6">
                    <h1 className="text-4xl font-light text-yellow-400 mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-sm mb-4 text-gray-200/80 font-normal">
                      {slide.text}
                    </p>
                    <button className="bg-red-700 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition font-normal text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

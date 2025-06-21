import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Cozy Dinner",
    text: "Enjoy the comfort of a quiet evening surrounded by warm lighting and a relaxed atmosphere, where comforting dishes bring a sense of home and togetherness. Whether you’re sharing the meal with loved ones or unwinding after a long day, a cozy dinner invites you to slow down, savor every bite, and engage in genuine conversation, creating moments of peace and connection one plate at a time.",
    image: "/banner.jpg",
  },
  {
    title: "Romantic Ambiance",
    text: "Step into a world of soft lighting, gentle music, and intimate elegance. Our romantic ambiance is designed to set the perfect mood for love and connection. Whether it’s a first date, anniversary, or a quiet dinner for two, every detail—from candlelit tables to the serene atmosphere—invites you to slow down, savor the moment, and make memories that linger long after the last bite.",
    image: "/banner2.jpg",
  },
  {
    title: "Elegant Dining",
    text: "Experience the art of fine dining where every detail matters. At Elegant Dining, we blend exquisite cuisine, sophisticated ambiance, and impeccable service to create unforgettable moments. Whether it’s a romantic evening, a business dinner, or a special celebration, our curated menu and elegant setting offer the perfect backdrop. Indulge in culinary excellence—because every meal should be a masterpiece.",
    image: "/banner3.jpg",
  },
];

const Carousal = () => {
  return (
    <div className="w-screen h-[40vh] lg:h-[75vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        speed={1000}
        loop={true}
        className="w-full h-full"
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
};
export default Carousal;

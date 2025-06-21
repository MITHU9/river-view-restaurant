import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-[#2D0900] ">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="/banner3.jpg" // Replace with a scenic river/resort image
          alt="Riverview Resort"
          className="absolute inset-0 w-full h-full object-cover brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Riverview Resort
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Serenity on the Banks of the Icchamoti River
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-gray-200">
        <h2 className="text-4xl font-bold text-center mb-6">Our Story</h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed">
          Nestled beside the tranquil waters of the Icchamoti River, Riverview
          Resort offers a peaceful escape with breathtaking views,
          nature-inspired design, and warm Bangladeshi hospitality. Located at
          the heart of Pabna, our resort blends modern luxury with the charm of
          riverside living.
        </p>
      </section>

      {/* Chef Spotlight */}
      <section className=" backdrop-blur-sm py-20 text-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/chef.webp"
            alt="Chef Maria Delgado"
            className="w-full h-96 object-cover shadow-lg"
          />
          <div className="">
            <h3 className="text-3xl font-semibold mb-4">Chef Arif Hossain</h3>
            <p className="text-lg leading-relaxed">
              Trained in the culinary hubs of Europe and deeply rooted in the
              flavors of Bangladesh, Chef Arif brings a world of experience to
              every plate. His dishes marry classic technique with the warmth
              and richness of Bengali cuisine — creating food that’s both
              elevated and soulful. With every bite, he redefines what it means
              to enjoy authentic Bangladeshi flavors with a modern touch
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Experience */}
      <section className="py-20 text-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10">Why Choose Riverview?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-medium mb-2">Natural Beauty</h4>
              <p>
                Wake up to river views, lush gardens, and open skies — peace in
                every direction.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-medium mb-2">Relaxation & Comfort</h4>
              <p>
                Modern rooms, riverside dining, and thoughtful amenities
                designed for calm.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-medium mb-2">Local Warmth</h4>
              <p>
                Experience authentic hospitality and community-driven service in
                Pabna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border border-white/50" />

      {/* Call to Action */}
      <section className="bg-[#2D0900] text-white text-center py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">Plan Your Stay</h3>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Ready to unwind by the river? Book your escape today and let nature
          embrace you.
        </p>
        <a
          href="/reservation"
          className="bg-white text-blue-700 px-8 py-3 font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          Reserve Now
        </a>
      </section>
    </div>
  );
}

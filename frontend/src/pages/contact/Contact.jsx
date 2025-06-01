import React from "react";

export default function Contact() {
  return (
    <div className="bg-[#2D0900]">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="/banner2.jpg"
          alt="Riverview Resort Contact"
          className="absolute inset-0 w-full h-full object-cover brightness-60"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div>
            <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
            <p className="text-xl">
              We’d love to hear from you. Reach out or drop by anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 text-gray-200">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p>
            Whether you're planning a visit, need help with reservations, or
            have special requests — we're here to help.
          </p>
          <div>
            <h4 className="font-medium">📍 Address</h4>
            <p>
              Riverview Resort
              <br />
              A. Hamid Road, Icchamoti River, Boro Bridge
              <br />
              Pabna 6600, Bangladesh
            </p>
          </div>
          <div>
            <h4 className="font-medium">📞 Phone</h4>
            <p>+880 1234 567890</p>
          </div>
          <div>
            <h4 className="font-medium">📧 Email</h4>
            <p>info@riverviewresort.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-transparent p-8 rounded-2xl space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-transparent text-white px-6 py-3 rounded-full hover:bg-blue-700 border transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Location Highlight */}
      <section className="bg-white/80 backdrop-blur-sm py-16">
        <div className=" text-center">
          <h3 className="text-2xl font-semibold mb-4">Where to Find Us</h3>
          <p className="text-lg mb-4">
            📍 <strong>Riverview Resort</strong>
            <br />
            A. Hamid Road, Icchamoti River, Boro Bridge,
            <br />
            Pabna 6600, Bangladesh
          </p>
          <iframe
            src="https://www.google.com/maps?q=A.+Hamid+Road,+Icchamoti+River,+Boro+Bridge,+Pabna,+Bangladesh&output=embed"
            width="100%"
            height="500"
            allowFullScreen
            loading="lazy"
            className=" shadow-md mt-6"
            title="Riverview Resort Map"
          />
        </div>
      </section>
    </div>
  );
}

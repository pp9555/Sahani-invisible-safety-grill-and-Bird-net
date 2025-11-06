import React from "react";
import { motion } from "framer-motion";
import grill1 from "./assets/grill1.jpg";
import grill2 from "./assets/grill2.jpg";
import grill3 from "./assets/grill3.jpg";
import grill4 from "./assets/grill4.jpg";
import grill5 from "./assets/grill5.jpg";
import grill6 from "./assets/grill6.jpg";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

const galleryImages = [grill1, grill2, grill3, grill4, grill5, grill6];

function App() {


  return (
  
      <div className="font-sans text-gray-800">
        <Navbar />
      {/* Hero Section */}
      {/* <section
        className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691723518-36a1a1c5e6a1?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Invisible & Stylish Safety Grills
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Beautiful protection that keeps your view open and your family safe.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section> */}

 <section
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
    backgroundImage: `url(${grill1})`,
  }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Invisible & Stylish Safety Grills
        </h1>

        <p className="text-lg text-gray-200 mb-6">
          Beautiful protection that keeps your view open and your family safe.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919555471417" // replace with client’s WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>

      {/* About Section */}
      {/* <section className="py-16 px-6 md:px-20 bg-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          About SkySafe Grills
        </motion.h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          SkySafe Grills designs and installs fashionable safety grills for
          windows, balconies, and gates. Our invisible grill systems add
          elegance while keeping birds out and your loved ones safe.
        </p>
      </section> */}

<AboutSection />

      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold mb-8">Our Installations</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {galleryImages.map((src, i) => (
      <motion.div
  key={i}
  className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 aspect-[1/1]"
>
  <img
    src={src}
    alt={`SkySafe Grill Installation ${i + 1}`}
    className="w-full h-full object-cover"
  />
</motion.div>
    ))}
  </div>
</section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose SkySafe?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Child & Pet Safety", emoji: "🧒" },
            { title: "Stylish & Invisible", emoji: "✨" },
            { title: "Rust-Proof & Durable", emoji: "🔩" },
            { title: "Keeps Birds Away", emoji: "🕊️" },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{f.emoji}</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Get in touch with us for a free consultation or installation estimate.
        </p>
        <form
          className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919555471417?text=Hi%20SkySafe%20Grills%2C%20I%27m%20interested%20in%20your%20invisible%20grills."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white">
        © 2025 SkySafe Grills — All Rights Reserved
      </footer>
    </div>
    
  )
}

export default App

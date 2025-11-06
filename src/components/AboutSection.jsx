import { motion } from "framer-motion";
import aboutImg from "../assets/grill1.jpg"; // replace with your own image

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-20"
    >
      {/* Left Side Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mb-10 md:mb-0"
      >
        <img
          src={aboutImg}
          alt="Invisible balcony safety grills"
          className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 aspect-[1/1]"
        />
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 md:pl-10 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          About SkySafe Grills
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At <span className="font-semibold">SkySafe Grills</span>, we combine
          safety with modern aesthetics. Our invisible safety grills and bird
          nets are designed to protect your home without blocking your view.
          Installed by experts using high-grade stainless steel, they blend
          seamlessly with your balcony or window design.
        </p>

        <ul className="text-gray-700 mb-8 space-y-2">
          <li>✅ 100% Rust-proof Stainless Steel Wires</li>
          <li>✅ Perfect for High-rise Apartments & Balconies</li>
          <li>✅ Child & Pet Safety Friendly Design</li>
          <li>✅ Transparent Aesthetic – Keep the View, Not the Risk</li>
        </ul>

        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Get a Free Estimate
        </a>
      </motion.div>
    </section>
  );
}

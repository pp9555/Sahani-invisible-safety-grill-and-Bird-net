import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1
          className={`text-2xl font-bold ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          SkySafe Grills
        </h1>

        {/* Menu Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a
            href="#about"
            className={`hover:text-blue-500 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            About
          </a>
          <a
            href="#services"
            className={`hover:text-blue-500 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Services
          </a>
          <a
            href="#contact"
            className={`hover:text-blue-500 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Contact
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919555471417" // replace with client’s WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo/LOGO1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp Redirect Function
  const handleWhatsApp = () => {
    const phoneNumber = "3270099635"; // apna whatsapp number yahan dalna (without +)
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <nav className="w-screen flex justify-between items-center px-6 md:px-16 py-5 bg-black/80 backdrop-blur-md text-white fixed top-0 left-0 z-50 shadow-md">
      {/* Logo with Glass Effect */}
      <div className="flex items-center px-4 py-2 ">
        <img src={logo} alt="Logo" className="h-16 md:h-20 object-contain " />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-12 text-lg font-semibold">
        <li>
          <Link to="/" className="hover:text-purple-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className="hover:text-purple-400 transition">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/resources" className="hover:text-purple-400 transition">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-purple-400 transition">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-purple-400 transition">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <button
        onClick={handleWhatsApp}
        className="hidden md:block border-2 border-purple-500 px-8 py-2 text-lg rounded-full hover:bg-purple-600 transition"
      >
        Let’s Talk
      </button>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden shadow-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-purple-400 transition"
          >
            Home
          </Link>
          <Link
            to="/courses"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-purple-400 transition"
          >
            Courses
          </Link>
          <Link
            to="/resources"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-purple-400 transition"
          >
            Resources
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-purple-400 transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-purple-400 transition"
          >
            Contact Us
          </Link>
          <button
            onClick={handleWhatsApp}
            className="hidden md:block relative px-6 py-2 text-base font-semibold rounded-full 
  bg-gradient-to-r from-purple-600 to-blue-600 
  text-white transition hover:opacity-90 
  before:absolute before:inset-0 before:rounded-full before:p-[2px] 
  before:bg-gradient-to-r before:from-blue-600 before:to-purple-600 
  before:-z-10"
          >
            Let’s Talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

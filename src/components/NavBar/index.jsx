import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // icons for mobile menu
import logo from "../../assets/logo/LOGO1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen flex justify-between items-center px-6 md:px-12 py-4 bg-black text-white fixed top-0 left-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 md:h-16 object-contain" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 text-base font-medium">
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
      <button className="hidden md:block border border-purple-500 px-6 py-2 rounded-full hover:bg-purple-600 transition">
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
            className="hover:text-purple-400 transition"
          >
            Home
          </Link>
          <Link
            to="/courses"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Courses
          </Link>
          <Link
            to="/resources"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Resources
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400 transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Contact Us
          </Link>
          <button className="border border-purple-500 px-6 py-2 rounded-full hover:bg-purple-600 transition">
            Let’s Talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

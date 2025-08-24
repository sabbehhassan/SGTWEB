import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/LOGO1.png"; // ✅ apne assets ka sahi path de

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-between items-center px-12 py-6 bg-black text-white fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-18 md:h-18 object-contain" />
      </div>

      {/* Links */}
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

      {/* Button */}
      <button className="border border-purple-500 px-6 py-2 rounded-full hover:bg-purple-600 transition">
        Let’s Talk
      </button>
    </nav>
  );
};

export default Navbar;

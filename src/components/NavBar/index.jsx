import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo/LOGO2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp Redirect Function
  const handleWhatsApp = () => {
    const phoneNumber = "923270099635";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <nav className="w-screen flex justify-between items-center px-6 md:px-16 py-5 bg-black/80 backdrop-blur-md text-white fixed top-0 left-0 z-50 shadow-md">
      {/* Logo */}
      <NavLink to="/">
        <img
          src={logo}
          alt="Logo"
          className="h-16 md:h-20 object-contain cursor-pointer"
        />
      </NavLink>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-12 text-lg font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-purple-400 border-b-2 border-purple-400 pb-1"
                : "hover:text-purple-400 transition"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "text-purple-400 border-b-2 border-purple-400 pb-1"
                : "hover:text-purple-400 transition"
            }
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive
                ? "text-purple-400 border-b-2 border-purple-400 pb-1"
                : "hover:text-purple-400 transition"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-purple-400 border-b-2 border-purple-400 pb-1"
                : "hover:text-purple-400 transition"
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-purple-400 border-b-2 border-purple-400 pb-1"
                : "hover:text-purple-400 transition"
            }
          >
            Contact Us
          </NavLink>
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
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-bold" : "hover:text-purple-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-bold" : "hover:text-purple-400"
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/resources"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-bold" : "hover:text-purple-400"
            }
          >
            Resources
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-bold" : "hover:text-purple-400"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-bold" : "hover:text-purple-400"
            }
          >
            Contact Us
          </NavLink>
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

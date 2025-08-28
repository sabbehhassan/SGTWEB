import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Social Icons

export default function Footer() {
  return (
    <footer className="bg-white text-black px-8 py-6 w-full shadow-inner">
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="mb-3 text-xl font-bold text-purple-600">Contact Us</h4>
          <p className="text-gray-700 text-sm mb-1">📞 +92 327 0099 635</p>
          <p className="text-gray-700 text-sm mb-1">
            📧 info@siliconglobaltech.com
          </p>
          <p className="text-gray-700 text-sm">
            📍 Near Mama Communication Nadra E Sahulat Noor Plaza Khomer Gilgit
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h4 className="mb-3 text-xl font-bold text-purple-700">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-center">
            <li>
              <Link
                to="/"
                className="hover:text-purple-600 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-purple-600 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="hover:text-purple-600 transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-purple-600 transition-colors duration-300"
              >
                Courses
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center">
          <h4 className="mb-3 text-xl font-bold text-purple-700">Follow Us</h4>
          <div className="flex justify-center gap-2 flex-wrap">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/siliconglobaltech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#1877F2] hover:bg-purple-700 hover:text-white transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            {/* Twitter */}
            <a
              href="https://www.twitter.com/siliconglobaltech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#1DA1F2] hover:bg-purple-700 hover:text-white transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/siliconglobaltech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#0077B5] hover:bg-purple-700 hover:text-white transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 pt-4 border-t border-gray-300">
        <p className="text-gray-600 text-sm">
          &copy; 2025{" "}
          <span className="font-semibold text-purple-700">
            Silicon Global Tech
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

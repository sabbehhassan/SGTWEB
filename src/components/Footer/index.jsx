import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Social Icons

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-14 w-full">
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h4 className="mb-4 text-2xl font-bold text-cyan-400">Contact Us</h4>
          <p className="text-gray-300 mb-2">📞 +92 327 0099 635</p>
          <p className="text-gray-300 mb-2">📧 info@siliconglobaltech.com</p>
          <p className="text-gray-300">
            📍 Near Mama Communication Nadra E Sahulat Noor Plaza Khomer Gilgit
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-2xl font-bold text-cyan-400">Quick Links</h4>
          <ul className="space-y-3 text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="mb-4 text-2xl font-bold text-cyan-400">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-5 flex-wrap">
            <a
              href="https://www.facebook.com/siliconglobaltech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com/siliconglobaltech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/siliconglobaltech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 pt-6 border-t border-gray-500/40">
        <p className="text-gray-400">
          &copy; 2025{" "}
          <span className="font-semibold text-cyan-400">
            Silicon Global Tech
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

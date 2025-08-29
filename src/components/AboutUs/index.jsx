import React from "react";
import { Link } from "react-router-dom";

const AboutUs = ({ showButton = true }) => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">
        {/* Left Side - Text Content */}
        <div className="flex-1 h-[300px] md:h-[400px] flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <h3 className="italic text-lg md:text-xl mb-6">
              About <span className="text-purple-500">Silicon Global Tech</span>{" "}
              &amp; Its Innovative IT Solutions
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <span className="text-purple-500">Silicon Global Tech</span> was
              founded on November 10, 2023, with a mission to deliver
              cutting-edge technology solutions that empower businesses in the
              digital age. We specialize in providing reliable, scalable, and
              innovative IT services tailored to meet the evolving needs of our
              clients.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our expertise spans across software development, AI &amp; Data
              Science, UX/UI design, E-Commerce, and accounting tools
              integration. At{" "}
              <span className="text-purple-500">Silicon Global Tech</span>, we
              are committed to driving growth, efficiency, and digital
              transformation for organizations worldwide. With a
              customer-centric approach, we embrace every challenge as an
              opportunity to create lasting impact and build a legacy of
              excellence.
            </p>
          </div>

          {/* Conditionally show "More Details" button */}
          {showButton && (
            <Link to="/about">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow-lg transition self-start mt-auto">
                More Details
              </button>
            </Link>
          )}
        </div>

        {/* Right Side - Embedded Google Map */}
        <div
          className="
            w-full md:w-[70%] lg:w-[35%]
            h-[300px] md:h-[400px]
            rounded-2xl overflow-hidden shadow-lg
            md:ml-auto
          "
        >
          <iframe
            title="Google Map — Silicon Global Tech"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d582.9350392071983!2d74.33834384158569!3d35.91148623212792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e6492c08d535bf%3A0x73946d0bb362fabf!2sMama%20Communication%20Nadra%20E%20Sahulat!5e0!3m2!1sen!2s!4v1693157890000!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

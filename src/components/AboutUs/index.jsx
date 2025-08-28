import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">
        {/* Left Side - Text Content */}
        <div className="flex-1 h-[300px] md:h-[400px] flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <h3 className="italic text-lg md:text-xl mb-6">
              About Himalya Geo Lab&apos;s And It&apos;s Innovative IT Solutions
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are a dynamic and innovative company founded on January 10,
              <br />
              2023, with a vision to provide exceptional products and services{" "}
              <br />
              to our clients. Our goal is to offer reliable solutions that meet{" "}
              <br />
              the ever-changing demands of the market and exceed our client's
              expectations.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Committed to innovation and customer-centricity, we embrace <br />
              opportunities and challenges. Grateful for our stakeholders'{" "}
              <br />
              trust, we're on an exciting journey to create a legacy of <br />
              excellence and enduring impact.
            </p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow-lg transition self-start mt-auto">
            More Details
          </button>
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
            title="Google Map — Mama Communication Nadra E‑Sahulat"
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

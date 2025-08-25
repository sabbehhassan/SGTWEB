import React, { useRef } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lzaaz1d", // 🔑 apna EmailJS service ID
        "template_shxopya", // 🔑 apna template ID
        form.current,
        "v7iYMfI0wo13cDRmW" // 🔑 apna public key
      )
      .then(
        () => {
          toast.success("✅ Message Sent Successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
          form.current.reset(); // ✅ form clear after success
        },
        (error) => {
          toast.error("❌ Failed to send: " + error.text, {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
        }
      );
  };

  return (
    <section className="bg-gradient-to-r from-[#0d001a] via-[#030014] to-[#1a0033] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Office */}
          <div className="bg-black/80 border border-red-500 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-red-500/30 transition">
            <MapPin size={32} className="mx-auto mb-4 text-red-400" />
            <h3 className="text-lg font-bold">Our Office</h3>
            <p className="text-gray-300 text-sm mt-2">
              Near Mama Communication, Noor Plaza, Khomer Gilgit
            </p>
          </div>

          {/* Call */}
          <div className="bg-black/80 border border-green-500 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-green-500/30 transition">
            <Phone size={32} className="mx-auto mb-4 text-green-400" />
            <h3 className="text-lg font-bold">Call Us</h3>
            <p className="text-gray-300 text-sm mt-2">+92 327-0099-635</p>
          </div>

          {/* Email */}
          <div className="bg-black/80 border border-yellow-500 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-yellow-500/30 transition">
            <Mail size={32} className="mx-auto mb-4 text-yellow-400" />
            <h3 className="text-lg font-bold">Email</h3>
            <p className="text-gray-300 text-sm mt-2">
              info@siliconglobaltech.com
            </p>
          </div>

          {/* Website */}
          <div className="bg-black/80 border border-blue-500 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/30 transition">
            <Globe size={32} className="mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg font-bold">Website</h3>
            <p className="text-gray-300 text-sm mt-2">
              www.siliconglobaltech.com
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-black/90 border border-purple-600 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6">Reach out</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
};

export default ContactUs;

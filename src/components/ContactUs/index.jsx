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
          {/* Reusable card style */}
          {[
            {
              icon: <MapPin size={32} className="mx-auto mb-4 text-pink-400" />,
              title: "Our Office",
              desc: "Near Mama Communication, Noor Plaza, Khomer Gilgit",
            },
            {
              icon: <Phone size={32} className="mx-auto mb-4 text-green-400" />,
              title: "Call Us",
              desc: "+92 327-0099-635",
            },
            {
              icon: <Mail size={32} className="mx-auto mb-4 text-yellow-400" />,
              title: "Email",
              desc: "info@siliconglobaltech.com",
            },
            {
              icon: <Globe size={32} className="mx-auto mb-4 text-blue-400" />,
              title: "Website",
              desc: "www.siliconglobaltech.com",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black/80 rounded-xl p-6 text-center 
              border border-transparent 
              bg-clip-padding relative 
              before:absolute before:inset-0 before:rounded-xl 
              before:p-[2px] before:bg-gradient-to-r before:from-purple-600 before:to-blue-600 
              before:-z-10 
              hover:shadow-lg hover:shadow-purple-600/30 transition"
            >
              {item.icon}
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Right Section (Form) */}
        <div
          className="bg-black/90 border border-transparent relative rounded-xl p-6
          before:absolute before:inset-0 before:rounded-xl before:p-[2px] 
          before:bg-gradient-to-r before:from-purple-600 before:to-blue-600 before:-z-10"
        >
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

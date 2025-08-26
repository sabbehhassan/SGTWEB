// src/pages/CoursesPage.jsx
import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaPalette,
  FaBrain,
  FaBook,
  FaAmazon,
  FaMobileAlt,
  FaShoppingCart,
  FaShopify,
  FaLaptopCode,
} from "react-icons/fa";
import EnrollForm from "../../components/EnrollmentForm"; // ✅ Import your form

import webpic from "../../assets/services_pic/webpic.jpg";
import aipic from "../../assets/services_pic/aipic.jpg";
import apppic from "../../assets/services_pic/apppic.jpg";
import amazonpic from "../../assets/services_pic/amazonpic.jpg";
import walmartpic from "../../assets/services_pic/walmartpic.jpg";
import shopifypic from "../../assets/services_pic/shopifypic.jpg";
import uipic from "../../assets/services_pic/uipic.jpg";
import tradingpic from "../../assets/services_pic/tradingpic.jpg";
import bookkeepingpic from "../../assets/services_pic/bookkeepingpic.jpg";

const CoursesPage = () => {
  const courses = [
    {
      id: "web-development",
      name: "Web Development",
      desc: "Building responsive and dynamic websites with modern technologies.",
      longDesc:
        "Learn to design and develop responsive websites using HTML, CSS, JavaScript, React, and Node.js. Gain expertise in front-end and back-end development, APIs, and deployment strategies to build full-stack applications.",
      icon: <FaCode className="text-5xl text-blue-600" />,
      image: webpic,
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      desc: "Design principles, prototyping, and Figma for user-friendly experiences.",
      longDesc:
        "Master the art of creating intuitive and visually stunning user interfaces. This course covers user psychology, wireframing, prototyping, and tools like Figma to deliver experiences users love.",
      icon: <FaPalette className="text-5xl text-pink-600" />,
      image: uipic,
    },
    {
      id: "ai-dl",
      name: "AI & Deep Learning",
      desc: "Artificial intelligence, machine learning, and neural networks.",
      longDesc:
        "Dive deep into machine learning, natural language processing, and computer vision. Build neural networks, train AI models, and explore real-world use cases in automation and data science.",
      icon: <FaBrain className="text-5xl text-yellow-500" />,
      image: aipic,
    },
    {
      id: "bookkeeping",
      name: "Bookkeeping",
      desc: "Essential accounting and finance skills for businesses.",
      longDesc:
        "Learn the fundamentals of accounting, balance sheets, income statements, and financial analysis. Perfect for entrepreneurs and small businesses to keep accurate financial records.",
      icon: <FaBook className="text-5xl text-green-600" />,
      image: bookkeepingpic,
    },
    {
      id: "amazon",
      name: "Amazon Trading",
      desc: "Start and scale your Amazon marketplace business.",
      longDesc:
        "Master Amazon FBA and FBM business models, product research, inventory management, and advertising. Learn how to launch and scale a profitable Amazon store globally.",
      icon: <FaAmazon className="text-5xl text-orange-500" />,
      image: amazonpic,
    },
    {
      id: "app-development",
      name: "App Development",
      desc: "Powerful mobile applications for iOS & Android.",
      longDesc:
        "Build high-performance mobile applications using React Native and Flutter. Learn app architecture, APIs, push notifications, and publish apps to Google Play and App Store.",
      icon: <FaMobileAlt className="text-5xl text-indigo-600" />,
      image: apppic,
    },
    {
      id: "walmart",
      name: "Walmart Marketplace",
      desc: "Launch and manage your Walmart online store.",
      longDesc:
        "Learn to create and optimize your Walmart marketplace store. Cover product listing, fulfillment, advertising strategies, and how to reach millions of Walmart customers online.",
      icon: <FaShoppingCart className="text-5xl text-red-600" />,
      image: walmartpic,
    },
    {
      id: "shopify",
      name: "Shopify Store",
      desc: "Customize and scale e-commerce stores on Shopify.",
      longDesc:
        "This course takes you through building and scaling Shopify stores. Learn custom themes, apps, SEO, payment gateways, and conversion strategies to grow your online business.",
      icon: <FaShopify className="text-5xl text-emerald-600" />,
      image: shopifypic,
    },
    {
      id: "trading",
      name: "Trading & Investment",
      desc: "Learn smart trading & investing with modern tools.",
      longDesc:
        "Understand stock markets, crypto, and forex trading. Learn risk management, technical analysis, and investment strategies to make smart financial decisions.",
      icon: <FaLaptopCode className="text-5xl text-cyan-600" />,
      image: tradingpic,
    },
  ];

  const itemsPerPageDesktop = 3;
  const totalPagesDesktop = Math.ceil(courses.length / itemsPerPageDesktop);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // ⭐ Stars Effect
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const initialStars = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * 250,
      size: Math.random() * 3 + 1,
    }));
    setStars(initialStars);

    const interval = setInterval(() => {
      setStars((prev) =>
        prev.map((s) => ({
          ...s,
          blink: Math.random() > 0.5,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentCourses = courses.slice(
    (currentPage - 1) * itemsPerPageDesktop,
    currentPage * itemsPerPageDesktop
  );

  const nextPage = () => {
    if (currentPage < totalPagesDesktop) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const closePopup = () => {
    setSelectedCourse(null);
    setShowForm(false);
  };

  return (
    <div className="relative py-20 px-5 text-center min-h-screen bg-black overflow-hidden">
      {/* ⭐ Stars Background */}
      <div className="absolute top-0 left-0 w-full h-80 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute bg-white rounded-full transition-opacity duration-500 ${
              star.blink ? "opacity-0" : "opacity-100"
            }`}
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>

      {/* Main Content (blur only when popup is open) */}
      <div className={`${selectedCourse ? "blur-sm" : ""}`}>
        <h2 className="relative text-4xl font-extrabold tracking-wide text-white z-10">
          From <span className="text-purple-400">Beginner</span> to{" "}
          <span className="text-blue-400">Pro</span>
          <br />
          <span>Unlock Your Tech Potential</span>
        </h2>

        <p className="relative text-gray-400 mt-6 max-w-3xl mx-auto z-10">
          Whether you’re starting out or leveling up, our tech courses are
          designed to give you practical skills that employers and innovators
          value. Learn the latest in web development, AI, data science, UX/UI,
          and more through hands-on projects, expert guidance, and real-world
          applications.
        </p>

        {/* Desktop View */}
        <div className="hidden lg:block relative mt-14">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="absolute left-5 top-1/2 -translate-y-1/2 
            text-white text-4xl px-2 
            disabled:text-gray-700 hover:scale-125 transition z-10"
          >
            ❮
          </button>

          <div className="grid gap-10 grid-cols-3 mx-16">
            {currentCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="relative p-6 rounded-2xl h-[500px] cursor-pointer
                  bg-white shadow-lg border border-gray-200
                  hover:-translate-y-2 hover:scale-105 hover:shadow-2xl 
                  flex flex-col transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">
                  {course.desc}
                </p>
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-56 object-cover mt-4 rounded-xl border border-gray-200 shadow-md"
                />
              </div>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPagesDesktop}
            className="absolute right-5 top-1/2 -translate-y-1/2 
            text-white text-4xl px-2 
            disabled:text-gray-700 hover:scale-125 transition z-10"
          >
            ❯
          </button>
        </div>
      </div>

      {/* ✅ Popup */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closePopup}
          ></div>

          <div className="relative z-50 bg-white border border-gray-300 shadow-2xl rounded-xl p-8 w-11/12 max-w-3xl animate-slideDown">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
            >
              ✕
            </button>

            {!showForm ? (
              <>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-6xl">{selectedCourse.icon}</div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {selectedCourse.name}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {selectedCourse.longDesc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-8 py-3 rounded-lg bg-purple-600 text-white text-lg font-semibold hover:bg-purple-700 transition"
                  >
                    Enroll Now
                  </button>
                </div>
              </>
            ) : (
              <EnrollForm course={selectedCourse.name} onClose={closePopup} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;

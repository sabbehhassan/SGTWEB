import React, { useState } from "react";
import StarsBackground from "../../components/Starsbg";
import CoursesHeading from "../../components/CoursesHeading";
import DesktopCourses from "../../components/DesktopCourses";
import MobileCourses from "../../components/MobileCourses";
import CoursePopup from "../../components/CoursePopup";

// ⚡ Import images + icons same as before
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
      desc: "Building responsive and dynamic websites.",
      longDesc:
        "Learn to design and develop responsive websites using HTML, CSS, JavaScript, React, and Node.js.",
      icon: <FaCode className="text-5xl text-blue-600" />,
      image: webpic,
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      desc: "Design principles, prototyping & Figma.",
      longDesc:
        "Master creating intuitive and visually stunning user interfaces with psychology, wireframing & prototyping.",
      icon: <FaPalette className="text-5xl text-pink-600" />,
      image: uipic,
    },
    {
      id: "ai-dl",
      name: "AI & Deep Learning",
      desc: "Artificial intelligence & neural networks.",
      longDesc:
        "Dive into ML, NLP & Computer Vision. Train AI models & explore automation and data science.",
      icon: <FaBrain className="text-5xl text-yellow-500" />,
      image: aipic,
    },
    {
      id: "bookkeeping",
      name: "Bookkeeping",
      desc: "Essential finance & accounting skills.",
      longDesc:
        "Learn accounting fundamentals, balance sheets, and financial analysis for entrepreneurs.",
      icon: <FaBook className="text-5xl text-green-600" />,
      image: bookkeepingpic,
    },
    {
      id: "amazon",
      name: "Amazon Trading",
      desc: "Start & scale your Amazon store.",
      longDesc:
        "Master FBA, product research, inventory & advertising to grow a profitable Amazon store.",
      icon: <FaAmazon className="text-5xl text-orange-500" />,
      image: amazonpic,
    },
    {
      id: "app-development",
      name: "App Development",
      desc: "Powerful apps for iOS & Android.",
      longDesc:
        "Build high-performance mobile apps using React Native & Flutter. Learn APIs, push notifications & publishing.",
      icon: <FaMobileAlt className="text-5xl text-indigo-600" />,
      image: apppic,
    },
    {
      id: "walmart",
      name: "Walmart Marketplace",
      desc: "Launch & manage Walmart store.",
      longDesc:
        "Learn listing, fulfillment & advertising strategies to sell on Walmart online marketplace.",
      icon: <FaShoppingCart className="text-5xl text-red-600" />,
      image: walmartpic,
    },
    {
      id: "shopify",
      name: "Shopify Store",
      desc: "Customize & scale Shopify stores.",
      longDesc:
        "Learn Shopify store setup, themes, SEO, apps, and conversion optimization strategies.",
      icon: <FaShopify className="text-5xl text-emerald-600" />,
      image: shopifypic,
    },
    {
      id: "trading",
      name: "Trading & Investment",
      desc: "Smart investing & trading tools.",
      longDesc:
        "Understand stock, crypto & forex markets. Learn risk management & investment strategies.",
      icon: <FaLaptopCode className="text-5xl text-cyan-600" />,
      image: tradingpic,
    },
  ];

  const itemsPerPageDesktop = 3;
  const totalPagesDesktop = Math.ceil(courses.length / itemsPerPageDesktop);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const currentCourses = courses.slice(
    (currentPage - 1) * itemsPerPageDesktop,
    currentPage * itemsPerPageDesktop
  );

  return (
    <div className="relative py-20 px-5 text-center min-h-screen bg-black overflow-hidden">
      <StarsBackground />
      <CoursesHeading blur={selectedCourse} />

      <DesktopCourses
        currentCourses={currentCourses}
        currentPage={currentPage}
        totalPages={totalPagesDesktop}
        nextPage={() => setCurrentPage((p) => p + 1)}
        prevPage={() => setCurrentPage((p) => p - 1)}
        setSelectedCourse={setSelectedCourse}
      />

      <MobileCourses courses={courses} setSelectedCourse={setSelectedCourse} />

      <CoursePopup
        selectedCourse={selectedCourse}
        showForm={showForm}
        setShowForm={setShowForm}
        closePopup={() => {
          setSelectedCourse(null);
          setShowForm(false);
        }}
      />
    </div>
  );
};

export default CoursesPage;

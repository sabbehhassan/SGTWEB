import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import ResourcesPage from "../pages/Resources"; // ✅ import ResourcesPage
import ContactUs from "../components/ContactUs";
import AboutPage from "../pages/AboutUs";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home */}
        <Route index element={<Home />} />
        {/* Pages */}
        <Route path="courses" element={<Courses />} />
        <Route path="resources" element={<ResourcesPage />} /> {/* ✅ Fixed */}
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;

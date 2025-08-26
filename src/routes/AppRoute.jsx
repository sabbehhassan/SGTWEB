import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Courses from "../pages/Courses"; // ✅ import courses page

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home */}
        <Route index element={<Home />} />
        {/* Pages */}
        <Route path="courses" element={<Courses />} />{" "}
        {/* ✅ Now real Courses Page */}
        <Route path="resources" element={<div>Resources Page</div>} />
        <Route path="about" element={<div>About Us Page</div>} />
        <Route path="contact" element={<div>Contact Us Page</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoute;

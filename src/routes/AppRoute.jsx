import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Future Routes */}
        <Route path="courses" element={<div>Courses Page</div>} />
        <Route path="resources" element={<div>Resources Page</div>} />
        <Route path="about" element={<div>About Us Page</div>} />
        <Route path="contact" element={<div>Contact Us Page</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoute;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-20">
        {" "}
        {/* yahan padding-top add ki */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

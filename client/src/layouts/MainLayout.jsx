import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // desktop sidebar

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-transparent">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Navbar / Sidebar */}
      <Navbar setSidebarOpen={setSidebarOpen} />

      {/* Main content wrapper */}
      <div
        className={`
          flex-1 flex justify-center transition-all duration-300
          ml-0   /* mobile */
          ${sidebarOpen ? "lg:ml-64" : "lg:ml-10"} /* desktop */
        `}
      >
        {/* Inner content (centered & max width) */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

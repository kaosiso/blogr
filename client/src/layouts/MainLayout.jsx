import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // desktop sidebar

  return (
    <div className="flex flex-col mx-auto lg:flex-row min-h-screen bg-transparent">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Navbar */}
      <Navbar setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div
        className={`flex flex-col transition-all duration-300
      lg:${sidebarOpen ? "ml-64" : "ml-16"} ml-0`}
      >
        <main className="px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

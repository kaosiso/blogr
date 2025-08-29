import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Image from "./Image";
import { TbPencilMinus } from "react-icons/tb";
import { Search } from "lucide-react";

const Navbar = ({ setSidebarOpen }) => {
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  // Toggle function
  const toggleSearch = () => setShowSearch(!showSearch);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
      setUser(JSON.parse(storedUser));
    }

    window.addEventListener("storage", () => {
      const updatedUser = localStorage.getItem("user");
      if (
        updatedUser &&
        updatedUser !== "undefined" &&
        updatedUser !== "null"
      ) {
        setUser(JSON.parse(updatedUser));
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setMobileOpen(false);
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  const toggleDesktopSidebar = () => {
    setDesktopOpen(!desktopOpen);
    if (setSidebarOpen) setSidebarOpen(!desktopOpen);
  };

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const menuItems = user
    ? [
        { label: "Home", path: "/" },
        { label: "Write a Post", path: "/write", icon: <TbPencilMinus /> },
        { label: "Profile", path: "/profile" },
        { label: "Logout", action: handleLogout },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "Trending", path: "/" },
        { label: "Most Popular", path: "/" },
        { label: "Login", path: "/login" },
      ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex lg:flex-col lg:h-screen lg:fixed lg:top-0 lg:left-0 border-r-2 z-50
        ${desktopOpen ? "w-64" : "w-16"} transition-all duration-300`}
      >
        {/* Top bar with toggle button and logo */}
        <div className="flex items-center justify-between p-4">
          {desktopOpen && (
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <Image
                src="logo.png"
                alt="Blogr Logo"
                w={32}
                h={32}
                className="w-8 h-8"
              />
              <span>blogr</span>
            </Link>
          )}

          <div className="cursor-pointer" onClick={toggleDesktopSidebar}>
            {desktopOpen ? (
              <IoMdClose className="text-gray-700 text-2xl" />
            ) : (
              <BiMenuAltRight className="text-gray-700 text-2xl" />
            )}
          </div>
        </div>

        {/* Menu items */}
        {desktopOpen && (
          <div className="flex flex-col p-6 gap-4 text-base">
            {menuItems.map((item, idx) =>
              item.path ? (
                <Link key={idx} to={item.path}>
                  <div className="flex items-center gap-2">
                    {item.icon} {item.label}
                  </div>
                </Link>
              ) : (
                <button
                  key={idx}
                  onClick={item.action}
                  className="py-2 px-4 text-sm rounded-3xl bg-red-500 text-white hover:bg-red-600"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        )}
      </div>

      {/* Mobile Navbar */}
      <div className="w-full h-16 flex items-center justify-between px-4 border-2 lg:hidden z-50">
        <Link to="/" className="flex items-center gap-3 text-xl font-bold">
          <Image
            src="logo.png"
            alt="Blogr Logo"
            w={32}
            h={32}
            className="w-8 h-8"
          />
          <span>blogr</span>
        </Link>

        {/* Right-side controls: menu + search */}
        <div className="flex items-center gap-4">
           {/* Search button */}
          <div className="cursor-pointer text-2xl" onClick={toggleSearch}>
            <Search className="text-gray-700" />
          </div>
          {/* Menu button */}
          <div className="cursor-pointer text-3xl" onClick={toggleMobileMenu}>
            {mobileOpen ? (
              <IoMdClose className="text-gray-700" />
            ) : (
              <BiMenuAltRight className="text-gray-700" />
            )}
          </div>

         
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-[#fdf6e3] flex flex-col items-center z-50 gap-4 py-6 lg:hidden shadow-md"
          >
            {menuItems.map((item, idx) =>
              item.path ? (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-2 hover:bg-gray-100 rounded"
                >
                  <div className="flex justify-center items-center gap-1">
                    {item.icon} {item.label}
                  </div>
                </Link>
              ) : (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full text-center py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  {item.label}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

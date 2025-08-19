import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Image from "./Image";
import { TbPencilMinus } from "react-icons/tb";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (
          !storedUser ||
          storedUser === "undefined" ||
          storedUser === "null"
        ) {
          setUser(null);
          return;
        }
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse user from localStorage:", err);
        setUser(null);
      }
    };

    loadUser();
    window.addEventListener("storage", loadUser);
    return () => window.removeEventListener("storage", loadUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-4 relative">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-3 text-xl md:text-2xl font-bold"
      >
        <Image
          src="logo.png"
          alt="Blogr Logo"
          w={32}
          h={32}
          className="w-8 h-8"
        />
        <span>blogr</span>
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 items-center text-base lg:text-lg">
        {user ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/write" className="flex items-center gap-1">
              Write a Post <TbPencilMinus className="text-lg" />
            </Link>
            <Link to="/profile">Profile</Link>
            <button
              onClick={handleLogout}
              className="py-2 px-4 text-sm lg:text-base rounded-3xl bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/login">
              <button className="py-2 px-4 text-sm lg:text-base rounded-3xl bg-green-500 text-white hover:bg-green-600">
                Login
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile menu button */}
      <div
        className="md:hidden cursor-pointer text-3xl"
        onClick={() => setOpen(!open)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={open ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {open ? (
              <IoMdClose className="text-gray-700" />
            ) : (
              <BiMenuAltRight className="text-gray-700" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute text-sm top-16 left-0 w-full bg-[#fdf6e3] flex flex-col items-center z-50 gap-4 py-6 md:hidden"
          >
            {user ? (
              <>
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link
                  to="/write"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  Write a Post <TbPencilMinus className="text-xl" />
                </Link>

                <Link to="/profile" onClick={() => setOpen(false)}>
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="py-2 px-4 text-sm rounded-3xl bg-red-500 text-white hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link to="/" onClick={() => setOpen(false)}>
                  Trending
                </Link>
                <Link to="/" onClick={() => setOpen(false)}>
                  Most Popular
                </Link>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <button className="py-2 px-4 text-sm rounded-3xl bg-green-500 text-white hover:bg-green-600">
                    Login
                  </button>
                </Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

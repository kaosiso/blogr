import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Image from "./Image"; // ✅ use your wrapper

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center z-1000 justify-between px-4 relative">
      {/* logo */}
      <Link to="/" className="flex items-center gap-3 text-2xl font-bold">
         <Image
          src="logo.png"
          alt="Blogr Logo"
          w={32}
          h={32}
          className="w-8 h-8"
        />
        <span>blogr</span>
      </Link>

      {/* desktop menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="#">Trending</Link>
        <Link to="#">Most Popular</Link>
        <Link to="#">About</Link>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-green-500 text-white hover:bg-green-600">
            Login
          </button>
        </Link>
      </div>

      {/* mobile menu button */}
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

      {/* mobile menu content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-[#fdf6e3] flex flex-col items-center z-50  gap-4 py-6 md:hidden"
          >
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="#" onClick={() => setOpen(false)}>
              Trending
            </Link>
            <Link to="#" onClick={() => setOpen(false)}>
              Most Popular
            </Link>
            <Link to="#" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="py-2 px-4 rounded-3xl bg-green-500 text-white hover:bg-green-600">
                Login
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

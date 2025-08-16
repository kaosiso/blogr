import React from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../components/Image"; // ✅ use same logo component

const RegisterPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-32">
      <div className="flex items-center pt-8 justify-center bg-transparent">
        <div className="w-full bg-[#fdf6e3] rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">
          {/* Left Side (Register Form) */}
          <div className="flex flex-col justify-center px-8 py-8">
            {/* Logo & Heading */}
            <div className="mb-8">
              <Link
                to="/"
                className="flex items-center mb-4 gap-3 text-2xl font-bold"
              >
                <Image
                  src="logo.png"
                  alt="Blogr Logo"
                  w={32}
                  h={32}
                  className="w-8 h-8"
                />
                <span>Blogr</span>
              </Link>
              <p className="text-gray-500">
                Create your account <br /> Join us today
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold"
              >
                Register
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-400 text-sm">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Social Register */}
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-3 py-3 border rounded-xl hover:bg-gray-100">
                <FaApple className="text-xl" /> Sign up with Apple
              </button>
              <button className="flex items-center justify-center gap-3 py-3 border rounded-xl hover:bg-gray-100">
                <FaGoogle className="text-xl text-red-500" /> Sign up with
                Google
              </button>
            </div>

            {/* ✅ Login Link */}
            <p className="mt-6 text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>

          {/* Right Side (Image / Gradient) */}
          <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800">
            <h2 className="text-white text-3xl font-bold">Join Blogr</h2>
            <h2 className="text-white text-2xl font-semibold mt-2">
              Become a Blogr Today
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

import React from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ import Link
import Image from "../components/Image";
const LoginPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-32">
      <div className=" flex items-center pt-8 justify-center bg-transparent">
        <div className="w-full  bg-[#fdf6e3] rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">
          {/* Left Side (Login Form) */}
          <div className="flex flex-col justify-center px-8 py-8">
            {/* Logo & Heading */}
            

            <div className="mb-8">
              <Link to="/" className="flex items-center mb-4 gap-3 text-2xl font-bold">
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
                Welcome Back Writer! <br /> We are happy to see you again
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-400 text-sm">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Social Login */}
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-3 py-3 border rounded-xl hover:bg-gray-100">
                <FaApple className="text-xl" /> Log in with Apple
              </button>
              <button className="flex items-center justify-center gap-3 py-3 border rounded-xl hover:bg-gray-100">
                <FaGoogle className="text-xl text-red-500" /> Log in with Google
              </button>
            </div>

            {/* ✅ Register Link */}
            <p className="mt-6 text-sm text-gray-600 text-center">
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register here
              </Link>
            </p>
          </div>

          {/* Right Side (Image / Gradient) */}
          <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800">
            <h2 className="text-white text-3xl font-bold">Welcome Back</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Image from "../components/Image";
import { login } from "../services/authService";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const user = await login(email, password);

    // ✅ Save user to localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // ✅ Notify Navbar (and any listener) about login
    window.dispatchEvent(new Event("storage"));

    toast.success("Login successful!");
    navigate("/"); // redirect after login
  } catch (error) {
    toast.error(error.response?.data?.error || "Login failed");
  }
};


  return (
    // FIX: Removed `items-center` to align content to the top, and added `pt-12` for top padding.
    <div className="px-2 md:px-6 lg:px-12 xl:px-24 2xl:px-32 flex justify-center min-h-screen pt-2">
      <div className="w-full max-w-md md:max-w-5xl bg-[#fdf6e3] rounded-2xl shadow-xl grid md:grid-cols-2 ">
        {/* Left Side (Login Form) */}
        <div className="flex flex-col justify-center px-6 md:py-4 h-full">
          {/* Logo & Heading */}
          <div className="mb-6">
            <Link
              to="/"
              className="flex items-center mb-2 gap-2 text-xl sm:text-2xl md:text-3xl font-bold"
            >
              {/* NOTE: Image component and logo.png are external dependencies. */}
              <Image
                src="logo.png"
                alt="Blogr Logo"
                w={32}
                h={32}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span>blogr</span>
            </Link>
            <p className="text-gray-500 text-sm sm:text-base">
              Welcome Back Writer! <br /> We are happy to see you again
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold text-sm sm:text-base"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-xs sm:text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-center gap-2 py-2 sm:py-3 text-sm sm:text-base border rounded-xl hover:bg-gray-100">
              <FaApple className="text-lg" /> Log in with Apple
            </button>
            <button className="flex items-center justify-center gap-2 py-2 sm:py-3 text-sm sm:text-base border rounded-xl hover:bg-gray-100">
              <FaGoogle className="text-lg text-red-500" /> Log in with Google
            </button>
          </div>

          {/* Register Link */}
          <p className="mt-4 text-xs sm:text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>

        {/* Right Side (Image / Gradient) */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 h-full">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Welcome Back
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

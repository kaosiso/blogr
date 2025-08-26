import React, { useState } from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Image from "../components/Image";
import { useAuth } from "../context/AuthContext"; // ✅ fixed import
import { toast } from "react-hot-toast";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth(); // ✅ useAuth instead of useUser

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="px-2 md:px-6 lg:px-12 xl:px-24 2xl:px-32 min-h-screen flex items-center justify-center bg-[#fdf6e3]">
      <div className="w-full max-w-5xl bg-[#fdf6e3] rounded-2xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
        {/* Left Side */}
        <div className="flex flex-col justify-center px-6 py-6 md:py-4">
          <div className="mb-6">
            <Link
              to="/"
              className="flex items-center mb-2 gap-2 text-xl sm:text-2xl md:text-3xl font-bold"
            >
              <Image
                src="logo.png"
                alt="Blogr Logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span>blogr</span>
            </Link>
            <p className="text-gray-500 text-sm sm:text-base">
              Create your account <br /> Join us today
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-3 py-2 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-3 py-2 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold text-sm sm:text-base"
            >
              Register
            </button>
          </form>

          {/* Social Register */}
          <div className="flex flex-col gap-2 mt-4">
            <button className="flex items-center justify-center gap-2 py-2 sm:py-3 text-sm sm:text-base border rounded-xl hover:bg-gray-100">
              <FaApple className="text-lg" /> Sign up with Apple
            </button>
            <button className="flex items-center justify-center gap-2 py-2 sm:py-3 text-sm sm:text-base border rounded-xl hover:bg-gray-100">
              <FaGoogle className="text-lg text-red-500" /> Sign up with Google
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-4 text-xs sm:text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 p-6">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Join blogr
          </h2>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
            Become a blogr Today
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

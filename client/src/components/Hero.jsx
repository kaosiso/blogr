import React from "react";
import Image from "./Image";
const Hero = () => {
  return (
    <div className="px-4 sm:px-6 mb-8 ">
      <div className="text-start md:text-left">
        <p className="text-small text-blue-500 font-thin mb-2">
          Home | Health & Science
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Latest News
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0 mt-2">
          The Untitled UI journal helps you to seriously improve your design
          skills.
        </p>
      </div>

      <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-lg mt-6">
        {/* Main hero image */}
        <Image
          src="featured3.jpeg"
          w={500}
          h={100}
          alt="A person working in a creative space"
          className="w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 sm:p-6">
          {/* Title */}
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold leading-snug line-clamp-3">
            Sophia Mesaphis from Untitled Ventures on Sustainable and Profitable
            Growth & What We Can Learn from the Gunroad Mass
          </h2>

          {/* Blog Post Details Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-200 mt-2 pt-2 gap-3">
            {/* Author and Date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <span className="text-xs sm:text-sm font-medium">
                  Frankie Sullivan
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <span className="text-gray-300">10 April 2025</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] sm:text-xs rounded-full">
                Design
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] sm:text-xs rounded-full">
                Retail
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] sm:text-xs rounded-full">
                Interviews
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] sm:text-xs rounded-full">
                12 min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

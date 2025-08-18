import React from "react";
import Image from "./Image";

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 mb-8 ">
      {/* Heading */}
      <div className="text-start md:text-left">
        {/* Breadcrumb / category */}
        <p className="text-sm sm:text-sm md:text-base text-blue-700 mb-2">
          Home | Health & Science
        </p>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Latest News
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 mt-2">
          The Untitled UI journal helps you to seriously improve your design
          skills.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-lg mt-6">
        <Image
          src="featured3.jpeg"
          alt="A person working in a creative space"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[80vh] object-cover"
        />

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 sm:p-6">
          {/* Title */}
          <h2 className="text-xs sm:text-sm md:text-2xl font-thin leading-snug line-clamp-3">
            Sophia Mesaphis from Untitled Ventures on Sustainable and Profitable
            Growth & What We Can Learn from the Gunroad Mass
          </h2>

          {/* Blog Post Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-200 mt-2 pt-2 gap-3">
            {/* Author + Date */}
            <div className="flex flex-row items-center space-x-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <span className="font-medium">Frankie Sullivan</span>
              </div>
              <div className="flex items-center gap-1">
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

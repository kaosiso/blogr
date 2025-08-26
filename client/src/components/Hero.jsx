import React from "react";
import Image from "./Image";
import WriteItem from "./writeItem";

const Hero = () => {
  // Sample top picks data
  const topPicks = [
    { title: "How to Improve UX", time: "2 hrs ago" },
    { title: "Design Trends 2025", time: "1 day ago" },
    { title: "Sustainable Retail", time: "3 days ago" },
    { title: "Maximizing Team Productivity", time: "4 days ago" },
    { title: "Creative Workflows in Design", time: "5 days ago" },
  ];

  return (
    <div className="px-4 sm:px-6 mb-8">
      {/* Heading */}
      <div className="text-start md:text-left">
        <p className="text-sm sm:text-sm md:text-base text-blue-700 mb-2">
          Home | Health & Science
        </p>

        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Latest News
          </h1>
          <WriteItem />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 mt-2">
          The Untitled UI journal helps you to seriously improve your design
          skills.
        </p>
      </div>

      {/* Hero + Top Picks Layout */}
      <div className="flex flex-col mx-auto lg:flex-row gap-6 mt-6">
        {/* Hero Image */}
        <div className="relative w-full lg:w-3/4 h-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src="featured3.jpeg"
            alt="A person working in a creative space"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[80vh] object-cover"
          />

          {/* Overlay content */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 sm:p-6">
            <h2 className="text-xs sm:text-sm md:text-2xl font-thin leading-snug line-clamp-3">
              Sophia Mesaphis from Untitled Ventures on Sustainable and
              Profitable Growth & What We Can Learn from the Gunroad Mass
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-200 mt-2 pt-2 gap-3">
              <div className="flex flex-row items-center space-x-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <span className="font-medium">Frankie Sullivan</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-300">10 April 2025</span>
                </div>
              </div>

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

        {/* Top Picks Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
            Top Picks
          </h3>
          <div className="flex flex-col gap-3">
            {topPicks.slice(0, 5).map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800 lg:text-base">
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-500 lg:text-sm">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

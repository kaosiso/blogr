import React from "react";
import Image from "./Image";
import WriteItem from "./writeItem";

const Hero = () => {
  // Updated top picks data with richer info
  const topPicks = [
    {
      title: "Flavors & Feasts: Latest Culinary Trends and Savory Delights",
      author: "Leonor Davinci",
      category: "Business",
      time: "2h Ago",
      img: "featured3.jpeg",
      live: true,
    },
    {
      title: "How to Improve UX",
      author: "Frankie Sullivan",
      category: "Design",
      time: "2 hrs ago",
      img: "featured1.jpeg",
      live: false,
    },
    {
      title: "Design Trends 2025",
      author: "Alex Morgan",
      category: "Retail",
      time: "1 day ago",
      img: "featured2.jpeg",
      live: false,
    },

  ];

  return (
    <div className="px-4 sm:px-6 mb-8">
      {/* Heading */}
      <div className="text-start md:text-left">
        <p className="text-sm sm:text-base text-blue-700 mb-2">
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
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Hero Image */}
        <div className="relative flex-1 h-[260px] sm:h-[340px] md:h-[380px] lg:h-[420px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="featured3.jpeg"
            alt="A person working in a creative space"
            className="w-full h-full object-cover"
          />

          {/* Overlay content */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 sm:p-6 z-10">
            <h2 className="text-sm sm:text-lg md:text-xl font-light leading-snug line-clamp-3">
              Sophia Mesaphis from Untitled Ventures on Sustainable and
              Profitable Growth & What We Can Learn from the Gunroad Mass
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/30 mt-2 pt-2 gap-3">
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
        {/* Top Picks Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:h-[420px]">
          {/* <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
            Top Picks
          </h3> */}

          {/* Styled Top Picks Items */}
          <div className="flex flex-col gap-3 flex-1 justify-between">
            {topPicks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-3 rounded-lg border border-gray-200 shadow-sm"
              >
                {/* Top row: thumbnail + title */}
                <div className="flex gap-3">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0 overflow-hidden relative">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {item.live && (
                      <span className="absolute top-1 left-1 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                        LIVE
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="flex-1 flex flex-col">
                    <span className="font-medium text-gray-800 line-clamp-2">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Meta info below the thumbnail + title row */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                  <span>{item.author}</span>
                  <span>•</span>
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.time}</span>
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

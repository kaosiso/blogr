import React from "react";

const Categories = () => {
  return (
    // Container with responsive layout
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 p-2">
      {/* Category list - scrollable on small screens */}
      <div className="flex space-x-4 overflow-x-auto sm:overflow-x-hidden pb-2 whitespace-nowrap scrollbar-hide">
        <span className="font-semibold text-gray-900 border-b-2 border-transparent hover:border-blue-600 cursor-pointer pb-1">
          All
        </span>
        <span className="font-semibold text-gray-900 border-b-2 border-transparent hover:border-blue-600 cursor-pointer pb-1">
          Design
        </span>
        <span className="font-semibold text-gray-900 border-b-2 border-transparent hover:border-blue-600 cursor-pointer pb-1">
          Gen-Z Stuff
        </span>
        <span className="font-semibold text-gray-900 border-b-2 border-transparent hover:border-blue-600 cursor-pointer pb-1">
          User Interface
        </span>
        {/* Active category */}
        <span className="font-semibold text-blue-600 border-b-2 border-blue-600 cursor-pointer pb-1">
          User Experience
          <span className="ml-1 text-xs px-1 py-0.5 bg-blue-100 text-blue-600 rounded-full">
            12
          </span>
        </span>
      </div>

      {/* Search bar */}
      <div className="relative w-full sm:max-w-sm">
        <input
          type="text"
          placeholder="Search blog..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Categories;

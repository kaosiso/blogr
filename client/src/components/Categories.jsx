import React from "react";

const Categories = () => {
  return (
    // Category list - scrollable on small screens
    <div className="flex space-x-3 sm:space-x-4 overflow-x-auto sm:overflow-x-hidden pb-2 whitespace-nowrap scrollbar-hide text-xs sm:text-sm md:text-base">
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
        <span className="ml-1 text-[10px] sm:text-xs px-1 py-0.5 bg-blue-100 text-blue-600 rounded-full">
          12
        </span>
      </span>
    </div>
  );
};

export default Categories;

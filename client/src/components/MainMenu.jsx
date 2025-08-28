import React from "react";
import MainCategories from "./MainCategories";
import Search from "./Search"; // Assuming you have a separate Search component

const MainMenu = () => {
  return (
    <div>
      
    </div>
    // <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 p-2">
    //   {/* This is where we "design" the layout by including the child components.
    //     The classes below control the positioning and spacing.
    //   */}
    //   <div className="flex space-x-3 sm:space-x-4 overflow-x-auto sm:overflow-x-hidden pb-2 whitespace-nowrap scrollbar-hide text-xs sm:text-sm md:text-base">
    //     {["All", ...categories].map((cat) => (
    //       <span
    //         key={cat}
    //         onClick={() => setActive(cat)}
    //         className={`font-semibold cursor-pointer pb-1 border-b-2 ${
    //           active === cat
    //             ? "text-blue-600 border-blue-600"
    //             : "text-gray-900 border-transparent hover:border-blue-600"
    //         }`}
    //       >
    //         {cat}
    //       </span>
    //     ))}
    //   </div>
    //   <div className={`relative w-full mx-auto ${className}`}>
    //     <input
    //       type="text"
    //       placeholder="Search blog..."
    //       className="
    //         w-full
    //         pl-8 sm:pl-10 md:pl-12
    //         pr-3 sm:pr-4
    //         py-1.5 sm:py-2 md:py-3
    //         border border-gray-300 rounded-full
    //         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    //         text-sm sm:text-base md:text-lg
    //       "
    //     />
    //     <svg
    //       className="
    //         absolute left-2 sm:left-3 md:left-4
    //         top-1/2 transform -translate-y-1/2
    //         text-gray-400
    //         w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6
    //       "
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //       ></path>
    //     </svg>
    //   </div>
    // </div>
  );
};

export default MainMenu;

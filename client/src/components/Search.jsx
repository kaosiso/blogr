import React from "react";

const Search = ({ className }) => {
  return (
    <div>
      <div className={`relative w-full mx-auto ${className}`}>
        <input
          type="text"
          placeholder="Search blog..."
          className="
            w-full
            pl-8 sm:pl-10 md:pl-12
            pr-3 sm:pr-4
            py-1.5 sm:py-2 md:py-3
            border border-gray-300 rounded-full
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            text-sm sm:text-base md:text-lg
          "
        />
        <svg
          className="
            absolute left-2 sm:left-3 md:left-4
            top-1/2 transform -translate-y-1/2
            text-gray-400
            w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6
          "
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

export default Search;

import React, { useState } from "react";
import { categories } from "../data/categories";

const MainCategories = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex space-x-3 sm:space-x-4 overflow-x-auto sm:overflow-x-hidden pb-2 whitespace-nowrap scrollbar-hide text-xs sm:text-sm md:text-base">
      {["All", ...categories].map((cat) => (
        <span
          key={cat}
          onClick={() => setActive(cat)}
          className={`font-semibold cursor-pointer pb-1 border-b-2 ${
            active === cat
              ? "text-blue-600 border-blue-600"
              : "text-gray-900 border-transparent hover:border-blue-600"
          }`}
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default MainCategories;

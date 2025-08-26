import React from "react";
import Search from "./Search";
import { categories } from "../data/categories";

const SideMenu = () => {
  // A hardcoded list of categories.
  // const categories = ["Design", "Gen-Z Stuff", "UI", "UX", "Marketing"];

  return (
    <div
      className="flex flex-col gap-6 p-4"
      style={{ backgroundColor: "#fdf6e3" }}
    >
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900">Filters</h2>

      {/* Search Box */}
      <Search />

      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <input type="checkbox" className="rounded border-gray-300" />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Date Range */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Published</h3>
        <select className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500">
          <option>Anytime</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last year</option>
        </select>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Sort by</h3>
        <select className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500">
          <option>Most Recent</option>
          <option>Most Popular</option>
          <option>Oldest</option>
        </select>
      </div>

      {/* Apply Filters Button */}
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
        Apply Filters
      </button>
    </div>
  );
};

export default SideMenu;

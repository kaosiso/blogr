import React from "react";
import MainCategories from "./MainCategories";
import Search from "./Search"; // Assuming you have a separate Search component

const MainMenu = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 p-2">
      {/* This is where we "design" the layout by including the child components.
        The classes below control the positioning and spacing.
      */}
      <MainCategories />
      <Search />
    </div>
  );
};

export default MainMenu;

import React from "react";
import { TbPencilMinus } from "react-icons/tb";
import { Link } from "react-router-dom"; // import Link

const WriteItem = () => {
  return (
    <Link to="/write">
      {" "}
      {/* Link to Write.jsx route */}
      <div className="flex items-center gap-2 bg-gray-200 rounded-lg px-2 py-1 md:px-4 md:py-2 hover:bg-gray-300 transition-colors">
        <span className="hidden md:block font-medium text-gray-800">
          Write a post
        </span>
        <TbPencilMinus className="text-2xl md:text-2xl text-gray-800" />
      </div>
    </Link>
  );
};

export default WriteItem;

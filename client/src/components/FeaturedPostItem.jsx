import React from "react";

const FeaturedPostItem = ({
  image,
  alt,
  title,
  description,
  author,
  authorImage,
  readTime,
}) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden">
      {/* Image */}
      <img
        src={image}
        alt={alt}
        className="w-full h-auto object-cover rounded-xl mb-4"
      />

      {/* Title */}
      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h4>

      {/* Description */}
      <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4">
        {description}
      </p>

      {/* Author + Meta */}
      <div className="flex items-center space-x-2">
        {/* Author image */}
        <img
          src={authorImage}
          alt={author}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">
          {author}
        </span>
        <span className="text-gray-400 text-xs sm:text-sm md:text-base">•</span>
        <span className="text-gray-400 text-xs sm:text-sm md:text-base">
          {readTime}
        </span>
      </div>
    </div>
  );
};

export default FeaturedPostItem;

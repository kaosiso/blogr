import React from "react";
import FeaturedPostItem from "./FeaturedPostItem";

const posts = [
  {
    image: "featured1.jpeg",
    authorImage: "featured1.jpeg",

    alt: "Man with camera",
    title: "Interview with Photographer Tim Bate on His Creative Process",
    description: "A simple and short description of the post...",
    author: "John Doe",
    readTime: "2 min read",
  },
  {
    image: "featured1.jpeg",
    authorImage: "featured1.jpeg",

    alt: "Design tools",
    title: "Improve Your Design Skills with These 5 Tools",
    description: "A guide to the best design software and apps...",
    author: "Jane Smith",
    readTime: "5 min read",
  },
  {
    image: "featured1.jpeg",
    authorImage: "featured1.jpeg",

    alt: "Woman looking at her phone",
    title: "A Solopreneur's Guide to Building an Agency from Scratch",
    description: "Tips and tricks for solo business owners...",
    author: "Alex Johnson",
    readTime: "4 min read",
  },
  {
    image: "featured1.jpeg",
    authorImage: "featured1.jpeg",

    alt: "Modern house",
    title: "A Continuously Evolving History - Made by Hand",
    description: "A short description for post 4...",
    author: "Mike Davis",
    readTime: "3 min read",
  },
  {
    image: "featured1.jpeg",
    authorImage: "featured1.jpeg",
    alt: "Person on laptop",
    title: "How Our Collaboration Makes Us Better Designers",
    description: "A short description for post 5...",
    author: "Maria Garcia",
    readTime: "6 min read",
  },
];

const FeaturedPosts = () => {
  return (
    <div className="mb-12 overflow-x-hidden px-4 md:px-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl  text-gray-900">
          Featured
        </h3>
        <a
          href="#"
          className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          View all posts
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <FeaturedPostItem key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;

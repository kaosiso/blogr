import { useState } from "react";
import { X } from "lucide-react";
import PostListItem from "../components/PostListItem";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const posts = [
    {
      image: "featured1.jpeg",
      title: "Understanding Modern Web Design",
      excerpt:
        "A deep dive into modern web design Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumtrends and best practices...",
      author: "John Doe",
      authorImage: "featured1.jpeg",
      category: "Web Design",
    },
    {
      image: "featured1.jpeg",
      title: "UI/UX Tips for Beginners",
      excerpt: "Learn the essential UI/UX tips every designer should know...",
      author: "Jane Smith",
      authorImage: "featured1.jpeg",
      category: "UI/UX",
    },
    {
      image: "featured1.jpeg",
      title: "Marketing Strategies in 2025",
      excerpt:
        "Effective marketing strategies for the digital age explained...",
      author: "Alex Johnson",
      authorImage: "featured1.jpeg",
      category: "Marketing",
    },
    {
      image: "featured1.jpeg",
      title: "Creating Engaging Content",
      excerpt:
        "Tips and tricks to keep your audience engaged with your content...",
      author: "Maria Garcia",
      authorImage: "featured1.jpeg",
      category: "Content",
    },
  ];

  return (
    <div className="relative flex mt-8 flex-col lg:flex-row">
      {/* Main content */}
      <div className="flex-1">
        {/* Filter Button (small screens) */}
        <div className="flex justify-end items-center mb-6 lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            {menuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            ) : (
              <span className="text-sm sm:text-base text-gray-700 font-medium">
                Filter
              </span>
            )}
          </button>
        </div>

        {/* Post List - one post per row */}
        <div className="flex flex-col gap-8 mb-8">
          {posts.map((post, index) => (
            <PostListItem key={index} {...post} />
          ))}
        </div>
      </div>

      {/* SideMenu on large screens */}
      <div className="hidden lg:block lg:w-72 lg:ml-8">
        <SideMenu />
      </div>

      {/* SideMenu overlay for small screens */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden">
          <div className="fixed top-0 right-0 w-64 h-full bg-[#fdf6e3] shadow-lg z-50 p-4">
            <SideMenu />
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostListPage;

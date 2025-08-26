import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { X } from "lucide-react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const POSTS_PER_PAGE = 6;

const PostListPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
      return res.data;
    },
  });

  const publishedPosts = posts.filter((post) => post.status === "published");
  const totalPages = Math.ceil(publishedPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = publishedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

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

        {/* Post List */}
        <PostList posts={paginatedPosts} isLoading={isLoading} error={error} />

        {/* Pagination Controls */}
        {!isLoading && !error && totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md border ${
                  page === currentPage
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
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

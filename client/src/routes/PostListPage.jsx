import { useState, useMemo } from "react";
// import { categories } from "../data/categories";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { X } from "lucide-react";
import PostList from "../components/PostList";
import SideMenu from "../components/TopWriters";
import { categories } from "../data/categories";
import TopWriters from "../components/TopWriters";
// const categories = [
//   "Branding",
//   "Belief",
//   "Deep Learning",
//   "Marketing",
//   "Web Development",
//   "Design",
//   "Business",
//   "Retail",
//   "User Experience",
// ];

const POSTS_PER_PAGE = 6;

const PostListPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

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

  // Filter published posts
  const publishedPosts = useMemo(
    () => posts.filter((post) => post.status === "published"),
    [posts]
  );

  // Apply category + search filtering
  const filteredPosts = useMemo(() => {
    let temp = publishedPosts;
    if (activeCategory !== "All") {
      temp = temp.filter((post) => post.category === activeCategory);
    }
    if (searchTerm.trim() !== "") {
      temp = temp.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return temp;
  }, [publishedPosts, activeCategory, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(
    () =>
      filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
      ),
    [filteredPosts, currentPage]
  );

  return (
    <>
      {/* Categories + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-4 p-2">
        {/* Categories */}
        <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-2 whitespace-nowrap text-xs sm:text-sm md:text-base hide-scrollbar">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1); // reset page
              }}
              className={`font-semibold cursor-pointer pb-1 border-b-2 ${
                activeCategory === cat
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-900 border-transparent hover:border-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-1/2 lg:w-1/4 mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset page
            }}
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

      {/* Main Content + SideMenu */}
      <div className="relative flex mt-2 flex-col lg:flex-row">
        <div className="flex-1">
          {/* Filter Button for Small Screens */}
          <div className="flex justify-end items-center mb-2 lg:hidden">
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
          <PostList
            posts={paginatedPosts}
            isLoading={isLoading}
            error={error}
          />

          {/* Pagination */}
          {!isLoading && !error && totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
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
                )
              )}
            </div>
          )}
        </div>

        {/* SideMenu for Large Screens */}
        <div className="hidden lg:block lg:w-72 lg:ml-8">
          <TopWriters />
        </div>

        {/* SideMenu Overlay for Small Screens */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden">
            <div className="fixed top-0 right-0 w-64 h-full bg-[#fdf6e3] shadow-lg z-50 p-4">
              <TopWriters />
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
    </>
  );
};

export default PostListPage;

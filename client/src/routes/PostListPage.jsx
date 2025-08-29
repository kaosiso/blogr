import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { X } from "lucide-react";
import PostList from "../components/PostList";
import { categories } from "../data/categories";
import TopWriters from "../components/TopWriters";

const POSTS_PER_PAGE = 6;

const PostListPage = ({
  searchTerm,
  setSearchTerm,
  currentPage,
  setCurrentPage,
  activeCategory,
  setActiveCategory,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", currentPage, activeCategory, searchTerm],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/search`,
        {
          params: {
            page: currentPage,
            limit: POSTS_PER_PAGE,
            category: activeCategory !== "All" ? activeCategory : undefined,
            search: searchTerm || undefined,
          },
        }
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const posts = data?.posts || [];
  const totalPages = data?.totalPages || 1;

  return (
    <>
      {/* Categories */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-4 p-2">
        <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-2 whitespace-nowrap text-xs sm:text-sm md:text-base hide-scrollbar">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
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
      </div>

      {/* Posts + Writers */}
      <div className="relative flex mt-2 flex-col lg:flex-row">
        <div className="flex-1">
          <PostList posts={posts} isLoading={isLoading} error={error} />

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

        <div className="hidden lg:block lg:w-72 lg:ml-8">
          <TopWriters />
        </div>
      </div>
    </>
  );
};

export default PostListPage;

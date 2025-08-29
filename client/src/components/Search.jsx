import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Search = ({ searchTerm, setSearchTerm, setCurrentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // keep URL in sync with search
  useEffect(() => {
    const params = {};
    if (searchTerm) params.search = searchTerm;
    if (searchParams.get("page")) params.page = searchParams.get("page");
    if (searchParams.get("category"))
      params.category = searchParams.get("category");

    setSearchParams(params);
  }, [searchTerm, searchParams, setSearchParams]);

  return (
    <div className="relative w-full sm:w-1/2 lg:w-1/4 mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // reset page when searching
        }}
        placeholder="Search blog..."
        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-full
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          text-sm sm:text-base md:text-lg"
      />
      <svg
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
  );
};

export default Search;

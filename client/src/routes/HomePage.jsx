import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Topbar from "../components/TopBar";
import PostListPage from "./PostListPage";
import CalltoAction from "../components/CalltoAction";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "All"
  );

  useEffect(() => {
    const params = {};
    if (searchTerm) params.search = searchTerm;
    if (currentPage > 1) params.page = currentPage;
    if (activeCategory !== "All") params.category = activeCategory;
    setSearchParams(params);
  }, [searchTerm, currentPage, activeCategory, setSearchParams]);

  return (
    <>
      <Topbar
        searchTerm={searchTerm}
        setSearchTerm={(term) => {
          setSearchTerm(term);
          setCurrentPage(1); // reset page on new search
        }}
      />

      {/* Only render Hero if there is no active search */}
      {!searchTerm && <Hero />}
      {searchTerm && (
        <p className="px-4 py-6 text-2xl sm:text-4xl text-gray-400 font-bold flex flex-wrap gap-2">
          Search Results for{" "}
          <span className="text-gray-800 font-bold">{searchTerm}</span>
        </p>
      )}

      {/* Post listing */}
      <PostListPage
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {!searchTerm && <CalltoAction />}
      <footer />
    </>
  );
};

export default HomePage;

import React from "react";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import Footer from "../components/Footer";
import CalltoAction from "../components/CalltoAction";
import PostListPage from "./PostListPage";
import MainCategories from "../components/MainCategories";
const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <MainCategories/>
      <FeaturedPosts />
      <PostListPage/>
      <CalltoAction />
    </>
  );
};

export default HomePage;

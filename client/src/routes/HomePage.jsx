import React from "react";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import Footer from "../components/Footer";
import CalltoAction from "../components/CalltoAction";
import PostListPage from "./PostListPage";
import MainMenu from "../components/MainMenu";
import PostList from "../components/PostList";
const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <MainMenu />
      {/* <PostList/> */}
      {/* <FeaturedPosts /> */}
      <PostListPage/>
      <CalltoAction />
    </>
  );
};

export default HomePage;

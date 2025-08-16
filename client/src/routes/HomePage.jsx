import React from "react";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import CalltoAction from "../components/CalltoAction";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <Categories />
      <FeaturedPosts />
      <CalltoAction />
      <Footer />
    </>
  );
};

export default HomePage;

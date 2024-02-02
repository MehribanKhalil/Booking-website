import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/homePageComponents/HeroSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main>
        <HeroSection/>
      </main>
    </>
  );
};

export default Home;

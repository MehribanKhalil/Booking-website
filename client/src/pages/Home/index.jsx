import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/homePageComponents/HeroSection";
import TourEventsSection from "../../components/homePageComponents/TourEventsSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main>
        <HeroSection/>
        <TourEventsSection/>
      </main>
    </>
  );
};

export default Home;

import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/homePageComponents/HeroSection";
import TourEventsSection from "../../components/homePageComponents/TourEventsSection";
import FeedBackSection from "@/components/homePageComponents/FeedbackSection";
import BlogSection from "@/components/homePageComponents/BlogSection";
import RecommendedHotelsSection from "@/components/homePageComponents/RecommendedHotelsSection";
import TopDestinations from "@/components/homePageComponents/TopDestinations";
import OurBestActivites from "@/components/homePageComponents/OurBestActivites";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
        <HeroSection/>
        <TourEventsSection/>
        <FeedBackSection/>
        <RecommendedHotelsSection/>
        <OurBestActivites/>
        <TopDestinations/>
        <BlogSection/>

    </>
  );
};

export default Home;

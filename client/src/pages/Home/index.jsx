import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/homePageComponents/HeroSection";
import TourEventsSection from "../../components/homePageComponents/HotelsSection";
import FeedBackSection from "@/components/homePageComponents/FeedbackSection";
import BlogSection from "@/components/homePageComponents/BlogSection";
import RecommendedHotelsSection from "@/components/homePageComponents/RecommendedHotelsSection";
import TopDestinations from "@/components/homePageComponents/TopDestinations";
import OurBestActivites from "@/components/homePageComponents/OurBestActivites";
import ChooseYourDestination from "@/components/homePageComponents/chooseYourDestination";
import WelcomeToOurPage from "@/components/homePageComponents/WelcomeToOurPage";
import MainHotelCard from "@/components/commonComponents/MainHotelCard";
import FromOurGuests from "@/components/homePageComponents/FromOurGuests";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
        <HeroSection/>
        <WelcomeToOurPage title='WELCOME TO COZYSTAY RESORT' subtitle='In the Heart of the South Pacific, Outstanding Views' info='Nestled in the heart of the Pacific Islands resort, on the edge of a
          tranquil and beautiful Garden Island, CozyStay is a haven of warmth,
          tranquility and rejuvenation. Bathed in brilliant sunshine and clear
          skies, it offers stunning views of palm-lined beaches and gorgeous
          coral reefs.' />
        {/* <MainHotelCard/> */}
        <TourEventsSection/>
        <ChooseYourDestination/>
        <FeedBackSection/>
        <RecommendedHotelsSection/>
        <FromOurGuests/>

        {/* <OurBestActivites/> */}
        <TopDestinations/>
        <BlogSection/>

    </>
  );
};

export default Home;

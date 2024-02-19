import HotelAvailability from "@/components/HotelsPageComponents/HotelAvailability";
import HotelDetailMain from "@/components/HotelsPageComponents/HotelDetailMain";
import HotelGallery from "@/components/HotelsPageComponents/HotelGallery";
import HotelSideBar from "@/components/HotelsPageComponents/HotelSideBar";
import SimilarRoomsSection from "@/components/HotelsPageComponents/SimilarRoomsSection";
import React from "react";
import { Helmet } from "react-helmet-async";

const HotelsDetail = () => {
  return (
    <>
      <Helmet>
        <title>HotelsDetail</title>
      </Helmet>

      <section id="hotels-detail" className=" wrapper section-space">
        <HotelGallery  />
        <div className="flex gap-9 items-start">
          <HotelDetailMain className=" w-2/3"  />
          <HotelSideBar className=" w-1/3" />
          
        </div>
        <HotelAvailability/>
        <SimilarRoomsSection />
      </section>
    </>
  );
};

export default HotelsDetail;

import HotelAvailability from "@/components/HotelsPageComponents/HotelAvailability";
import HotelDetailMain from "@/components/HotelsPageComponents/HotelDetailMain";
import HotelGallery from "@/components/HotelsPageComponents/HotelGallery";
import HotelSideBar from "@/components/HotelsPageComponents/HotelSideBar";
import ReservationForm from "@/components/HotelsPageComponents/ReservationForm";
import SimilarRoomsSection from "@/components/HotelsPageComponents/SimilarRoomsSection";
import useGetHotelDetail from "@/hooks/UseGetHotels";
import { getHotelDetail } from "@/services/HotelsService";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

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

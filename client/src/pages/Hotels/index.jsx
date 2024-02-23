import WelcomeToOurPage from "@/components/homePageComponents/WelcomeToOurPage";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import HotelPageCard from "./HotelPageCard";
import OurBenefits from "@/components/commonComponents/OurBenefits";
import { getHotels } from "@/services/HotelsService";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/commonComponents/Loader";
import HotelsFilters from "@/components/HotelsPageComponents/HotelsFilters";
import HotelPageMainSection from "@/components/HotelsPageComponents/HotelPageMainSection";
import HeaderSearch from "@/components/HotelsPageComponents/HeaderSearch";

const Hotels = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
  });

  if (isLoading) {
    return <Loader/>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Helmet>
        <title>Hotels</title>
      </Helmet>

      {/* <WelcomeToOurPage
        title="START YOUR COMFORTABLE STAY"
        subtitle="Explore our refined accommodation options and find the perfect space for your stay."
        info="The resort offers a total of 139 suites and villas and a wide range of facilities, services and activities to its guests. In an effort to provide a peaceful and tranquil environment."
      />

      {data &&
        data.map((hotel) => (
          <div
            key={hotel._id}
            className="outHotels wrapper space-y-12 pt-10 pb-16"
          >
            <HotelPageCard
             {...hotel}
              facility={hotel.facilities.map(item=>item.facilityTitle).join(' / ')}
            />
           
          </div>
        ))} */}

      <HeaderSearch/>

      <section className=" flex  wrapper  pb-24  pt-28">
        <div className=" min-w-1/5">
        <HotelsFilters/>

        </div>
        <div className=" w-4/5">
        <HotelPageMainSection/>

        </div>
      </section>



      <OurBenefits />
    </>
  );
};

export default Hotels;

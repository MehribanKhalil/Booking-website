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
import HotelsSort from "@/components/HotelsPageComponents/HotelsSort";
import useHotel from "@/hooks/user-hotel";
import MapGL, { Marker, Source, Layer } from 'react-map-gl';
import { FaTh, FaList } from "react-icons/fa";


const Hotels = () => {
  const { search, selectedCategories, selectedFacilities, selectedRating } =
    useHotel();

  const { isLoading, data, error } = useQuery({
    queryKey: ["hotels"],
    staleTime: 1000 * 60 * 2,
    queryFn: getHotels,
  });
  const [sortedData, setSortedData] = useState(null);
  const [view, setView] = useState(4);
  


  let filteredData = data;

  if (search) {
    filteredData = filteredData?.filter((item) =>
      item.title.trim().toLowerCase().includes(search.trim().toLowerCase())
    );
  }


  if (selectedCategories.length > 0) {
    filteredData = filteredData?.filter((item) =>
      selectedCategories.includes(item.category.categoryName)
    );
  }
  console.log('SELECTED CATEGORIES',selectedCategories);
  console.log('SELECTED filteredData',filteredData);


  if (selectedRating > 0) {
    filteredData = filteredData?.filter(
      (item) =>
        item.starRating >= selectedRating &&
        item.starRating < selectedRating + 1
    );
  }

  if (selectedFacilities.length > 0) {
    filteredData = filteredData?.filter((item) => {
      const facilityNames = item.facilities.map(
        (facility) => facility.facilityTitle
      );
      return facilityNames.some((facilityName) =>
        selectedFacilities.includes(facilityName)
      );
    });
  }

  const handleSort = (option) => {
    let sortedResult = [...filteredData];

    switch (option) {
      case "A to Z":
        sortedResult.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z to A":
        sortedResult.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Low to High":
        sortedResult.sort((a, b) => a.pricePerNight - b.pricePerNight);
        break;
      case "High to Low":
        sortedResult.sort((a, b) => b.pricePerNight - a.pricePerNight);
        break;
      default:
        break;
    }

    setSortedData(sortedResult);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(filteredData);
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

      {/* <HeaderSearch /> */}

      <section className=" flex  wrapper  pb-24  pt-28">
        <div className=" min-w-1/5">
          <HotelsFilters />
        </div>
        <div className=" w-4/5">
          <div className=" flex justify-between wrapper mb-5">
            <p className=" text-gray-600">{filteredData?.length} hotels found</p>
            <div className="flex gap-2 items-center">
               <div className="flex gap-2 text-gray-600">
               <button onClick={() => setView(4)}>
                  <FaTh />
                </button>
                <button onClick={() => setView(12)}>
                  <FaList />
                </button>
               </div>
            <HotelsSort handleSort={handleSort} />

            </div>
          </div>
          <HotelPageMainSection view={view}  error={error} isLoading={isLoading} filteredData={sortedData || filteredData}
  />
        </div>
      </section>

      <OurBenefits />
    </>
  );
};

export default Hotels;

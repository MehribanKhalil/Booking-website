import React from "react";
import { CiLocationOn } from "react-icons/ci";
import RoomFacilities from "../RoomFacilities";
import HotelRules from "../HotelRules";
import { useParams } from "react-router-dom";
import StarRating from "@/components/commonComponents/StartRating";
import Loader from "@/components/commonComponents/Loader";
import { useGetHotelDetail } from "@/hooks/UseGetHotels";


const HotelDetailMain = ({className}) => {
  const {id}=useParams()
  const { isLoading, data, error } = useGetHotelDetail(id)
  if (isLoading) {
    return <Loader/>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  

  return (
    <section id="hotel-detail-main" className={`${className} pb-16 px-12`}>

      <div className=" flex gap-1 items-center pb-2 text-gray-500">
        <span><CiLocationOn size={18} /></span> 
        <p>{data.city} , </p>
        <p>{data.country}</p>

      </div>

      <h2 className="hotel-title  text-2xl md:text-4xl">{data.title}</h2>

    <div>
      <StarRating 
        rating={data.starRating}
      />
    </div>

      <div className=" py-7 flex gap-5">
        <span>{data.size}m<sup>2</sup></span>
        <span>{data.adultCount} adult</span>
        <span>{data.childCount} child</span>
        <span>{data.bedCount} King Beds</span>
        <span>{data.bathroomCount} Bathrooms</span>
        <span>{data.bedroomCount} Bedrooms</span>
      </div>

      <div className=" space-y-5 pb-6 text-lg text-neutral-600">
        <p className=" hotel-about ">{data.about}</p>
        <p className=" hotel-description">{data.description}</p>
      </div>

      <RoomFacilities />
      <HotelRules />
      
    </section>
  );
};

export default HotelDetailMain;

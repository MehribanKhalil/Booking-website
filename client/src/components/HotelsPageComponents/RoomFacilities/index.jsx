import Loader from "@/components/commonComponents/Loader";
import { useGetHotelDetail } from "@/hooks/UseGetHotels";
import React from "react";
import { useParams } from "react-router-dom";

const RoomFacilities = () => {
  const { id } = useParams();

  const { isLoading, data, error } = useGetHotelDetail(id);
  if (isLoading) {
    return <Loader/>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="room-facilities py-8 border-t border-b border-neutral-400">
      <h3 className=" facility-title text-2xl md:text-3xl pb-4">
        Room Facilities
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2  max-w-[800px]">
        {data.facilities.map((facility) => (
          <div key={facility._id} className=" flex gap-2 items-center">
            <img
              src={facility.facilityImage}
              alt="facility"
              className=" w-[35px]"
            />
            <h6 className="">{facility.facilityTitle}</h6>
          </div>
        ))}

       
      </div>
    </div>
  );
};

export default RoomFacilities;

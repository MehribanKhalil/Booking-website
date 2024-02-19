import React from "react";
import ReservationForm from "../ReservationForm";
import HotelContactInfo from "../HotelContactInfo";
import { useParams } from "react-router-dom";
import Loader from "@/components/commonComponents/Loader";
import { useGetHotelDetail } from "@/hooks/UseGetHotels";

const HotelSideBar = ({ className }) => {
    const {id}=useParams()
    const { isLoading, data, error } = useGetHotelDetail(id)
    if (isLoading) {
      return <Loader/>;
    }
    
    if (error) {
      return <p>Error: {error.message}</p>;
    }
    
    console.log(data);

  return (
    <aside className={`hotel-sidebar ${className}`}>
      <div className="hotel-sidebar-content space-y-10">
        <ReservationForm {...data} />
        <div>
          <img
            src={data.mainImage}
            className=" cursor-pointer"
            alt=""
          />
        </div>
        
        <HotelContactInfo {...data} />
      </div>
    </aside>
  );
};

export default HotelSideBar;

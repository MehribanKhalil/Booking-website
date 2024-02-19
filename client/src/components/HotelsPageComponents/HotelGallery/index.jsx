import { useGetHotelDetail } from "@/hooks/UseGetHotels";
import { Loader } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";
// import "./index.scss";

const HotelGallery = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useGetHotelDetail(id)
  if (isLoading) {
    return <Loader/>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const galeryImgs=data.galeryImgs
  return (
    <section id="hotel-gallery" className="pb-16">
      <div className="galery-container flex flex-col  items-center lg:flex-row gap-7 justify-center max-w-[1400px] mx-auto rounded-xl overflow-hidden ">
          <img
            src={galeryImgs[0]}
            alt=""
            className="h-[535px] cursor-pointer hotel-img1 w-full lg:max-w-[500px] object-cover"
          />

         <div className=" flex flex-col  gap-7">
         <img
            src={galeryImgs[1]}
            alt=""
            className="h-[250px] cursor-pointer hotel-img2 w-full lg:max-w-[500px] object-cover"

          />

          <img
            src={galeryImgs[2]}
            alt=""
            className="h-[250px] hotel-img3 w-full lg:max-w-[500px] object-cover cursor-pointer"

          />
         </div>

          <img
            src={galeryImgs[3]}
            alt=""
            className="h-[535px] hotel-img4 w-full lg:max-w-[500px] object-cover cursor-pointer"

          />
      </div>
    </section>
  );
};

export default HotelGallery;

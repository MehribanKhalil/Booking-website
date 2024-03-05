import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";


const SimilarRoomCard = ({_id,mainImage,title,about,bedCount,bathroomCount,pricePerNight,size,guests}) => {
  return (
    <div className="similar-rooms-card relative group ">
      <div className="">
        <img
          src={mainImage}
          alt=""
          className=" object-cover  min-h-[300px]"
        />
      </div>
      <div className="room-overlay  bg-black group-hover:bg-[#000]  bg-opacity-30 group-hover:bg-opacity-50 duration-300 cursor-pointer  absolute bottom-0 left-0 w-full h-full">
        <div className=" flex  flex-col items-start justify-end h-full px-5 py-8 text-white">
          <div className=" group-hover:hidden duration-300">
            <h3 className="hotel-title text-xl pb-2 font-medium">
              {title}
            </h3>
            <div className=" flex gap-1 text-sm flex-wrap">
              <span>{size}m</span>
              <span>/</span>
              <span>{guests} Guests</span>
              <span>/</span>
              <span>{bedCount} King Bed</span>
              <span>/</span>
              <span>{bathroomCount} Bathroom</span>
            </div>
          </div>

          <div className=" space-y-2  absolute  -bottom-48 group-hover:bottom-0 duration-700 px-3 py-5">
            <p className=" line-clamp-3">
             {about}
            </p>
            <div>
              <Link to={`/detail/${_id}`} className=" inline-block space-y-1 group-[button] relative">
                <span className="flex items-center gap-1 hover:gap-3 duration-500">
                  Discover More <MdKeyboardArrowRight size={18} />
                </span>
                <span className=" bg-mainColor block w-full h-[1px] duration-500  group-hover:w-0 "></span>
              </Link>
            </div>
          </div>

          <div className="hotel-price flex bg-white text-black px-2 py-1 z-10 absolute font-medium top-4 text-sm left-4">
            <p>${pricePerNight}</p><span>/</span> <span className=" uppercase text-[13px] ">Night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarRoomCard;

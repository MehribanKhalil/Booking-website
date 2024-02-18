import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";


const SimilarRoomCard = () => {
  return (
    <div className="similar-rooms-card relative group">
      <div>
        <img
          src="https://cozystay.loftocean.com/island-resort/wp-content/uploads/sites/3/2023/05/takafumi-yamashita-OjX9PWvbarc-unsplash-1024x683.jpg"
          alt=""
        />
      </div>
      <div className="room-overlay bg-black group-hover:bg-[#576451]  bg-opacity-30 group-hover:bg-opacity-70 duration-300 cursor-pointer  absolute bottom-0 left-0 w-full h-full">
        <div className=" flex  flex-col items-start justify-end h-full px-5 py-8 text-white">
          <div className=" group-hover:hidden duration-300">
            <h3 className="hotel-title text-3xl font-medium">
              Premier Oceanview Villa
            </h3>
            <div className=" flex gap-1">
              <span>84m</span>
              <span>/</span>
              <span>2 Guests</span>
              <span>/</span>
              <span>1 King Bed</span>
              <span>/</span>
              <span>Bathroom</span>
            </div>
          </div>

          <div className=" space-y-2  absolute  -bottom-48 group-hover:bottom-0 duration-700 px-3 py-5">
            <p>
              Stunning beachfront location with 60 square meters / 646 square
              feet of interior space, located on the west side of the resort in
              a private tropical garden with a plunge pool and a private outdoor
              shower.
            </p>
            <div>
              <Link className=" inline-block space-y-1 group-[button] relative">
                <span className="flex items-center gap-1 hover:gap-3 duration-500">
                  Discover More <MdKeyboardArrowRight size={18} />
                </span>
                <span className=" bg-mainColor block w-full h-[1px] duration-500  group-hover:w-0 "></span>
              </Link>
            </div>
          </div>

          <div className="hotel-price flex bg-white text-black px-2 py-1 z-10 absolute font-medium top-4 text-sm left-4">
            <p>$300</p><span>/</span> <span className=" uppercase text-[13px] ">Night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarRoomCard;

import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";


const HotelCard = ({
  image,
  title,
  info,
  location,
  discount,
  price,
  rating,
}) => {
  return (
    <div className=" hotel-card overflow-hidden  relative    group">
      <div className="rounded-xl card-img relative  overflow-hidden">
        <NavLink>
          <img
            src={image}
            alt="Hotel"
            className="rounded-xl w-full group-hover:scale-105 duration-300"
          />
        </NavLink>
        <div className=" hotel-location  flex  items-center absolute bottom-2 left-2 text-white gap-1 text-lg">
          <FaLocationDot />
          <p>{location}</p>
        </div>

      
        
      </div>

     

      <div className=" card-content p-3 space-y-2">

      {
            discount && 
            <div className=" border  flex flex-col  items-center justify-center w-14 h-14 p-1  top-[45%] border-mainColor rounded-lg font-medium  bg-white right-3 absolute text-mainColor">{discount}% <span>off</span></div>
        }
        <div className=" flex justify-between items-center">
          <h3 className=" text-xl tour-title group-hover:text-mainColor duration-300 font-medium">
            <NavLink>{title}</NavLink>
          </h3>

          <div className="hotel-rating flex gap-1  items-center text-lg">
            
            <MdOutlineStarPurple500 /> <span className=" ">{rating}</span>
          </div>
        </div>
        
        <div className="hotel-info">
          <p className=" text-gray-600 ">{info}</p>
        </div>
        <div className=" price-info">
          <p><span className=" text-2xl font-medium ">${price}</span> per night</p>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

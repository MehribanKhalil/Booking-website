import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroHotelCard = ({
  title,
  city,
  county,
  description,
  about,
  iframeCode,
  _id,
  childCount,
  adultCount,
  pricePerNight,
  bedroomCount,
  bedCount,
  bathroomCount,
  size,
  starRating,
  mainImage,
}) => {
  return (
    <div className=" hotel-card overflow-hidden  rounded-sm group">
      <div className="card-img rounded-sm  overflow-hidden">
        <Link to={`/detail/${_id}`}>
          <img
            src={mainImage}
            alt={title}
            className=" w-full group-hover:scale-105 duration-300"
          />
        </Link>
      </div>
      <div className=" card-content py-5 px-2 space-y-2">
        <h3 className=" text-xl hotel-title group-hover:text-mainColor duration-300 font-medium">
          <Link>{title}</Link>
        </h3>
        <div className="location flex items-center  gap-1 text-gray-500">
          <CiLocationOn size={20} />
          <p className="">{county}</p>
        </div>
        <div className="hotel-price border-t pt-2">
          <h5 className="font-medium">
            ${pricePerNight}
            <span className=" text-sm ">/Per night</span>
          </h5>
        </div>
        <Link className=" inline-block space-y-1 group-[button] relative">
          <span className="flex items-center gap-1 hover:gap-3 duration-500">
            Discover More <MdKeyboardArrowRight size={18} />
          </span>
          <span className=" bg-mainColor block w-full h-[1px] duration-500  group-hover:w-0 "></span>
        </Link>
      </div>
    </div>
  );
};

export default HeroHotelCard;

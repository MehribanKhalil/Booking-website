import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroHotelCard = () => {
  return (
    <div className=" tour-card overflow-hidden  rounded-sm group">
      <div className="card-img rounded-sm  overflow-hidden">
        <Link>
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/tripfery/wp-content/uploads/2023/11/8.jpg"
            alt="Tour"
            className=" w-full group-hover:scale-105 duration-300"
          />
        </Link>
      </div>
      <div className=" card-content py-5 px-2 space-y-2">
        {/* <div className='tour-duration flex  gap-3 text-sm text-gray-500'>
          <p>7 nights 8 days tour</p>
          <p>Family tour</p>
        </div> */}
        <h3 className=" text-xl tour-title group-hover:text-mainColor duration-300 font-medium">
          <Link>London aliqua irure proident esse</Link>
        </h3>
        <div className="location flex items-center  gap-1 text-gray-500">
          <CiLocationOn size={20} />
          <p className="">London, United Kingdom</p>
        </div>
        {/* <div className=" flex justify-between  items-center">
          <div className="tour-reviews ">
            <p className=" font-medium text-mainColor text-lg">
              4.8/5 Excellent
            </p>
            <h6 className=" text-sm text-gray-500">(1214 reviewes)</h6>
          </div>
          <div className="tour-price">
            <h5 className=" text-lg font-medium">
              {" "}
              from $99.00 <span className=" text-sm ">/Per night</span>
            </h5>
          </div>
        </div> */}
         <div className="tour-price border-t pt-2">
            <h5 className="font-medium">from $99.00 <span className=" text-sm ">/Per night</span>
            </h5>
          </div>
          <Link className=" inline-block space-y-1 group-[button] relative">
            <span className="flex items-center gap-1 hover:gap-3 duration-500">Discover More <MdKeyboardArrowRight size={18} /></span>
            <span className=" bg-mainColor block w-full h-[1px] duration-500  group-hover:w-0 "></span>
          </Link>
      </div>
    </div>
  );
};

export default HeroHotelCard;

import React from "react";
import { NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import "./index.scss";

const MainHotelCard = () => {
  return (
    <div className="wrapper">
      <div className="cols">
        <div
          className="col"
          onTouchStart={() => this.classList.toggle("hover")}
        >
          <div className="container">
            <div className="front front1">
              <div className="inner">
                <p>INDIA</p>
                <span>Taj Mahal</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Taj Mahal is a beautiful and most attractive historical place
                  in India
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          onTouchStart={() => this.classList.toggle("hover")}
        >
          <div className="container">
            <div className="front front2">
              <div className="inner">
                <div className=" tour-card overflow-hidden  group">
                  <div className="card-img  overflow-hidden">
                    <NavLink>
                      {/* <img
                        src="https://www.radiustheme.com/demo/wordpress/themes/tripfery/wp-content/uploads/2023/11/8.jpg"
                        alt="Tour"
                        className=" w-full group-hover:scale-105 duration-300"
                      /> */}
                    </NavLink>
                  </div>
                  <div className=" card-content py-5 px-2 space-y-2">
                    <h3 className=" text-xl tour-title group-hover:text-mainColor duration-300 font-medium">
                      <NavLink>London aliqua irure proident esse</NavLink>
                    </h3>
                    <div className="location flex items-center  gap-1 text-gray-500">
                      <CiLocationOn size={20} />
                      <p className=" text-2xl">London, United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  The Burj Khalifa is the tallest building in the world and a
                  global icon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHotelCard;

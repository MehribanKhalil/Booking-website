import React from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ActiviteCard from "./ActiviteCard";

const OurBestActivites = () => {
  return (
    <section
      id="our-best-activites"
      className=" py-24 mb-16  text-white"
    >
      <div className="best-activites-content wrapper">
        <h2 className=" text-center text-4xl pb-6 font-italic-font">
          Our Best Activites
        </h2>

        <div className=' grid grid-cols-3 items-center  border-b border-white max-w-[800px] mx-auto  text-center text-lg font-medium  pb-4' >
        <p className=' font-medium'>Destination</p>
        <p>Trip Name</p>
        <p>Kind Of Trip</p>
    </div>

        <div className="activites  mx-auto flex justify-center items-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop="true"
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper w-full text-center   my-10 h-[200px]"
          >
            <SwiperSlide>
                <ActiviteCard
                destination='Miami'
                tripName='Hiking And Kayaking in The Land of Blue Glancies'
                kind='Accompanied  Trip'
                />
            </SwiperSlide>
            <SwiperSlide>
                <ActiviteCard
                destination='Miami'
                tripName='Hiking And Kayaking in The Land of Blue Glancies'
                kind='Accompanied  Trip'
                />
            </SwiperSlide>

            <SwiperSlide>
                <ActiviteCard
                destination='Miami'
                tripName='Hiking And Kayaking in The Land of Blue Glancies'
                kind='Accompanied  Trip'
                />
            </SwiperSlide>

            <SwiperSlide>
                <ActiviteCard
                destination='Miami'
                tripName='Hiking And Kayaking in The Land of Blue Glancies'
                kind='Accompanied  Trip'
                />
            </SwiperSlide>

            <SwiperSlide>
                <ActiviteCard
                destination='Miami'
                tripName='Hiking And Kayaking in The Land of Blue Glancies'
                kind='Accompanied  Trip'
                />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className=" flex justify-center items-center pt-10">
        <button className=" border border-white bg-transparent  duration-300 px-7 py-2 ">Discover</button>
      </div>
    </section>
  );
};

export default OurBestActivites;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "@/components/commonComponents/SectionTitle";
import SimilarRoomCard from "../SimilarRoomCard";


const SimilarRoomsSection = () => {
  return (
    <section id="similar-rooms-section" className="section-heading px-12">
      <h3 className="similar-rooms text-2xl md:text-3xl pb-4">Similar Rooms</h3>

      <div className="tours pt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          loop="true"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <SimilarRoomCard/>
          </SwiperSlide>

          <SwiperSlide>
            <SimilarRoomCard/>
          </SwiperSlide>

          <SwiperSlide>
            <SimilarRoomCard/>
          </SwiperSlide>
          <SwiperSlide>
            <SimilarRoomCard/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SimilarRoomsSection;

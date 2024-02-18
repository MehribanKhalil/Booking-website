import React from "react";
import SectionTitle from "../../commonComponents/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroHotelCard from "@/components/commonComponents/HeroHotelCard";

const HotelsSection = () => {
  return (
    <section id="tour-events" className=" wrapper section-space mb-10">
      <SectionTitle
        title="Find Your Perfect Stay"
        subtitle="Nostrud aliqua ipsum dolore velit labore nulla fugiat."
      />

      <div className="tours pt-10">
        <Swiper
          slidesPerView={4}
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <HeroHotelCard/>
          </SwiperSlide>

          <SwiperSlide>
            <HeroHotelCard/>
          </SwiperSlide>

          <SwiperSlide>
            <HeroHotelCard/>
          </SwiperSlide>

          <SwiperSlide>
            <HeroHotelCard/>
          </SwiperSlide>

          <SwiperSlide>
            <HeroHotelCard/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HotelsSection;

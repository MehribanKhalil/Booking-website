import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from '@/components/commonComponents/SectionTitle';
import HotelCard from '@/components/commonComponents/HotelCard';
import HeroHotelCard from '@/components/commonComponents/HeroHotelCard';

const RecommendedHotelsSection = () => {
  return (
    <section id="blog-section" className=" section-space wrapper">
    <SectionTitle
      title="Recommended Hotels"
      subtitle="Hotel Booking"
    />

    <div className="blogs pt-10 ">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        loop='true'
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
     

        {/* <SwiperSlide>
            <HotelCard
                image='https://a0.muscache.com/im/pictures/miso/Hosting-53887005/original/05ddaa6f-1b72-4519-bfab-d878b89d0e7b.jpeg?im_w=720'
                title='Prince Palace Hotel'
                info='Lorem ipsum dolor sit amet consectetur. Non porttitor nisl est hac ornare.'
                price='99.00'
                location='Thailand'
                rating='3.0'
            />
        </SwiperSlide> */}

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
  )
}

export default RecommendedHotelsSection
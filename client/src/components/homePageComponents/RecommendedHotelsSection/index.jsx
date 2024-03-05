import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "@/components/commonComponents/SectionTitle";
import HotelCard from "@/components/commonComponents/HotelCard";
import HeroHotelCard from "@/components/commonComponents/HeroHotelCard";
import Loader from "@/components/commonComponents/Loader";
import { useQuery } from "@tanstack/react-query";
import { getHotels } from "@/services/HotelsService";

const RecommendedHotelsSection = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
  });

  let highRatedHotels;

  if (!isLoading && !error) {
     highRatedHotels = data.filter((hotel) => hotel.starRating >= 4);
    console.log(highRatedHotels);
  }

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section id="blog-section" className=" section-space wrapper">
      <SectionTitle title="Recommended Hotels" subtitle="Hotel Booking" />

      <div className="blogs pt-10 ">
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
          {highRatedHotels?.map((hotel) => (
            <SwiperSlide key={hotel._id}>
              <HeroHotelCard {...hotel} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecommendedHotelsSection;

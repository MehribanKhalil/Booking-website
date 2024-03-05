import React from "react";
import SectionTitle from "../../commonComponents/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroHotelCard from "@/components/commonComponents/HeroHotelCard";
import { useQuery } from "@tanstack/react-query";
import { getHotels } from "@/services/HotelsService";
import Loader from "@/components/commonComponents/Loader";

const HotelsSection = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data);

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
         

          {data &&
            data?.map((item) => (
              <React.Fragment key={item._id}>
                <SwiperSlide>
                  <HeroHotelCard {...item} />
                </SwiperSlide>
              </React.Fragment>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HotelsSection;

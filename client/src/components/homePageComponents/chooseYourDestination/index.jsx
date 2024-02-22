import SectionTitle from "@/components/commonComponents/SectionTitle";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DestinationCard from "./DestinationCard";
import Loader from "@/components/commonComponents/Loader";
import { useGetCategories } from "@/hooks/UseCategories";

const ChooseYourDestination = () => {
  const { isLoading, data, error } = useGetCategories()
  if (isLoading) {
    return <Loader/>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }


  return (
    <section id="your-destinations" className="bg-white section-space  relative">
      <div className=" absolute w-full h-[55%] top-0 left-0 bg-mainColor"></div>
      <SectionTitle
      className='text-white text-center absolute top-0 left-[50%] -translate-x-[50%] mt-16 mb-12'
        title="Choose Your Destination"
        subtitle="Which of these best describes your place?"
      />

      <div className="tours  wrapper mt-32   ">
        <Swiper
          slidesPerView={3}
          spaceBetween={14}
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
            // 1200: {
            //   slidesPerView: 4,
            //   spaceBetween: 50,
            // },
          }}
          className="mySwiper"
        >
          {
            data.map(category=>(
              <SwiperSlide>
              <DestinationCard
              categoryImage={category.categoryImage}
               categoryTitle={category.categoryName}
              />
             </SwiperSlide>
            ))
          }

         

         

          
        </Swiper>
      </div>
    </section>
  );
};

export default ChooseYourDestination;

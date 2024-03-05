import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCard from "@/components/commonComponents/TestimonialCard";
import './index.scss'
import { useGetTestimonials } from "@/hooks/UseTestimonials";
import Loader from "@/components/commonComponents/Loader";

const FeedBackSection = () => {
  const {data,isLoading,error} = useGetTestimonials()

  if (isLoading) {
    return <Loader/>;
  }



  console.log('testimonials',data);


  return (
    <section id="our-feedbacks " className=" wrapper section-space bg-[url('https://andit.co/projects/html/and-tour/demo/assets/img/common/test-bg.png')] bg-center bg-cover">
    
    <div className="feedbacks max-w-[600px] mx-auto py-10 ">
        
    <Swiper pagination={true}  loop='true' modules={[Pagination]} className="mySwiper min-h-[300px]">

      {
        data?.map(testimonial=>(
          <SwiperSlide key={testimonial._id}>
          <TestimonialCard
            image={testimonial.image}
            title={testimonial.title}
            feedback={testimonial.description}
            userName={testimonial.fullName}
            position={testimonial.position}
          />
        </SwiperSlide>
        ))
      }

        
      </Swiper>
    </div>

      
    </section>
  );
};

export default FeedBackSection;

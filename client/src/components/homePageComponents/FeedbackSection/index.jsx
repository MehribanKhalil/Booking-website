import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCard from "@/components/commonComponents/TestimonialCard";
import './index.scss'

const FeedBackSection = () => {
  return (
    <section id="our-feedbacks " className=" wrapper section-space">
    
    <div className="feedbacks max-w-[600px] mx-auto py-10 ">
        
    <Swiper pagination={true}  loop='true' modules={[Pagination]} className="mySwiper min-h-[300px]">
        <SwiperSlide>
          <TestimonialCard
            image='https://andit.co/projects/html/and-tour/demo/assets/img/common/testimonial.png'
            title='Awesome service'
            feedback="Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
            worth ur money for sure. thanks. Driver was very good and polite and safe
            driving for all 6 days. on time pickup and drop overall. Thanks for it."
            userName='Cameron douglas'
            position='Businessman'
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialCard
            image='https://andit.co/projects/html/and-tour/demo/assets/img/common/testimonial.png'
            title='Awesome service'
            feedback="Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
            worth ur money for sure. thanks. Driver was very good and polite and safe
            driving for all 6 days. on time pickup and drop overall. Thanks for it."
            userName='Cameron douglas'
            position='Businessman'
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialCard
            image='https://andit.co/projects/html/and-tour/demo/assets/img/common/testimonial.png'
            title='Awesome service'
            feedback="Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer.
            worth ur money for sure. thanks. Driver was very good and polite and safe
            driving for all 6 days. on time pickup and drop overall. Thanks for it."
            userName='Cameron douglas'
            position='Businessman'
          />
        </SwiperSlide>
        
      </Swiper>
    </div>

      
    </section>
  );
};

export default FeedBackSection;

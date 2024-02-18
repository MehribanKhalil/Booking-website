import SectionTitle from "@/components/commonComponents/SectionTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogCard from "@/components/commonComponents/BlogCard";

const BlogSection = () => {
  return (
    <section id="blog-section" className=" section-space wrapper">
      <SectionTitle
        title="Get Inspirations From News and Blog"
        subtitle="Nostrud aliqua ipsum dolore velit labore nulla fugiat."
      />

      <div className="blogs pt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
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
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
          <BlogCard
          image='https://cozystay.loftocean.com/island-resort/wp-content/uploads/sites/3/2023/05/galen-crout-anPsLBVvZ_o-unsplash.jpg'
          title='Revolutionizing the travel industry, one partnership at a time'
          date='24  January'
          authorName='admin'
          info='Join Emily as she takes you on a gastronomic adventure through the neighborhood surrounding our hotel.Join Emily as she takes you on a gastronomic adventure through the neighborhood surrounding our hotel.'
          />
          </SwiperSlide>

          <SwiperSlide>
          <BlogCard
          image='https://cozystay.loftocean.com/island-resort/wp-content/uploads/sites/3/2023/05/galen-crout-anPsLBVvZ_o-unsplash.jpg'
          title='Revolutionizing the travel industry, one partnership at a time'
          date='24  January'
          authorName='admin'
          info='Join Emily as she takes you on a gastronomic adventure through the neighborhood surrounding our hotel.Join Emily as she takes you on a gastronomic adventure through the neighborhood surrounding our hotel.'
          />
          </SwiperSlide>

          <SwiperSlide>
          <BlogCard
          image='https://cozystay.loftocean.com/island-resort/wp-content/uploads/sites/3/2023/05/galen-crout-anPsLBVvZ_o-unsplash.jpg'
          title='Revolutionizing the travel industry, one partnership at a time'
          date='24  January'
          authorName='admin'
          info='Join Emily as she takes you on a gastronomic adventure through the neighborhood surrounding our hotel.Join Emily as she takes you on a gastronomic adventure through the neighborhood surrounding our hotel.'
          />
          </SwiperSlide>
        </Swiper>
      </div>


    
    </section>
  );
};

export default BlogSection;

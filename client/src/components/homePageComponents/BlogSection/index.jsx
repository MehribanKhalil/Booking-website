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
          image='https://andit.co/projects/html/and-tour/demo/assets/img/home-nine/blog/blog-nine-1.png'
          title='Revolutionizing the travel industry, one partnership at a time'
          date='24  January'
          readingCount='5min'
          />
          </SwiperSlide>

          <SwiperSlide>
          <BlogCard
          image='https://andit.co/projects/html/and-tour/demo/assets/img/home-nine/blog/blog-nine-2.png'
          title='Revolutionizing the travel industry, one partnership at a time'
          date='24  January'
          readingCount='5min'
          />
          </SwiperSlide>

          <SwiperSlide>
          <BlogCard
          image='https://andit.co/projects/html/and-tour/demo/assets/img/home-nine/blog/blog-nine-3.png'
          title='Revolutionizing the travel industry, one partnership at a time'
          date='24  January'
          readingCount='5min'
          />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;

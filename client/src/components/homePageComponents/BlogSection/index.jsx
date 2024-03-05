import SectionTitle from "@/components/commonComponents/SectionTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogCard from "@/components/commonComponents/BlogCard";
import { useGetBlogs } from "@/hooks/UseBlogs";

const BlogSection = () => {
  const {data, isLoading, error}=useGetBlogs()
  console.log(data);
  return (
    <section id="blog-section" className=" section-space my-8 wrapper">
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
          
          {
            data?.map(blog=>(
              <SwiperSlide key={blog._id}>
              <BlogCard
              image={blog.image}
              title={blog.title}
              date={blog.createdAt.toString().split("T")[0]}
              authorName={blog.name}
              info={blog.description}
              />
              </SwiperSlide>
            ))
          }

         

         
        </Swiper>
      </div>


    
    </section>
  );
};

export default BlogSection;

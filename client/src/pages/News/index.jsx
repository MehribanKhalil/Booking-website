import MainBlogCard from "@/components/NewsPageComponents/MainBlogCard";
import NewsConnection from "@/components/NewsPageComponents/NewsConnection";
import NewsRecentPosts from "@/components/NewsPageComponents/NewsResentPosts";
import NewsTag from "@/components/NewsPageComponents/NewsTag";
import React from "react";
import { Helmet } from "react-helmet-async";
import { CiSearch } from "react-icons/ci";


const News = () => {
  return (
    <>
      <Helmet>
        <title>News</title>
      </Helmet>

      <div className="blog-page px-6 md:px-16 lg:px-24 xl:px-32 section-space justify-between gap-5 flex">
        <div className="blog-content shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5">
          <MainBlogCard
            mediaSource="http://localhost:5175/src/assets/images/blog-img/blog-standard-img-1.jpg"
            mainBlogTitle="EXPAND YOUR MIND, CHANGE EVERYTHING"
            author="Admin"
            tag='Enjoyment'
            date='30.01.2017'
            mainBlogText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vesdjklsfjsldfslfsldfjlkfs;fkdsjfdlsfdsjl sklfjslfjl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vesdjklsfjsldfslfsldfjlkfs;fkdsjfdlsfdsjl sklfjslfjl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vesdjklsfjsldfslfsldfjlkfs;fkdsjfdlsfdsjl sklfjslfjl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vesdjklsfjsldfslfsldfjlkfs;fkdsjfdlsfdsjl sklfjslfjl "
            mainBlogJob="Features"
          />

          <MainBlogCard
            mediaSource="http://localhost:5175/src/assets/images/blog-img/blog-standard-img-3.jpg"
            mainBlogTitle="EXPAND YOUR MIND, CHANGE EVERYTHING"
            author="Admin"
            tag='Enjoyment'
            date='30.01.2017'
            mainBlogText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vesdjklsfjsldfslfsldfjlkfs;fkdsjfdlsfdsjl sklfjslfjl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vesdjklsfjsldfslfsldfjlkfs;fkdsjfdlsfdsjl sklfjslfjl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vesdjklsfjsldfslfsldfjlkfs;fkdsjfdlsfdsjl sklfjslfjl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vesdjklsfjsldfslfsldfjlkfs;fkdsjfdlsfdsjl sklfjslfjl "
            mainBlogJob="Features"
          />
        </div>

        <div className="blog-side shadow-[0_8px_30px_rgb(0,0,0,0.12)]  max-w-[300px] p-6 h-full">
          <div className=" mb-5">
            <h3 className=" text-xl border-b-2 border-mainColor font-semibold m-0 pt-5 mb-5 ">Search</h3>
           <div className="flex items-center border border-gray-400">
           <input type="text" name="" id="" placeholder="Search here..." className="   px-4 py-2 outline-none" />
            <CiSearch size={23} />
           </div>
          </div>
          <NewsRecentPosts/>
          <NewsTag/>
          <NewsConnection/>
        </div>
      </div>
    </>
  );
};

export default News;

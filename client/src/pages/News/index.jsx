import MainBlogCard from "@/components/NewsPageComponents/MainBlogCard";
import NewsConnection from "@/components/NewsPageComponents/NewsConnection";
import NewsRecentPosts from "@/components/NewsPageComponents/NewsResentPosts";
import NewsTag from "@/components/NewsPageComponents/NewsTag";
import { useGetBlogs } from "@/hooks/UseBlogs";
import React from "react";
import { Helmet } from "react-helmet-async";
import { CiSearch } from "react-icons/ci";


const News = () => {
  const{data, isLoading , error}=useGetBlogs()

  return (
    <>
      <Helmet>
        <title>News</title>
      </Helmet>

      <div className="blog-page px-6 md:px-[6rem] section-space justify-between gap-10 flex">
        <div className="blog-content">
          {
            data?.map(news=>(
              <MainBlogCard
            mediaSource={news.image}
            mainBlogTitle={news.title}
            author={news.name}
            tag='Enjoyment'
            date={news.createdAt.toString().split("T")[0]}
            mainBlogText={news.description}
            mainBlogJob="Features"
          />
            ))
          }
          
        </div>

        <div className="blog-side shadow-[0_8px_30px_rgb(0,0,0,0.12)]  max-w-[350px] px-8 py-3 h-full">
          <div className=" mb-5">
            <h3 className=" text-xl border-b-2 border-gray-400 font-semibold m-0 pt-5 mb-5 ">Search</h3>
           <div className="flex items-center justify-between px-5 rounded-xl border border-gray-300">
           <input type="text" name="" id="" placeholder="Search here..." className="   px-2 py-3 outline-none" />
            <CiSearch size={23} />
           </div>
          </div>
          <NewsRecentPosts data={data} isLoading={isLoading} />
          <NewsTag/>
          <NewsConnection/>
        </div>
      </div>
    </>
  );
};

export default News;

import Loader from "@/components/commonComponents/Loader";
import { useGetTags } from "@/hooks/UseGetTags";
import React from "react";

const NewsTag = () => {
  const {data,isLoading,error}=useGetTags()
  if(isLoading){
    return <Loader/>
  }
  return (
    <div className="pb-4">
      <h2 className="class-h2 blog-about__h2   border-b-2 border-gray-400 font-semibold m-0 pt-5 mb-5 ">
        TAGS
      </h2>
      <div className="tag-names max-w-[600px]  ">
        
        <span className="italic  m-1 inline-block px-4 py-3 bg-gray-100 rounded-xl hover:bg-mainColor hover:text-white cursor-pointer duration-300">
          Artists
        </span>
        <span className="italic   m-1 inline-block px-4 py-3 bg-gray-100 rounded-xl hover:bg-mainColor hover:text-white cursor-pointer duration-300">
          Exhibitions
        </span>
        <span className="italic  m-1  inline-block px-4 py-3 bg-gray-100 rounded-xl hover:bg-mainColor hover:text-white cursor-pointer duration-300">
          Features
        </span>
        <span className="italic  m-1 inline-block px-4 py-3 bg-gray-100 rounded-xl hover:bg-mainColor hover:text-white cursor-pointer duration-300">
          Jobs
        </span>
        <span className="italic  m-1 inline-block px-4 py-3 bg-gray-100 rounded-xl hover:bg-mainColor hover:text-white cursor-pointer duration-300">
          Lectures
        </span>
      </div>
    </div>
  );
};

export default NewsTag;

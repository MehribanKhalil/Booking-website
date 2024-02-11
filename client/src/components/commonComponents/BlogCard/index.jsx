import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({image,title,date,readingCount}) => {
  return (
    <div className="blog-card group">
      <div className=" overflow-hidden rounded-xl">
        <Link>
          <img
            src={image}
            alt="blog-img"
            className=" w-full group-hover:scale-110 overflow-hidden duration-500"
          />
        </Link>
      </div>
      <div className="blog-content py-4">
        <h3 className=" line-clamp-2 text-2xl font-medium  group-hover:text-mainColor duration-500">
          <Link>{title}</Link>
        </h3>
        <div className="flex items-center space-y-2 gap-2 text-gray-600 font-medium ">
          <p>{date}</p>
          <p className=" block w-2 h-2 bg-mainColor rounded-full mt-1"></p>
          <p>{readingCount} read</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, title, date, authorName, info }) => {
  return (
    <div className="blog-card group">
      <div className=" overflow-hidden rounded-lg">
        <Link>
          <img
            src={image}
            alt="blog-img"
            className=" shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full group-hover:scale-110 overflow-hidden duration-500"
          />
        </Link>
      </div>
      <div className="blog-content py-4 px-1">
        <div className="flex items-center justify-between space-y-2 pb-1 gap-2 text-gray-600 font-medium ">
          <p>{date}</p>
          <span>By {authorName}</span>

          {/* <p className=" block w-2 h-2 bg-mainColor rounded-full mt-1"></p> */}
        </div>

        <h3 className="blog-title line-clamp-2 text-xl  font-semibold  group-hover:text-mainColor duration-500">
          <Link>{title}</Link>
        </h3>

        <p className=" blog-info line-clamp-2 pt-3">{info}</p>
      </div>
    </div>
  );
};

export default BlogCard;

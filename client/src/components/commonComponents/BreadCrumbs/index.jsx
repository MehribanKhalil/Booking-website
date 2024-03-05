import React, { useEffect } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import "./index.scss";
import { useGetHotelDetail } from "@/hooks/UseGetHotels";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { data, isLoading } = useGetHotelDetail(id);


  

  const isDetailPage = pathname.includes("/detail/");

  useEffect(() => {
    if (data?._id === id) {
      return data?.title;
    }
  }, []);

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      const path = array.slice(0, index + 1).join("/");
      return (
        <span key={path}>
          <NavLink to={path}>{crumb}</NavLink>
        </span>
      );
    });

  return (
    <section id="breadcrumbs">
      <div
        className={`banner-container   flex justify-center bg-center items-center flex-col ${
          pathname === "/hotels" ? "h-[65vh]" : "h-[50vh]"
        }`}
      >
        <h2 className="breadcrumb-title text-white text-xl md:text-5xl  capitalize  font-semibold pb-6">
          {isDetailPage ? data?.title : crumbs}
        </h2>

        <p className="breadcrumb-links flex gap-2 items-center capitalize text-white  text-xl">
          <Link
            to={"/"}
            className=" text-white text-opacity-70 flex items-center"
          >
            Home
          </Link>
          <span className="breadcrumb-separator flex justify-center  items-center rounded-full w-2 h-2 bg-white "></span>
          <span className="breadcrumb-current font-medium">
            {isDetailPage ? data?.title : crumbs}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Breadcrumbs;

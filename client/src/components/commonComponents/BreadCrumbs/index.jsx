import React from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import './index.scss'

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const {id}=useParams()

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
      <div className="banner-container  flex justify-center bg-center items-center flex-col">
        <h2 className="breadcrumb-title text-white text-5xl  capitalize  font-semibold pb-6">
          {crumbs}
        </h2>
        
       

        <p className="breadcrumb-links flex gap-2 items-center capitalize text-white text-xl">
          <Link
            to={"/"}
            className=" text-white text-opacity-70 flex items-center"
          >
            Home
          </Link>
          <span className="breadcrumb-separator flex justify-center  items-center rounded-full w-2 h-2 bg-white "></span>
          <span className="breadcrumb-current font-medium"> {crumbs}</span>
        </p>

       
      </div>
    </section>
  );
};

export default Breadcrumbs;

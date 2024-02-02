import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

import './index.scss'

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className=" flex  justify-between items-center py-4 bg-red-300 wrapper">
        <div className=" flex items-center gap-12">
          <NavLink to={"/"}>
            <img
              src="https://andit.co/projects/html/and-tour/demo/assets/img/logo_black.png"
              alt="nav-logo"
              className=" w-[160px]"
            />
          </NavLink>
          <NavLink className='nav-item' to={"/"}> Home </NavLink>
          <NavLink className='nav-item' to={"/"}> Categories </NavLink>
          <NavLink className='nav-item' to={"/"}> Pages </NavLink>
          <NavLink className='nav-item' to={"/"}> Dashboard </NavLink>
          <NavLink className='nav-item' to={"/"}> News </NavLink>
          <NavLink className='nav-item' to={"/"}> Contact </NavLink>
        </div>
        <div>
          <button className=" text-lg flex gap-2 shadow border border-gray-300 p-3  rounded-3xl">
            <FaBars />
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

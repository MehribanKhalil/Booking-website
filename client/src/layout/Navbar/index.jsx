import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


import "./index.scss";
import Logo from "@/components/NavbarComponents/Logo";
import Account from "@/components/NavbarComponents/Account";
import Search from "@/components/NavbarComponents/Search";
import NavLinks from "@/components/NavbarComponents/NavLinks";

const Navbar = () => {
  const [isScroll, setisScroll] = useState(false);

  const nav = () => {
    const scroll = window.scrollY;
    scroll > 50 ? setisScroll(true) : setisScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", nav);
    return () => {
      window.removeEventListener("scroll",nav);
    };
  }, []);

  return (
    <nav id="navbar">
      <div
        className={` ${
          isScroll
            ? " bg-black  bg-opacity-80    py-3  z-40  translate-y-0"
            : "py-4   "
        } duration-500 flex text-white  justify-between items-center fixed z-50 top-0 left-0 w-full  wrapper`}
      >
         <NavLink to={"/"}>
        <Logo isScroll={isScroll} />
      </NavLink>
       
       <NavLinks isScroll={isScroll} />

        <div className=" flex justify-between items-center gap-3 sm:gap-6">
        <Search/>
       <Account/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

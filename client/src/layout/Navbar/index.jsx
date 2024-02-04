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
    scroll > 40 ? setisScroll(true) : setisScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", nav);
  }, []);

  return (
    <nav id="navbar">
      <div
        className={` ${
          isScroll
            ? " bg-black bg-opacity-80 text-white  fixed top-0 left-0 w-full py-3  z-20"
            : "py-4  "
        } duration-300 flex  justify-between items-center  wrapper`}
      >
         <NavLink to={"/"}>
        <Logo />
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

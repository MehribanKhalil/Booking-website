import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./index.scss";
import Logo from "@/components/NavbarComponents/Logo";
import Account from "@/components/NavbarComponents/Account";
import Search from "@/components/NavbarComponents/Search";
import NavLinks from "@/components/NavbarComponents/NavLinks";
import Hamburger from "hamburger-react";
import MobileNav from "@/components/NavbarComponents/MobileNav";

const Navbar = () => {
  const [isScroll, setisScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const nav = () => {
    const scroll = window.scrollY;
    scroll > 50 ? setisScroll(true) : setisScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", nav);
    return () => {
      window.removeEventListener("scroll", nav);
    };
  }, []);

  const { pathname } = useLocation();

  return (
    <nav id="navbar">
      <div
        className={` ${
          isScroll || pathname === "/profile"
            ? "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  bg-mainColor  bg-opacity-80    py-3  z-40  translate-y-0"
            : "py-4   "
        } duration-500 flex text-white  justify-between items-center fixed z-50 top-0 left-0 w-full  wrapper $ `}
      >
        <NavLink to={"/"}>
          <Logo isScroll={isScroll} />
        </NavLink>

        <NavLinks isScroll={isScroll} />

        <div className=" flex justify-between items-center gap-3">
          {/* <Search /> */}
          <Account />
          <div className=" md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={23} />
          </div>
        
        </div>

        <MobileNav setOpen={setOpen} isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'

const NavLinks = ({isScroll}) => {
  return (
    <ul className=" hidden lg:flex items-center gap-8 xl:gap-12">
    
    <li
      className={` ${
        isScroll ? " after:bg-white" : " after:bg-black"
      } nav-item`}
    >
      <NavLink className="nav-link" to={"/"}>
        Home
      </NavLink>
    </li>
    <li
      className={` ${
        isScroll ? " after:bg-white" : " after:bg-black"
      } nav-item`}
    >
      <NavLink className="nav-link" to={"/categories"}>
        Categories
      </NavLink>
    </li>
    <li
      className={` ${
        isScroll ? " after:bg-white" : " after:bg-black"
      } nav-item`}
    >
      Pages
    </li>
    <li
      className={` ${
        isScroll ? " after:bg-white" : " after:bg-black"
      } nav-item`}
    >
      <NavLink className="nav-link" to={"/dashboard"}>
        Dashboard
      </NavLink>
    </li>
    <li
      className={` ${
        isScroll ? " after:bg-white" : " after:bg-black"
      } nav-item`}
    >
      <NavLink className="nav-link" to={"/news"}>
        News
      </NavLink>
    </li>
    <li
      className={` ${
        isScroll ? " after:bg-white" : " after:bg-black"
      } nav-item`}
    >
      <NavLink className="nav-link" to={"/contact"}>
        Contact
      </NavLink>
    </li>
    <li
      className={` ${
        isScroll ? " after:bg-white" : " after:bg-black"
      } nav-item`}
    >
      <NavLink className="nav-link" to={"/faq"}>
        FAQ
      </NavLink>
    </li>
  </ul>
  )
}

export default NavLinks
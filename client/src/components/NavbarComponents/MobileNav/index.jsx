import React from 'react'
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import './index.scss'

const MobileNav = ({isOpen,setOpen}) => {
  return (
    <div className={`mobileNav bg-white text-mainColor md:hidden  shadow-2xl w-[300px] fixed top-0 right-0 h-[100vh] ${
        isOpen ? " active " : "  "
      }   z-50
       `}>
        <ul className="flex  flex-col px-10  justify-center h-full  py-24 gap-5">
        <div>
          <button
            onClick={() => setOpen(!isOpen)}
            className=" absolute  right-6 top-[50px] text-mainColor"
          >
            <IoMdClose size={30} />
          </button>
        </div>
    <li
      className='after:bg-white nav-item'
    >
      <NavLink className="nav-link" to={"/"}>
        Home
      </NavLink>
    </li>
  
    <li className='after:bg-white nav-item'>
    <NavLink className="nav-link" to={"/about"}>
        About
      </NavLink>
    </li>
    <li className='after:bg-white nav-item'>
      <NavLink className="nav-link" to={"/hotels"}>
        Hotels
      </NavLink>
    </li>
    <li className='after:bg-white nav-item'>
      <NavLink className="nav-link" to={"/news"}>
        News
      </NavLink>
    </li>
    <li className='after:bg-white nav-item'>
      <NavLink className="nav-link" to={"/contact"}>
        Contact
      </NavLink>
    </li>
    <li className='after:bg-white nav-item'>
      <NavLink className="nav-link" to={"/faq"}>
        FAQ
      </NavLink>
    </li>
  </ul>
    </div>
  )
}

export default MobileNav
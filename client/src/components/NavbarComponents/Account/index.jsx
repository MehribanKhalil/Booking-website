import AccountImage from "@/components/commonComponents/AccountImage";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <DropdownMenu className="">
        <DropdownMenuTrigger>
          
          <div className="  outline-none text-lg flex items-center gap-2 shadow border border-gray-300  px-3 py-2  rounded-3xl">
            <FaBars size={16} />
            <AccountImage />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <NavLink to={'/login'} className=' w-full'>Log in</NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem><NavLink to={'/register'} className=' w-full'>Sign Up</NavLink></DropdownMenuItem>
          <DropdownMenuItem ><NavLink to={'/profile'} className=' w-full'>Profile</NavLink></DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Account;

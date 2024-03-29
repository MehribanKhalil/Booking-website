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
import { NavLink, useNavigate } from "react-router-dom";
import { useGetMe } from "@/hooks/UserHooks";
import { userLogout } from "@/hooks/UseAuth";

const Account = () => {
  const { data: currentUser } = useGetMe();

  const { mutate } = userLogout();
  const nav=useNavigate()
  const handleLogout = () => {
    mutate();
    nav('/login')
  };

  return (
    <div>
      <DropdownMenu className="">
        <DropdownMenuTrigger>
          <div className="  outline-none text-xl ">
            {/* <FaBars size={16} /> */}
            <AccountImage />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{currentUser?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {!currentUser && (
            <>
              <DropdownMenuItem>
                <NavLink to={"/login"} className=" w-full">
                  Log in
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to={"/register"} className=" w-full">
                  Sign Up
                </NavLink>
              </DropdownMenuItem>
            </>
          )}
          {currentUser && (
            <>
              <DropdownMenuItem>
                <NavLink to={"/profile"} className=" w-full">
                  Profile
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button onClick={handleLogout}>Log out</button>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Account;

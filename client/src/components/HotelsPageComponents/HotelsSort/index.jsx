import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

const HotelsSort = () => {
  return (
    <div className="hotels-sort ">
      <DropdownMenu>
        <DropdownMenuTrigger>
            <button className=" flex gap-1 items-center  text-mainColor border border-mainColor  px-2 py-1 rounded-full ">Sort <IoIosArrowDown /></button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>A to Z</DropdownMenuItem>
          <DropdownMenuItem>Z to A</DropdownMenuItem>
          <DropdownMenuSeparator  className='bg-lightBlue mx-2' />

          <DropdownMenuItem>Low to High</DropdownMenuItem>
          <DropdownMenuItem>High to Low</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HotelsSort;

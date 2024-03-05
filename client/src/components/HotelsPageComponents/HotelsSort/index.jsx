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

const HotelsSort = ({ handleSort }) => {
  const handleSortOption = (option) => {
    handleSort(option);
  };

  return (
    <div className="hotels-sort ">
      <DropdownMenu>
        <DropdownMenuTrigger>
            <button className=" flex gap-1 items-center  text-mainColor border border-mainColor  px-2 py-1 rounded-full ">Sort <IoIosArrowDown /></button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleSortOption("A to Z")}>A to Z</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSortOption("Z to A")}>Z to A</DropdownMenuItem>
          <DropdownMenuSeparator  className='bg-lightBlue mx-2' />

          <DropdownMenuItem onClick={() => handleSortOption("Low to High")}>Low to High</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSortOption("High to Low")}>High to Low</DropdownMenuItem>
          {/* <DropdownMenuSeparator  className='bg-lightBlue mx-2' /> */}
          <DropdownMenuItem onClick={() => handleSortOption("Default")}>Default</DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HotelsSort;

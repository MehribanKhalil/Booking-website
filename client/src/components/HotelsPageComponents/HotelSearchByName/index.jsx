import Loader from "@/components/commonComponents/Loader";
import { useGetCategories } from "@/hooks/UseCategories";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import useHotel from "@/hooks/user-hotel";


const HotelSearchByName = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { search, setSearch } = useHotel()


  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <div className="category-filter    border   border-gray-200  rounded-lg">
      <div
        className="filter-title cursor-pointer"
        onClick={() => toggleContent()}
      >
        <h5
          className={`border-b  pb-3 mx-5 border-b-mainColor px-4 pt-7  font-semibold flex justify-between items-center${
            isOpen ? "" : " pb-7"
          }`}
        >
          Search by name
          <IoIosArrowDown
            className={` ${isOpen ? " " : "-rotate-180"} duration-500`}
          />
        </h5>
      </div>
      <div
        className={`filter-content overflow-hidden transition-all duration-500 ${
          isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
        }`}
      >
      <div className="space-y-2 text-lg px-2 flex justify-center items-center text-gray-600 border border-gray-200 mx-2 my-3 ">
        <input
            onChange={e => setSearch(e.target.value)}
            type='text'
            name=''
            value={search}
            id=''
            placeholder='e.g Palazzo'
            className=' py-2 px-3 outline-none'
          />
        <BiSearchAlt className=" min-w-3"  />
      </div>
      </div>
    </div>
  );
};

export default HotelSearchByName;

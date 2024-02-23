import Loader from "@/components/commonComponents/Loader";
import { useGetCategories } from "@/hooks/UseCategories";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CategoryFilter = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const { isLoading, data, error } = useGetCategories();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="category-filter  border border-mainColor  rounded-lg">
      <div
        className="filter-title cursor-pointer"
        onClick={() => toggleContent()}
      >
        <h5
          className={`border-b  pb-3 mx-5 border-b-mainColor px-4 pt-7  font-semibold flex justify-between items-center${
            isOpen ? "" : " pb-7"
          }`}
        >
          Filter Category
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
        <div className=" space-y-2 text-lg px-10 py-7">
          {data.map((category) => (
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                class="filter-input"
                type="checkbox"
                value=""
                id="checkboxDefault"
              />
              <label
                class="inline-block pl-[0.15rem] hover:cursor-pointer text-gray-600"
                for="checkboxDefault"
              >
                <h6 className="">{category.categoryName}</h6>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;

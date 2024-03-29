import useHotel from "@/hooks/user-hotel";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const StarRatingFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { selectedRating, setRating } = useHotel();

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-filter  border border-gray-200  rounded-lg">
      <div
        className="filter-title cursor-pointer"
        onClick={() => toggleContent()}
      >
        <h5
          className={`border-b pb-3 mx-5 border-b-mainColor px-4 pt-7  font-semibold flex justify-between items-center ${
            isOpen ? "" : " pb-7"
          }`}
        >
          Filter Rating{" "}
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
          {[5, 4, 3, 2, 1].map((rating) => (
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                class="filter-input"
                type="checkbox"
                value={rating}
                id={`checkboxRating${rating}`}
                checked={selectedRating === rating}
                onChange={() => setRating(selectedRating === rating ? null : rating)}
              />
              <label
                class="inline-block pl-[0.15rem] hover:cursor-pointer text-yellow-400"
                for="checkboxDefault"
              >
                <p className=" flex gap-1">
                  {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <IoIosStar key={i} />
                    ))}
                </p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarRatingFilter;

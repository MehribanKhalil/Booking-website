import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import './index.scss'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCalendarSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";



const HeaderSearch = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header-search bg-white text-black rounded-full 
    flex justify-between max-w-[1000px] px-10 py-5 mx-auto -mt-[140px] relative ">
      <div className="headerSearchItem flex-col items-start">
        <label htmlFor="" className=" cursor-pointer flex items-center gap-1 text-lg text-mainColor"><FaLocationDot size={19} /> location</label>
        <input
          type="text"
          placeholder="Where are you going ?"
          className="headerSearchInput outline-none  text-neutral-600 placeholder:text-neutral-600"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className="headerSearchItem ">
        <div onClick={() => setOpenDate(!openDate)} className=" cursor-pointer flex-col items-start headerSearchItem ">
        <span className=" flex items-center text-lg text-mainColor  gap-1"><IoCalendarSharp /> Start Date <IoIosArrowRoundForward size={20} />  End Date</span>
        <span
           
          className="headerSearchText text-neutral-700 placeholder:text-neutral-700"
        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        </div>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>

      


      <div className="headerSearchItem flex-col">
              <span className="flex items-center text-lg text-mainColor  gap-1 cursor-pointer" onClick={() => setOpenOptions(!openOptions)}><FaUserFriends /> Guests</span>
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText text-neutral-700 placeholder:text-neutral-700"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

      <div className="headerSearchItem">
        <button className="headerBtn bg-mainColor text-white  px-5 py-3 rounded-full hover:bg-[#0071c2] duration-500" onClick={handleSearch}>Check Availability
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;

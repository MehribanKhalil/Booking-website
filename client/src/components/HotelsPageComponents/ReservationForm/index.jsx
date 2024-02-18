import { DatePicker } from "antd";
import React from "react";
import moment from "moment";

const ReservationForm = ({ pricePerNight }) => {
  return (
    <div className=" hotel-reservation-form  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-5 py-7 rounded-md">
      <div className="flex justify-between items-end">
        <h4 className="text-2xl">RESERVE:</h4>
        <p>
          From <span className="text-xl font-semibold"> ${pricePerNight}</span>
          /night
        </p>
      </div>

      <div className=" flex flex-col gap-3 mt-6">
        <DatePicker
          placeholder="From date "
          onChange={(date, dateString) => console.log(date, dateString)}
          className=" py-3 border-mainColor text-mainColor w-full"
          disabledDate={(current) =>
            current && current.valueOf() < moment().subtract(1, "days")
          }
        />

        <DatePicker
          placeholder="To date"
          onChange={(date, dateString) => console.log(date, dateString)}
          className=" py-3 border-mainColor text-mainColor w-full"
        />
      </div>
    </div>
  );
};

export default ReservationForm;

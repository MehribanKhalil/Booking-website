import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useAddBooking } from "@/hooks/UseAddBooking";
import { useMutation } from "@tanstack/react-query";
import Button from "@/components/commonComponents/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { useGetServices } from "@/hooks/UseHotelExtraServices";
import { toast } from "sonner";
import { addBooking } from "@/services/BookingService";

const ReservationForm = ({ pricePerNight, _id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const { data, isLoading, error } = useGetServices();
  const [selectedService, setSelectedServices] = useState([]);
  const [serviceTotal, setServiceTotal] = useState(0);
  const { mutate, isSuccess } = useMutation({
    mutationFn: (data) => addBooking(data),
    mutationKey: ["booking"],
    onError: (error) => {
      if (error) {
        toast.error(error.response.data.message);
      }
    },
  });

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  if(isSuccess) {
    toast.success("Your booking has been successfully")
  }

  const handleServiceChange = (id, price) => {
    if (!checkIn || !checkOut) {
      return toast.error("Please select check-in and check-out dates first.");
    }
    if (id) {
      const isSelected = selectedService.includes(id);
      if (isSelected) {
        setSelectedServices(selectedService.filter((serviceId) => serviceId !== id));
        setServiceTotal(serviceTotal - price);
      } else {
        setSelectedServices([...selectedService, id]);
        setServiceTotal(serviceTotal + price);
      }
    }
  };

  console.log(selectedService);

  useEffect(() => {
    if (checkIn && checkOut) {
      const daysOfStay = checkOut.diff(checkIn, "days");
      const costOfDay = daysOfStay * pricePerNight;
      const totalCostWithServices = costOfDay + serviceTotal;
      // Ensure totalCostWithServices is not negative
      const calculatedTotalCost = totalCostWithServices >= 0 ? totalCostWithServices : 0;
      setTotalCost(calculatedTotalCost);
    }
  }, [checkIn, checkOut, pricePerNight, serviceTotal]);
    

  const handleAdultIncrement = () => {
    setAdultCount((prevCount) => prevCount + 1);
  };

  const handleAdultDecrement = () => {
    if (adultCount > 1) {
      setAdultCount((prevCount) => prevCount - 1);
    }
  };

  const handleChildrenIncrement = () => {
    setChildrenCount((prevCount) => prevCount + 1);
  };

  const handleChildrenDecrement = () => {
    if (childrenCount > 0) {
      setChildrenCount((prevCount) => prevCount - 1);
    }
  };

  console.log("salam", checkIn);
  console.log("salam", checkOut);

  console.log(totalCost);

  const submit = () => {
    if (!checkIn && checkOut) {
      return toast(
        "You have to choose from date and end date for reservation "
      );
    }
    const group = {
      checkIn: checkIn,
      checkOut: checkOut,
      adultCount: adultCount,
      childrenCount: childrenCount,
      totalCost: totalCost,
      services: selectedService,
    }
    console.log(group)
    mutate({
      hotelId: _id,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      adultsCounts: adultCount,
      childCounts: childrenCount,
      amountPaid: totalCost,
      services: selectedService,
    });
  };

  return (
    <div className=" hotel-reservation-form  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-10 rounded-md">
      <div className="flex justify-between items-end">
        <h4 className="text-2xl text-mainColor">RESERVE:</h4>
        <p>
          From <span className="text-xl font-semibold"> ${pricePerNight}</span>
          /night
        </p>
      </div>

      <div className=" flex flex-col gap-3 mt-6">
        <DatePicker
          color="mainColor"
          placeholder="From date "
          onChange={(date) => setCheckIn(date)}
          className=" py-3 border-mainColor text-mainColor w-full "
          disabledDate={(current) =>
            current && current.valueOf() < moment().subtract(1, "days")
          }
        />

        <DatePicker
          placeholder="To date"
          onChange={(date) => setCheckOut(date)}
          className=" py-3 border-mainColor text-mainColor w-full"
        />
      </div>

      <div className=" hover:border-lightBlue  flex duration-200 justify-between items-center  px-3 py-2 my-3 border border-mainColor rounded-md">
        <p className="text-sm text-gray-400">Adults</p>
        <div className="flex items-center  gap-3 text-lg">
          <button className=" text-2xl" onClick={handleAdultDecrement}>
            -
          </button>
          <span>{adultCount}</span>
          <button className="text-xl" onClick={handleAdultIncrement}>
            +
          </button>
        </div>
      </div>

      <div className=" flex hover:border-lightBlue  duration-200 justify-between items-center  px-3 py-2 my-3 border border-mainColor rounded-md">
        <p className=" text-sm text-gray-400">Children</p>
        <div className="flex items-center  gap-3 text-lg">
          <button className=" text-2xl" onClick={handleChildrenDecrement}>
            -
          </button>
          <span>{childrenCount}</span>
          <button className="text-xl" onClick={handleChildrenIncrement}>
            +
          </button>
        </div>
      </div>

      <div className="extra-services py-5">
        <h4 className=" text-xl text-mainColor">Extra Services</h4>
        <div className="services space-y-3 pt-4">
          {data?.map((service) => (
            <div className="flex items-center space-x-2" key={service._id}>
              <input type="checkbox"  onChange={() => handleServiceChange(service?._id, service?.price)} />
              <label
                htmlFor={service._id}
                className=" font-medium leading-none peer-disabled:cursor-not-allowed  text-mainColor peer-disabled:opacity-70 flex justify-between items-center w-full"
              >
                <h2>{service.serviceName}</h2>
                <h6 className=" text-lg ">${service.price}</h6>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className=" border-t border-gray-400 my-7 py-3">
        <div className=" my-2 flex justify-between items-center ">
          <h4 className=" text-xl text-mainColor">Total Cost</h4>
          <span className="text-2xl">${totalCost}</span>
        </div>
      </div>

      <div className=" flex justify-center">
        <Button onClick={submit}>Book Your Stay Now</Button>
      </div>
    </div>
  );
};

export default ReservationForm;

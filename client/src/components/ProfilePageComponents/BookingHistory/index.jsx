import React from "react";

const BookingHistory = ({className}) => {
  return (
    <div className={`booking-history border border-gray-100 rounded-lg p-5 ${className}`}>
      <div className=" space-y-1 pb-4 text-gray-500">
        <h5 className=" text-mainColor  text-2xl font-medium ">My Bookings</h5>
        <p>Here you can manage your order</p>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full  text-center">
                <thead className="border-b  bg-[#384cffbd] font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      Order ID
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Date
                    </th>
                    <th scope="col" className=" px-6 py-4">
                        Booking type
                    </th>
                    <th scope="col" className=" px-6 py-4">
                    Booking amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td>
                    <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap  px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
                    <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                    <td className="whitespace-nowrap  px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap  px-6 py-4">@fat</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;

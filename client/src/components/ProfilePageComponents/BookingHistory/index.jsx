import Loader from "@/components/commonComponents/Loader";
import { useGetMe } from "@/hooks/UserHooks";
import React from "react";
import { useNavigate } from "react-router-dom";

const BookingHistory = ({ className }) => {
  const { data, isLoading, error } = useGetMe();
  if (isLoading) {
    return <Loader />;
  }
  const nav = useNavigate();
  return (
    <div
      className={`booking-history border border-gray-100 rounded-lg p-5 ${className}`}
    >
      <div className=" space-y-1 pb-4 text-gray-500">
        <h5 className=" text-mainColor  text-2xl font-medium ">My Bookings</h5>
        <p>Here you can manage your order</p>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full  text-center">
                <thead className="border-b  bg-mainColor font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      Hotel Name
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Booking Date
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Check-In
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Check-Out
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Total Cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.bookings.length === 0 ? (
                    <p className=" py-4 text-lg font-medium">
                      No bookings yet .{" "}
                      <span
                        className=" italic border-b border-mainColor cursor-pointer"
                        onClick={() => nav("/hotels")}
                      >
                        {" "}
                        Discover our hotels
                      </span>
                    </p>
                  ) : (
                    data?.bookings.map((booking) => (
                      <tr
                        className="border-b dark:border-neutral-500 font-medium"
                        key={booking._id}
                      >
                        <td className="whitespace-nowrap  px-6 py-4">
                          {booking?.hotelId.title}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {booking?.createdAt.toString().split("T")[0]}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {booking?.checkInDate.toString().split("T")[0]}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {booking?.checkOutDate.toString().split("T")[0]}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          ${booking?.amountPaid}
                        </td>
                      </tr>
                    ))
                  )}
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

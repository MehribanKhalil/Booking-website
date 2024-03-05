import Loader from "@/components/commonComponents/Loader";
import PageTitle from "@/components/commonComponents/PageTitle";
import { getHotels } from "@/services/HotelsService";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { useDeleteHotel } from "@/hooks/UseGetHotels";

const GetHotels = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["hotels"],
    staleTime: 1000 * 60 * 2,
    queryFn: getHotels,
  });

  const { mutate: deleteHotelMutation } = useDeleteHotel();
   const handleDelete = (hotelId) => {
     deleteHotelMutation(hotelId);
   };



  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="  py-10">
      <Helmet>
        <title>GetHotels</title>
      </Helmet>

      {/* <div className="pt-16 pb-10">
        <PageTitle title="Hotels" />
      </div> */}
      <button className=" border mx-7 my-3 border-gray-600  rounded-md px-3 py-1 ">
              New Hotel
            </button>
      <div className="flex flex-col ">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left">
                <thead className=" bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      Image
                    </th>

                    <th scope="col" className=" px-6 py-4">
                      Title
                    </th>

                    <th scope="col" className=" px-6 py-4">
                      Description
                    </th>

                    <th scope="col" className=" px-6 py-4">
                      Price
                    </th>

                    <th scope="col" className=" px-6 py-4">
                      Size
                    </th>

                    <th scope="col" className=" px-6 py-4">
                      Rating
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                {data.map((hotel) => (
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        <img
                          src={hotel.mainImage}
                          className=" w-[200px]"
                          alt=""
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        <NavLink>{hotel.title}</NavLink>
                      </td>
                      <td className=" px-6 py-4 ">
                        <p className=" max-w-[500px] text-sm line-clamp-3">
                          {hotel.description}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        ${hotel.pricePerNight}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {hotel.size}m<sup>2</sup>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {hotel.starRating}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className=" space-x-3">
                          <button className=" p-2">
                            <FaRegEye size={20} />
                          </button>
                          <button
                          className=" p-2"
                            onClick={() => handleDelete(hotel._id)}
                          >
                            <IoMdTrash size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetHotels;

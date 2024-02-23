import HeroHotelCard from "@/components/commonComponents/HeroHotelCard";
import { getHotels } from "@/services/HotelsService";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const HotelPageMainSection = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["hotels"],
    staleTime: 1000 * 60 * 2,
    queryFn: getHotels,
  });

  return (
    <div className=" wrapper  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {data &&
        data.map((item) => (
          <React.Fragment key={item._id}>
            <HeroHotelCard {...item} />
          </React.Fragment>
        ))}
    </div>
  );
};

export default HotelPageMainSection;

import HeroHotelCard, { HeroHotelCardSkeleton } from "@/components/commonComponents/HeroHotelCard";
import { getHotels } from "@/services/HotelsService";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useHotel from "@/hooks/user-hotel";
import HotelPageCard from "@/pages/Hotels/HotelPageCard";

const HotelPageMainSection = ({filteredData, isLoading,sortedData,view}) => {

  return (
    <div className={`wrapper  grid grid-cols-1  gap-10 ${view===4 ? 'md:grid-cols-2 xl:grid-cols-3' : ''}`}>
         {filteredData &&
        filteredData.map(item => (
          <React.Fragment key={item._id}>
            <>
              {isLoading ? (
                <HeroHotelCardSkeleton />
              ) : ( 
                view ===4 ? <HeroHotelCard {...item} /> :<HotelPageCard
                {...item}
                 facility={item.facilities.map(item=>item.facilityTitle).join(' / ')}
               />
                
              )}
            </>
          </React.Fragment>
        ))}
    </div>
  );
};

export default HotelPageMainSection;

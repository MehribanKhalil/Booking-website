import { getHotelDetail } from "@/services/HotelsService";
import { useQuery } from "@tanstack/react-query";

const useGetHotelDetail = (hotelId) => {
  return useQuery({
    queryKey: ['hotelsDetail', hotelId],
    queryFn: () => getHotelDetail(hotelId),
  });
};

export default useGetHotelDetail;
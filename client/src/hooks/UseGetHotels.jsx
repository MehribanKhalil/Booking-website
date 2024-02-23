import { deleteHotel, getHotelDetail } from "@/services/HotelsService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetHotelDetail = (hotelId) => {
  return useQuery({
    queryKey: ["hotelsDetail", hotelId],
    queryFn: () => getHotelDetail(hotelId),
  });
  
};

export const useDeleteHotel = () => {
  const queryClient = useQueryClient()
  return useMutation( {
    mutationFn: hotelId => deleteHotel(hotelId),
    mutationKey: ["deleteHotel"],
    onSuccess: () => {
      queryClient.invalidateQueries(["hotels"]);
    }
  });
};

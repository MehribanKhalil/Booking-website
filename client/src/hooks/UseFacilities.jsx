import { getFacilites } from "@/services/FacilitesService";
import { useQuery } from "@tanstack/react-query";

export const useGetFacilities = () => {
  return useQuery({
    queryKey: ["facilities"],
    queryFn: getFacilites,
  });
  
};

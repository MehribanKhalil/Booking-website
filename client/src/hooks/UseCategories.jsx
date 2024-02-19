import { getCatgories } from "@/services/CategoryService";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCatgories,
  });
  
};

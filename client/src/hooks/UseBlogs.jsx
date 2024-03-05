import { getBlogs } from "@/services/BlogServices";
import { useQuery } from "@tanstack/react-query";

//GET TESTIMONIALS
export const useGetBlogs = () => {
    return useQuery({
      queryKey: ["blogs"],
      queryFn: getBlogs,
    });
  };
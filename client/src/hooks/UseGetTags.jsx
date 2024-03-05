import { getBlogs } from "@/services/BlogServices";
import { getTags } from "@/services/BlogTags";
import { useQuery } from "@tanstack/react-query";

//GET TESTIMONIALS
export const useGetTags = () => {
    return useQuery({
      queryKey: ["tags"],
      queryFn: getTags,
    });
  };
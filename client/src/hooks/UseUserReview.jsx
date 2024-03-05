import { addReview, getReview, likeComment } from "@/services/UserReview";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";


//GET REVIEWS
export const useGetReviews = (reveiwId) => {
  return useQuery({
    queryKey: ["hotelReviews", reveiwId],
    staleTime: 1000 * 60,
    queryFn: () => getReview(reveiwId),
  });
};

//ADD REVIEWS
export const UseAddReview = (dataId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => addReview(data, dataId),
    mutationKey: ["addreview"],
    onSuccess: () => {
        queryClient.invalidateQueries(["hotelReviews", dataId]);
        toast.success("Review successfully added!")
    },
    onError:(error)=>{
        if(error){
            toast.error(error.response.data.message)
        }
    }
  });
};


//LIKE REVIEWS
export const UseLikeReview = (hotelId,reviewId,userHasLiked) => {
  const queryClient = useQueryClient();
    return useMutation({
      mutationFn: () => likeComment(hotelId,reviewId),
      mutationKey: ["likeComment"],
      onSuccess: () => {
        queryClient.invalidateQueries(["hotelReviews", hotelId]);
        if (userHasLiked) {
          toast.success("Comment liked!")
        } else{
          toast.success("Comment unliked!")
        }
      },
      onError:(error)=>{
          if(error){
              toast.error(error.response.data.message)
          }
      }
    });
  };

  
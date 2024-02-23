import { addBooking } from "@/services/CategoryService";
import { useMutation } from "react-query";

export const useAddBoking = () => {
  return useMutation({
    mutationFn: (data) => addBooking(data),
    mutationKey: ["booking"],
    onSuccess: (data) => {
      if (data) {
        toast.success("successfully");
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};

import { addBooking, getAvailable } from "@/services/BookingService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useAddBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => addBooking(data),
    mutationKey: ["booking"],
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["me"] });
      queryClient.invalidateQueries({ queryKey: ["me"] });
      toast.success("Booking added successfully!");
    },
    onError: (error) => {
      if (error) {
        toast.error(error.response.data.message);
      }
    },
  });
};

export const useCheckAvailable = () => {
  return useQuery({
    queryFn: (data) => getAvailable(data),
    mutationKey: ["checkAvailable"],
  });
};

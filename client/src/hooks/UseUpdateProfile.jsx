import { updateProfile } from "@/services/UserService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateProfile(data),
    mutationKey: ["updateSettings"],
    onSuccess: (data) => {
      toast.success(data.message);
      const { id } = data;
      queryClient.refetchQueries({ queryKey: ["me"] });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response.data.error);
    },
  });
};

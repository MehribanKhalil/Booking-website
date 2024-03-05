import { changeAvatar } from "@/services/UserService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useChangeAvatar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => changeAvatar(data),
    mutationKey: ["avatar"],
    onSuccess: () => {
      queryClient.invalidateQueries(["me"]);
      toast.success('Profile image updated successfully!')
    },
  });
};

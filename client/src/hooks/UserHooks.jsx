import { authLogin, authRegister } from "@/services/AuthService";
import { changePassword, getCurrentUser } from "@/services/UserService";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useGetMe = () => {
  return useQuery({
    queryFn: () => getCurrentUser(),
    queryKey: ["me"],
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: true,
  });
};


export const useChangePassword = () => {
  return useMutation({
    mutationFn: data => changePassword(data),
    mutationKey: ['changePassword'],
    onSuccess: () => toast.success('Password changed successfully'),
    onError: error => toast.error(error.response.data.error)
  })
}
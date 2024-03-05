import { authLogin, authLogout, authRegister } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

//USER REGISTRATION
export const userRegister = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation({
    mutationFn: (data) => authRegister(data),
    mutationKey: ["register"],
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      if (data) {
        console.log("Registration successful:", data);
        toast.success("Verify message sent successfully");
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};

// USER LOGIN
export const userLogin = () => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => authLogin(data),
    mutationKey: ["login"],
    onSuccess: (data) => {
      nav("/");
      queryClient.invalidateQueries({ queryKey: ["me"] });
      console.log("Login successful:", data);
      toast.success("Logged in successfully!");
    },
    onError: (error) => {
      if (error) {
        console.log("Login error:", error.response.data.message);
        toast.error(error.response.data.message);
      }
    },
  });
};

//USER LOG OUT
export const userLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => authLogout(),
    mutationKey: ["logout"],
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["me"] });
      toast.success("Logged out successfully!");
    },
    onError: (error) => {
      console.error("Logout error:", error.respone.data.message);
    },
  });
};

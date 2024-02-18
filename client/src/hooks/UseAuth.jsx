import { authLogin, authRegister } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export const userRegister = () => {
  return useMutation({
    mutationFn: (data) => authRegister(data),
    mutationKey: ["register"],
    onSuccess: (data) => {
      console.log("Registration successful:", data);
    },
    onError: (error) => {
      // console.log('user already exist');
      console.error("Registration error:", error.respone.data.message);
    },
  });
};


export const userLogin = () => {
  return useMutation({
    mutationFn: (data) => authLogin(data),
    mutationKey: ["login"],
    onSuccess: (data) => {
      console.log("Login successful:", data);
    },
    onError: (error) => {
      console.error("Login error:", error.respone.data.message);
    },
  });
};


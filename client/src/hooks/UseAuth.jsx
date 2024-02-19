import { authLogin, authRegister } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"


export const userRegister = () => {
  const nav=useNavigate()
  return useMutation({
    mutationFn: (data) => authRegister(data),
    mutationKey: ["register"],
    onSuccess: (data) => {
      if(data) {
        console.log("Registration successful:", data);
        toast.success("Registration successful")
        nav('/')
      }
    },
    onError: (error) => {
        toast.error(error.response.data.message);
      // console.log('user already exist');
      // console.log("Registration error:", error.message);
      // toast.error('slam',error.respone.data.message)

    }
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


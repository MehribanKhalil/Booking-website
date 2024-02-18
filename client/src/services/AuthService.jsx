import { api } from "./api";


export const authRegister = async (formData) => {
  try {
    const response = await api.post(`/auth/register`, formData );
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};

export const authLogin = async (formData) => {
  try {
    const response = await api.post(`/auth/login`, formData );
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};



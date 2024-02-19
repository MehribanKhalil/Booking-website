import { api } from "./api";


export const authRegister = async (formData) => {
  try {
    const response = await api.post(`/auth/register`, formData );
    if(!response.data) {
      throw new Error("Registration failed");
    }
    return response.data;
  } catch (error) {
    //  throw new Error("Registration failed");
      throw error
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



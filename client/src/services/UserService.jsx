import { api } from "./api";

export const getCurrentUser = async () => {
  try {
    const res = await api.get("/me");
    if (!res.data) {
      throw new Error("Failed to fetch current user. Please try again later.");
    }
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const changeAvatar = async (formData) => {
  try {
    const res = await api.put("/changeAvatar", formData);
    if (!res.data) {
      throw new Error("Failed to change avatar. Please try again later.");
    }
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (data) => {
  try {
    const res = await api.put(`/change-password`, data);
    if (!res.data) {
      throw new Error("No data received from server");
    }
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (data) => {
  try {
    const { id } = data;
    const res = await api.put(`/update-profile?id=${id}`, data);
    if (!res.data) {
      throw new Error("No data received from server");
    }
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

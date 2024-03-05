import { api } from "./api";

//ADD BOOKING
export const addBooking = async (data) => {
  try {
    const response = await api.post(`/addBooking`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAvailable = async (params) => {
  try {
    const { guests,location, checkIn, checkOut } = params;
    const res = await api.get(
      `/getAvailable?guests=${guests}&checkIn=${checkIn}&checkOut=${checkOut}&location=${location}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

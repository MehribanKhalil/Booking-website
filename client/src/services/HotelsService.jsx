import { api } from "./api";

export const getHotels = async () => {
  try {
    const response = await api.get('/hotels' );
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error); 
    throw new Error("Failed to fetch hotels. Please try again later."); 
  }
};


export const getHotelDetail = async (id) => {
    try {
      const response = await api.get(`/hotels/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching hotel:", error); 
      throw new Error("Failed to fetch hotel. Please try again later."); 
    }
  };


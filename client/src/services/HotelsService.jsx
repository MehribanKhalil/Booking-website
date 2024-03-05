import { api } from "./api";


//GET HOTELS
export const getHotels = async () => {
  try {
    const response = await api.get('/hotels' );
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error); 
    throw new Error("Failed to fetch hotels. Please try again later."); 
  }
};

//GET HOTEL DETAIL
export const getHotelDetail = async (id) => {
    try {
      const response = await api.get(`/hotels/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching hotel:", error); 
      throw new Error("Failed to fetch hotel. Please try again later."); 
    }
  };


//DELETE HOTEL
export const deleteHotel = async (id) => {
  try {
    const response = await api.delete(`/hotels/${id}`);
    return response.data;
  } catch (error) {
    // console.error("Error fetching hotel:", error); 
    throw new Error("Failed to delete hotel. Please try again later."); 
  }
};


//GET SIMILAR HOTELS
export const getSimilarHotels = async (id) => {
  try {
    const response = await api.get(`/getSimilar/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to geting similar hotel. Please try again later."); 
  }
};

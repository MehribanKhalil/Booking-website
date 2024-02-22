import { api } from "./api";


//GET Facility

export const getFacilites = async () => {
  try {
    const response = await api.get('/facility' );
    return response.data;
  } catch (error) {
    console.error("Error fetching facilities:", error); 
    throw new Error("Failed to fetch facilities. Please try again later."); 
  }
};
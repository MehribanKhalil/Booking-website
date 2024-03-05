import { api } from "./api";


//GET FACILITIES
export const getTags = async () => {
  try {
    const response = await api.get('/tag' );
    return response.data;
  } catch (error) {
    console.error("Error fetching tag:", error); 
    throw new Error("Failed to fetch tag. Please try again later."); 
  }
};


//CREATE FACILITY
export const createTags = async (data) => {
  try {
    const response = await api.post(`/tag`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create tag. Please try again later.");
  }
};


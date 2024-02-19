import { api } from "./api";


//GET CATEGORIES
export const getCatgories = async () => {
  try {
    const response = await api.get('/category' );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error); 
    throw new Error("Failed to fetch categories. Please try again later."); 
  }
};
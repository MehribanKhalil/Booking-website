import { api } from "./api";


//GET FACILITIES
export const getBlogs = async () => {
  try {
    const response = await api.get('/blog' );
    return response.data;
  } catch (error) {
    console.error("Error fetching blog:", error); 
    throw new Error("Failed to fetch blog. Please try again later."); 
  }
};


//CREATE FACILITY
export const createBlog = async (data) => {
  try {
    const response = await api.post(`/blog`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create blog. Please try again later.");
  }
};


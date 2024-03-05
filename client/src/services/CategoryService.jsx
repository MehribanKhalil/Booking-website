import { api } from "./api";

//GET CATEGORIES
export const getCatgories = async () => {
  try {
    const response = await api.get("/category");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories. Please try again later.");
  }
};

//DELETE CATEGORY
export const deleteCategory = async (id) => {
  try {
    const response = await api.delete(`/category/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete category. Please try again later.");
  }
};

//UPDATE CATEGORY
export const updateCategory = async (id, data) => {
  try {
    const response = await api.put(`/category/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update category. Please try again later.");
  }
};

//CREATE CATEGORY
export const createCategory = async (data) => {
  try {
    const response = await api.post(`/category`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create category. Please try again later.");
  }
};



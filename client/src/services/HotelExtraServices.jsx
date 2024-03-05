import { api } from "./api";


//GET SERVICES
export const getServices = async () => {
  try {
    const response = await api.get('/services' );
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error); 
    throw new Error("Failed to fetch services. Please try again later."); 
  }
};


//CREATE SERVICE
export const createService = async (data) => {
  try {
    const response = await api.post(`/services`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create service. Please try again later.");
  }
};


// DELETE SERVICE
export const deleteService = async (id) => {
  try {
    const response = await api.delete(`/services/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete service. Please try again later.");
  }
};


//UPDATE SERVICE
export const updateService = async(id,data)=>{
  try {
    const response = await api.put(`/services/${id}`,data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update service. Please try again later.");
  }
}
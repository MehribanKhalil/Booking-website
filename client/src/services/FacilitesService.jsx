import { api } from "./api";


//GET FACILITIES
export const getFacilites = async () => {
  try {
    const response = await api.get('/facility' );
    return response.data;
  } catch (error) {
    console.error("Error fetching facilities:", error); 
    throw new Error("Failed to fetch facilities. Please try again later."); 
  }
};

//GET FACILITy by id
export const getFAcilityById = async (id) => {
  try {
    const response = await api.get(`/facility/${id}` );
    return response.data;
  } catch (error) {
    console.error("Error fetching facilities:", error); 
    throw new Error("Failed to fetch facilities. Please try again later."); 
  }
};


//CREATE FACILITY
export const createFacility = async (data) => {
  try {
    const response = await api.post(`/facility`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create faq. Please try again later.");
  }
};


// DELETE FACILITY
export const deleteFacility = async (id) => {
  try {
    const response = await api.delete(`/facility/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete facility. Please try again later.");
  }
};


//UPDATE FACILITY
export const updateFacility = async(id,data)=>{
  try {
    const response = await api.put(`/facility/${id}`,data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update facility. Please try again later.");
  }
}
import { api } from "./api";


//GET TESTIMONIALS
export const getTestimonial = async () => {
  try {
    const response = await api.get('/testimonial' );
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonial:", error); 
    throw error;
  }
};

//GET TESTIMONIAL by id
export const getTestimonialById = async (id) => {
  try {
    const response = await api.get(`/testimonial/${id}` );
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonial:", error); 
    throw error;
  }
};

//CREATE TESTIMONIAL
export const createTestimonial = async (data) => {
  try {
    const response = await api.post(`/testimonial`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// DELETE TESTIMONIAL
export const deleteTestimonial = async (id) => {
  try {
    const response = await api.delete(`/testimonial/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


//UPDATE TESTIMONIAL
export const updateTestimonial = async(id,data)=>{
  try {
    const response = await api.put(`/testimonial/${id}`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
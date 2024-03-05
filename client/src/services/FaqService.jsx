import { api } from "./api";


//GET FAQS
export const getFaqs = async () => {
  try {
    const response = await api.get('/faq' );
    return response.data;
  } catch (error) {
    console.error("Error fetching faqs:", error); 
    throw new Error("Failed to fetch faqs. Please try again later."); 
  }
};


//CREATE FAQ
export const createFaq = async (data) => {
  try {
    const response = await api.post(`/faq`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create faq. Please try again later.");
  }
};


// DELETE FAQ
export const deleteFaq = async (id) => {
  try {
    const response = await api.delete(`/faq/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete faq. Please try again later.");
  }
};


//UPDATE FAQ
export const updateFaq = async(id,data)=>{
  try {
    const response = await api.put(`/faq/${id}`,data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update faq. Please try again later.");
  }
}
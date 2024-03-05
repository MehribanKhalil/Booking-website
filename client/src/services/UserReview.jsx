import { api } from "./api";

//CREATE REVIEW
export const addReview = async (data, id) => {
  try {
    const response = await api.post(`/review/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//GET REVIEW
export const getReview = async (id) => {
  try {
    const response = await api.get(`/review/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//LIKE COMMENT
export const likeComment = async (hotelId, reviewId) => {
  try {
    const response = await api.post(`/review/like-review/${hotelId}`, {
      reviewId,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

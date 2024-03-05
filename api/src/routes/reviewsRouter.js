import express from "express";
import { addLikeToReview, addReview, deleteReview, getReviews } from "../controllers/hotelController.js/hotelReviewController.js";
import { protect } from "../middleware/authMiddleware.js";

const reviews = express.Router();

reviews.post('/review/:id',protect,addReview)
reviews.get('/review/:id', getReviews);
reviews.post('/review/like-review/:id', protect, addLikeToReview)
reviews.delete('/review/:id', deleteReview)



export default reviews;

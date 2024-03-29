import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addBookings, getAvalibilityHotels, getHotelBookings, getSimiralHotels } from "../controllers/bookingController/bookingController.js";

const router = express.Router();

router.post("/addBooking",protect, addBookings);
router.get("/getBooking/:hotelId", getHotelBookings);
router.get("/getSimilar/:hotelId", getSimiralHotels);
router.get('/getAvailable', getAvalibilityHotels)
export default router;

//22

//12


//11

//16
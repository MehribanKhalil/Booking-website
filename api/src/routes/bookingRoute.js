import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addBookings } from "../controllers/bookingController/bookingController.js";

const router = express.Router();

router.post("/addBooking", addBookings);

export default router;

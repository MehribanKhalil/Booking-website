import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";
import { notFound, errorHandler } from './src/middleware/errorHandling.js';



//ROUTES
import authRouter from "./src/routes/authRoute.js";
import userRouter from "./src/routes/userRoute.js";
import myHotels from "./src/routes/hotelsRoute.js";
import bookingRoutes from "./src/routes/bookingRoute.js";

const app = express();

//Middleware
app.use(express.json());
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}));
app.use(cookieParser())


dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api/auth", authRouter);
app.use("/api", userRouter);
app.use("/api", myHotels);
app.use("/api", bookingRoutes);


const port = process.env.PORT || 5000;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

//MongoDB connection
mongoose
  .connect(url)
  .then(console.log("MongoDB connected successfully"))
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

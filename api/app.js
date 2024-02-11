import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from './src/middleware/errorHandling.js';

//ROUTES
import authRouter from "./src/routes/authRoute.js";
import userRouter from "./src/routes/userRoute.js";

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use("/api", userRouter);

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

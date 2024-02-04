import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 5000;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

mongoose
  .connect(url)
  .then(console.log("MongoDB connected successfully"))
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
  

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

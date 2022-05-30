import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import SeedRouter from "./routes/SeedRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use("/api/seed", SeedRouter);

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(" server loading in port number 9000");
});

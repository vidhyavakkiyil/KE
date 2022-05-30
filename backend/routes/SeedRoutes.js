import express from "express";

import Product from "../models/ProductModel.js";
import data from "../data.js";

const SeedRouter = express.Router();

SeedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const CreateProduct = await Product.insertMany(data.products);
  res.send({ CreateProduct });
});
export default SeedRouter;

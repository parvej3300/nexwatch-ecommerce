import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";
import products from "../product.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected!");

    await Product.deleteMany();
    console.log("Old products removed.");

    await Product.insertMany(products);
    console.log("New products inserted!");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();

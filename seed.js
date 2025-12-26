import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import { products } from "../nexwatch-frontend/src/data/products.js";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function importData() {
  try {
    await Product.deleteMany();       // Clear old data
    await Product.insertMany(products);
    console.log("✅ Products imported successfully!");
    process.exit();
  } catch (error) {
    console.log("❌ Error importing:", error);
    process.exit(1);
  }
}

importData();

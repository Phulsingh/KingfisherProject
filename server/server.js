const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/UserRoutes.js");
const productRoutes = require("./Routes/ProductRoutes.js")
const cartRoutes = require("./Routes/CartRoutes.js");
dotenv.config();

const app = express();
const PORT =  5000;
const MONGO_URI = process.env.MONGOURI;

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart",cartRoutes) 

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB",)
)
  .catch((err) => console.log("❌ MongoDB connection error:", err));

app.listen(PORT, () =>
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
);

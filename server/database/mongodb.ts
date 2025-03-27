import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`"✅ MongoDB Connected Successfully"`);
  } catch (error) {
    console.log("❌ MongoDB connection Error:", error);
  }
};

export default connectDB;

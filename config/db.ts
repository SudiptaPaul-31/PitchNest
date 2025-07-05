import mongoose from "mongoose";

let isConnected: boolean = false;

const connectDB = async (): Promise<void> => {
  if (isConnected) {
    console.log("✅ MongoDB already connected.");
    return;
  }

  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    throw new Error("❌ MONGO_URL is not defined in environment variables");
  }

  console.log("🔗 Connecting to MongoDB...");

  try {
    const db = await mongoose.connect(MONGO_URL);
    isConnected = db.connections[0].readyState === 1;

    if (isConnected) {
      console.log("✅ MongoDB connected successfully");
    } else {
      console.log("⚠️ MongoDB connection not ready");
    }
  } catch (err: any) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";

let isConnected: boolean = false;

const connectDB = async (): Promise<void> => {
  // Skip database connection in browser environment
  if (typeof window !== 'undefined') {
    console.log("🖥️  Running in browser - skipping MongoDB connection");
    return;
  }

  if (isConnected) {
    console.log("✅ MongoDB already connected.");
    return;
  }

  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    console.warn("⚠️ MONGO_URL is not defined in environment variables - running in limited mode");
    return;
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
    console.warn("⚠️ MongoDB connection failed:", err.message);
    // Don't exit in development to allow frontend work to continue
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

export default connectDB;

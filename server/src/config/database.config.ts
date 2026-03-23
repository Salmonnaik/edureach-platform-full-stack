import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      console.warn("⚠️  MONGODB_URI is not defined in environment variables");
      return;
    }

    const conn = await mongoose.connect(mongoURI);
    console.log(`✓ MongoDB Connected: ${conn.connection.host}`);
    console.log(`✓ MongoDB Database Name: ${conn.connection.name}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`✗ MongoDB Connection Error: ${error.message}`);
    } else {
      console.error(`✗ MongoDB Connection Error: ${error}`);
    }
    console.warn("⚠️  Server will continue without MongoDB. Some features may not work.");
  }
};

export default connectDB;
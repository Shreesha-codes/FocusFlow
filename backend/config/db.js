import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Succesfully");
  } catch (err) {
    console.error("DB Connection Failed... Please Check", err.message);
    process.exit(1);
  }
};

export default connectDB;

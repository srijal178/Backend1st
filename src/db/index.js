import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected!! DB hose: ${connectInstance.connection.host}`
    );
  } catch (error) {
    console.log("DB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;

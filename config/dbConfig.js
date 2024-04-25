import mongoose from "mongoose";

export async function dbConfig() {
  try {
    if (mongoose.connect.readyState >= 1) {
      return;
    }
    await mongoose.connect(process.env.MONGO_URL)
  } catch (error) {
    console.log("Something wrong in Database");
    console.log(error);
  }
}

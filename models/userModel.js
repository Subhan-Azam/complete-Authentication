import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide user name"],
  },
  email: {
    type: String,
    require: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
  },
  reset_token: {
    type: String,
  },
  reset_token_expiration: {
    type: Date,
  },
  // isVerified: {
  //   type: Boolean,
  //   default: false,
  // },
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
  // forgetPasswordToken: String,
  // forgetPasswordTokenExpiry: Date,
  // verifyToken: String,
  // verifyTokenExpiry: Date,
});

export default mongoose.models.userAuth || mongoose.model("userAuth", userSchema);

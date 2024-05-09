const { default: mongoose } = require("mongoose");

const bookInfo = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxLength: [200, "Too much length"],
    trim: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
    required: [true, "user is required"],
  },
  author: {
    type: String,
    maxLength: [200, "Too much length"],
    trim: true,
    required: [true, "Author name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    max: [20000000000, "Too much price"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Please select catogery"],
    maxLength: [200, "Too much length"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please write description of book"],
    maxLength: [200000, "Too much length"],
    trim: true,
  },
  images_url: {
    type: Array,
    default: [],
    required: [true, "Please add images"],
  },
});

export default mongoose.models.books || mongoose.model("books", bookInfo);

// import mongoose from "mongoose";

// const BookInfo = new mongoose.Schema(
//   {
//     title: {
//   type: String,
//   required: [true, "Title is required"],
//   maxLength: [200, "Too much length"],
//   trim: true,
//     },
// userId: {
//   type: mongoose.Schema.ObjectId,
//   ref: "users",
//   required: [true, "user is required"],
// },
//     author: {
//   type: String,
//   maxLength: [200, "Too much length"],
//   trim: true,
//   required: [true, "Author name is required"],
//     },
//     price: {
//   type: Number,
//   required: [true, "Price is required"],
//   max: [20000000000, "Too much price"],
//   trim: true,
//     },
// category: {
//   type: String,
//   required: [true, "Please select catogery"],
//   maxLength: [200, "Too much length"],
//   trim: true,
// },
// description: {
//   type: String,
//   required: [true, "Please write description of book"],
//   maxLength: [200000, "Too much length"],
//   trim: true,
// },
// images_url: {
//   type: Array,
//   default: [],
//   required: [true, "Please add images"],
// },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.books || mongoose.model("books", BookInfo);

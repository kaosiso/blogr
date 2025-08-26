import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    password: { type: String, required: true },
    savedPosts: {
      type: [String],
      default: [],
    },
    about: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

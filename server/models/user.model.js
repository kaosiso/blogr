import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    savedPosts: {
      type: [String],
      default: [],
    },
    about: { type: String, default: "" }, // ---- suspension fields ----
    isSuspended: { type: Boolean, default: false },
    suspendedUntil: { type: Date, default: null }, // optional temporary suspension
    suspensionReason: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

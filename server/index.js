import express from "express";
import dotenv from "dotenv";
dotenv.config(); 
dotenv.config({ path: path.resolve(process.cwd(), "server/.env") });


import connectDB from "./lib/connectDB.js";
import cors from "cors";
import path from "path";

import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import authRouter from "./routes/auth.route.js";

// dotenv.config(); // load .env variables
const app = express();
const PORT = process.env.PORT || 5000;


// Middleware to parse JSON body
app.use(express.json());

// Allow CORS
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// ✅ Serve uploaded images statically
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Connect to MongoDB
connectDB();

// Mount routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// Error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/connectDB.js";
import cors from "cors";

import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import authRouter from "./routes/auth.route.js";


dotenv.config(); // load .env variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

app.use(cors());

// Connect to MongoDB
connectDB();

// Mount routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

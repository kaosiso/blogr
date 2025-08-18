import express from "express";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

// Example GET route
router.get("/anothertest", (req, res) => {
  res.status(200).send("User route works!");
});

// Example POST route
router.post("/adduser", (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: "User created successfully!",
    data: { name, email },
  });
});
// Protected route
router.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({
    message: "Profile data retrieved successfully",
    user: req.user, // Added by verifyToken middleware
  });
});
export default router;

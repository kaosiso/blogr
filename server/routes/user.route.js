import express from "express";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

// Protected route
router.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({
    message: "Profile data retrieved successfully",
    user: req.user, // Added by verifyToken middleware
  });
});
export default router;

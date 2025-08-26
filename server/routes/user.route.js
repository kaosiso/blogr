import express from "express";
import multer from "multer";
import { isAuthenticated } from "../middleware/auth.js";
import {
  getProfile,
  updateProfile,
  uploadAuth,
  uploadFile,
  getUserPosts,
  getPublicProfile
} from "../controllers/user.controllers.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Get current user posts
router.get("/posts", isAuthenticated, getUserPosts);

// Get current user profile
router.get("/profile", isAuthenticated, getProfile);

// Update profile
router.put("/profile", isAuthenticated, upload.single("image"), updateProfile);

// ImageKit auth
router.get("/upload/auth", isAuthenticated, uploadAuth);

// Upload profile image via backend
router.post("/upload", isAuthenticated, upload.single("file"), uploadFile);

// Dynamic route for public profiles (slug)
router.get("/:slug", getPublicProfile);



export default router;

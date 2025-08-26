import express from "express";
import multer from "multer";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  uploadAuth,
  uploadFile,
  updatePost
} from "../controllers/post.controllers.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", getPosts); // List all posts
router.post("/upload", isAuthenticated, upload.single("file"), uploadFile); // Upload file
router.get("/upload/auth", isAuthenticated, uploadAuth); // ImageKit auth

router.post("/", isAuthenticated, upload.single("coverImage"), createPost); // Create post
router.get("/:slug", getPost); // Get single post
router.put("/:slug", isAuthenticated, updatePost);
router.delete("/:slug", isAuthenticated, deletePost); // Delete post

export default router;

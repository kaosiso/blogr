import express from "express";
import multer from "multer";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  isAuthenticated,
  uploadAuth,
} from "../controllers/post.controllers.js";

const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", isAuthenticated, upload.single("coverImage"), createPost);
router.get("/upload/auth", isAuthenticated, uploadAuth);
router.delete("/:id", isAuthenticated, deletePost);

export default router;

// routes/post.routes.js
import express from "express";
import multer from "multer";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  isAuthenticated,
} from "../controllers/post.controllers.js";

const router = express.Router();

// setup multer (save to uploads/ folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // make sure "uploads/" exists
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// routes
router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", isAuthenticated, upload.single("coverImage"), createPost);
router.delete("/:id", isAuthenticated, deletePost);

export default router;

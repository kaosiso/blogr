// routes/comment.routes.js
import express from "express";
import {
  getPostComments,
  addComment,
  deleteComment,
  editComment,
  reportComment, // <--- import
} from "../controllers/comment.controller.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get("/:postId", getPostComments);
router.post("/:postId", isAuthenticated, addComment);
router.put("/:id", isAuthenticated, editComment);
router.delete("/:id", isAuthenticated, deleteComment);
router.post("/:id/report", isAuthenticated, reportComment); // <--- NEW

export default router;

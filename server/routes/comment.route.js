import express from "express";
import {
  getPostComments,
  addComment,
  deleteComment,
} from "../controllers/comment.controller.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get("/:postId", getPostComments);
router.post("/:postId", isAuthenticated, addComment); // must be logged in
router.delete("/:id", isAuthenticated, deleteComment); // must be logged in

export default router;

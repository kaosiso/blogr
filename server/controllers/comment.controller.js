import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

// GET all comments for a post
export const getPostComments = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({ post: postId })
      .populate("user", "name image")
      .sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch comments", error });
  }
};

// POST a new comment (authenticated users only)
export const addComment = async (req, res) => {
  const { postId } = req.params;
  const { text } = req.body;
  const userId = req.user.id;

  if (!text)
    return res.status(400).json({ message: "Comment cannot be empty" });

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const newComment = new Comment({
      text,
      user: userId,
      post: postId,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: "Failed to add comment", error });
  }
};

// EDIT a comment (only owner or admin)
export const editComment = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const userId = req.user.id;
  const userRole = req.user.role;

  if (!text)
    return res.status(400).json({ message: "Comment cannot be empty" });

  try {
    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    // Only owner or admin can edit
    if (comment.user.toString() !== userId && userRole !== "admin") {
      return res
        .status(403)
        .json({ message: "Not authorized to edit this comment" });
    }

    comment.text = text;
    await comment.save();

    res.status(200).json({ message: "Comment updated successfully", comment });
  } catch (error) {
    res.status(500).json({ message: "Failed to update comment", error });
  }
};

// DELETE a comment (only owner or admin)
export const deleteComment = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const userRole = req.user.role;

  try {
    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    // Only owner or admin can delete
    if (comment.user.toString() !== userId && userRole !== "admin") {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this comment" });
    }

    await comment.deleteOne();
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete comment", error });
  }
};

// controllers/comment.controller.js

// REPORT a comment (any user except the owner)
export const reportComment = async (req, res) => {
  const { id } = req.params; // comment id
  const userId = req.user.id;

  try {
    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user.toString() === userId) {
      return res.status(400).json({ message: "You cannot report your own comment" });
    }

    // Prevent duplicate reports
    if (comment.reports.includes(userId)) {
      return res.status(400).json({ message: "You already reported this comment" });
    }

    comment.reports.push(userId);
    await comment.save();

    res.status(200).json({ message: "Comment reported successfully", reports: comment.reports.length });
  } catch (error) {
    res.status(500).json({ message: "Failed to report comment", error });
  }
};

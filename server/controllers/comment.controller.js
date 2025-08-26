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

// DELETE a comment (authenticated user and owner only)
export const deleteComment = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user.toString() !== userId) {
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

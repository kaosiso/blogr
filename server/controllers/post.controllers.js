// controllers/post.controllers.js
import Post from "../models/post.model.js";
import jwt from "jsonwebtoken";

// ✅ Middleware to check JWT
export const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// ✅ Get all posts
export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

// ✅ Get single post by slug
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

// ✅ Create a new post (with file upload)
export const createPost = async (req, res) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: "You must be logged in to create a post" });
  }

  let slug = req.body.title.replace(/ /g, "-").toLowerCase();
  let existingPost = await Post.findOne({ slug });
  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({
    user: req.user.id,
    slug,
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    content: req.body.content,
    // ✅ use multer's req.file, not req.body
    coverImage: req.file ? `/uploads/${req.file.filename}` : null,
  });

  const post = await newPost.save();
  res.status(201).json(post);
};

// ✅ Delete post
export const deletePost = async (req, res) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: "You must be logged in to delete a post" });
  }

  await Post.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Post deleted successfully" });
};

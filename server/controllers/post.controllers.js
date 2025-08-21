import Post from "../models/post.model.js";
import jwt from "jsonwebtoken";
import { getImageKit } from "../lib/imagekit.js";

// ✅ Middleware to check JWT
export const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Auth header received:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    console.log("JWT_SECRET in backend:", process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT verification error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

// ✅ Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get single post by slug
export const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createPost = async (req, res) => {
  console.log("req.file:", req.file);
  console.log("req.body:", req.body);

  const imagekit = getImageKit();
  console.log("body should show here");

  if (!req.user) return res.status(401).json({ message: "Login required" });

  try {
    // Generate slug (same as before)
    let slug = req.body.title
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    let existingPost = await Post.findOne({ slug });
    let counter = 2;
    while (existingPost) {
      slug = `${slug}-${counter}`;
      existingPost = await Post.findOne({ slug });
      counter++;
    }

    // Upload file to ImageKit if present
    let coverImageUrl = null;
    if (req.file) {
      try {
        const base64Image = req.file.buffer.toString("base64"); // buffer → base64
        const uploadedImage = await imagekit.upload({
          file: base64Image, // ImageKit requires base64 string
          fileName: `${slug}-cover.png`,
        });
        coverImageUrl = uploadedImage.url;
        console.log("✅ Uploaded image URL:", coverImageUrl);
      } catch (err) {
        console.error("❌ ImageKit upload failed:", err.message);
      }
    }

    const newPost = new Post({
      user: req.user.id,
      slug,
      title: req.body.title,
      category: req.body.category,
      desc: req.body.description,
      content: req.body.content,
      coverImage: coverImageUrl,
    });

    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ✅ Update Post (only owner)
export const updatePost = async (req, res) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: "You must be logged in to update a post" });
  }

  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.user.toString() !== req.user.id)
      return res
        .status(403)
        .json({ message: "You are not allowed to edit this post" });

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Delete Post (only owner)
export const deletePost = async (req, res) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: "You must be logged in to delete a post" });
  }

  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.user.toString() !== req.user.id)
      return res
        .status(403)
        .json({ message: "You are not allowed to delete this post" });

    await post.deleteOne();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ ImageKit Upload Auth
export const uploadAuth = (req, res) => {
  try {
    const imagekit = getImageKit();
    const authParams = imagekit.getAuthenticationParameters();
    res.status(200).json(authParams);
  } catch (err) {
    console.error("ImageKit error:", err);
    res.status(500).json({ message: "ImageKit auth error" });
  }
};

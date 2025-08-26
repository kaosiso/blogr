import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Helper function to generate slug from name
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/[^\w-]/g, ""); // remove non-alphanumeric characters except hyphens
};

// REGISTER
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // generate slug from name
    const slug = generateSlug(name);

    // create user
    const newUser = new User({ name, email, password: hashedPassword, slug });
    await newUser.save();

    // sign JWT with "id"
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      message: "User registered successfully!",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        slug: newUser.slug, // include slug in response
        profileImage: newUser.profileImage || null,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // sign JWT with "id"
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        slug: user.slug, // include slug in login response
        profileImage: user.profileImage || null,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

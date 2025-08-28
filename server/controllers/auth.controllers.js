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

    // sign JWT with "id" and "role"
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "User registered successfully!",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        slug: newUser.slug,
        profileImage: newUser.image || null,
        role: newUser.role,
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

    // 🚨 Check if suspended
    if (user.isSuspended) {
      // if suspendedUntil is in the past → auto-unsuspend
      if (user.suspendedUntil && user.suspendedUntil < new Date()) {
        user.isSuspended = false;
        user.suspendedUntil = null;
        user.suspensionReason = "";
        await user.save();
      } else {
        return res.status(403).json({
          error: "Your account is suspended",
          until: user.suspendedUntil,
          reason: user.suspensionReason,
        });
      }
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // sign JWT with "id" and "role"
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        slug: user.slug,
        profileImage: user.image || null,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

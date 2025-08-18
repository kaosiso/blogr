import express from "express";

const router = express.Router();

// Example GET route
router.get("/anothertest", (req, res) => {
  res.status(200).send("User route works!");
});

// Example POST route
router.post("/adduser", (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: "User created successfully!",
    data: { name, email },
  });
});

export default router;

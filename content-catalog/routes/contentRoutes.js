const express = require("express");
const Content = require("../models/ContentModel");

const router = express.Router();

// Get all content
router.get("/", async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch content" });
  }
});

// Add new content
router.post("/", async (req, res) => {
  try {
    const { name, category } = req.body;
    const newContent = new Content({ name, category });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(400).json({ error: "Failed to add content" });
  }
});

module.exports = router;

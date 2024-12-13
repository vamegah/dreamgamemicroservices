const express = require("express");
const { generateRecommendations } = require("../recommendation");

// Mock data (replace with real calls to the content catalog microservice)
const contentCatalog = [
  { id: 1, name: "Soccer Match 1", category: "Soccer" },
  { id: 2, name: "Basketball Game 1", category: "Basketball" },
  { id: 3, name: "Tennis Match 1", category: "Tennis" },
  { id: 4, name: "Soccer Match 2", category: "Soccer" },
  { id: 5, name: "Cricket Match 1", category: "Cricket" },
];

const router = express.Router();

// Get recommendations for a user
router.post("/", async (req, res) => {
  const { userHistory } = req.body;

  if (!userHistory || !userHistory.interests) {
    return res.status(400).json({ error: "User history with interests is required" });
  }

  try {
    const recommendations = generateRecommendations(userHistory, contentCatalog);
    res.json(recommendations);
  } catch (error) {
    console.error("Error generating recommendations:", error);
    res.status(500).json({ error: "Failed to generate recommendations" });
  }
});

module.exports = router;

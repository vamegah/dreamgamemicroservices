const express = require("express");
const elasticClient = require("../elastic");

const router = express.Router();

// Search content by query
router.get("/", async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const results = await elasticClient.search({
      index: "content_catalog",
      body: {
        query: {
          multi_match: {
            query,
            fields: ["name", "category"], // Adjust fields as necessary
          },
        },
      },
    });

    const hits = results.body.hits.hits.map((hit) => hit._source);
    res.json(hits);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Search operation failed" });
  }
});

// Add content to Elasticsearch index
router.post("/", async (req, res) => {
  const { id, name, category } = req.body;

  if (!id || !name || !category) {
    return res.status(400).json({ error: "id, name, and category are required" });
  }

  try {
    await elasticClient.index({
      index: "content_catalog",
      id,
      body: { id, name, category },
    });

    res.status(201).json({ message: "Content indexed successfully" });
  } catch (error) {
    console.error("Indexing error:", error);
    res.status(500).json({ error: "Indexing operation failed" });
  }
});

module.exports = router;

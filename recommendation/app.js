require("dotenv").config();
const express = require("express");
const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();

// Middleware
app.use(express.json());

// Register Routes
app.use("/api/recommendations", recommendationRoutes);

// Start Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Recommendation Engine is running on http://localhost:${PORT}`);
});

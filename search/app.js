require("dotenv").config();
const express = require("express");
const elasticClient = require("./elastic");
const searchRoutes = require("./routes/searchRoutes");

const app = express();

// Middleware
app.use(express.json());

// Register Routes
app.use("/api/search", searchRoutes);

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Search service is running on http://localhost:${PORT}`);
});

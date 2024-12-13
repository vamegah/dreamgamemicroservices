require("dotenv").config();
const express = require("express");
const mongoose = require("./database"); // Connect to the database
const contentRoutes = require("./routes/contentRoutes");

const app = express();

// Middleware
app.use(express.json());

// Register Routes
app.use("/api/content-catalog", contentRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

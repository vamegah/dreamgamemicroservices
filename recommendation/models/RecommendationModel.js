const mongoose = require("mongoose");

const RecommendationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  recommendations: { type: Array, required: true },
});

const Recommendation = mongoose.model("Recommendation", RecommendationSchema);

module.exports = Recommendation;

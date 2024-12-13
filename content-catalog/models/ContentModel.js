const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
});

const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;

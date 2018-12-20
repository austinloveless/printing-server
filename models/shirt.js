var mongoose = require("mongoose");

var shirtSchema = new mongoose.Schema({
  type: String,
  image: String,
  desc: String,
  color: String,
  size: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Shirt", shirtSchema);

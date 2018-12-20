const mongoose = require("mongoose");
require("dotenv").config();
const Shirt = require("./shirt");

mongoose.set("debug", true);

mongoose.connect(
  process.env.MONGODB,
  { useNewUrlParser: true }
);

module.exports = {
  Shirt
};

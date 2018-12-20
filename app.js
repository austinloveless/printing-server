require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const indexRoutes = require("./routes");
const shirtRoutes = require("./routes/shirts");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/shirts", shirtRoutes);
app.use(indexRoutes);

app.listen(port, () => {
  console.log("listening on port", port);
});

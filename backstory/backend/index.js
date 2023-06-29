const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.q1hfmt9.mongodb.net/goodlife?retryWrites=true&w=majority`
);

const PORT = process.env.PORT || 8000;
const app = express();

// Allow CORS
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

// TODO: add routes


app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // listens on this port

const express = require("express");

// CORS
const cors = require("cors");

const app = express();

// DOTENV CONFIG
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// MONGODB CONFIG
const mongoConnect = require("./src/config/mongodb.js");
mongoConnect();

// PORT
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.post("/api", (req, res) => {
  console.log("Hello World");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on https://localhost:${PORT}`);
  }
});

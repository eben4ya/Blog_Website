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

app.use(express.json());
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", require("./src/routes/user.js"));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on https://localhost:${PORT}`);
  }
});

module.exports = app;

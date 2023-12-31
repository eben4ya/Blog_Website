const express = require("express");

const router = express.Router();

const { registerUser, loginUser } = require("../controllers/registerLoginUser");

// route register
router.post("/register", registerUser);

// route login
router.post("/login", loginUser);

module.exports = router;

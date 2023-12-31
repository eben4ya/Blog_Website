// jwt is used to create a token
const jwt = require("jsonwebtoken");
// bcrypt is used to hash the password
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const registerLoginUserModel = require("../models/registerLoginUser.js");

// REGISTER USER
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await registerLoginUserModel.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
};

// LOGIN USER
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await registerLoginUserModel.findOne({ username });
  if (!userDoc) {
    return res.status(400).json("User not found");
  }
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // Generate JWT token
    jwt.sign(
      { username, id: userDoc._id },
      process.env.JWT_SECRET,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json("ok");
      }
    );
  } else {
    res.status(400).json("Wrong Password");
  }
};

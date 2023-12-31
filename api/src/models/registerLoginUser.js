const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const registerLoginUserSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4, // minimal 4 karakter
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const registerLoginUserModel = model(
  "registerLoginUser",
  registerLoginUserSchema
);

module.exports = registerLoginUserModel;

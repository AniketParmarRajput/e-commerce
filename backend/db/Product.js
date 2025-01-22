const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  prize: Number,
  categories: String,
  image: String
});

const UserModel = mongoose.model("User", UserSchema); // Corrected model name
module.exports = UserModel;
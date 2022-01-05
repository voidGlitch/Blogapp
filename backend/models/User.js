const mongoose = require("mongoose");
const { Schema } = mongoose;

//basic struture for the database so the things are in orderwise
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const user = mongoose.model("user", userSchema);
//exports the model
module.exports = user;

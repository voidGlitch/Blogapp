const mongoose = require("mongoose");
const { Schema } = mongoose;

//basic struture for the database so the things are in orderwise
const blogSchema = new Schema({
  //act as a foreign key and helps to distinguish between this user blog from other user's blog this will send a user id to every blog we add like "user": "61d43741670fa9e4f942b40c" and it will be different from another person's blog account
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  common: {
    type: String,
    default: "blog",
  },
  more: {
    type: String,
    default: "",
  },
});

//exports the model
module.exports = mongoose.model("blog", blogSchema);

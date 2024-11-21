const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://miku:miku@blogapp.8lsei.mongodb.net/";

const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("successfully connected to mongodb");
  });
};
module.exports = connectToMongo;

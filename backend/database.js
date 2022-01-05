const mongoose = require("mongoose");
const mongoURL =
  "mongodb://localhost:27017/blog-app?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("successfully connected to mongodb");
  });
};
module.exports = connectToMongo;

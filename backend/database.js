const mongoose = require("mongoose");

const mongoURL = process.env.CONN;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
  }
};

module.exports = connectToMongo;

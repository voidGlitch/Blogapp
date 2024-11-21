require("dotenv").config();
const connectToMongo = require("./database");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000; // Use environment variable PORT for production

// MongoDB connection
connectToMongo();

// Middleware
app.use(cors());
app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/blog", require("./routes/blog"));

// Example route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  console.log(`blog-app backend listening at http://localhost:${port}`);
});

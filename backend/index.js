const connectToMongo = require("./database");
const express = require("express");

var cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

//if we want to use req.body in the thunderclient we use this middleware
app.use(cors());
app.use(express.json());

//available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/blog", require("./routes/blog"));

//just an example of a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`blog-app backend listening at http://localhost:${port}`);
});

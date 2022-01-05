var jwt = require("jsonwebtoken");
const JWT_SECRET = "MIKUISGREAT";

const fetchuser = (req, res, next) => {
  //takes the user's authtoken from the header which we put on
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).send({ error: "Please authenticate using valid-token" });
  }
  try {
    //Synchronously verify given token using a secret to get a decoded token
    const data = jwt.verify(token, JWT_SECRET);
    //sets the data of the user mainly the id to the request of user which will be used in getuser data by using user's id as { id: '61d43741670fa9e4f942b40c' }
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using valid-token" });
  }
};

module.exports = fetchuser;

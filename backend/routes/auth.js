const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "MIKUISGREAT";

//Route:1 POST:create a new user using : "api/auth/createuser" . No Login required
router.post(
  "/createuser",
  [
    // username must be an email
    body("name", "Name should have altleast 3 characters").isLength({ min: 3 }),
    body("email", "Enter a proper email").isEmail(),
    body("password", "password should have altleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //returns an error if the validation doesn't pass
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    //check whether user with same email exists
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry this email already exists try newone",
        });
      }
      //generates a secure password which cannot be read unless it is decrypted
      const salt = bcrypt.genSaltSync(10);
      const secpassword = await bcrypt.hash(req.body.password, salt);
      //creates a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpassword,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      let name = {
        username: user.name,
      };
      let date = {
        userdate: user.date,
      };
      //generates a secret authtoken through which we can identify the valid user is signing in
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({
        name: name.username,
        date: date.userdate,
        success,
        authtoken: authtoken,
      });
      // res.json({ user });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);

//Route:2 POST : Authenticate a user using : POST "/api/auth/login".NO Login requires
router.post(
  "/login",
  [
    // username must be an email

    body("email", "Enter a proper email").isEmail(),
    body("password", "password cannot be empty").exists(),
  ],
  async (req, res) => {
    let success = false;
    //returns an error if the validation doesn't pass validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      //takes the user which we send in the request body and then compare it with the user in database that it exists or not
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, errors: "Please login with correct credentials" });
      }
      //compares the password which is actually user have with the password we put in login
      let passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({ success, errors: "Please login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      let name = {
        username: user.name,
      };
      let date = {
        userdate: user.date,
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({
        name: name.username,
        date: date.userdate,
        success,
        authtoken: authtoken,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);

//Route:3 GET : Getting user data using : Get "/api/auth/getuser". Login requires
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    //gets the user's id from the authtoken using fetchuser middleware
    let userid = req.user.id;
    //find user by its user id and get the details of the user like email name but not the password
    const getuser = await User.findById(userid).select("-password");
    res.json({ getuser });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error occured");
  }
});

module.exports = router;

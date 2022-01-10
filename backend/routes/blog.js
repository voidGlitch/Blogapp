const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Blog = require("../models/Blog");
const { body, validationResult } = require("express-validator");

//Route:1 GET : Getting user's all blogs using : Get "/api/blog/getblog". Login requires
router.get(
  "/getallblog",
  fetchuser,

  async (req, res) => {
    try {
      //gets the users id from the fetchuser function and get all the blog of that particular user
      const blog = await Blog.find({ user: req.user.id });
      res.json(blog);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);

//Route:2 POST : ADD a new blog using : POST "/api/blog/addblog". Login requires
router.post(
  "/addblog",
  [
    //validates the title and description on given conditions
    body("title", "Please use a proper title").isLength({ min: 3 }),
    body(
      "description",
      "please enter a proper description atleast 5 characters"
    ).isLength({
      min: 5,
    }),
  ],
  fetchuser,
  async (req, res) => {
    //gets the title desc and tag from the request body
    const { title, description, tag, image } = req.body;
    //returns an error if the validation doesn't pass
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //creates a new blog schema where we add title desc tag and user's id
      const blog = new Blog({
        title,
        description,
        tag,
        image,
        user: req.user.id,
      });
      // saves the blog to the database
      const savedblog = await blog.save();
      res.json(savedblog);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);

//Route:3 PUT : Update an existing blog using : Put "/api/blog/updateblog/:id". Login requires
router.put("/updateblog/:id", fetchuser, async (req, res) => {
  const { title, description, tag, image } = req.body;
  try {
    //gets the title desc and tag from the request body

    //creates an empty newblog
    const newblog = {};
    //if there is title which need to be updated then we put title as newblog's title and append the new title
    if (title) {
      newblog.title = title;
    }
    //if there is description which need to be updated then we put description as newblog's description and append the new description
    if (description) {
      newblog.description = description;
    }
    //if there is tag which need to be updated then we put tag as newblog's tag and append the new tag
    if (tag) {
      newblog.tag = tag;
    }
    if (image) {
      newblog.image = image;
    }

    //find the existing blog and update it
    //req.params.id refers to the id which the blog we want to update like"_id": "61d47594ac45331d11ffc303",other blogs have other id's
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(401).send("Not founded");
    }
    //blog.user.tostring() will return this blogs user's id if it is not equivalent to the user's id which is requested from fetch data middleware then it will send an error
    if (blog.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    //find the blog and update it by matching the id of the blog which we send and setting it to the newblog
    blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: newblog },
      { new: true }
    );
    res.json({ blog });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error occured");
  }
});
//Route:3 DELETE: delete an existing blog using : delete "/api/blog/deleteblog/:id". Login requires
router.delete("/deleteblog/:id", fetchuser, async (req, res) => {
  try {
    //find the existing blog and delete it
    //req.params.id refers to the id which the blog we want to delete like"_id": "61d47594ac45331d11ffc303",other blogs have other id's
    let blog = await Blog.findById({ _id: req.params.id });
    if (!blog) {
      return res.status(401).send("Not founded");
    }
    //blog.user.tostring() will return this blogs user's id if it is not equivalent to the user's id which is requested from fetch data middleware then it will send an error
    if (blog.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    //find the blog and update it by matching the id of the blog which we send and setting it to the newblog
    blog = await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: "the blog has been delete", blog: blog });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error occured");
  }
});
module.exports = router;

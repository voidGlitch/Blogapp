/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";

import blogContext from "../context/blog/blogContext";

import { SelectPicker } from "rsuite";
import data from "../component/data.json";

const AddBlog = () => {
  const context = useContext(blogContext);
  const { addNote } = context;
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    tag: "Select",
    image: "",
    more: "",
  });

  const onclicked = (e) => {
    //prevent the page reloding on click
    e.preventDefault();
    //sending all the data of the state to the api
    addNote(blog.title, blog.description, blog.tag, blog.image, blog.more);
    setBlog({ title: "", description: "", tag: "Select", image: "", more: "" });
  };
  const handlechange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const Setimg = (value) => {
    //matching the value and appending the image and tag in the existing blog state
    if (value === "Adventure") {
      setBlog({ ...blog, image: data[0].image, tag: value });
    }
    if (value === "Travel") {
      setBlog({ ...blog, image: data[1].image, tag: value });
    }
    if (value === "Sports") {
      setBlog({ ...blog, image: data[2].image, tag: value });
    }
    if (value === "Beach") {
      setBlog({ ...blog, image: data[3].image, tag: value });
    }
    if (value === "Downtown") {
      setBlog({ ...blog, image: data[4].image, tag: value });
    }
    if (value === "HillStation") {
      setBlog({ ...blog, image: data[5].image, tag: value });
    }
    if (value === "City") {
      setBlog({ ...blog, image: data[6].image, tag: value });
    }
    if (value === "PlainGrounds") {
      setBlog({ ...blog, image: data[7].image, tag: value });
    }
    if (value === "International") {
      setBlog({ ...blog, image: data[8].image, tag: value });
    }
    if (value === "PlainGrounds") {
      setBlog({ ...blog, image: data[9].image, tag: value });
    }
    if (value === "Roads") {
      setBlog({ ...blog, image: data[10].image, tag: value });
    }
    if (value === "Underwater") {
      setBlog({ ...blog, image: data[11].image, tag: value });
    }
  };
  return (
    <>
      <form className="rs-form rs-form-vertical rs-form-fixed-width ml-50">
        <div className="rs-form-group " role="group">
          <label
            id="name-control-label"
            htmlFor="title"
            className="rs-form-control-label"
          >
            Title
          </label>

          <div className="rs-form-control rs-form-control-wrapper">
            <input
              aria-labelledby="name-control-label"
              aria-describedby="name-help-text"
              name="title"
              className="rs-input"
              type="text"
              id="title"
              value={blog.title}
              onChange={handlechange}
            />
          </div>

          <span id="name-help-text" className="rs-form-help-text">
            Title is required
          </span>
        </div>
        <div className="rs-form-group" role="group">
          <label htmlFor="description" className="rs-form-control-label">
            Description
          </label>
          <div className="rs-form-control rs-form-control-wrapper">
            <textarea
              aria-labelledby="email-control-label"
              aria-describedby="email-help-text"
              name="description"
              className="rs-input"
              type="textarea"
              id="description"
              value={blog.description}
              style={{ width: "500px", height: "150px" }}
              onChange={handlechange}
            />
            <span id="name-help-text" className="rs-form-help-text">
              Description is required
            </span>
          </div>
        </div>

        <div className="mt-3">
          <span className="mt-1">Tag</span>
          <br></br>
          <SelectPicker
            data={data}
            placeholder={blog.tag}
            valueKey="value"
            labelKey="label"
            style={{ width: 500 }}
            onChange={(value) => {
              Setimg(value);
            }}
          />
        </div>
        <div className="rs-form-group mt-2" role="group">
          <label
            id="name-control-label"
            htmlFor="more"
            className="rs-form-control-label"
          >
            Reference
          </label>

          <div className="rs-form-control rs-form-control-wrapper">
            <input
              aria-labelledby="name-control-label"
              aria-describedby="name-help-text"
              name="more"
              className="rs-input"
              type="text"
              id="more"
              value={blog.more}
              onChange={handlechange}
            />
          </div>
          <span id="name-help-text" className="rs-form-help-text">
            User dependent
          </span>
        </div>

        <div className="rs-form-group mt-3" role="group">
          <div role="toolbar" className="rs-btn-toolbar">
            <button
              type="button"
              className="rs-btn rs-btn-primary"
              onClick={onclicked}
              disabled={
                blog.title.length < 5 ||
                blog.description < 5 ||
                blog.image === ""
              }
            >
              Submit
              <span className="rs-ripple-pond">
                <span className="rs-ripple"></span>
              </span>
            </button>
            <button type="button" className="rs-btn rs-btn-default">
              Cancel
              <span className="rs-ripple-pond">
                <span className="rs-ripple"></span>
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBlog;

import React, { useContext } from "react";
import { Panel } from "rsuite";

import blogContext from "../context/blog/blogContext";
import Modal from "./Modal";

const BlogItem = (props) => {
  const context = useContext(blogContext);
  const { deleteNote } = context;
  const { blog } = props;
  return (
    <div className="container col-md-4 ">
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: "inline-block", width: 400, height: 700 }}
        className="mt-2 mx-2"
      >
        <img src={blog.image} height="250" width="350" alt="not" />
        <Panel header={blog.title}>
          <p>
            <small>{blog.description}</small>
            <br></br>
            <small>{blog.tag}</small>
          </p>
          <div className="text-align-center  mt-3">
            <i
              className="fas fa-trash mx-1 i-point"
              onClick={() => {
                deleteNote(blog._id);
              }}
            ></i>

            <Modal blog={blog} />
          </div>
        </Panel>
      </Panel>
    </div>
  );
};

export default BlogItem;

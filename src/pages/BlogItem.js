import React, { useContext } from "react";
import { Panel } from "rsuite";

import blogContext from "../context/blog/blogContext";
import Modal from "./Modal";

const BlogItem = (props) => {
  const context = useContext(blogContext);
  const { deleteNote } = context;
  const { blog } = props;
  return (
    <div className="container  ">
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: "inline-block", width: 750, height: 600 }}
        className="mt-2 mx-2 "
      >
        <img src={blog.image} height="250" width="600" alt="not" />
        <Panel header={blog.title} className="font-bolder italic">
          <p>
            <small className="mx-auto">{blog.description}</small>
            <br></br>
            <small>#{blog.tag}</small>
          </p>
          <div className="mt-3 text-end">
            <Modal blog={blog} />
            <i
              className="fas fa-trash i-point"
              onClick={() => {
                deleteNote(blog._id);
              }}
            ></i>
          </div>
        </Panel>
      </Panel>
    </div>
  );
};

export default BlogItem;

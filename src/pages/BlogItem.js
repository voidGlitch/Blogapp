import React, { useContext } from "react";
import { Panel } from "rsuite";

import blogContext from "../context/blog/blogContext";
import Modal from "./Modal";

const BlogItem = (props) => {
  const context = useContext(blogContext);
  const { deleteNote } = context;
  const { blog, showalert } = props;
  return (
    <div className="container  ">
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: "inline-block", width: 750, height: 600 }}
        className="mt-2 mx-2 "
      >
        <img
          src={blog.image}
          height="350"
          width="600"
          alt="not"
          className="mt-3"
        />
        <Panel header={blog.title} className="font-bolder italic">
          <p>
            <small className="mx-auto">{blog.description}</small>
            <br></br>
            <small>#{blog.tag}</small>
          </p>
          <div className="mt-3 text-end">
            <Modal blog={blog} showalert={showalert} />
            <i
              className="fas fa-trash i-point"
              onClick={() => {
                deleteNote(blog._id);
                showalert("Deleted successfully", "success");
              }}
            ></i>
          </div>
        </Panel>
      </Panel>
    </div>
  );
};

export default BlogItem;

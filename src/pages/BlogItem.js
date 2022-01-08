import React from "react";
import { Panel } from "rsuite";
import GearIcon from "@rsuite/icons/Gear";

const BlogItem = (props) => {
  const { blog } = props;
  return (
    <div className="col-md-3">
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: "inline-block", width: 250, height: 500 }}
        className="mt-2"
      >
        <img src="https://via.placeholder.com/240x240" height="200" alt="not" />
        <Panel header={blog.title}>
          <p>
            <small>{blog.description}</small>
          </p>
          <div className="text-right mt-3">
            <i className="fas fa-trash mx-1 i-point"></i>
            <span className="text-left mx-2 i-point">
              <GearIcon spin style={{ fontSize: "1em" }} />
            </span>
          </div>
        </Panel>
      </Panel>
    </div>
  );
};

export default BlogItem;

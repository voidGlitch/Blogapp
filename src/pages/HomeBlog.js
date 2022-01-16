import React from "react";
// import { Link } from "react-router-dom";
import { Badge, Panel } from "rsuite";

const HomeBlog = (props) => {
  const { blog } = props;

  return (
    <div className="container  ">
      <Badge className="mt-3 mx-2" content={blog.tag} classPrefix="badge">
        <Panel
          shaded
          bordered
          bodyFill
          style={{ display: "inline-block", width: 1000, height: 350 }}
          className=" "
        >
          <img
            src={blog.image}
            className="rounded float-start mt-3 ml-3"
            height="300"
            width="500"
            alt="not"
          />

          <Panel header={blog.title} className="font-bolder italic">
            <p>
              <big className="mx-auto">{blog.description}</big>
              <br></br>
              <small>#{blog.tag}</small>
              <br></br>
              {blog.more && (
                <a href={blog.more} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">Know More</button>
                </a>
              )}
            </p>
          </Panel>
        </Panel>
      </Badge>
    </div>
  );
};

export default HomeBlog;

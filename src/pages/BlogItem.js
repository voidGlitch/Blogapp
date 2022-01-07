import React from "react";

const BlogItem = (props) => {
  const { blog } = props;
  return (
    <div className="col-md-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            "https://images.pexels.com/photos/6670068/pexels-photo-6670068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.description}</p>
          <p className="card-text">{blog.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

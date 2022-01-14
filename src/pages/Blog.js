import React, { useContext, useEffect } from "react";

import blogContext from "../context/blog/blogContext";
import BlogItem from "./BlogItem";

const Blog = (props) => {
  const context = useContext(blogContext);
  const { Blogs, getBlog } = context;
  useEffect(() => {
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="text-center row">
        <h1>Your Blog</h1>
        <br></br>
        <div className="container mx-3">
          {Blogs.length === 0 && "There is no Blog to show"}
        </div>
        {/* mapping all of the element which is present in the state or i can say fetch all Blog */}
        {Blogs.map((blog) => {
          return (
            <BlogItem key={blog._id} blog={blog} showalert={props.showalert} />
          );
        })}
      </div>
    </>
  );
};

export default Blog;

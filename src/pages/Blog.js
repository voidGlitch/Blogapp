import React, { useContext } from "react";

import blogContext from "../context/blog/blogContext";
import BlogItem from "./BlogItem";

const Blog = () => {
  const context = useContext(blogContext);
  const { state, setState } = context;
  return (
    <>
      <div className="text-center row">
        <h1>Your Blog</h1>
        <br></br>
        {/* mapping all of the element which is present in the state or i can say fetch all Blog */}
        {state.map((blog) => {
          return <BlogItem blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Blog;

import React, { useContext, useEffect } from "react";

import blogContext from "../context/blog/blogContext";
import profileContext from "../context/blog/profileContext";
import BlogItem from "./BlogItem";

const Blog = (props) => {
  const context = useContext(blogContext);
  const { Blogs, getBlog } = context;
  const context2 = useContext(profileContext);
  const { name } = context2;
  let update = name.toUpperCase();

  useEffect(() => {
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="text-center row">
        <h1>Your Blog {update}</h1>
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

import React, { useContext, useEffect } from "react";
import HomeBlog from "./HomeBlog";
import blogContext from "../context/blog/blogContext";

const ReactBlog = () => {
  const context = useContext(blogContext);
  const { Blogs, getallBlog } = context;
  useEffect(() => {
    //returns the entire blog of code from the database
    getallBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="text-center row">
        <h1>Blog about React</h1>
        <br></br>
        {/* mapping all of the element which is present in the state or i can say fetch all Blog */}
        {Blogs.map((blog) => {
          return <HomeBlog key={blog._id} blog={blog} />;
        })}
      </div>
    </>
  );
};

export default ReactBlog;

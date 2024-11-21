import { useState } from "react";
import blogContext from "./blogContext";
import blogData from "./blog.json";

const BlogState = ({ children }) => {
  //data
  // const s1 = {
  //   name: "Shreshthav Bisht",
  //   class: "12th",
  // };
  // const [state, setstate] = useState(s1);

  // //update the state after 3 sec
  // const update = () => {
  //   setTimeout(() => {
  //     setstate({
  //       name: "miku bisht",
  //       class: "Bca 5th sem",
  //     });
  //   }, 3000);
  // };
  const host = "http://localhost:5000";
  const BlogInitials = [];
  const [Blogs, setBlogs] = useState(BlogInitials);

  //Fetch all Blog
  const getBlog = async () => {
    console.log(localStorage.getItem("token"));
    const response = await fetch(`${host}/api/blog/getallblog`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();

    //takes all the blogs from the user of auth token and set it to the state then all the data is fetch by the components by context
    setBlogs(json);
  };
  //Fetch Entire Blog
  const getallBlog = async () => {
    const response = await fetch(`${host}/api/blog/getblog`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
    //takes all the blogs from the user of auth token and set it to the state then all the data is fetch by the components by context
    setBlogs(json.concat(blogData));
  };

  // Add note
  const addNote = async (title, description, tag, image, more) => {
    //Call from the API TODO
    const response = await fetch(`${host}/api/blog/addblog`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag, image, more }),
    });
    const blog = await response.json();
    //setthe blogs which comes from the body which then coverts into json format and then concat it
    //The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    setBlogs(Blogs.concat(blog).concat(blogData));
  };

  // Delete note
  const deleteNote = async (id) => {
    //Call from the API TODO
    const response = await fetch(`${host}/api/blog/deleteblog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log("delete", json);

    const newBlog = Blogs.filter((blog) => {
      return blog._id !== id;
    });
    setBlogs(newBlog.concat(blogData));
  };

  // Edit note

  const editNote = async (id, title, description, tag, image) => {
    //API CALL
    const response = await fetch(`${host}/api/blog/updateblog/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag, image }),
    });
    const json = await response.json();
    console.log("Edit", json);
    let newBlog = JSON.parse(JSON.stringify(Blogs));

    //taking all the blog item from the blog state
    for (let index = 0; index < newBlog.length; index++) {
      const element = newBlog[index];
      //if the edit id matches the id of the current blog then change all th things inside
      if (element._id === id) {
        newBlog[index].title = title;
        newBlog[index].description = description;
        newBlog[index].tag = tag;
        newBlog[index].image = image;
        break;
      }
    }
    setBlogs(newBlog.concat(blogData));
  };
  return (
    // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes
    <blogContext.Provider
      value={{ Blogs, addNote, deleteNote, editNote, getBlog, getallBlog }}
    >
      {children}
    </blogContext.Provider>
  );
};
export default BlogState;

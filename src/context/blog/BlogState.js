import { useState } from "react";
import blogContext from "./blogContext";

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
    const response = await fetch(`${host}/api/blog/getallblog`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNWFjNjIyYmEwOTU4MzM2YTRiZDNlIn0sImlhdCI6MTY0MTM5MzMyN30.QQhlSgogE3RVnKftfwr97THHuCYFDVj90auTEWsECT4",
      },
    });
    const json = await response.json();
    console.log(json);
    //takes all the blogs from the user of auth token and set it to the state then all the data is fetch by the components by context
    setBlogs(json);
  };

  // Add note
  const addNote = async (title, description, tag, image) => {
    //Call from the API TODO
    const response = await fetch(`${host}/api/blog/addblog`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNWFjNjIyYmEwOTU4MzM2YTRiZDNlIn0sImlhdCI6MTY0MTM5MzMyN30.QQhlSgogE3RVnKftfwr97THHuCYFDVj90auTEWsECT4",
      },
      body: JSON.stringify({ title, description, tag, image }),
    });
    const blog = await response.json();
    //setthe blogs which comes from the body which then coverts into json format and then concat it
    //The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    setBlogs(Blogs.concat(blog));
  };

  // Delete note
  const deleteNote = async (id) => {
    //Call from the API TODO
    const response = await fetch(`${host}/api/blog/deleteblog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNWFjNjIyYmEwOTU4MzM2YTRiZDNlIn0sImlhdCI6MTY0MTM5MzMyN30.QQhlSgogE3RVnKftfwr97THHuCYFDVj90auTEWsECT4",
      },
    });
    const json = await response.json();
    console.log(json);

    console.log("deleting the node with id" + id);
    const newBlog = Blogs.filter((blog) => {
      return blog._id !== id;
    });
    setBlogs(newBlog);
  };

  // Edit note

  const editNote = async (id, title, description, tag, image) => {
    const response = await fetch(`${host}/api/blog/addblog`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNWFjNjIyYmEwOTU4MzM2YTRiZDNlIn0sImlhdCI6MTY0MTM5MzMyN30.QQhlSgogE3RVnKftfwr97THHuCYFDVj90auTEWsECT4",
      },
      body: JSON.stringify({ title, description, tag, image }),
    });
    // const json = response.json();

    //taking all the blog item from the blog state
    for (let index = 0; index < Blogs.length; index++) {
      const element = Blogs[index];
      //if the edit id matches the id of the current blog then change all th things inside
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        element.image = image;
      }
    }
  };
  return (
    // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes
    <blogContext.Provider
      value={{ Blogs, addNote, deleteNote, editNote, getBlog }}
    >
      {children}
    </blogContext.Provider>
  );
};
export default BlogState;

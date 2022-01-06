import { useState } from "react";
import blogContext from "./blogContext";

const NoteState = ({ children }) => {
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
  const BlogInitials = [
    {
      _id: "61d5acd42ba0958336a4bd42",
      user: "61d5ac622ba0958336a4bd3e",
      title: "this is not rain updated",
      description: "this is not some kind of rain you know updated",
      tag: "personal",
      date: "2022-01-05T14:36:04.078Z",
      __v: 0,
    },
    {
      _id: "61d5adde2ba0958336a4bd5f",
      user: "61d5ac622ba0958336a4bd3e",
      title: "this is miku",
      description: "this is me",
      tag: "personal",
      date: "2022-01-05T14:40:30.168Z",
      __v: 0,
    },
    {
      _id: "61d5adfa2ba0958336a4bd61",
      user: "61d5ac622ba0958336a4bd3e",
      title: "this is spidy",
      description: "this is your friendly neighbourhood spiderman",
      tag: "personal",
      date: "2022-01-05T14:40:58.486Z",
      __v: 0,
    },
  ];
  const [state, setState] = useState(BlogInitials);

  return (
    // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes
    <blogContext.Provider value={{ state, setState }}>
      {children}
    </blogContext.Provider>
  );
};

export default NoteState;

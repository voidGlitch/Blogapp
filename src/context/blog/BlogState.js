import { useState } from "react";
import blogContext from "./blogContext";

const NoteState = ({ children }) => {
  //data
  const s1 = {
    name: "Shreshthav Bisht",
    class: "12th",
  };
  const [state, setstate] = useState(s1);

  //update the state after 3 sec
  const update = () => {
    setTimeout(() => {
      setstate({
        name: "miku bisht",
        class: "Bca 5th sem",
      });
    }, 3000);
  };
  return (
    // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes
    <blogContext.Provider value={{ state, update }}>
      {children}
    </blogContext.Provider>
  );
};

export default NoteState;

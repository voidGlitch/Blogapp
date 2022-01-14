import { useState } from "react";
import profileContext from "./profileContext";

const ProfileState = ({ children }) => {
  const [profile, setprofile] = useState(null);
  const [name, setname] = useState("");

  const isloggedin = (profile) => {
    if (profile === true) {
      setprofile(true);
    } else {
      setprofile(false);
    }
  };
  const signupcreds = (signup) => {
    if (signup === true) {
      setprofile(true);
    } else {
      setprofile(false);
    }
  };

  const setName = (hasname) => {
    setname(hasname);
  };

  return (
    // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes
    <profileContext.Provider
      value={{ profile, isloggedin, signupcreds, name, setName }}
    >
      {children}
    </profileContext.Provider>
  );
};

export default ProfileState;

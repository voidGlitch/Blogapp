import { useState, useEffect } from "react";
import profileContext from "./profileContext";

const ProfileState = ({ children }) => {
  const [profile, setprofile] = useState(null);
  const [name, setname] = useState("");
  const [date, setDate] = useState("");

  // This effect checks if the user is logged in on initial load by looking at localStorage
  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setprofile(true);
    } else {
      setprofile(false);
    }
  }, []);

  const isloggedin = (profile) => {
    if (profile === true) {
      setprofile(true);
      localStorage.setItem("profile", "true");
    } else {
      setprofile(false);
      localStorage.removeItem("profile");
    }
  };

  const signupcreds = (signup) => {
    if (signup === true) {
      setprofile(true);
      localStorage.setItem("profile", "true");
    } else {
      setprofile(false);
      localStorage.removeItem("profile");
    }
  };

  const setName = (hasname) => {
    setname(hasname);
  };

  const setdate = (hasdate) => {
    setDate(hasdate);
  };

  return (
    <profileContext.Provider
      value={{ profile, isloggedin, signupcreds, name, setName, date, setdate }}
    >
      {children}
    </profileContext.Provider>
  );
};

export default ProfileState;

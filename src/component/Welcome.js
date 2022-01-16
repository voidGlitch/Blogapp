import React, { useState, useContext } from "react";
import { Drawer } from "rsuite";
import { Icon } from "@rsuite/icons";
import * as faReact from "@fortawesome/free-brands-svg-icons/faReact";

// import { Redirect } from "react-router";
// import PicAvatar from "./PicAvatar";
import profileContext from "../context/blog/profileContext";

//created a modal which is a drawer to edit the existing Blog
const Modal = (props) => {
  // these are value to open and close the drawer comes with rsuite
  const { date } = props;
  const context = useContext(profileContext);
  const { isloggedin } = context;
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const handleOpen = (key) => {
    setOpen(true);
    setPlacement(key);
  };

  const clickedlogout = async () => {
    localStorage.removeItem("token");
    await isloggedin(false);
    console.log("clicked");
  };

  const FaSvgIcon = ({ faIcon, ...rest }) => {
    const { width, height, svgPathData } = faIcon;
    return (
      <svg
        {...rest}
        viewBox={`0 0 ${width} ${height}`}
        width="2em"
        className="pb-2 mx-1"
        height="2em"
        fill="currentColor"
      >
        <path d={svgPathData}></path>
      </svg>
    );
  };
  return (
    <>
      <button
        // style={{ backgroundColor: "darkslategrey" }}
        className="rs-navbar-brand d-flex text-center button bg-grad2"
        onClick={() => {
          handleOpen("left");
        }}
      >
        <Icon
          className=""
          as={FaSvgIcon}
          faIcon={faReact}
          style={{ color: "#61dafb" }}
        />
        <strong className="hov">Welcome {props.name}</strong>
      </button>
      <Drawer placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Profile Details</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body style={{ display: "contents" }}>
          <div className="mt-3">
            <h1 className="mx-3">Welcome back {props.name}!</h1>
            <p className="mt-3 mx-3">
              Created account at :{new Date(date).toGMTString()}
            </p>
          </div>
        </Drawer.Body>
        <div style={{ marginTop: "380px", paddingLeft: "60px" }}>
          <button
            style={{
              width: "90%",
              backgroundColor: "red",
              color: "white",
              borderRadius: "47px",
            }}
            onClick={clickedlogout}
          >
            Logout
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default Modal;

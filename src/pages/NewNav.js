import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "rsuite";
import PeoplesIcon from "@rsuite/icons/Peoples";
import GlobalIcon from "@rsuite/icons/Global";
import PlusIcon from "@rsuite/icons/Plus";
import profileContext from "../context/blog/profileContext";

const NewNav = () => {
  const context = useContext(profileContext);
  const { name } = context;
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <>
      <Navbar appearance="inverse">
        <Navbar.Brand as="div">Welcome {capitalize(name)}</Navbar.Brand>

        <Nav>
          <Nav.Item eventKey="0" icon={<GlobalIcon fill="red" />}>
            <Link to="/" style={{ color: "white" }}>
              Blog
            </Link>
          </Nav.Item>
          <Nav.Item eventKey="1" icon={<PlusIcon />}>
            <Link style={{ color: "white" }} to="/home">
              Add your Blog & Memories
            </Link>
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<PeoplesIcon />}>
            <Link style={{ color: "white" }} to="/blog">
              Your Blogs & Memories activity
            </Link>
          </Nav.Item>

          <Nav.Item eventKey="3">
            <Link style={{ color: "white" }} to="/about">
              About
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NewNav;

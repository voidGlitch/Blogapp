import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Welcome from "../component/Welcome";

import profileContext from "../context/blog/profileContext";

const NewNav = () => {
  const context = useContext(profileContext);
  const { name, date } = context;
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <>
      <nav className="rs-navbar rs-navbar-inverse nav">
        <Welcome name={capitalize(name)} date={date} />
        <div className="rs-navbar-nav rs-nav rs-nav-default rs-nav-horizontal">
          <Link
            to="/"
            role="button"
            id="RouterNavLink"
            className="rs-navbar-item"
            style={{ color: "white" }}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="red"
              aria-hidden="true"
              focusable="false"
              className="rs-icon"
              aria-label="global"
              data-category="network"
            >
              <path d="M7.5 15a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0 1a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"></path>
              <path d="M3.585 5.04a8.084 8.084 0 01-.785-.426L2 4l.5-.5h.442c.263.208.603.413.988.6C4.558 2.615 5.543 1.333 7 1.09V2c-.879 0-1.682 1.037-2.236 2.453C5.657 4.78 6.658 5 7.5 5c1.528 0 3.574-.721 4.558-1.5h.442l.5.5-.8.614C10.982 5.372 9.084 6 7.5 6c-.976 0-2.072-.238-3.054-.599A11.618 11.618 0 004 8.5C4 11.436 5.371 15 7 15v.98c-3-.5-4-5.48-4-7.48 0-.828.171-2.154.585-3.46z"></path>
              <path d="M10.236 12.547C9.343 12.22 8.342 12 7.5 12c-1.528 0-3.574.721-4.558 1.5H2.5L2 13l.8-.614C4.018 11.628 5.916 11 7.5 11c.976 0 2.072.238 3.054.599.282-.992.446-2.083.446-3.099C11 5.564 9.629 2 8 2v-.91c3 .5 4 5.41 4 7.41 0 .823-.169 2.151-.578 3.463.28.134.542.276.778.423L13 13l-.5.5h-.442a5.46 5.46 0 00-.975-.594C10.456 14.42 9.467 15.736 8 15.98V15c.879 0 1.682-1.037 2.236-2.453z"></path>
              <path d="M7 8V2h1v6h6v1H8v6H7V9H1V8z"></path>
            </svg>
            Blog
            <span className="rs-ripple-pond">
              <span className="rs-ripple"></span>
            </span>
          </Link>
          <Link
            to="/home"
            role="button"
            id="RouterNavLink"
            className="rs-navbar-item"
            style={{ color: "white" }}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="rs-icon"
              aria-label="plus"
              data-category="action"
            >
              <path d="M8 1a1 1 0 011 1v12a1 1 0 01-2 0V2a1 1 0 011-1z"></path>
              <path d="M2 7h12a1 1 0 010 2H2a1 1 0 010-2z"></path>
            </svg>
            Add your Blog &amp; Memories
            <span className="rs-ripple-pond">
              <span className="rs-ripple"></span>
            </span>
          </Link>
          <Link
            to="/blog"
            role="button"
            id="RouterNavLink"
            className="rs-navbar-item"
            style={{ color: "white" }}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="rs-icon"
              aria-label="peoples"
              data-category="people"
            >
              <path d="M8 5a2 2 0 10.001-3.999A2 2 0 008 5zm0 1a3 3 0 110-6 3 3 0 010 6zm5 1a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 11-.001-3.999A2 2 0 0113 8zM3 7a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 11-.001-3.999A2 2 0 013 8zm5 0a3 3 0 00-3 3v4h6v-4a3 3 0 00-3-3zm0-1a4 4 0 014 4v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a4 4 0 014-4zm5 7a2 2 0 100-4V9a3 3 0 110 6v-1zm0 0a2 2 0 100-4V9a3 3 0 110 6v-1zM3 14v1a3 3 0 110-6v1a2 2 0 100 4zm0 0v1a3 3 0 110-6v1a2 2 0 100 4z"></path>
            </svg>
            Your Blogs &amp; Memories activity
            <span className="rs-ripple-pond">
              <span className="rs-ripple"></span>
            </span>
          </Link>
          <Link
            to="/about"
            role="button"
            className="rs-navbar-item"
            style={{ color: "white" }}
          >
            About
            <span className="rs-ripple-pond">
              <span className="rs-ripple"></span>
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NewNav;

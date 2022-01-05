import React from "react";

import { Link } from "react-router-dom";

const BrandNavbar = () => {
  return (
    //imported the navbar from rsuite but it doesn't seems to be fine so extract the code from source code and put the Link to in it
    <>
      <div id="root">
        <nav className="rs-navbar rs-navbar-default">
          <Link to="/home" className="rs-navbar-brand">
            RSUITE
          </Link>
          <div className="rs-navbar-nav rs-nav rs-nav-default rs-nav-horizontal">
            <Link
              to="/"
              role="button"
              componentclassname="[object Object]"
              className="rs-navbar-item"
            >
              Home
              <span className="rs-ripple-pond">
                <span
                  className="rs-ripple"
                  style={{
                    width: "97.8769px",
                    height: "97.8769px",
                    left: "-9.518px",
                    top: "-19.9385px",
                  }}
                ></span>
              </span>
            </Link>
            <Link
              role="button"
              componentclassname="[object Object]"
              to="/about"
              className="rs-navbar-item"
            >
              about
              <span className="rs-ripple-pond">
                <span
                  className="rs-ripple"
                  style={{
                    width: "98.2543px",
                    height: "98.2543px",
                    left: "-10.2237px",
                    top: "-19.1271px",
                  }}
                ></span>
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default BrandNavbar;

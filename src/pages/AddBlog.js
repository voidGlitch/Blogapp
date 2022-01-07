/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { SelectPicker } from "rsuite";
import data from "../component/data.json";
// import Adventure from "../images/Adventure.jfif";
// import Beach from "../images/Beach.jfif";
// import City from "../images/City.jfif";
// import Downtown from "../images/Downtown.jpg";
// import HillStation from "../images/HillStation.jpg";
// import International from "../images/International.jpg";
// import PlainGrounds from "../images/PlainGrounds.jfif";
// import Roads from "../images/Roads.jpg";
// import Sports from "../images/Sports.jfif";
// import Underwater from "../images/Underwater.jfif";
// import Travel from "../images/Travel.jfif";

const AddBlog = () => {
  const [state, setstate] = useState("");
  // const [style, setStyle] = useState({ file: Adventure });
  const onclicked = () => {
    console.log(state);
  };
  return (
    <>
      <form className="rs-form rs-form-vertical rs-form-fixed-width">
        <div className="rs-form-group " role="group">
          <label
            id="name-control-label"
            htmlFor="name"
            className="rs-form-control-label"
          >
            Title
          </label>

          <div className="rs-form-control rs-form-control-wrapper">
            <input
              aria-labelledby="name-control-label"
              aria-describedby="name-help-text"
              name="name"
              className="rs-input"
              type="text"
              id="name"
            />
          </div>
          <span id="name-help-text" className="rs-form-help-text">
            Title is required
          </span>
        </div>
        <div className="rs-form-group" role="group">
          <label
            id="email-control-label"
            htmlFor="email"
            className="rs-form-control-label"
          >
            Email
          </label>
          <div className="rs-form-control rs-form-control-wrapper">
            <input
              aria-labelledby="email-control-label"
              aria-describedby="email-help-text"
              name="email"
              className="rs-input"
              type="email"
              id="email"
            />
          </div>
          <span className="rs-form-help-text rs-form-help-text-tooltip">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 14 14"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="rs-icon"
              aria-label="help o"
              data-category="legacy"
            >
              <path d="M7 12.833A5.833 5.833 0 107 1.167a5.833 5.833 0 000 11.666zM7 14A7 7 0 117 0a7 7 0 010 14zm0-2.333a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zm.583-3.5v-.762c1.128-.47 1.75-1.189 1.75-2.155 0-1.489-.844-2.333-2.333-2.333-1.468 0-2.333.89-2.333 2.333a.583.583 0 101.166 0c0-.806.35-1.167 1.167-1.167.844 0 1.167.322 1.167 1.167 0 .481-.397.879-1.351 1.197A.583.583 0 006.417 7v1.167a.583.583 0 101.166 0z"></path>
            </svg>
          </span>
        </div>
        <div className="rs-form-group" role="group">
          <label
            id="password-control-label"
            htmlFor="password"
            className="rs-form-control-label"
          >
            Password
          </label>
          <div className="rs-form-control rs-form-control-wrapper">
            <input
              aria-labelledby="password-control-label"
              aria-describedby="password-help-text"
              name="password"
              className="rs-input"
              type="password"
              id="password"
            />
          </div>
        </div>
        <div className="rs-form-group" role="group">
          <label
            id="textarea-control-label"
            htmlFor="textarea"
            className="rs-form-control-label"
          >
            Textarea
          </label>
          <div className="rs-form-control rs-form-control-wrapper">
            <input
              aria-labelledby="textarea-control-label"
              aria-describedby="textarea-help-text"
              rows="5"
              name="textarea"
              className="rs-input"
              type="text"
              id="textarea"
            />
          </div>
          <div className="mt-3">
            <span className="mt-1">Tag</span>
            <br></br>
            <SelectPicker
              data={data}
              defaultValue={2}
              valueKey="value"
              labelKey="label"
              style={{ width: 500 }}
              onChange={(value, event) => {
                setstate({ file: value });
                // console.log(state);
                console.log(value);
                // console.log(event._reactName);
              }}
            />
          </div>
        </div>
        <div className="rs-form-group" role="group">
          <div role="toolbar" className="rs-btn-toolbar">
            <button
              type="button"
              className="rs-btn rs-btn-primary"
              onClick={onclicked}
            >
              Submit
              <span className="rs-ripple-pond">
                <span className="rs-ripple"></span>
              </span>
            </button>
            <button type="button" className="rs-btn rs-btn-default">
              Cancel
              <span className="rs-ripple-pond">
                <span className="rs-ripple"></span>
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBlog;

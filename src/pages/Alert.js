import React from "react";

const Alert = (props) => {
  return (
    <div className="mh-60">
      <div>
        <div
          role="alert"
          className="rs-message rs-message-success rs-message-show rs-message-has-icon"
        >
          <div className="rs-message-container">
            <div className="rs-message-icon-wrapper">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                className="rs-icon"
                aria-label="check circle"
                data-category="legacy"
              >
                <path d="M7 14A7 7 0 117 0a7 7 0 010 14zM5.848 7.702L4.342 6.196a1.166 1.166 0 10-1.65 1.65l2.333 2.333a1.166 1.166 0 001.707-.061l4.61-4.61a1.166 1.166 0 10-1.65-1.65L5.848 7.702z"></path>
              </svg>
            </div>
            <div className="rs-message-content">
              <div className="rs-message-body">{props.message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;

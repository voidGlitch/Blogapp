import React, { useContext, useState } from "react";
// import { useHistory } from "react-router-dom";
import profileContext from "../../context/blog/profileContext";

const Login = (props) => {
  const host = "http://localhost:5000";
  // const history = useHistory();
  const context = useContext(profileContext);
  const { isloggedin, setName } = context;

  const [loggedin, setloggedin] = useState({ email: "", password: "" });

  const login = async (email, password) => {
    //Call from the API TODO
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const loggedin = await response.json();
    console.log(loggedin);
    if (loggedin.success) {
      isloggedin(true);
      setName(loggedin.name);
      props.showalert("Logged in successfully", "success");
      localStorage.setItem("token", loggedin.authtoken);
      // history.push("/");
    } else {
      props.showalert("Invalid credentails", "danger");
    }
  };

  const handlechange = (e) => {
    setloggedin({ ...loggedin, [e.target.name]: e.target.value });
  };

  const onclicked = (e) => {
    //prevent the page reloding on click
    e.preventDefault();
    console.log("clicked", loggedin);
    //sending all the data of the state to the api
    login(loggedin.email, loggedin.password);
    setloggedin({ email: "", password: "" });
  };
  return (
    <>
      <h1 className="text-center">Please login with correct credentials</h1>
      <div className="mt-mid mx-3 text-center">
        <form className="rs-form rs-form-fixed-width">
          <div className="rs-form-group " role="group">
            <label
              id="email-6-control-label"
              htmlFor="email"
              className="rs-form-control-label mx-2"
            >
              Email:
            </label>
            <input
              aria-labelledby="email-6-control-label"
              aria-describedby="email-6-help-text"
              name="email"
              className="rs-input"
              type="email"
              value={loggedin.email}
              onChange={handlechange}
              id="email-6"
              style={{
                width: "500px",
              }}
            />
          </div>
          <div className="rs-form-group" role="group">
            <label
              id="password-6-control-label"
              htmlFor="password"
              className="rs-form-control-label mx-2"
            >
              Password:
            </label>

            <input
              aria-labelledby="password-6-control-label"
              aria-describedby="password-6-help-text"
              name="password"
              className="rs-input"
              type="password"
              value={loggedin.password}
              onChange={handlechange}
              id="password-6"
              style={{
                width: "500px",
              }}
            />
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
      </div>
    </>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "rsuite";
import profileContext from "../../context/blog/profileContext";
const Signup = (props) => {
  const host = "http://localhost:5000";

  const context = useContext(profileContext);
  const { signupcreds, setName, setdate } = context;

  const [signnedup, setsignnedup] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const signup = async (name, email, password) => {
    //Call from the API TODO
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      props.setprogress(60);

      props.showalert("Successfully created your account", "success");
      props.setprogress(100);
      setTimeout(() => {
        signupcreds(true);
        setName(json.name);
        setdate(json.date);
        localStorage.setItem("token", signnedup.authtoken);
      }, 1000);
    } else {
      props.showalert(json.error, "danger");
    }
  };

  const handlechange = (e) => {
    setsignnedup({ ...signnedup, [e.target.name]: e.target.value });
  };

  const onclicked = (e) => {
    //prevent the page reloding on click
    if (signnedup.password === signnedup.cpassword) {
      e.preventDefault();
      props.setprogress(30);

      //sending all the data of the state to the api
      signup(signnedup.name, signnedup.email, signnedup.password);
      setsignnedup({ name: "", email: "", password: "", cpassword: "" });
      props.setprogress(40);
    } else {
      props.showalert("Password doesn't match with confirm password", "danger");
    }
  };
  return (
    <>
      <h1 className="text-center">Please login with correct credentials</h1>
      <div className="mt-mid mx-3 text-center">
        <form className="rs-form rs-form-fixed-width">
          <div className="rs-form-group " role="group">
            <label
              id="email-6-control-label"
              htmlFor="name"
              className="rs-form-control-label mx-2"
            >
              Name:
            </label>

            <input
              aria-labelledby="email-6-control-label"
              aria-describedby="email-6-help-text"
              name="name"
              className="rs-input"
              type="text"
              value={signnedup.name}
              onChange={handlechange}
              id="name-6"
              style={{
                width: "500px",
              }}
            />
            <Form.HelpText tooltip>
              Name should be atleast 3 characters
            </Form.HelpText>
          </div>
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
              value={signnedup.email}
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
              value={signnedup.password}
              onChange={handlechange}
              id="password-6"
              style={{
                width: "500px",
              }}
            />
            <Form.HelpText tooltip>
              Password is minimum 5 characters
            </Form.HelpText>
          </div>
          <div className="rs-form-group" role="group">
            <label
              id="password-6-control-label"
              htmlFor="cpassword"
              className="rs-form-control-label mx-2"
            >
              Confirm Password:
            </label>

            <input
              aria-labelledby="password-6-control-label"
              aria-describedby="password-6-help-text"
              name="cpassword"
              className="rs-input"
              type="password"
              value={signnedup.cpassword}
              onChange={handlechange}
              id="cpassword-6"
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
                disabled={
                  signnedup.name.length < 3 ||
                  signnedup.email < 5 ||
                  signnedup.password.length < 5
                }
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
        <Link to="/login">
          <Button
            appearance="primary"
            className="mt-mid w-100"
            style={{ maxWidth: "fit-content" }}
          >
            Already Login?
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Signup;

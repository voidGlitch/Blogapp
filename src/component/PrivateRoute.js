import React from "react";
import { Redirect, Route } from "react-router";
//children will give all the components which is present inside privateroute and routeprops gives the route properties used in privateroute like to exact
const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = false;
  //if profile is false we will be on the signin page for eternity i mean if we are not logged in or signin
  if (!profile) {
    //redirect will send us the page which is given in to=""
    return <Redirect to="/signin" />;
  }
  //returns the route just we use to did in app.js
  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;

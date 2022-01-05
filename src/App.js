import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import BrandNavbar from "./pages/BrandNavbar";
import "./styles/main.scss";
import "rsuite/dist/rsuite.min.css";
import Signin from "./pages/Signin";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          {/* this will be a private route that means it can be accessed only if we
          are loggedin or signin */}
          <PrivateRoute path="/">
            <BrandNavbar />
            <Home />
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

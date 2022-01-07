import React from "react";
import { Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import BrandNavbar from "./pages/BrandNavbar";
import "./styles/main.scss";
import "rsuite/dist/rsuite.min.css";
import Signin from "./pages/Signin";
import PrivateRoute from "./component/PrivateRoute";
import PublicRoute from "./component/PublicRoute";
import BlogState from "./context/blog/BlogState";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      {/* providing the BlogState component down the component tree to all the components so that everone can access it */}
      <BlogState>
        <Switch>
          <PublicRoute path="/signin">
            <Signin />
          </PublicRoute>
          {/* this will be a private route that means it can be accessed only if we
          are loggedin or signin */}
          <PrivateRoute path="/home">
            <BrandNavbar />
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/about">
            <BrandNavbar />
            <About />
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <BrandNavbar />
            <Blog />
          </PrivateRoute>
          <PrivateRoute path="/">
            <BrandNavbar />
          </PrivateRoute>
        </Switch>
      </BlogState>
    </>
  );
}

export default App;

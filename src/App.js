import { useState } from "react";
import { Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

import "./styles/main.scss";
import "rsuite/dist/rsuite.min.css";
import Signin from "./pages/Signin";
import PrivateRoute from "./component/PrivateRoute";
import PublicRoute from "./component/PublicRoute";
import BlogState from "./context/blog/BlogState";
import Blog from "./pages/Blog";
import Alert from "./pages/Alert";
import ReactBlog from "./pages/ReactBlog";
import Login from "./pages/Credentials/Login";
import Signup from "./pages/Credentials/Signup";
import ProfileState from "./context/blog/ProfileState";
import NewNav from "./pages/NewNav";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [alert, setalert] = useState(null);
  const [progress, setProgress] = useState(0);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const setprogress = (inc) => {
    setProgress(inc);
  };
  return (
    <>
      {/* providing the BlogState component down the component tree to all the components so that everone can access it */}
      <BlogState>
        <ProfileState>
          <Switch>
            <PublicRoute path="/signin">
              <Signin />
            </PublicRoute>
            <PublicRoute path="/login">
              <LoadingBar height={3} color="#f11946" progress={progress} />
              <Alert alert={alert} />
              <Login showalert={showalert} setprogress={setprogress} />
            </PublicRoute>
            <PublicRoute path="/signup">
              <LoadingBar height={3} color="#f11946" progress={progress} />
              <Alert alert={alert} />
              <Signup showalert={showalert} setprogress={setprogress} />
            </PublicRoute>
            {/* this will be a private route that means it can be accessed only if we
          are loggedin or signin */}
            <PrivateRoute path="/home">
              <NewNav />

              <Alert alert={alert} />
              <Home showalert={showalert} />
            </PrivateRoute>
            <PrivateRoute path="/about">
              <NewNav />
              <About />
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <NewNav />
              <Alert alert={alert} />
              <Blog showalert={showalert} />
            </PrivateRoute>
            <PrivateRoute path="/">
              <NewNav />
              <ReactBlog />
            </PrivateRoute>
          </Switch>
        </ProfileState>
      </BlogState>
    </>
  );
}

export default App;

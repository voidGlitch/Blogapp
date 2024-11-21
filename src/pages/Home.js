/* eslint-disable no-unused-vars */
// import { Panel } from "rsuite";
// import data from "../component/data.json";

import AddBlog from "./AddBlog";

const Home = (props) => {
  //using the context and destructuing the components send in the value of blogcontext

  return (
    <div
      className="d-flex"
      style={{
        backgroundImage: `url(${"https://img.freepik.com/free-photo/solid-navy-blue-concrete-textured-wall_53876-124584.jpg"})`,
        color: "white",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="d-flex mt-30 ml-200">
        <h3>Add a Blog or memories</h3>
        <AddBlog showalert={props.showalert} />
      </div>
    </div>
  );
};

export default Home;

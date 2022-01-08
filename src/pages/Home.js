/* eslint-disable no-unused-vars */
// import { Panel } from "rsuite";
// import data from "../component/data.json";

import AddBlog from "./AddBlog";

const Home = () => {
  //using the context and destructuing the components send in the value of blogcontext

  return (
    <div
      className=" mt-2 d-flex "
      style={{
        // backgroundImage: `url(${"https://wallpapercave.com/wp/wp3172699.gif"})`,
        color: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3>Add a Blog or memories</h3>
      <AddBlog />
    </div>
  );
};

export default Home;

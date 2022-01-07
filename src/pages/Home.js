/* eslint-disable no-unused-vars */
import { Panel } from "rsuite";
// import data from "../component/data.json";

import AddBlog from "./AddBlog";

const Home = () => {
  //using the context and destructuing the components send in the value of blogcontext

  return (
    <div className="container mt-3">
      <h3>Add a Blog or memories</h3>
      <Panel>
        <AddBlog />
      </Panel>
    </div>
  );
};

export default Home;

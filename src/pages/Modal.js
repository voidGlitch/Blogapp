import React, { useState, useContext } from "react";
import { Drawer, Button } from "rsuite";
// import GearIcon from "@rsuite/icons/Gear";
import { SelectPicker } from "rsuite";
import data from "../component/data.json";
import blogContext from "../context/blog/blogContext";
//created a modal which is a drawer to edit the existing Blog
const Modal = (props) => {
  const context = useContext(blogContext);
  const { editNote } = context;
  //pass the prop blog comes from the blogitem which give us the value of current node
  const { blog } = props;
  // these are value to open and close the drawer comes with rsuite
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const handleOpen = (key) => {
    setOpen(true);
    setPlacement(key);
  };

  //set the state of this editable blog
  const [blogs, setblogs] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
    image: "",
  });

  const onclicked = (e) => {
    e.preventDefault();

    editNote(
      blogs.id,
      blogs.etitle,
      blogs.edescription,
      blogs.etag,
      blogs.image
    );
  };

  //handle the change in value of title and desc and set the value to edit blog state
  const handlechange = (e) => {
    //takes the name of the box let say title or desc and put the value and just append in the state
    setblogs({ ...blogs, [e.target.name]: e.target.value });
  };
  const updateBlog = (blog) => {
    //set the blog of previous blog values to this state blog
    setblogs({
      id: blog._id,
      etitle: blog.title,
      edescription: blog.description,
      etag: blog.tag,
    });
  };

  const Setimg = (value) => {
    if (value === "Adventure") {
      setblogs({ ...blogs, image: data[0].image, etag: value });
    }
    if (value === "Travel") {
      setblogs({ ...blogs, image: data[1].image, etag: value });
    }
    if (value === "Sports") {
      setblogs({ ...blogs, image: data[2].image, etag: value });
    }
    if (value === "Beach") {
      setblogs({ ...blogs, image: data[3].image, etag: value });
    }
    if (value === "Downtown") {
      setblogs({ ...blogs, image: data[4].image, etag: value });
    }
    if (value === "HillStation") {
      setblogs({ ...blogs, image: data[5].image, etag: value });
    }
    if (value === "City") {
      setblogs({ ...blogs, image: data[6].image, etag: value });
    }
    if (value === "PlainGrounds") {
      setblogs({ ...blogs, image: data[7].image, etag: value });
    }
    if (value === "International") {
      setblogs({ ...blogs, image: data[8].image, etag: value });
    }
    if (value === "PlainGrounds") {
      setblogs({ ...blogs, image: data[9].image, etag: value });
    }
    if (value === "Roads") {
      setblogs({ ...blogs, image: data[10].image, etag: value });
    }
    if (value === "Underwater") {
      setblogs({ ...blogs, image: data[11].image, etag: value });
    }
  };
  return (
    <>
      <button
        type="button"
        className="rs-btn-icon rs-btn-icon-placement-left rs-btn rs-btn-default"
        onClick={() => {
          //on click of the icon
          handleOpen("left");
          updateBlog(blog);
        }}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className="rs-icon"
          aria-label="gear"
          data-category="action"
        >
          <path d="M11.967 4.96l-.354-.461.845-2.002-1.935-1.117-1.315 1.738-.574-.073a4.986 4.986 0 00-1.28.003l-.576.076-1.319-1.743-1.935 1.117.85 2.015-.35.461a5.078 5.078 0 00-.638 1.106l-.224.534-2.17.271v2.234l2.169.271.223.537c.164.396.378.769.638 1.11l.35.461-.847 2.008 1.935 1.117 1.312-1.733.576.076c.428.056.862.056 1.291.001l.576-.075 1.31 1.731 1.935-1.117-.842-1.996.352-.461a5.052 5.052 0 00.65-1.125l.223-.536 2.15-.269V6.885l-2.154-.269-.223-.536a4.983 4.983 0 00-.646-1.118zm1.569.733l1.579.197a1 1 0 01.876.992v2.234a1 1 0 01-.876.992l-1.574.197a6.127 6.127 0 01-.778 1.348l.617 1.461a1 1 0 01-.421 1.255l-1.935 1.117a1 1 0 01-1.297-.262l-.96-1.268a5.994 5.994 0 01-1.549-.001l-.961 1.269a.999.999 0 01-1.297.262l-1.935-1.117a1 1 0 01-.421-1.255l.622-1.475a5.974 5.974 0 01-.765-1.332l-1.592-.199a1 1 0 01-.876-.992V6.882a1 1 0 01.876-.992l1.596-.199a6.156 6.156 0 01.764-1.324l-.625-1.482a1 1 0 01.421-1.255L4.96.513a1 1 0 011.297.262l.968 1.279a5.982 5.982 0 011.536-.003L9.727.775a.999.999 0 011.297-.262l1.935 1.117a1 1 0 01.421 1.255l-.619 1.467c.318.414.577.866.775 1.341z"></path>
          <path d="M8 10a2 2 0 10.001-3.999A2 2 0 008 10zm0 1a3 3 0 110-6 3 3 0 010 6z"></path>
        </svg>
        <span className="rs-ripple-pond">
          <span
            className="rs-ripple"
            style={{
              width: "67.5359px",
              height: "67.5359px",
              left: "-19.9526px",
              top: "-23.2367px",
            }}
          ></span>
        </span>
      </button>

      <Drawer placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Edit blogs</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              onClick={(e) => {
                setOpen(false);
                onclicked(e);
              }}
              appearance="primary"
            >
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body style={{ display: "contents" }}>
          <div className="mt-3">
            <form className="rs-form rs-form-vertical rs-form-fixed-width ml-50">
              <div className="rs-form-group " role="group">
                <label
                  id="name-control-label"
                  htmlFor="etitle"
                  className="rs-form-control-label"
                >
                  Title
                </label>

                <div className="rs-form-control rs-form-control-wrapper">
                  <input
                    aria-labelledby="name-control-label"
                    aria-describedby="name-help-text"
                    id="etitle"
                    name="etitle"
                    value={blogs.etitle}
                    className="rs-input"
                    type="text"
                    onChange={handlechange}
                  />
                </div>

                <span id="name-help-text" className="rs-form-help-text">
                  Title is required
                </span>
              </div>
              <div className="rs-form-group" role="group">
                <label htmlFor="edescription" className="rs-form-control-label">
                  Description
                </label>
                <div className="rs-form-control rs-form-control-wrapper">
                  <textarea
                    aria-labelledby="email-control-label"
                    aria-describedby="email-help-text"
                    id="edescription"
                    name="edescription"
                    className="rs-input"
                    type="textarea"
                    style={{ width: "500px", height: "100px" }}
                    //setting the value so that user can edit where it prev end
                    value={blogs.edescription}
                    onChange={handlechange}
                  />
                  <span id="name-help-text" className="rs-form-help-text">
                    Description is required
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <span className="mt-1">Tag</span>
                <br></br>
                <SelectPicker
                  data={data}
                  placeholder={blogs.etag}
                  valueKey="value"
                  labelKey="label"
                  style={{ width: 500 }}
                  onSelect={(value) => {
                    Setimg(value);
                  }}
                />
              </div>
            </form>
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default Modal;

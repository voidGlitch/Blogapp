import React, { useState } from "react";
import { ButtonToolbar, IconButton, Drawer, Button } from "rsuite";
import GearIcon from "@rsuite/icons/Gear";
import { SelectPicker } from "rsuite";
import data from "../component/data.json";
//created a modal which is a drawer to edit the existing Blog
const Modal = (props) => {
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
    etitle: "",
    edescription: "",
    etag: "",
    image: "https://www.wallpaperuse.com/wallp/98-989473_m.jpg",
  });

  const onclicked = (e) => {
    e.preventDefault();
    console.log("Updating the note", blogs);
  };

  //handle the change in value of title and desc and set the value to edit blog state
  const handlechange = (e) => {
    //takes the name of the box let say title or desc and put the value and just append in the state
    setblogs({ ...blogs, [e.target.name]: e.target.value });
  };
  const updateBlog = (blog) => {
    //set the blog of previous blog values to this state blog
    setblogs({
      etitle: blog.title,
      edescription: blog.description,
      etag: blog.tag,
    });
  };

  const Setimg = (value) => {
    if (value === "Adventure") {
      setblogs({ ...blogs, image: data[0].image, tag: value });
    }
    if (value === "Travel") {
      setblogs({ ...blogs, image: data[1].image, tag: value });
    }
    if (value === "Sports") {
      setblogs({ ...blogs, image: data[2].image, tag: value });
    }
    if (value === "Beach") {
      setblogs({ ...blogs, image: data[3].image, tag: value });
    }
    if (value === "Downtown") {
      setblogs({ ...blogs, image: data[4].image, tag: value });
    }
    if (value === "HillStation") {
      setblogs({ ...blogs, image: data[5].image, tag: value });
    }
    if (value === "City") {
      setblogs({ ...blogs, image: data[6].image, tag: value });
    }
    if (value === "PlainGrounds") {
      setblogs({ ...blogs, image: data[7].image, tag: value });
    }
    if (value === "International") {
      setblogs({ ...blogs, image: data[8].image, tag: value });
    }
    if (value === "PlainGrounds") {
      setblogs({ ...blogs, image: data[9].image, tag: value });
    }
    if (value === "Roads") {
      setblogs({ ...blogs, image: data[10].image, tag: value });
    }
    if (value === "Underwater") {
      setblogs({ ...blogs, image: data[11].image, tag: value });
    }
  };
  return (
    <>
      <ButtonToolbar>
        <IconButton
          icon={<GearIcon />}
          onClick={() => {
            //on click of the icon
            handleOpen("left");
            updateBlog(blog);
          }}
        ></IconButton>
      </ButtonToolbar>

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
                  onChange={(value) => {
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

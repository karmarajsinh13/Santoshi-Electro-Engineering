import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Add_gallery() {
  const [img, setImg1] = useState("");
  const [title, settitle] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [entry_by, setentry_by] = useState("");
  const [details, setdetails] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getgallery();
    }
  }, []);
  const getgallery = async () => {
    const url = "http://localhost:8080/see/gallery/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setImg1(res.data.img);
    settitle(res.data.title);
    setentry_by(res.data.entry_by);
    setdetails(res.data.details);
  };
  const validate = () => {
    const error = {};

    if (!title) {
      error.title = "Enter Image Title !!!";
    }
    if (!img) {
      error.img = "Evnter Image !!!";
    }
    if (!details) {
      error.des = "Enter Image Description !!!";
    }
    return error;
  };
  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate());
    if (title && img && details) {
      const formdata = new FormData();
      formdata.append("img", img);
      formdata.append("title", title);
      formdata.append("entry_by", entry_by);
      formdata.append("details", details);
      let res = "";
      console.log(formdata);
      if (id) {
        res = await axios.put(
          "http://localhost:8080/see/gallery/" + id,
          formdata
        );
      } else {
        res = await axios.post(
          "http://localhost:8080/see/gallery",
          formdata
        );
      }
      alert(res.data);
      console.log(res.data);
      navigate("/Gallery");
    }
  };
  return (
    <div>
      <div
        style={{ marginTop: "50px", marginLeft: "260px", marginRight: "20px" }}
      >
        <div class="row">
          <div class="col-12">
            <div class="card mb-4">
              <div class="card-header pb-0">
                <h3
                  style={{
                    background: "linear-gradient(to right, black, grey)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Add Gallery
                </h3>
                <p class="mb-0">Add Gallery here</p>
                <form>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label"
                          >
                            Image Title
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={title}
                            onChange={(e) => settitle(e.target.value)}
                          />
                          <p style={{ color: "red" }}>{formErrors.title}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label"
                          >
                            Image Details
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={details}
                            onChange={(e) => setdetails(e.target.value)}
                          />
                          <p style={{ color: "red" }}>{formErrors.des}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label"
                          >
                            Image entry_by
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={entry_by}
                            onChange={(e) => setentry_by(e.target.value)}
                          />
                          <p style={{ color: "red" }}>{formErrors.des}</p>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label"
                          >
                            Image Description
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={description}
                            onChange={(e) => setdescription(e.target.value)}
                          />
                        </div>
                      </div> */}

                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label"
                          >
                            Add Image
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            defaultValue={img}
                            onChange={(e) => setImg1(e.target.files[0])}
                          />
                          <p style={{ color: "red" }}>{formErrors.img}</p>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label"
                          >
                            Image 2
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            defaultValue={image2}
                            onChange={(e) => setImg2(e.target.files[1])}
                          />
                        </div>
                      </div> */}
                      {/* <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label"
                          >
                            Image 3
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            defaultValue={image3}
                            onChange={(e) => setImg3(e.target.files[2])}
                           
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label"
                          >
                            Image 4
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            defaultValue={image4}
                            onChange={(e) => setImg4(e.target.files[3])}
                          />
                        </div>
                      </div> */}
                      {/* <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label"
                          >
                            Image 5
                          </label>
                          <input
                            className="form-control"
                            type="file"
                           defaultValue={image5}
                            onChange={(e) => setImg5(e.target.files[4])}
                          />
                        </div>
                      </div> */}
                    </div>

                    <button
                      type="button"
                      class="btn bg-gradient-info w-100 mt-4 mb-0"
                      onClick={submitbtn}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

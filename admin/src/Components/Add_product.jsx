import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function Add_product() {
  const [name, setName] = useState("");
  const [details, setdetails] = useState("");
  // const [description, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [entry_by, setentry_by] = useState("");
  const [status, setStatus] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getproducts();
    }
  }, []);
  const getproducts = async () => {
    const url = "http://localhost:8080/see/products/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setName(res.data.name);
    setdetails(res.data.details);
    setImg(res.data.img);
    setentry_by(res.data.entry_by);
    setStatus(res.data.status);
  };
  const validate = () => {
    const error = {};

    if (!name) {
      error.name = "Please Enter products name";
    }
  
     if (!entry_by) {
       error.entry_by = "entry_by is required!!!";
     }
     if (!img) {
      error.img = "Please Upload products img/Thumbnail";
    }
  
     if (!details) {
       error.details = "Please Enter products Description!!!";
     }
    //  if (!description) {
    //   error.description = "Please Enter products Description";
    // }
  
    //  if (!start_time) {
    //    error.start_time = "products start_time is required!!!";
    //  }
    //  if (!end_time) {
    //   error.end_time = "Please Enter products end_time";
    // }
  
     if (!status) {
       error.status = "products Is Open or Closed ?";
     }
    return error;
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate());
    if(name && entry_by && details && img && status){
    const formdata = new FormData();
    formdata.append("name", name);
   
    formdata.append("details", details);

    formdata.append("entry_by", entry_by);
    formdata.append("img", img);
    formdata.append("status", status);

    let res = "";
    console.log(formdata);
    if (id) {
      res = await axios.put(
        "http://localhost:8080/see/products/" + id,
        formdata
      );
    } else {
      res = await axios.post(
        "http://localhost:8080/see/products", formdata
      );
    }
    alert(res.data);
    console.log(res.data);
    navigate("/Products");
  }
  };
  return (
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
              Organise products
            </h3>
            <p class="mb-0">Add products here</p>
            <form>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        products Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                       <p style={{ color: "red" }}>{formErrors.name}</p>
                    </div>
                  </div>
            
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        products img
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        defaultValue={img}
                        onChange={(e) => setImg(e.target.files[0])}
                      />
                       <p style={{ color: "red" }}>{formErrors.img}</p>
                    </div>
                  </div>
                  <div className="col-md-12" >
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        products Description
                      </label>
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        defaultValue={details}
                        onChange={(e) => setdetails(e)}
                        rows={10}
                        
                      ></ReactQuill>
                       <p style={{ color: "red" }}>{formErrors.details}</p>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                     Entry By
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={entry_by}
                        onChange={(e) => setentry_by(e.target.value)}
                      />
                       <p style={{ color: "red" }}>{formErrors.entry_by}</p>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Status
                      </label>
                      <select
                        name="status"
                        class="form-control"
                        defaultValue={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option>Choose</option>
                        <option value="0">Inactive</option>
                        <option value="1">Active</option>
                      </select>
                      <p style={{ color: "red" }}>{formErrors.status}</p>
                    </div>
                  </div>
                  <div
                    class="text-center"
                    style={{
                      marginBottom: "20px",
                      marginRight: "1000px",
                      marginLeft: "10px",
                    }}
                  ></div>
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
  )
}

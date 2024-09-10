import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Add_clients() {
    const [img, setImg1] = useState("");
    const [client_name, setclient_name] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [entry_by, setentry_by] = useState("");
    const [entry_date, setentry_date] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.pathname.split("/")[2]
      ? location.pathname.split("/")[2]
      : "";
    useEffect(() => {
      console.log(id);
      if (id) {
        getclients();
      }
    }, []);
    const getclients = async () => {
      const url = "http://localhost:8080/see/clients/" + id;
      console.log(url);
      const res = await axios.get(url);
      console.log(res.data);
      setImg1(res.data.img);
      setclient_name(res.data.client_name);

      setentry_by(res.data.entry_by);
     
    };
    const validate = () => {
      const error = {};
  
      if (!client_name) {
        error.client_name = "Enter Image client_name !!!";
      }
      if (!img) {
        error.img = "Evnter Image !!!";
      }
     
      return error;
    };
    const submitbtn = async (e) => {
      e.preventDefault();
      setFormErrors(validate());
      if (client_name && img ) {
        const formdata = new FormData();
        formdata.append("img", img);
        formdata.append("client_name", client_name);
        formdata.append("entry_by", entry_by);

        let res = "";
        console.log(formdata);
        if (id) {
          res = await axios.put(
            "http://localhost:8080/see/clients/" + id,
            formdata
          );
        } else {
          res = await axios.post(
            "http://localhost:8080/see/clients",
            formdata
          );
        }
        alert(res.data);
        console.log(res.data);
        navigate("/Clients");
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
                Add clients
              </h3>
              <p class="mb-0">Add clients here</p>
              <form>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Image client_name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={client_name}
                          onChange={(e) => setclient_name(e.target.value)}
                        />
                        <p style={{ color: "red" }}>{formErrors.client_name}</p>
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Image entry_date
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={entry_date}
                          onChange={(e) => setentry_date(e.target.value)}
                        />
                        <p style={{ color: "red" }}>{formErrors.entry_date}</p>
                      </div>
                    </div> */}
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
                       
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Image entry_datecription
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={entry_datecription}
                          onChange={(e) => setentry_datecription(e.target.value)}
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
  )
}

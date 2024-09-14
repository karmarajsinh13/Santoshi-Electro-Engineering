import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Viewclient() {
    const [clients, setclients] = useState([]);

  
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";

  useEffect(() => {
    if (id) {
      getclients();
     
    }
  }, []);
  

  const getclients = async () => {
    const res = await axios.get(
      "http://localhost:8080/see/clients/" + id
    );
    setclients(res.data);

    console.log(res.data);
  };
  const deleteclients = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:8080/see/clients/" + id
      );
      console.log(res.data);
      alert(res.data);
      getclients();
    }
  };
  return (
    <div
    style={{ marginTop: "40px", marginLeft: "290px", marginRight: "20px" }}
  >
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div
            class="card-header pb-0"
            style={{ display: "flex", marginLeft: "1100px" }}
          >
            <Link to={`/Add_clients/` + clients.id}>
              <i
                class="fas fa-pencil-alt text-primary me-2"
                aria-hidden="true"
              ></i>
              Edit
            </Link>
          </div>
          {/* <div
            class="card-header pb-0"
            style={{ display: "flex", marginLeft: "1000px" }}
          >
            <Link to={`/Viewparticipate/` + clients.id}>
              <i
                class="fas fa-pencil-alt text-primary me-2"
                aria-hidden="true"
              ></i>
              View participate
            </Link>
          </div> */}

          <center class="card-header pb-0 ">
            <h3>{clients.client_name}</h3>
          </center>
          <br />

          <div class="card-body px-0 pt-0 pb-2">
            <div>
              <div className="row justify-content-center">
                <div>
                  <div className="row justify-content-center">
                    <div class="col-4 ">
                      <img
                        src={`http://localhost:8080/uploads/${clients.img}`}
                        alt="Image placeholder"
                        style={{
                          height: "350px",
                          width: "400px",
                          objectFit: "cover",
                          objectPosition: "center",
                          borderRadius: "10px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div class="card-body pt-0">
                   
                    <div class="text-center mt-4">
                      <div class="h6 mt-4">
                        <i class="ni business_briefcase-24 mr-2"></i>Entry Date
                        : - {clients.entry_date}
                      </div>
                      <br />
                      <div class="h6 mt-4">
                        <i class="ni business_briefcase-24 mr-2"></i>Entry_by
                        : - {clients.entry_by}
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

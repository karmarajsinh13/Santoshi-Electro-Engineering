import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Viewproduct() {
    const [products, setproducts] = useState([]);
  const [name, setName] = useState("");
  const [Totalinvite, setTotalinvite] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";

  useEffect(() => {
    if (id) {
      getproducts();
    }
  }, []);


  const getproducts = async () => {
    const res = await axios.get(
      "http://localhost:8080/see/products/" + id
    );
    setproducts(res.data);

    console.log(res.data);
  };
  const deleteproducts = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:8080/see/products/" + id
      );
      console.log(res.data);
      alert(res.data);
      getproducts();
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
            <Link to={`/Add_products/` + products.id}>
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
            <Link to={`/Viewparticipate/` + products.id}>
              <i
                class="fas fa-pencil-alt text-primary me-2"
                aria-hidden="true"
              ></i>
              View participate
            </Link>
          </div> */}

          <center class="card-header pb-0 ">
            <h3>{products.name}</h3>
          </center>
          <br />

          <div class="card-body px-0 pt-0 pb-2">
            <div>
              <div className="row justify-content-center">
                <div>
                  <div className="row justify-content-center">
                    <div class="col-4 ">
                      <img
                        src={`http://localhost:8080/uploads/${products.img}`}
                        alt="Image placeholder"
                        style={{
                          height: "300px",
                          width: "410px",
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
                    <div class="row">
                      <div class="d-grid text-center">
                        {products.status == "1" ? (
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">
                            Available
                            </span>
                          </td>
                        ) : (
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-secondary">
                            Unavailable
                            </span>
                          </td>
                        )}
                      </div>
                      <br />
                      <br />
                      <div class="col">
                        {/* <div class="d-grid text-center">
                          <span class="text-lg font-weight-bolder">
                            {Totalinvite}
                          </span>
                          <span class="text-sm opacity-8">
                            Total Invitations
                          </span>
                        </div> */}
                        <br />
                        <div class="d-flex justify-content-center">
                          <div class="d-grid text-center">
                            <span class="text-sm opacity-8">Entry Date</span>
                            <span class="text-lg font-weight-bolder">
                              {products.entry_date}
                            </span>
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
      </div>
    </div>
  </div>
  )
}

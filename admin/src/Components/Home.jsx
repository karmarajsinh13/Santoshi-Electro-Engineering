import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [Upcomingevent, setUpcomingevent] = useState(0);
  const [Totalimages, setTotalimages] = useState(0);
  const [Totaljob, setTotaljob] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getTotalProducts();
 
  }, []);

 
  const getTotalimages = async () => {
    try {
      const res = await axios.get("http://localhost:8080/see/gallerys");
 
  
      setTotalimages(res.data.length);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/see/products");
      setProduct(res.data);
      setTotalProducts(res.data.length);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ marginLeft: "270px", marginTop: "50px" }}>
    <main class="main-content position-relative border-radius-lg ">


      <div class="container-fluid py-4">
        <div class="row">
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold">
                        Total Products
                      </p>
                      <h5
                        class="font-weight-bolder"
                        style={{ fontSize: "35px" }}
                      >
                        {totalProducts}
                      </h5>
                      <p class="mb-0">
                        <span class="text-success text-sm font-weight-bolder">
                          {/* +55% */}
                        </span>
                        {/* since yesterday */}
                      </p>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                      <i
                        class="ni ni-world text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold">
                        Clients
                      </p>
                      <h5
                        class="font-weight-bolder"
                        style={{ fontSize: "35px" }}
                      >
                       {/* {Upcomingevent} */}3
                      </h5>
                     
                      <p class="mb-0">
                        <span class="text-success text-sm font-weight-bolder">
                          {/* +3% */}
                        </span>
                        {/* since last week */}
                      </p>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                      <i
                        class="ni ni-collection text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold">
                        Total Images
                      </p>
                      <h5
                        class="font-weight-bolder"
                        style={{ fontSize: "35px" }}
                      >
                       {/* {Totalimages} */}30
                      </h5>
                      <p class="mb-0">
                        <span class="text-danger text-sm font-weight-bolder">
                          {/* -2% */}
                        </span>
                        {/* since last quarter */}
                      </p>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                      <i
                        class="ni ni-image text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold">
                       Total Inquires
                      </p>
                      <h5
                        class="font-weight-bolder"
                        style={{ fontSize: "35px" }}
                      >
                       {/* {Totaljob} */}6
                      </h5>
                      <p class="mb-0">
                        <span class="text-success text-sm font-weight-bolder">
                          {/* +5% */}
                        </span>{" "}
                        {/* than last month */}
                      </p>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                      <i
                        class="ni ni-laptop text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div class="row mt-4">
          <div class="col-lg-7 mb-lg-0 mb-4">
            <div class="card z-index-2 h-100 ">
              <div class="card-header pb-0 p-3">
                <div class="d-flex justify-content-between">
                  <link
                    rel="stylesheet"
                    type="text/css"
                    href="../../public/assets/css/dataTables.bootstrap5.min.css"
                  ></link>
                  <link
                    rel="stylesheet"
                    type="text/css"
                    href="../../public/assets/css/responsive.bootstrap5.min.css"
                  ></link>
                  <h6 class="mb-2">New Alumni</h6>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center ">
                  <tbody>
                    <tr>
                      <td >
                        <td>
                          <img
                            src="http://localhost:8080/uploads/karmarajsinh.jpg1712504920235"
                            className="avatar avatar-sm me-3"
                            alt="Country flag"
                            style={{ height: "50px", width: "50px", marginLeft: "10px" }}
                          />
                        </td>
                        <th className="ms-4">
                          <p className="text-xs font-weight-bold mb-0">
                            Name:
                          </p>
                          <h6 className="text-sm mb-0">Karmarajsinhh</h6>
                        </th>
                      </td>
                      
                      <td className="text-center">
                        <p className="text-xs font-weight-bold mb-0">City:</p>
                        <h6 className="text-sm mb-0">Bhavnagar</h6>
                      </td>
                      <td className="text-center">
                        <p className="text-xs font-weight-bold mb-0">
                          Contact:
                        </p>
                        <h6 className="text-sm mb-0">7265992371</h6>
                      </td>
                      <td className="col text-center">
                        <p className="text-xs font-weight-bold mb-0">
                          Status:
                        </p>
                        <span className="badge badge-sm bg-gradient-success">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td >
                        <td>
                          <img
                            src="http://localhost:8080/uploads/vrundesh.jpg1712866678419"
                            className="avatar avatar-sm me-3"
                            alt="Country flag"
                            style={{ height: "50px", width: "50px", marginLeft: "10px" }}
                          />
                        </td>
                        <th className="ms-4">
                          <p className="text-xs font-weight-bold mb-0">
                            Name:
                          </p>
                          <h6 className="text-sm mb-0">Vrunda</h6>
                        </th>
                      </td>
                      
                      <td className="text-center">
                        <p className="text-xs font-weight-bold mb-0">City:</p>
                        <h6 className="text-sm mb-0">Surat</h6>
                      </td>
                      <td className="text-center">
                        <p className="text-xs font-weight-bold mb-0">
                          Contact:
                        </p>
                        <h6 className="text-sm mb-0">7265992372</h6>
                      </td>
                      <td className="col text-center">
                        <p className="text-xs font-weight-bold mb-0">
                          Status:
                        </p>
                        <span className="badge badge-sm bg-gradient-success">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td >
                        <td>
                          <img
                            src="http://localhost:8080/uploads/kuldipsinh.jpg1713038908252"
                            className="avatar avatar-sm me-3"
                            alt="Country flag"
                            style={{ height: "50px", width: "50px", marginLeft: "10px" }}
                          />
                        </td>
                        <th className="ms-4">
                          <p className="text-xs font-weight-bold mb-0">
                            Name:
                          </p>
                          <h6 className="text-sm mb-0">Kuldipsinh</h6>
                        </th>
                      </td>
                      
                      <td className="text-center">
                        <p className="text-xs font-weight-bold mb-0">City:</p>
                        <h6 className="text-sm mb-0">Bhavnagar</h6>
                      </td>
                      <td className="text-center">
                        <p className="text-xs font-weight-bold mb-0">
                          Contact:
                        </p>
                        <h6 className="text-sm mb-0">6353220031</h6>
                      </td>
                      <td className="col text-center">
                        <p className="text-xs font-weight-bold mb-0">
                          Status:
                        </p>
                        <span className="badge badge-sm bg-gradient-success">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td >
                        <td>
                          <img
                            src="http://localhost:8080/uploads/PHD.jpeg1713623941852"
                            className="avatar avatar-sm me-3"
                            alt="Country flag"
                            style={{ height: "50px", width: "50px", marginLeft: "10px" }}
                          />
                        </td>
                        <th className="ms-4">
                          <p className="text-xs font-weight-bold mb-0">
                            Name:
                          </p>
                          <h6 className="text-sm mb-0">Khushi</h6>
                        </th>
                      </td>
                      
                      <td className="text-center">
                        <p className="text-xs font-weight-bold mb-0">City:</p>
                        <h6 className="text-sm mb-0">Bhavnagar</h6>
                      </td>
                      <td className="text-center">
                        <p className="text-xs font-weight-bold mb-0">
                          Contact:
                        </p>
                        <h6 className="text-sm mb-0">7572839608</h6>
                      </td>
                      <td className="col text-center">
                        <p className="text-xs font-weight-bold mb-0">
                          Status:
                        </p>
                        <span className="badge badge-sm bg-gradient-success">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td >
                        <td>
                          <img
                            src="http://localhost:8080/uploads/zala.jpg1713968749889"
                            className="avatar avatar-sm me-3"
                            alt="Country flag"
                            style={{ height: "50px", width: "50px", marginLeft: "10px" }}
                          />
                        </td>
                        <th className="ms-4">
                          <p className="text-xs font-weight-bold mb-0">
                            Name:
                          </p>
                          <h6 className="text-sm mb-0">Krushnakumarsinh</h6>
                        </th>
                      </td>
                      
                      <td className="text-center">
                        <p className="text-xs font-weight-bold mb-0">City:</p>
                        <h6 className="text-sm mb-0">Surendranagar</h6>
                      </td>
                      <td className="text-center">
                        <p className="text-xs font-weight-bold mb-0">
                          Contact:
                        </p>
                        <h6 className="text-sm mb-0">6355246819</h6>
                      </td>
                      <td className="col text-center">
                        <p className="text-xs font-weight-bold mb-0">
                          Status:
                        </p>
                        <span className="badge badge-sm bg-gradient-success">
                          Active
                        </span>
                      </td>
                    </tr>

                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
 
          <div class="col-lg-5">
            <div class="card card-carousel overflow-hidden h-100 p-0">
              <div
                id="carouselExampleCaptions"
                class="carousel slide h-100"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner border-radius-lg h-100">
                  <div
                    class="carousel-item h-100 active"
                    style={{
                      backgroundImage: "url('../assets/img/img1.jpg')",
                      backgroundSize: "cover",
                    }}
                  >
                    <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                      <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                        <i class="ni ni-camera-compact text-dark opacity-10"></i>
                      </div>
                      <h5
                        class="text-black mb-1"
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "20px",

                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                          textTransform: "uppercase",
                        }}
                      >
                        Welcome Admin , To{" "}
                        <span
                          style={{
                            color: "#E6E6FA",
                            borderBlockColor: "red",
                          }}
                        >
                          Gurukul
                        </span>{" "}
                        Alumni
                      </h5>
                      <h6 class="text-black">By Karmarajsinh Gohil</h6>
                    </div>
                  </div>
                  <div
                    class="carousel-item h-100"
                    style={{
                      backgroundImage: "url('../assets/img/img2.jpg')",
                      backgroundSize: "cover",
                    }}
                  >
        
                  </div>
                  <div
                    class="carousel-item h-100"
                    style={{
                      backgroundImage: "url('../assets/img/img3.jpg')",
                      backgroundSize: "cover",
                    }}
                  >
         
                  </div>
                </div>
                <button
                  class="carousel-control-prev w-5 me-3"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next w-5 me-3"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <div class="row mt-4">
      
        </div>
        <Footer />
      </div>
    </main>
  </div>
  )
}

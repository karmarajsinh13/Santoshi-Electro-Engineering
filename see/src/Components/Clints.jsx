import React from "react";
import service from "./img/service-1.jpg";
import service2 from "./img/service-2.jpg";
import service3 from "./img/service-3.jpg";
import service4 from "./img/service-4.jpg";
import service5 from "./img/service-5.jpg";
import service6 from "./img/service-6.jpg";
import carousel1 from "./img/carousel-1.jpg";
import banner from "./img/banner.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Clints() {
  const [clients, setclients] = useState([]);
  // const [Totalimages, setTotalimages] = useState([]);

  useEffect(() => {
    getclients();
    // getTotalimages();
  }, []);
  // const getTotalimages = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8080/see/clients");
  //     setclients(res.data);

  //     setTotalimages(res.data.length);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getclients = async () => {
    const res = await axios.get("http://localhost:8080/see/clients");
    setclients(res.data);
    console.log(res.data);
  };
  const deleteclients = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete("http://localhost:8080/see/clients/" + id);
      console.log(res.data);
      alert(res.data);
      getclients();
    }
  };
  return (
    <div>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container py-10">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Clints
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Clints
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Page Header End */}
      {/* Service Start */}

      <div className="container-xxl py-5">
        <div className="container py-5">
          <div
            className="text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            {/* <h6 className="text-secondary text-uppercase">Our Clints</h6> */}
            <h1 className="mb-5">Our Clints</h1>
          </div>
          <div className="row g-4">
            {clients.map((clients) => (
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="service-item p-4">
                  <div className="overflow-hidden mb-4">
                    <img
                      className="img-fluid"
                      src={`http://localhost:8080/uploads/${clients.img}`}
                      alt=""
                      style={{ width: "400px", height: "200px" }}
                    />
                  </div>
                  <h4 className="mb-3">{clients.client_name} </h4>
                </div>
              </div>
            ))}
            {/* <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src={service2} alt="" />
                </div>
                  <h4 className="mb-3">Air Freight</h4>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInUp",
              }}
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src={service3} alt="" />
                </div>
                  <h4 className="mb-3">Air Freight</h4>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"
        style={{ display: "none" }}
      >
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
}

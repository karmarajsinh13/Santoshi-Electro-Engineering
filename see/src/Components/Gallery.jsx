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

export default function Gallery() {
  const [gallery, setgallery] = useState([]);
  // const [Totalimages, setTotalimages] = useState([]);

  useEffect(() => {
    getgallery();
    // getTotalimages();
  }, []);
  // const getTotalimages = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8080/see/gallery");
  //     setgallery(res.data);
  
  //     setTotalimages(res.data.length);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getgallery = async () => {
    const res = await axios.get("http://localhost:8080/see/gallery");
    setgallery(res.data);
    console.log(res.data);
  };
  const deletegallery = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:8080/see/gallery/" + id
      );
      console.log(res.data);
      alert(res.data);
      getgallery();
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
            Gallery
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
                Gallery
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
            <h6 className="text-secondary text-uppercase">Gallery</h6>
            <h1 className="mb-5">Our Memories</h1>
          </div>
          <div className="row g-2">
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
                  <img className="img-fluid" src={service} alt="" />
                </div>
                <h4 className="mb-3">Air Freight</h4>

                <a className="btn-slide mt-2" href>
                  <i className="fa fa-arrow-right" />
                  <span>View</span>
                </a>
              </div>
            </div>
            <div
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
                <h4 className="mb-3">Ocean Freight</h4>

                <a className="btn-slide mt-2" href>
                  <i className="fa fa-arrow-right" />
                  <span>View</span>
                </a>
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
                <h4 className="mb-3">Road Freight</h4>

                <a className="btn-slide mt-2" href>
                  <i className="fa fa-arrow-right" />
                  <span>
                    <Link to="/View_product">View</Link>
                  </span>
                </a>
              </div>
            </div>
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
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div>
  );
}

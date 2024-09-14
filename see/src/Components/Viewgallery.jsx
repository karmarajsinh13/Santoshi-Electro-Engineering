import React from "react";
import about from "./img/about.jpg";

export default function Viewgallery() {
  return (
    <div>
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

      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container about py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div
              className="col-lg-6 ps-lg-0 wow fadeInLeft"
              data-wow-delay="0.1s"
              style={{
                minHeight: "400px",
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInLeft",
              }}
            >
              <div className="position-relative h-100">
                <center>
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={about}
                  style={{
                    objectFit: "cover",
                    height: "500px",
                    width: "500px",
                    alignContent: "center",
                    alignItems: "center",
                   


                  }}
                  alt=""
                /></center>
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
    </div>
  );
}

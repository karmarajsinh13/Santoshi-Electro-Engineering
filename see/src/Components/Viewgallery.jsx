import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Viewgallery() {
    const [gallery, setgallery] = useState([]);
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  
    useEffect(() => {
      getgallery();
    }, []);
    const getgallery = async () => {
        const res = await axios.get("http://localhost:8080/see/gallery/" + id);
        setgallery(res.data);
        console.log(res.data);
      };
  
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
                  src={`http://localhost:8080/uploads/${gallery.img}`}
                  style={{
                    objectFit: "cover",
                    height: "500px",
                    width: "500px",
                    alignContent: "center",
                    alignItems: "center",
                   
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    transition: "0.3s",
                    cursor: "pointer",
                    transform: "scale(1.0)",
                    filter: "brightness(100%)",
                    filter: "contrast(100%)",
                    filter: "grayscale(0%)",
                    filter: "hue-rotate(0deg)",
                    filter: "invert(0%)",
                    filter: "opacity(100%)",
                    filter: "saturate(100%)",
                    filter: "sepia(0%)",
                    filter: "blur(0px)",
                   
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

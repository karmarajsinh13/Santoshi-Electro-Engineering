import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import service from "./img/service-1.jpg";
import service2 from "./img/service-2.jpg";
import service3 from "./img/service-3.jpg";
import service4 from "./img/service-4.jpg";
import service5 from "./img/service-5.jpg";
import service6 from "./img/service-6.jpg";
import bg2banner from "./img/bg2banner.jpg";
import Team1 from "./img/Team1.jpeg";

export default function Home() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    const res = await axios.get("http://localhost:8080/see/products");
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
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100vh',
    //     fontSize: '3rem',
    //     fontWeight: 'bold',
    //     color: 'red',
    //     backgroundColor: 'white',
    //     fontFamily: 'Arial, sans-serif',
    //     textTransform: 'uppercase',
    //     letterSpacing: '0.1em',
    //     textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000',

    //   }}
    // >
    //   Jay Maaa Khodiyar
    // </div>
    <>
      <div className="container-fluid p-0 pb-5">
        <div className="owl-carousel header-carousel position-relative mb-5 owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-3038px, 0px, 0px)",
                transition: "all 0s ease 0s",
                width: "9116px",
              }}
            >
              <div className="owl-item cloned" style={{ width: "1519.2px" }}>
                <div className="owl-carousel-item position-relative">
                  <img className="img-fluid" src={bg2banner} alt="" />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "rgba(6, 3, 21, .5)" }}
                  >
                    <div className="container">
                      <div className="row justify-content-start">
                        <div className="col-10 col-lg-8">
                          <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                            SANTOSHI
                          </h5>
                          <h1 className="display-3 text-white animated slideInDown mb-4">
                            #1 Place For Your{" "}
                            <span className="text-primary">Logistics</span>{" "}
                            Solution
                          </h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">
                            CNC,PLC,SPM,Machine Control Panel Builelding.
                          </p>
                          <a
                            href
                            className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Read More
                          </a>
                          <a
                            href
                            className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                          >
                            Free Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "1519.2px" }}>
                <div className="owl-carousel-item position-relative">
                  <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "rgba(6, 3, 21, .5)" }}
                  >
                    <div className="container">
                      <div className="row justify-content-start">
                        <div className="col-10 col-lg-8">
                          <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                            SANTOSHI ELECTRO. &amp; ENGINEERING
                          </h5>
                          <h1 className="display-3 text-white animated slideInDown mb-4">
                            #1 Place For Your{" "}
                            <span className="text-primary">Transport</span>{" "}
                            Solution
                          </h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">
                            CNC,PLC,SPM,Machine Control Panel Builelding.
                          </p>
                          <a
                            href
                            className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Read More
                          </a>
                          <a
                            href
                            className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                          >
                            Free Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: "1519.2px" }}>
                <div className="owl-carousel-item position-relative">
                  <img className="img-fluid" src={bg2banner} alt="" />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "rgba(6, 3, 21, .5)" }}
                  >
                    <div className="container">
                      <div className="row justify-content-start">
                        <div className="col-10 col-lg-8">
                          <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                            SANTOSHI ELECTRO. &amp; ENGINEERING
                          </h5>
                          <h1 className="display-3 text-white animated slideInDown mb-4">
                            #1 Place For Your{" "}
                            <span className="text-primary">Logistics</span>{" "}
                            Solution
                          </h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">
                            CNC,PLC,SPM,Machine Control Panel Builelding.
                          </p>
                          {/* <a
                            href
                            className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Read More
                          </a>
                          <a
                            href
                            className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                          >
                            Free Quote
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="owl-nav">
            <div className="owl-prev">
              <i className="bi bi-chevron-left" />
            </div>
            <div className="owl-next">
              <i className="bi bi-chevron-right" />
            </div>
          </div> */}
          <div className="owl-dots disabled" />
        </div>
      </div>

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
            <h6 className="text-secondary text-uppercase">Our Products</h6>
            <h1 className="mb-5">Explore Our Products</h1>
          </div>
          <div className="row g-4">
            {products.map((products) => (
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
                      src={`http://localhost:8080/uploads/${products.img}`}
                      alt=""
                    />
                  </div>
                  <h4 className="mb-3">{products.name}</h4>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a className="btn-slide mt-2" href>
                    <i className="fa fa-arrow-right" />
                    <span>
                      <Link to={`/View_product/` + products.id}>Read More</Link>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

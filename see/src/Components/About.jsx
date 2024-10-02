import React from "react";
import about from "./img/about.jpg";
import see from "./img/logo.png";
import Team1 from "./img/Team1.jpeg";

export default function About() {
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

      <div className="container-fluid page-header py-5">
        <div className="container py-10">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            About Us
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
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Start */}

      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container about py-5 px-lg-0">
          <img
            style={{
              marginRight: "40px",
              marginLeft: "40px",
              height: "60px",
              width: "500px",
            }}
            src={see}
            className="img-fluid"
            alt="SEE"
          />

          <p
            className="mb-5 mt-2"
            style={{
              textAlign: "justify",
              marginRight: "40px",
              marginLeft: "40px",
              fontFamily: "Times New Roman",
              fontSize: "20px",
              color: "#6f6f6f",
              lineHeight: "1.5",
              letterSpacing: "1px",
            }}
          >
            We believe that best service always gives setisfaction to clients.
            Our goal is to make our technological knowledge and service batter
            day by day. Satisfied Clients imrove our quality and economical
            standard in industries.
          </p>
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
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={Team1}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 about-text wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
              <h1 className="mb-5">Our Quality</h1>
              <p
                className="mb-5"
                style={{
                  textAlign: "justify",
                  fontFamily: "Times New Roman",
                  fontSize: "20px",
                  color: "#6f6f6f",
                  lineHeight: "1.5",
                  letterSpacing: "1px",
                }}
              >
                In order to manufacture these products, our experts utilize
                supreme quality raw material and advanced technology to make
                certain that products offered by us are perfect in all aspects.
                Offered conveyor machines are known for features like high
                performance, sturdy construction, easy maintenance, simple
                operation and longer service life. Apart from machines, offered
                accessories, tank, belt and spring is highly appreciated for
                robustness, dimensional accuracy, corrosion resistance and high
                strength.
                <br></br> <br></br>
                As per the precise necessities of our respected clients, we
                offer these products in different specifications and also can be
                customized according to the information provided by them.
              </p>
              {/* <div className="row g-4 mb-5">
                <div
                  className="col-sm-6 wow fadeIn"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeIn",
                  }}
                >
                  <i className="fa fa-globe fa-3x text-primary mb-3" />
                  <h5>Global Coverage</h5>
                  <p className="m-0">
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam justo.
                  </p>
                </div>
                <div
                  className="col-sm-6 wow fadeIn"
                  data-wow-delay="0.7s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.7s",
                    animationName: "fadeIn",
                  }}
                >
                  <i className="fa fa-shipping-fast fa-3x text-primary mb-3" />
                  <h5>On Time Delivery</h5>
                  <p className="m-0">
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam justo.
                  </p>
                </div>
              </div>
              <a href className="btn btn-primary py-3 px-5">
                Explore More
              </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
              <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
              <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="d-flex align-items-center">
                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
                <div className="ps-4">
                  <h6>Call for any query!</h6>
                  <h3 className="text-primary m-0">+012 345 6789</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <div
                    className="bg-primary p-4 mb-4 wow fadeIn"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeIn",
                    }}
                  >
                    <i className="fa fa-users fa-2x text-white mb-3" />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                  <div
                    className="bg-secondary p-4 wow fadeIn"
                    data-wow-delay="0.5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "fadeIn",
                    }}
                  >
                    <i className="fa fa-ship fa-2x text-white mb-3" />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="text-white mb-0">Complete Shipments</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="bg-success p-4 wow fadeIn"
                    data-wow-delay="0.7s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.7s",
                      animationName: "fadeIn",
                    }}
                  >
                    <i className="fa fa-star fa-2x text-white mb-3" />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="text-white mb-0">Customer Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div
              className="col-lg-6 feature-text wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <h6 className="text-secondary text-uppercase mb-3">
                Our Features
              </h6>
              <h1 className="mb-5">
                We Are Trusted Logistics Company Since 1990
              </h1>
              <div
                className="d-flex mb-5 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <i className="fa fa-globe text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>Worldwide Service</h5>
                  <p className="mb-0">
                    Diam dolor ipsum sit amet eos erat ipsum lorem sed stet
                    lorem sit clita duo justo magna erat amet
                  </p>
                </div>
              </div>
              <div
                className="d-flex mb-5 wow fadeIn"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeIn",
                }}
              >
                <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>On Time Delivery</h5>
                  <p className="mb-0">
                    Diam dolor ipsum sit amet eos erat ipsum lorem sed stet
                    lorem sit clita duo justo magna erat amet
                  </p>
                </div>
              </div>
              <div
                className="d-flex mb-0 wow fadeInUp"
                data-wow-delay="0.7s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeInUp",
                }}
              >
                <i className="fa fa-headphones text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>24/7 Telephone Support</h5>
                  <p className="mb-0">
                    Diam dolor ipsum sit amet eos erat ipsum lorem sed stet
                    lorem sit clita duo justo magna erat amet
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeInRight"
              data-wow-delay="0.1s"
              style={{
                minHeight: "400px",
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInRight",
              }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="img/feature.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
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
            <h6 className="text-secondary text-uppercase">Our Team</h6>
            <h1 className="mb-5">Expert Team Members</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/team-1.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i className="fa fa-share" />
                  <span>
                    <a href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a href>
                      <i className="fab fa-instagram" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/team-2.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i className="fa fa-share" />
                  <span>
                    <a href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a href>
                      <i className="fab fa-instagram" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInUp",
              }}
            >
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/team-3.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i className="fa fa-share" />
                  <span>
                    <a href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a href>
                      <i className="fab fa-instagram" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.9s"
              style={{
                visibility: "visible",
                animationDelay: "0.9s",
                animationName: "fadeInUp",
              }}
            >
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/team-4.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i className="fa fa-share" />
                  <span>
                    <a href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a href>
                      <i className="fab fa-instagram" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          marginTop: "6rem",
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
        }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Services</h4>
              <a className="btn btn-link" href>
                Air Freight
              </a>
              <a className="btn btn-link" href>
                Sea Freight
              </a>
              <a className="btn btn-link" href>
                Road Freight
              </a>
              <a className="btn btn-link" href>
                Logistic Solutions
              </a>
              <a className="btn btn-link" href>
                Industry solutions
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href>
                About Us
              </a>
              <a className="btn btn-link" href>
                Contact Us
              </a>
              <a className="btn btn-link" href>
                Our Services
              </a>
              <a className="btn btn-link" href>
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href>
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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

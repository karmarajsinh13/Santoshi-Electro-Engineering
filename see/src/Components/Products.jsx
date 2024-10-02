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
import carousel1 from "./img/carousel-1.jpg";
import banner from "./img/banner.jpg";

export default function Products() {
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
            Products
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
                Services
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
            <h6 className="text-secondary text-uppercase">Our Services</h6>
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

      {/* Service End */}
      {/* Testimonial Start */}
      {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'hidden', animationDelay: '0.1s', animationName: 'none'}}>
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-secondary text-uppercase">Testimonial</h6>
            <h1 className="mb-0">Our Clients Say!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp owl-loaded owl-drag" data-wow-delay="0.1s" style={{visibility: 'hidden', animationDelay: '0.1s', animationName: 'none'}}>
            <div className="owl-stage-outer"><div className="owl-stage" style={{transition: 'all 0s ease 0s', width: '4240px', transform: 'translate3d(-848px, 0px, 0px)'}}><div className="owl-item cloned" style={{width: '424px'}}><div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                    <div className="d-flex align-items-end mb-4">
                      <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" style={{width: '80px', height: '80px'}} />
                      <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="m-0">Profession</p>
                      </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div></div><div className="owl-item cloned" style={{width: '424px'}}><div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                    <div className="d-flex align-items-end mb-4">
                      <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" style={{width: '80px', height: '80px'}} />
                      <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="m-0">Profession</p>
                      </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div></div><div className="owl-item cloned active" style={{width: '424px'}}><div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                    <div className="d-flex align-items-end mb-4">
                      <img className="img-fluid flex-shrink-0" src="img/testimonial-4.jpg" style={{width: '80px', height: '80px'}} />
                      <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="m-0">Profession</p>
                      </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div></div><div className="owl-item active center" style={{width: '424px'}}><div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                    <div className="d-flex align-items-end mb-4">
                      <img className="img-fluid flex-shrink-0" src="img/testimonial-1.jpg" style={{width: '80px', height: '80px'}} />
                      <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="m-0">Profession</p>
                      </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div></div><div className="owl-item active" style={{width: '424px'}}><div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                    <div className="d-flex align-items-end mb-4">
                      <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" style={{width: '80px', height: '80px'}} />
                      <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="m-0">Profession</p>
                      </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div></div><div className="owl-item" style={{width: '424px'}}><div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                    <div className="d-flex align-items-end mb-4">
                      <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" style={{width: '80px', height: '80px'}} />
                      <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="m-0">Profession</p>
                      </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div></div><div className="owl-item" style={{width: '424px'}}><div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                    <div className="d-flex align-items-end mb-4">
                      <img className="img-fluid flex-shrink-0" src="img/testimonial-4.jpg" style={{width: '80px', height: '80px'}} />
                      <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="m-0">Profession</p>
                      </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div></div><div className="owl-item cloned" style={{width: '424px'}}><div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                    <div className="d-flex align-items-end mb-4">
                      <img className="img-fluid flex-shrink-0" src="img/testimonial-1.jpg" style={{width: '80px', height: '80px'}} />
                      <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="m-0">Profession</p>
                      </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div></div><div className="owl-item cloned" style={{width: '424px'}}><div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                    <div className="d-flex align-items-end mb-4">
                      <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" style={{width: '80px', height: '80px'}} />
                      <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="m-0">Profession</p>
                      </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div></div><div className="owl-item cloned" style={{width: '424px'}}><div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                    <div className="d-flex align-items-end mb-4">
                      <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" style={{width: '80px', height: '80px'}} />
                      <div className="ms-4">
                        <h5 className="mb-1">Client Name</h5>
                        <p className="m-0">Profession</p>
                      </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                  </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev">prev</div><div className="owl-next">next</div></div><div className="owl-dots"><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div></div></div>
        </div>
      </div> */}
      {/* Testimonial End */}

      {/* Back to Top */}
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

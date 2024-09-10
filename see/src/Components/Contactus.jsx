import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Contactus() {
  const [firstname, setName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [msg, setMsg] = useState("");
  const [user_id, setId] = useState(sessionStorage.getItem("user"));
  const [formErrors, setFormErrors] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";

  useEffect(() => {
    // if ((user_id, id)) fatchUserName();
    getContact();
    // getUser();
  }, []);

  const getContact = async () => {
    const res = await axios.get("http://localhost:8080/see/contact_us/" + id);
    console.log(res.data);
    setName(res.data.firstname);
    setPhone(res.data.phone);
    setEmail(res.data.email);
    setlastname(res.data.lastname);
    setMsg(res.data.msg);
  };
  // const getUser = async () => {
  //   const res = await axios.get(
  //     "http://localhost:8080/see/user/" + user_id
  //   );

  //   console.log(res.data);
  //   setName(res.data.firstname);
  //   setlastname(res.data.lastname);
  //   setPhone(res.data.phone);
  //   setEmail(res.data.email);
  // };
  // const fatchUserName = async () => {
  //   try {
  //     const res = await axios.get(
  //       "http://localhost:8080/see/user/" + user_id
  //     );
  //     setName(res.data.firstname);
  //   } catch (error) {}
  // };
  const validate = () => {
    const error = {};

    if (!msg) {
      error.msg = "Enter Your Message !!!";
    }
    return error;
  };
  const btnSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate());
    if (msg) {
      const data = {
        firstname,
        lastname,
        email,
        phone,
        msg,
      };
      let res = "";
      if (id) {
        res = await axios.put(
          "http://localhost:8080/see/contact_us/" + id,
          data
        );
      } else {
        res = await axios.post("http://localhost:8080/see/contact_us", data);
      }
      navigate("/Contactus");
      alert(res.data);
    }
  };
  return (
    <div>
      <div>
        <div className="container-fluid page-header py-5">
          <div className="container py-10">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Contact Us
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
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container-fluid overflow-hidden py-5 px-lg-0">
          <div className="container contact-page py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
              <div
                className="col-md-6 contact-form wow fadeIn"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeIn",
                }}
              >
                <h6 className="text-secondary text-uppercase">Get In Touch</h6>
                <h1 className="mb-4">Contact For Any Query</h1>
                <p className="mb-4">
                  Please feel free to contact us, our customer service center is
                  working for you 24/7.
                </p>
                <div className="bg-light p-4">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Firstname"
                            defaultValue={firstname}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label htmlFor="name">Firstname</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            placeholder="Your lastname"
                            defaultValue={lastname}
                            onChange={(e) => setlastname(e.target.value)}
                          />
                          <label htmlFor="email">Lastname</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="name">Email</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Your Number"
                            defaultValue={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          <label htmlFor="email">Phone</label>
                        </div>
                      </div>
                      {/* <div className="col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="subject" placeholder="Subject" />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: "100px" }}
                            defaultValue={msg}
                            onChange={(e) => setMsg(e.target.value)}
                          />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                          onClick={btnSubmit}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="col-md-6 pe-lg-0 wow fadeInRight"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInRight",
                }}
              >
                <div className="position-relative h-100">
                  <iframe
                    className="position-absolute w-100 h-100"
                    style={{ objectFit: "cover" }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14269.965923190812!2d70.7971733!3d22.2591208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca62f0c3cea3%3A0x3eb6be04e01dd7ad!2sSantoshi%20Electro%20Engineering!5e1!3m2!1sen!2sin!4v1725437874249!5m2!1sen!2sin"
                    frameBorder={0}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

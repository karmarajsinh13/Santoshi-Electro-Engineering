import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Contactus() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    const res = await axios.get("http://localhost:8080/see/contact_us");
    setContact(res.data);

    console.log(res.data);
  };
  const deletecontact = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:8080/see/contact_us/" + id
      );
      console.log(res.data);
      alert(res.data);
      getContact();
   
    }
  };
  return (
    <div
      style={{ marginTop: "50px", marginLeft: "290px", marginRight: "20px" }}
    >
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <h2>Contact Table</h2>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Name
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Email
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Contact
                      </th>
                      <th class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Entry Date
                      </th>
                      <th class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Message
                      </th>
                      <th class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Action
                      </th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {contact.map((contact) => (
                      <tr>
                        <td>
                          <p class="text-s font-weight-bold mb-0">
                            {contact.firstname}
                            {contact.lastname}
                          </p>
                        </td>

                        <td>
                          <p class="text-s font-weight-bold mb-0">
                            {contact.email}
                          </p>
                        </td>

                        <td>
                          <p class="text-s font-weight-bold mb-0">
                            {contact.phone}
                          </p>
                        </td>
                        <td>
                          <p class="text-s font-weight-bold mb-0">
                            {contact.entry_date}
                          </p>
                        </td>
                        <td>
                          <p
                            class="text-s font-weight-bold mb-0"
                            style={{
                              width: "300px",
                              height: "100px",
                              overflow: "auto",
                              whiteSpace: "pre-wrap",
                              wordWrap: "break-word",
                              textOverflow: "ellipsis",
                              display: "block",
                              textTransform: "capitalize",
                              cursor: "pointer",
                              alignContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {contact.msg}
                          </p>
                        </td>

                        <td class="align-middle">
                          <div class="ms-auto">
                            <a
                              href="/Contact_us"
                              class="btn btn-link text-danger text-gradient px-3 mb-0"
                              onClick={() => deletecontact(contact.id)}
                            >
                              <i class="far fa-trash-alt me-2"></i>
                              Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

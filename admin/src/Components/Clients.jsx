import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Clients() {
    const [clients, setclients] = useState([]);

    useEffect(() => {
      getclients();
    }, []);
  
    const getclients = async () => {
      const res = await axios.get("http://localhost:8080/see/clients");
      setclients(res.data);
      console.log(res.data);
    };
    const deleteclients = async (id) => {
      let ans = window.confirm("are you sure?");
      if (ans) {
        const res = await axios.delete(
          "http://localhost:8080/see/clients/" + id
        );
        console.log(res.data);
        alert(res.data);
        getclients();
      }
    };
  return (
    <div
      style={{ marginTop: "50px", marginLeft: "290px", marginRight: "20px" }}
    >
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div className="card-body">
              <div class="card-header pb-0">
                <h2>clients table</h2>
                <li class="nav-item d-flex align-items-center">
                  <Link
                    class="btn btn-outline-primary btn-sm mb-0 me-3"
                    to="/Add_clients"
                  >
                    Add clients
                  </Link>
                </li>
              </div>
              <div class="card-body px-0 pt-0 pb-2">
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr role="row">
                        <th
                          className="text-center "
                          style={{
                            width: "40px",
                          }}
                        >
                          IMG
                        </th>
                        <th className="text-center " style={{ width: "25px" }}>
                          Client Name
                        </th>
                        <th className="text-center " style={{ width: "25px" }}>
                        Upload Date
                        </th>
                        <th className="text-center " style={{ width: "25px" }}>
                          Entry_by
                        </th>
                        <th
                          className="text-center sorting"
                          style={{ width: "100px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((clients) => (
                        <tr role="row" className="odd">
                          <td class="align-middle text-center">
                            <img
                              src={`http://localhost:8080/uploads/${clients.img}`}
                              class="avatar avatayyr-lg me-6"
                              style={{
                                width: "200px",
                                height: "150px",
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius: "10px",
                                cursor: "pointer",
                              }}
                              alt="user1"
                            />
                          </td>
                          <td class="align-middle text-center">
                            {clients.client_name}
                          </td>
                          <td class="align-middle text-center">
                            {clients.entry_date}
                          </td>
                          <td class="align-middle text-center">
                            {clients.entry_by}
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-xs btn-primary edit_clients"
                              type="button"
                            >
                               <Link to={`/Add_clients/` + clients.id}>Edit</Link>
                            </button> &nbsp;&nbsp;
                            <button
                              className="btn btn-xs btn-info edit_clients"
                              type="button"

                            >
                              <Link to={`/All_clients/` + clients.id}>View</Link>
                            </button>
                            &nbsp;&nbsp;
                            <button
                              href="/clients"
                              class="btn btn-xs btn-danger delete_clients"
                              onClick={() => deleteclients(clients.id)}
                            >
                              <i class="far fa-trash-alt me-2"></i>
                              Delete
                            </button>
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
      </div>
    </div>
  )
}

import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import logo from "../img/logo.png";
import {
  AiOutlineLaptop,
  AiOutlineMan,
  AiOutlineProfile,
} from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiBox3Line, RiGalleryLine, RiTeamLine, RiUser2Fill, RiUser3Fill, RiUser3Line } from "react-icons/ri";
import {
  PiBuildings,
  PiContactlessPaymentBold,
  PiSmileyBold,
} from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";

import { useEffect } from "react";

export default function Sidebar() {
    const menuitemsadmin = [
        {
          path: "/",
          name: "Home",
          icon: <IoHomeOutline size={20} color="#FB8340" />,
        },
        {
          path: "/Products",
          name: "Products",
          icon: <RiBox3Line size={20} color="#FB8340" />,
        },
        {
          path: "/Gallery",
          name: "Gallery",
          icon: <RiGalleryLine size={20} color="#FB8340" />,
        },
        {
          path: "/Clients",
          name: "Clients",
          icon: <RiTeamLine size={20} color="#FB8340" />,
        },
        {
          path: "/Contactus",
          name: "Contact",
          icon: <PiContactlessPaymentBold size={20} color="#FB8340" />,
        },
        // {
        //   path: "/Viewparticipate",
        //   name: "Viewparticipate",
        //   icon: <PiSmileyBold size={20} color="#FB8340" />,
        // },
        // {
        //   path: "/Job",
        //   name: "Job",
        //   icon: <AiOutlineLaptop size={20} color="#FB8340" />,
        // },
   
      ];
  return (
    <>
    <div
      class="position-absolute w-100 min-height-300 top-0"
      style={{
        backgroundColor: "#5e72e4 ",
      }}
    >
      <span class="mask bg-primary opacity-6"></span>
    </div>

    <aside
      class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 fixed-start"
     
    >
      <div class="sidenav-header">
        <i
          class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
        
        ></i>
        <a
          class="navbar-brand m-0"
        
        >
          <img
            src={logo}
            class="navbar-brand-img h-100  d-inline-block ms-2 w-100 "
            alt="main_logo"
          />
          {/* <span class="ms-1 font-weight-bold">
            &nbsp;&nbsp;G U R U K U L &nbsp;&nbsp;A l u m n i
          </span> */}
        </a>
      </div>
      <hr class="horizontal dark mt-1" />
      {/* {admin_id ? (
      <center className="mt-3">
        <Link to="/Profile">
        <a >
          <img
            src={`http://localhost:3000/uploads/${photo}`}
            class="navbar-brand-img h-100 rounded-circle"
            alt="main_logo"
          />
          <span  class="ms-1 font-weight-bold">&nbsp;&nbsp;{firstname}</span>
        </a></Link>
      </center>
       ) : null} */}
      <hr class="horizontal dark mt-0" />

      <>
        {/* Menu Items admin */}
        <div
          id="sidenav-collapse-main"
          style={{ marginLeft: "30px", marginRight: "30px" }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {menuitemsadmin.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <NavLink
                  to={item.path}
                  className="nav-link"
                  activeClassName="active"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#000",
                    padding: "10px",
                    borderRadius: "10px",
                    transition: "background-color 0.3s ease",
                  }}
                  activeStyle={{ backgroundColor: "#e6e6e6" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <div style={{ marginRight: "15px" }}>{item.icon}</div>
                  <span style={{ fontSize: "16px" }}>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </>

      <></>

      <hr class="horizontal dark mt-0" />
      {/* {admin_id ? (
        <div
          id="sidenav-collapse-main"
          style={{ marginLeft: "30px", marginRight: "30px" }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li onClick={btnSignOut}>
              <div
                className="nav-link"
                activeClassName="active"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#000",
                  padding: "10px",
                  borderRadius: "10px",
                  transition: "background-color 0.3s ease",
                }}
                activeStyle={{ backgroundColor: "#e6e6e6" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <div style={{ marginRight: "15px" }}>
                  <IoIosLogOut />
                </div>
                <span style={{ fontSize: "16px" }}>Logout</span>
              </div>
            </li>
          </ul>
        </div>
      ) : null} */}
    </aside>
  </>
  )
}

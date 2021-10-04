import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary py-3 sticky-top">
      <div className="container-fluid d-flex">
        <h3 className="text-light">Developers Choice</h3>
        <div>
          <ul className="d-flex list-unstyled">
            <li className="">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "orange",
                }}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "orange",
                }}
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "orange",
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "orange",
                }}
                to="/contact"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.style.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container margin-container">
          <Link to="/">
            <img
              className="img-resize"
              src={process.env.PUBLIC_URL + "/apt-design-logo.png"}
              alt="my-logo"
            />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="navbar-font hover">home</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <div className="navbar-font hover">about me</div>
          </Link>
          <a
            style={{ textDecoration: "none" }}
            href="https://docs.google.com/document/d/1BhQWHBHtmYBnpMbbYQ8Sodklr_Jsx3pcTTBa26-8S7I/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className="navbar-font hover">resume</div>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

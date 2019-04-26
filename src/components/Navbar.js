import React from "react";
import logoPlatzi from "../images/logo.svg";
import "./styles/Navbar.css";
import { Link } from "react-router-dom"

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img src={logoPlatzi} className="Navbar__brand-logo" alt="" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;

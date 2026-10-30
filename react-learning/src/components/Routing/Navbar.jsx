import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = ["Home", "About Us", "Contact Us", "Signup", "Login"];

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#222",
    color: "white",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const ulStyle = {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>MyWebsite</div>

      <ul style={ulStyle}>
            <li>  <Link to="/home" style={linkStyle}>Home</Link> </li>
            <li>  <Link to="/contact" style={linkStyle}>Contact</Link> </li>
      </ul>
    </nav>
  );
};

export default Navbar;

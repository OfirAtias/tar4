import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#FFE81F" : "white", 
    fontWeight: isActive ? "bold" : "normal",
    margin: "0 20px",
    textDecoration: "none",
    fontSize: "1.2rem",
    textShadow: isActive ? "0 0 10px #FFE81F" : "none",
    transition: "0.3s",
  });

  return (
    <nav
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/characters" style={linkStyle}>
        Characters
      </NavLink>
    </nav>
  );
}

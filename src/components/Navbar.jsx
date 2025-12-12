import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // פונקציית העיצוב לקישור פעיל (לפי דרישה סעיף 3)
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
    margin: "0 10px",
    textDecoration: "none",
    fontSize: "1.2rem",
  });

  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "#e9ecef",
        textAlign: "center",
      }}
    >
      {/* קישור לדף הבית */}
      <NavLink to="/" style={linkStyle}>
        בית
      </NavLink>
      |{/* קישור לדף אודות */}
      <NavLink to="/about" style={linkStyle}>
        אודות
      </NavLink>
      |{/* קישור לדף הדמויות (ניצור אותו בהמשך) */}
      <NavLink to="/characters" style={linkStyle}>
        דמויות
      </NavLink>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        padding: "40px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(5px)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 62, 62, 0.3)",
        maxWidth: "600px",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          color: "#ff3e3e",
          textShadow: "0 0 20px rgba(255, 62, 62, 0.6)",
          margin: 0,
        }}
      >
        404
      </h1>

      <h2 style={{ color: "white", fontSize: "2rem", marginBottom: "20px" }}>
        Lost in Space?
      </h2>

      <p style={{ color: "#ccc", fontSize: "1.2rem", marginBottom: "40px" }}>
        The page you are looking for does not exist in this galaxy.
      </p>

      <Link to="/">
        <button
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            backgroundColor: "transparent",
            border: "2px solid #ff3e3e",
            color: "#ff3e3e",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 0 15px rgba(255, 62, 62, 0.4)",
            transition: "0.3s",
            fontWeight: "bold",
          }}
        >
          Return to Base
        </button>
      </Link>
    </div>
  );
}

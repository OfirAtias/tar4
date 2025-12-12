import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <header>
        <Navbar />
      </header>

      <main
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          width: "100%",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0, 210, 255, 0.3) transparent",
        }}
      >
        <Outlet />
      </main>

      <footer
        style={{
          textAlign: "center",
          color: "#888",
          padding: "15px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "rgba(0,0,0,0.9)",
          fontSize: "0.9rem",
          zIndex: 10,
        }}
      >
        <p>© 2025 Star Wars Fan Site | React Course Assignment</p>
      </footer>
    </div>
  );
}

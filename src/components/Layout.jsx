import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // שניהם באותה תיקייה (components), אז זה תקין

export default function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
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
          backgroundColor: "rgba(0,0,0,0.8)",
          fontSize: "0.9rem",
        }}
      >
        <p>© 2025 Star Wars Fan Site | React Course Assignment</p>
      </footer>
    </div>
  );
}

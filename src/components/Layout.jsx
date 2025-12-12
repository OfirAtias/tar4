import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // 1. מייבאים את ה-Navbar

export default function Layout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* 2. משתמשים בו בחלק העליון */}
      <header>
        <Navbar />
      </header>

      <main style={{ padding: "20px", minHeight: "80vh" }}>
        {/* כאן יתחלפו הדפים */}
        <Outlet />
      </main>

      <footer
        style={{
          marginTop: "20px",
          textAlign: "center",
          color: "#666",
          borderTop: "1px solid #ddd",
          padding: "15px",
        }}
      >
        <p>© Star Wars Fan Site 2025</p>
      </footer>
    </div>
  );
}

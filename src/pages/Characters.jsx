import React from "react";
import { Link } from "react-router-dom";
import { characters } from "../data";

export default function Characters() {
  return (
    <div style={{ width: "100%", maxWidth: "500px", textAlign: "center" }}>
      <h2
        style={{
          color: "white",
          fontSize: "3rem",
          marginBottom: "30px",
          textShadow: "0 0 10px rgba(255,255,255,0.5)",
        }}
      >
        Select a Character
      </h2>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {characters.map((char) => (
          <li key={char.id} style={{ margin: "15px 0" }}>
            <Link
              to={`/characters/${char.id}`}
              style={{
                display: "block",
                textDecoration: "none",
                color: "#00d2ff", // כחול ניאון בהיר
                fontSize: "1.5rem",
                padding: "15px",
                border: "1px solid rgba(0, 210, 255, 0.3)",
                borderRadius: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                transition: "0.3s all",
                letterSpacing: "2px",
              }}
              // אפקט מעבר עכבר (inline קצת טריקי ב-React, אז נעשה את זה פשוט)
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(0, 210, 255, 0.1)";
                e.currentTarget.style.borderColor = "#00d2ff";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                e.currentTarget.style.borderColor = "rgba(0, 210, 255, 0.3)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {char.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#FFE81F",
          textShadow: "0 0 20px rgba(255, 232, 31, 0.6)",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        Welcome to the Star Wars Website
      </h1>

      <p
        style={{
          fontSize: "1.5rem",
          maxWidth: "600px",
          lineHeight: "1.6",
          textShadow: "0 0 5px black",
        }}
      >
        Here you can find information about your favorite characters from the
        galaxy far, far away.
      </p>
    </div>
  );
}

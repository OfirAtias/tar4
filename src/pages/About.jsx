import React from "react";

export default function About() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "600px",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "15px",
        marginTop: "50px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2
        style={{
          color: "#FFE81F",
          fontSize: "2.5rem",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        About the Project
      </h2>

      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#ddd" }}>
        This website was built as part of <strong>Assignment 4</strong> in the
        React course.
        <br />
        <br />
        It demonstrates the use of <strong>React Router</strong> for navigation,
        dynamic routing, and creating a Single Page Application (SPA)
        experience.
      </p>
    </div>
  );
}

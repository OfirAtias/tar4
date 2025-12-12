import React from "react";
import { useParams, Link } from "react-router-dom";
import { characters } from "../data";

export default function CharacterDetails() {
  const { id } = useParams();

  const character = characters.find((c) => c.id === Number(id));

  if (!character) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        <h2>Character not found!</h2>
        <Link
          to="/characters"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Back to List
        </Link>
      </div>
    );
  }

  const sideColor = character.side === "Dark" ? "#ff3e3e" : "#00d2ff";
  const shadowColor =
    character.side === "Dark"
      ? "rgba(255, 62, 62, 0.5)"
      : "rgba(0, 210, 255, 0.5)";

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "500px",
        width: "100%",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(10px)",
        border: `2px solid ${sideColor}`,
        borderRadius: "20px",
        boxShadow: `0 0 30px ${shadowColor}`,
        marginTop: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "white",
          marginBottom: "10px",
          textTransform: "uppercase",
        }}
      >
        {character.name}
      </h1>

      <h3 style={{ color: "#aaa", marginBottom: "30px", fontSize: "1.5rem" }}>
        {character.role}
      </h3>

      <div
        style={{
          fontSize: "1.8rem",
          marginBottom: "40px",
          padding: "10px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        Side:{" "}
        <span
          style={{
            color: sideColor,
            fontWeight: "bold",
            textShadow: `0 0 10px ${sideColor}`,
          }}
        >
          {character.side}
        </span>
      </div>

      <Link to="/characters">
        <button
          style={{
            padding: "12px 30px",
            fontSize: "1.1rem",
            backgroundColor: sideColor,
            color: "black",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          Back to List
        </button>
      </Link>
    </div>
  );
}

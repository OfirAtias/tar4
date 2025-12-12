import React from "react";
import { useParams, Link } from "react-router-dom";
import { characters } from "../data";

export default function CharacterDetails() {
  // 1. שליפת ה-ID מתוך הכתובת
  const { id } = useParams();

  // 2. חיפוש הדמות המתאימה במערך (שימי לב להמרה למספר עם parseInt או Number)
  const character = characters.find((c) => c.id === Number(id));

  // 3. טיפול במקרה שהדמות לא נמצאה (ID שגוי)
  if (!character) {
    return <h2>דמות לא נמצאה!</h2>;
  }

  // 4. בונוס: צבע טקסט לפי הצד של הדמות
  const sideColor = character.side === "Dark" ? "red" : "blue";

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        maxWidth: "400px",
      }}
    >
      <h2>פרטי דמות: {character.name}</h2>
      <p>
        <strong>תפקיד:</strong> {character.role}
      </p>
      <p>
        <strong>צד:</strong>
        <span style={{ color: sideColor, fontWeight: "bold", margin: "0 5px" }}>
          {character.side}
        </span>
      </p>

      <hr />
      <Link to="/characters">חזרה לרשימה</Link>
    </div>
  );
}

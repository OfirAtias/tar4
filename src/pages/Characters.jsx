import React from "react";
import { Link } from "react-router-dom";
import { characters } from "../data"; // ייבוא הנתונים מקובץ הדאטה שיצרנו

export default function Characters() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>רשימת דמויות</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {characters.map((char) => (
          <li key={char.id} style={{ margin: "10px 0" }}>
            {/* קישור לדף הפרטים של הדמות הספציפית */}
            <Link
              to={`/characters/${char.id}`}
              style={{
                textDecoration: "none",
                color: "blue",
                fontSize: "1.2rem",
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

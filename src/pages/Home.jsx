import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        height: "80vh", // תופס את גובה המסך
        display: "flex", // שימוש בפלקס לסידור
        flexDirection: "column", // מלמעלה למטה
        justifyContent: "center", // מירכוז אנכי
        alignItems: "center", // מירכוז אופקי
      }}
    >
      {/* כותרת ראשית בעיצוב ניאון צהוב (כמו הלוגו) */}
      <h1
        style={{
          fontSize: "4rem",
          color: "#FFE81F", // הצהוב של מלחמת הכוכבים
          textShadow: "0 0 20px rgba(255, 232, 31, 0.6)", // הילה זוהרת
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        Welcome to the Galaxy
      </h1>

      {/* תת-כותרת */}
      <p
        style={{
          fontSize: "1.5rem",
          maxWidth: "600px",
          lineHeight: "1.6",
          textShadow: "0 0 5px black",
        }}
      >
        Explore the characters, choose your side, and discover the force within
        you.
      </p>
    </div>
  );
}

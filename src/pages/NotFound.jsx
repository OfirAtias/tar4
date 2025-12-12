import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
      <h1>404 - דף לא נמצא</h1>
      <p>אופס! נראה שהלכת לאיבוד בגלקסיה.</p>
      <Link to="/">חזרה לדף הבית</Link>
    </div>
  );
}

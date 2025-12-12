import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router"; // ייבוא הראוטר שיצרנו

function App() {
  return (
    // הרכיב הזה אחראי להציג את הדף הנכון לפי הכתובת
    <RouterProvider router={router} />
  );
}

export default App;

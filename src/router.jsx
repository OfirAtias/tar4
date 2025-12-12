import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters"; 
import CharacterDetails from "./pages/CharacterDetails"; 
import NotFound from "./pages/NotFound"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
      },
      // הוספת נתיב לרשימת הדמויות [cite: 59-60]
      {
        path: "characters",
        element: <Characters />,
      },
      // הוספת נתיב דינמי לדף פרטים (עם פרמטר id) [cite: 69-70]
      {
        path: "characters/:id",
        element: <CharacterDetails />,
      },
      // הוספת נתיב Catch All לטיפול בשגיאות 404 [cite: 73-75]
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

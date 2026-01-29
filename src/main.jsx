import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import Inicio from "./pages/Inicio.jsx";
import Primaria from "./pages/niveles-educativos/Primaria.jsx";
import Secundaria from "./pages/niveles-educativos/Secundaria.jsx";
import Niveles from "./pages/niveles-educativos/NivelesEscolares.jsx";

import Inscripcion from "./pages/inscripciones/Inscripciones.jsx";
import Inscripcion_Primaria from "./pages/inscripciones/primaria.jsx";
import Inscripcion_Secundaria from "./pages/inscripciones/secundaria.jsx";
import Contacto from "./pages/Contacto.jsx";
import Calendario from "./pages/Calendario.jsx";
import Eventos from "./pages/vida-colonial/Eventos.jsx";
import Galeria from "./pages/vida-colonial/Galeria.jsx";
import Actividades from "./pages/vida-colonial/Extracurriculares.jsx";

import ING from "./pages/vida-colonial/VidaCol.jsx";
import VM from "./pages/conocenos/Mision-vision.jsx";
import Valores from "./pages/conocenos/Valores.jsx";
import Historia from "./pages/conocenos/Historia.jsx";
import Campus from "./pages/conocenos/Campus.jsx";
import Conocenos from "./pages/conocenos/Conocenos.jsx";
import Modelo from "./pages/conocenos/Modelo.jsx";

import NotFound from "./pages/NotFound.jsx";

import "./styles.css";

/* =====================================================
   🍎 Detectar dispositivos Apple (iPhone / iPad)
   - iPhone
   - iPad
   - iPadOS moderno (se reporta como Mac)
   ===================================================== */
(function detectApple() {
  const isApple =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isApple) {
    document.documentElement.classList.add("is-apple");
  }
})();

/* =====================================================
   🌐 Router
   ===================================================== */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Inicio /> },

      { path: "niveles/preescolar", element: <Jardin /> },
      { path: "niveles/primaria", element: <Primaria /> },
      { path: "niveles/secundaria", element: <Secundaria /> },
      { path: "niveles/preparatoria", element: <Prepa /> },
      { path: "niveles", element: <Niveles /> },

      { path: "inscripciones", element: <Inscripcion /> },
      { path: "contacto", element: <Contacto /> },
      { path: "calendario", element: <Calendario /> },

      { path: "vida-ing", element: <ING /> },
      { path: "vida-ing/eventos", element: <Eventos /> },
      { path: "vida-ing/galeria", element: <Galeria /> },
      { path: "vida-ing/extracurriculares", element: <Actividades /> },

      { path: "conocenos/mision-vision", element: <VM /> },
      { path: "conocenos/valores", element: <Valores /> },
      { path: "conocenos/historia", element: <Historia /> },
      { path: "conocenos/otros-campus", element: <Campus /> },
      { path: "conocenos/modelo-educativo", element: <Modelo /> },
      { path: "conocenos", element: <Conocenos /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

/* =====================================================
   🚀 Render
   ===================================================== */
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

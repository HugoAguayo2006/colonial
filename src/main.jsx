// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ⛔ Helmet comentado por debug
import { HelmetProvider } from "react-helmet-async";

// ✅ SOLO lo mínimo para que cargue
import App from "./App.jsx";
import Inicio from "./pages/Inicio.jsx";

// ⛔ Niveles (comentados)
import Primaria from "./pages/niveles-educativos/Primaria.jsx";
// import Secundaria from "./pages/niveles-educativos/Secundaria.jsx";
import Niveles from "./pages/niveles-educativos/NivelesEscolares.jsx";

// ⛔ Inscripciones (comentados)
// import Inscripcion from "./pages/inscripciones/Inscripciones.jsx";
// import Inscripcion_Primaria from "./pages/inscripciones/primaria.jsx";
// import Inscripcion_Secundaria from "./pages/inscripciones/secundaria.jsx";

// ⛔ Otras páginas (comentadas)
// import Contacto from "./pages/Contacto.jsx";
// import Calendario from "./pages/Calendario.jsx";

// ⛔ Vida colonial (comentadas)
// import Eventos from "./pages/vida-colonial/Eventos.jsx";
// import Galeria from "./pages/vida-colonial/Galeria.jsx";
// import Actividades from "./pages/vida-colonial/Extracurriculares.jsx";
// import ING from "./pages/vida-colonial/VidaCol.jsx";

// ⛔ Conócenos (comentadas)
// import VM from "./pages/conocenos/MisionVision.jsx";
// import Valores from "./pages/conocenos/Valores.jsx";
// import Historia from "./pages/conocenos/Historia.jsx";
// import Campus from "./pages/conocenos/Campus.jsx";
// import Conocenos from "./pages/conocenos/Conocenos.jsx";
// import Modelo from "./pages/conocenos/Modelo.jsx";

// ⛔ NotFound comentado (opcional)
// import NotFound from "./pages/NotFound.jsx";

// ✅ CSS (puedes comentarlo si quieres descartar estilos)
import "./styles.css";

/* =====================================================
   🍎 Detectar dispositivos Apple (iPhone / iPad)
   ===================================================== */
(function detectApple() {
  const isApple =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isApple) document.documentElement.classList.add("is-apple");
})();

/* =====================================================
   🌐 Router (mínimo)
   ===================================================== */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Inicio /> },

      // ⛔ Niveles
      // { path: "niveles/secundaria", element: <Secundaria /> },
       { path: "niveles/primaria", element: <Primaria /> },
       { path: "niveles", element: <Niveles /> },

      // ⛔ Inscripciones
      // { path: "inscripciones/primaria", element: <Inscripcion_Primaria /> },
      // { path: "inscripciones/secundaria", element: <Inscripcion_Secundaria /> },
      // { path: "inscripciones", element: <Inscripcion /> },

      // ⛔ Contacto / Calendario
      // { path: "contacto", element: <Contacto /> },
      // { path: "calendario", element: <Calendario /> },

      // ⛔ Vida ING
      // { path: "vida-ing", element: <ING /> },
      // { path: "vida-ing/eventos", element: <Eventos /> },
      // { path: "vida-ing/galeria", element: <Galeria /> },
      // { path: "vida-ing/extracurriculares", element: <Actividades /> },

      // ⛔ Conócenos
      // { path: "conocenos/mision-vision", element: <VM /> },
      // { path: "conocenos/valores", element: <Valores /> },
      // { path: "conocenos/historia", element: <Historia /> },
      // { path: "conocenos/otros-campus", element: <Campus /> },
      // { path: "conocenos/modelo-educativo", element: <Modelo /> },
      // { path: "conocenos", element: <Conocenos /> },

      // ⛔ NotFound
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

/* =====================================================
   🚀 Render (sin Helmet por ahora)
   ===================================================== */
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

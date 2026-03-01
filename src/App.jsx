// src/App.jsx
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ImageModal from "./components/ImageModal.jsx";
import Jeanne from "./components/Jeanne.jsx";

/* ============================
   TRANSICIÓN GLOBAL
============================ */
const PAGE_TRANSITION = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

/* ============================
   VARIANTS NORMALIZADOS (solo entrada)
   - NO exit
   - mismas props: opacity, x, y, scale, filter
============================ */
const V = {
  fade: {
    initial: { opacity: 0, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
    animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
  fadeUp: {
    initial: { opacity: 0, x: 0, y: 18, scale: 1, filter: "blur(0px)" },
    animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
  right: {
    initial: { opacity: 0, x: 26, y: 0, scale: 1, filter: "blur(0px)" },
    animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
  left: {
    initial: { opacity: 0, x: -26, y: 0, scale: 1, filter: "blur(0px)" },
    animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
  up: {
    initial: { opacity: 0, x: 0, y: 26, scale: 1, filter: "blur(0px)" },
    animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
  scale: {
    initial: { opacity: 0, x: 0, y: 0, scale: 0.985, filter: "blur(0px)" },
    animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
  blur: {
    initial: { opacity: 0, x: 0, y: 10, scale: 0.995, filter: "blur(6px)" },
    animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
  push: {
    initial: { opacity: 1, x: 14, y: 0, scale: 1, filter: "blur(0px)" },
    animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
};

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/inicio";

/* ============================
   MAPEO POR RUTA (elige uno)
============================ */
function getVariants(path) {
  // Niveles
  if (path.startsWith("/niveles/preescolar")) return V.up;
  if (path.startsWith("/niveles/secundaria")) return V.right;
  if (path.startsWith("/niveles/preparatoria")) return V.scale;
  if (path.startsWith("/niveles/primaria")) return V.fade;
  if (path.startsWith("/niveles")) return V.fadeUp;

  // Inscripciones
  if (path.startsWith("/inscripciones")) return V.left;
  if (path.startsWith("/inscripciones/primaria")) return V.left;
    if (path.startsWith("/inscripciones/secundaria")) return V.left;

  // Secciones sueltas
  if (path.startsWith("/contacto")) return V.right;
  if (path.startsWith("/calendario")) return V.push;

  // Vida ING
  if (path.startsWith("/vida-colonial/eventos")) return V.push;
  if (path.startsWith("/vida-colonial/galeria")) return V.blur;
  if (path.startsWith("/vida-colonial/extracurriculares")) return V.up;
    if (path.startsWith("/vida-colonial/otros-servicios")) return V.up;
  if (path.startsWith("/vida-colonial")) return V.fadeUp;

  // Conócenos
  if (path.startsWith("/conocenos/mision-vision")) return V.fade;
  if (path.startsWith("/conocenos/valores")) return V.right;
  if (path.startsWith("/conocenos/historia")) return V.scale;
  if (path.startsWith("/conocenos/otros-campus")) return V.scale;
  if (path.startsWith("/conocenos/modelo-educativo")) return V.left;
  if (path.startsWith("/conocenos")) return V.left;

  return V.fadeUp; // default bonito
  };

    const pageVariants = getVariants(location.pathname);

  return (
    <>
    <ScrollToTop />
      <Navbar />

      <main className="app-main">
        <motion.div
          key={location.key} // ✅ fuerza re-render por navegación real
          className="route-page"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          transition={PAGE_TRANSITION}
        >
          <Outlet />
        </motion.div>

      </main>
            <ImageModal />
      {isHome && <Jeanne />}
        <Footer />
    </>
  );
}

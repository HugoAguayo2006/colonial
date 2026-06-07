import { Outlet, useLocation } from "react-router-dom";
import { motion as Motion } from "framer-motion";

import Navbar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ImageModal from "./components/ImageModal.jsx";
import Jeanne from "./components/Jeanne.jsx";

const PAGE_TRANSITION = {
  duration: 0.62,
  ease: [0.22, 1, 0.36, 1],
};

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
    initial: { opacity: 0, x: 28, y: 0, scale: 1, filter: "blur(0px)" },
    animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },

  left: {
    initial: { opacity: 0, x: -28, y: 0, scale: 1, filter: "blur(0px)" },
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

  soft: {
    initial: { opacity: 0, x: 0, y: 12, scale: 0.995, filter: "blur(2px)" },
    animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
};

function getVariants(path) {
  if (path === "/" || path === "/inicio") return V.soft;

  if (path.startsWith("/niveles/primaria")) return V.left;
  if (path.startsWith("/niveles/secundaria")) return V.right;
  if (path.startsWith("/niveles")) return V.fadeUp;

  if (path.startsWith("/inscripciones/primaria")) return V.left;
  if (path.startsWith("/inscripciones/secundaria")) return V.right;
  if (path.startsWith("/inscripciones")) return V.up;

  if (path.startsWith("/contacto")) return V.fadeUp;
  if (path.startsWith("/calendario")) return V.soft;

  if (path.startsWith("/vida-colonial/eventos")) return V.up;
  if (path.startsWith("/vida-colonial/galeria")) return V.blur;
  if (path.startsWith("/vida-colonial/extracurriculares")) return V.scale;
  if (path.startsWith("/vida-colonial/otros-servicios")) return V.right;
  if (path.startsWith("/vida-colonial")) return V.fadeUp;

  if (path.startsWith("/conocenos/mision-vision")) return V.fade;
  if (path.startsWith("/conocenos/valores")) return V.up;
  if (path.startsWith("/conocenos/otros-campus")) return V.scale;
  if (path.startsWith("/conocenos/modelo-educativo")) return V.left;
  if (path.startsWith("/conocenos/clave-de-centro-de-trabajo")) return V.right;
  if (path.startsWith("/conocenos")) return V.fadeUp;

  return V.fade;
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/inicio";

  const isNotFoundPage =
    location.pathname !== "/" &&
    location.pathname !== "/inicio" &&
    !location.pathname.startsWith("/niveles") &&
    !location.pathname.startsWith("/inscripciones") &&
    !location.pathname.startsWith("/contacto") &&
    !location.pathname.startsWith("/calendario") &&
    !location.pathname.startsWith("/vida-colonial") &&
    !location.pathname.startsWith("/conocenos");

  const pageVariants = getVariants(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className={`app-main ${isNotFoundPage ? "app-main--auto" : ""}`}>
        <Motion.div
          key={location.key}
          className={`route-page ${isNotFoundPage ? "route-page--auto" : ""}`}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          transition={PAGE_TRANSITION}
        >
          <Outlet />
        </Motion.div>
      </main>

      <ImageModal />
      {isHome && <Jeanne />}
      <Footer />
    </>
  );
}

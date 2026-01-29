// src/App.jsx
import { Outlet, useLocation } from "react-router-dom";

// ⛔ Comentamos framer-motion por ahora
// import { AnimatePresence, motion } from "framer-motion";

// ⛔ Comentamos componentes externos
// import WhatsAppFloat from "./components/WhatsAppFloat";
// import ScrollToTop from "./components/ScrollToTop";
 import Navbar from "./components/NavBar/Navbar.jsx";
// import Footer from "./components/Footer/Footer";
// import ImageModal from "./components/ImageModal.jsx";

/* ============================
   VARIANTS (comentados)
============================ */

// const variantsRight = {
//   initial: { x: "100%", opacity: 1 },
//   animate: { x: "0%", opacity: 1 },
//   exit: { x: "-100%", opacity: 1 },
// };

// const variantsLeft = {
//   initial: { x: "-100%", opacity: 1 },
//   animate: { x: "0%", opacity: 1 },
//   exit: { x: "100%", opacity: 1 },
// };

// const variantsUp = {
//   initial: { y: "100%", opacity: 1 },
//   animate: { y: "0%", opacity: 1 },
//   exit: { y: "-100%", opacity: 1 },
// };

// const variantsFade = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };

// const variantsFadeUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };

// const variantsScale = {
//   initial: { opacity: 0, scale: 0.97 },
//   animate: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0.97 },
// };

// const variantsBlur = {
//   initial: { opacity: 0, filter: "blur(6px)" },
//   animate: { opacity: 1, filter: "blur(0px)" },
//   exit: { opacity: 0, filter: "blur(6px)" },
// };

// const variantsPush = {
//   initial: { x: "100%" },
//   animate: { x: "0%" },
//   exit: { x: "-30%" },
// };

export default function App() {
  const location = useLocation();

  // ⛔ Comentamos lógica de animaciones
  // const getVariants = (path) => {
  //   if (path.startsWith("/niveles/preescolar")) return variantsUp;
  //   if (path.startsWith("/niveles/secundaria")) return variantsRight;
  //   if (path.startsWith("/niveles/preparatoria")) return variantsScale;
  //   if (path.startsWith("/niveles/primaria")) return variantsFade;
  //   if (path.startsWith("/niveles")) return variantsFadeUp;

  //   if (path.startsWith("/inscripciones")) return variantsLeft;

  //   if (path.startsWith("/contacto")) return variantsRight;
  //   if (path.startsWith("/calendario")) return variantsPush;

  //   if (path.startsWith("/vida-ing/eventos")) return variantsPush;
  //   if (path.startsWith("/vida-ing/galeria")) return variantsBlur;
  //   if (path.startsWith("/vida-ing/extracurriculares")) return variantsUp;
  //   if (path.startsWith("/vida-ing")) return variantsFadeUp;

  //   if (path.startsWith("/conocenos/mision-vision")) return variantsFade;
  //   if (path.startsWith("/conocenos/valores")) return variantsRight;
  //   if (path.startsWith("/conocenos/historia")) return variantsScale;
  //   if (path.startsWith("/conocenos/otros-campus")) return variantsScale;
  //   if (path.startsWith("/conocenos/modelo-educativo")) return variantsLeft;
  //   if (path.startsWith("/conocenos")) return variantsLeft;

  //   return variantsFade;
  // };

  // const pageVariants = getVariants(location.pathname);

  return (
    <>
      {/* ⛔ Componentes globales comentados */}
      {/* <ScrollToTop /> */}
       <Navbar />

      <main className="app-main">
        {/* ⛔ Animaciones comentadas */}
        {/* 
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="route-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
        */}
            <Outlet />
        {/*
          </motion.div>
        </AnimatePresence>
        */}
      </main>

      {/* ⛔ Otros overlays */}
      {/* <ImageModal /> */}
      {/* <Footer /> */}
      {/* <WhatsAppFloat /> */}
    </>
  );
}

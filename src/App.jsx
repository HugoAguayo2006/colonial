import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ImageModal from "./components/ImageModal.jsx";
import Jeanne from "./components/Jeanne.jsx";

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

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className={`app-main ${isNotFoundPage ? "app-main--auto" : ""}`}>
        <div
          key={location.key}
          className={`route-page ${isNotFoundPage ? "route-page--auto" : ""}`}
        >
          <Outlet />
        </div>
      </main>

      <ImageModal />
      {isHome && <Jeanne />}
      <Footer />
    </>
  );
}

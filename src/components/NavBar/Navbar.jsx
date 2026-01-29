// ---------------------------------------------------------
//  Header del sitio Colegio Colonial
//  - iOS FIX: menú móvil como PANEL (no overlay)
//  - Hamburguesa SOLO móvil (CSS)
//  - Botón "Más" SOLO desktop y funcionando (button + state)
// ---------------------------------------------------------
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MENU } from "./datos.js";
import { useEffect, useMemo, useRef, useState } from "react";

const FACEBOOK_URL = "https://www.facebook.com/InstitutoNuevaGaliciaGDL";
const INSTAGRAM_URL = "https://www.instagram.com/inghidalgo_gdl/";

function SocialLinks() {
  return (
    <div className="header-social social-in-header" aria-label="Redes sociales">
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook Colegio Colonial"
        title="Facebook"
        className="social-link"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/images/social/facebook_icon.webp"
          alt="Facebook"
          className="social-ico-img-f"
          loading="lazy"
          data-nozoom="true"
        />
      </a>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Colegio Colonial"
        title="Instagram"
        className="social-link"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/images/social/instagram.webp"
          alt="Instagram"
          className="social-ico-img"
          loading="lazy"
          data-nozoom="true"
        />
      </a>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);
  const headerRef = useRef(null);

  // =====================================================
  //  MENÚ – PARTIR ITEMS PARA DESKTOP
  // =====================================================
  const DESKTOP_LIMIT = 4;
  const CONTACT_PATH = "/contacto";

  const itemsSinContacto = useMemo(
    () => MENU.filter((i) => i.path !== CONTACT_PATH),
    []
  );

  const top = useMemo(
    () => itemsSinContacto.slice(0, DESKTOP_LIMIT),
    [itemsSinContacto]
  );

  const more = useMemo(
    () => itemsSinContacto.slice(DESKTOP_LIMIT),
    [itemsSinContacto]
  );

  // =====================================================
  //  CERRAR EN CLICK AFUERA + ESC
  // =====================================================
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setDesktopMoreOpen(false);
      }
    };

    const onClickOutside = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) {
        setDesktopMoreOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  // Cerrar menú móvil si se pasa a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setDesktopMoreOpen(false);
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner">
        {/* LEFT: LOGO + NOMBRE */}
        <div className="header-left">
          <NavLink
            to="/"
            className="brand"
            aria-label="Ir al inicio"
            onClick={closeAll}
            end
          >
            <div className="brand-mark">
              <img
                src="/images/logo.png"
                alt="Logo Colegio Colonial"
                data-nozoom="true"
              />
            </div>
            <span className="brand-text">Colegio Colonial</span>
          </NavLink>
        </div>

        {/* CENTER: MENÚ SOLO EN DESKTOP */}
        <nav className="header-center desktop-only" aria-label="Navegación principal">
          {top.map((item) => (
            <NavLink key={item.path} to={item.path} end onClick={closeAll}>
              {item.label}
            </NavLink>
          ))}

          {more.length > 0 && (
            <div className="more" style={{ position: "relative" }}>
              <button
                type="button"
                className="more-btn"
                aria-haspopup="true"
                aria-expanded={desktopMoreOpen}
                onClick={() => setDesktopMoreOpen((v) => !v)}
              >
                Más ▾
              </button>

              <div className={`more-dropdown ${desktopMoreOpen ? "open" : ""}`}>
                {more.map((item) => (
                  <NavLink key={item.path} to={item.path} onClick={closeAll}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* RIGHT */}
        <div className="header-right">
          <SocialLinks />

          <NavLink className="cta desktop-only" to={CONTACT_PATH} onClick={closeAll}>
            Contáctanos
          </NavLink>

          {/* Hamburguesa (CSS la muestra solo en móvil) */}
          <button
            className="menu-btn"
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((v) => !v);
              setDesktopMoreOpen(false);
            }}
          >
            <span className="menu-icon-lines" />
            <span className="menu-icon-lines" />
            <span className="menu-icon-lines" />
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL COMO PANEL (NO OVERLAY) */}
      <div className={`mobile-panel ${mobileOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        <nav className="mobile-nav" aria-label="Menú móvil">
          {itemsSinContacto.map((i) => (
            <NavLink key={i.path} to={i.path} onClick={closeAll} end={i.path === "/"}>
              {i.label}
            </NavLink>
          ))}

          <NavLink className="cta" to={CONTACT_PATH} onClick={closeAll}>
            Contáctanos
          </NavLink>
        </nav>
      </div>

      <div className="separator-red" />
    </header>
  );
}

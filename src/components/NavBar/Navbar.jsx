// src/components/Navbar/Navbar.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// === Logo webp ===
const LOGO_SRC = "/images/logo-escudo.webp";

// === Links de redes (externos) ===
const SOCIAL = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  whatsapp:
    "https://wa.me/523331585919?text=Hola%20Instituto%20Nueva%20Galicia%20Tlajomulco%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n.",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  const menu = useMemo(
    () => [
      { label: "Inicio", href: "/" },
      {
        label: "Conócenos",
        href: "/conocenos",
        children: [
          { label: "Historia", href: "/conocenos/historia" },
          { label: "Modelo Educativo", href: "/conocenos/modelo-educativo" },
          { label: "Misión y visión", href: "/conocenos/mision-vision" },
          { label: "Valores", href: "/conocenos/valores" },
          { label: "Otros Campus", href: "/conocenos/otros-campus" },
        ],
      },
      {
        label: "Niveles",
        href: "/niveles",
        children: [
          { label: "Preescolar", href: "/niveles/preescolar" },
          { label: "Primaria", href: "/niveles/primaria" },
          { label: "Secundaria", href: "/niveles/secundaria" },
          { label: "Preparatoria", href: "/niveles/preparatoria" },
        ],
      },
      { label: "Inscripciones", href: "/inscripciones" },
      {
        label: "Vida ING",
        href: "/vida-ing",
        children: [
          { label: "Extracurriculares", href: "/vida-ing/extracurriculares" },
          { label: "Eventos", href: "/vida-ing/eventos" },
          { label: "Galería", href: "/vida-ing/galeria" },
        ],
      },
      { label: "Calendario", href: "/calendario" },
      { label: "Contacto", href: "/contacto" },
    ],
    []
  );

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    }

    function onClickOutside(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  // clase activa para NavLink (sin cambiar tu CSS)
  const navLinkClass = ({ isActive }) =>
    `ing-link${isActive ? " is-active" : ""}`;

  const mobileLinkClass = ({ isActive }) =>
    `ing-mobileLink${isActive ? " is-active" : ""}`;

  const ddLinkClass = ({ isActive }) =>
    `ing-ddLink${isActive ? " is-active" : ""}`;

  const mobileSubLinkClass = ({ isActive }) =>
    `ing-mobileSublink${isActive ? " is-active" : ""}`;

  return (
    <header className="ing-nav" ref={navRef}>
      {/* ====== FRANJA / BLOQUE AZUL ====== */}
      <div className="ing-topbar">
        <NavLink
          className="ing-brand"
          to="/"
          aria-label="Ir a Inicio"
          onClick={closeAll}
          end
        >
          <img
            className="ing-logo"
            src={LOGO_SRC}
            alt="Escudo Instituto Nueva Galicia"
            loading="eager"
          />

          <h1 className="ing-title">
            <span className="ing-titleLines">
              Instituto <span className="ing-titleBreak" />
              Nueva Galicia <span className="ing-titleBreak" />
              Tlajomulco
            </span>

            <span className="ing-titleInline">
              Instituto Nueva Galicia Tlajomulco
            </span>
          </h1>
        </NavLink>

        {/* Redes (externo) + Hamburguesa */}
        <div className="ing-top-actions">
          <nav className="ing-social" aria-label="Redes sociales">
            <a
              className="ing-iconBtn"
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/icons/facebook.webp"
                alt="Facebook Instituto Nueva Galicia"
                className="ing-iconImg"
                loading="lazy"
              />
            </a>

            <a
              className="ing-iconBtn"
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/icons/instagram.webp"
                alt="Instagram Instituto Nueva Galicia"
                className="ing-iconImg"
                loading="lazy"
              />
            </a>

            <a
              className="ing-iconBtn"
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/icons/WhatsApp.webp"
                alt="WhatsApp Instituto Nueva Galicia"
                className="ing-iconImg"
                loading="lazy"
              />
            </a>
          </nav>

          <button
            className="ing-burger"
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((v) => !v);
              setOpenDropdown(null);
            }}
          >
            <BurgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* ====== FRANJA ROJA (DESKTOP) ====== */}
      <div className="ing-menubar" aria-label="Navegación principal">
        <nav className="ing-menu">
          <ul className="ing-menuList">
            {menu.map((item) => {
              const hasChildren = !!item.children?.length;
              const id = `dd-${item.label.replace(/\s+/g, "-").toLowerCase()}`;
              const isOpen = openDropdown === id;

              return (
                <li
                  key={item.label}
                  className={`ing-item ${hasChildren ? "has-children" : ""}`}
                >
                  <div className="ing-itemRow">
                    <NavLink
                      className={navLinkClass}
                      to={item.href}
                      onClick={closeAll}
                      end={item.href === "/"}
                    >
                      {item.label}
                    </NavLink>

                    {hasChildren && (
                      <button
                        type="button"
                        className="ing-ddBtn"
                        aria-label={`Abrir submenú de ${item.label}`}
                        aria-expanded={isOpen}
                        onClick={() => toggleDropdown(id)}
                      >
                        <ChevronDownIcon />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <ul className={`ing-dropdown ${isOpen ? "open" : ""}`}>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <NavLink
                            className={ddLinkClass}
                            to={c.href}
                            onClick={closeAll}
                          >
                            {c.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        
      </div>

      

      {/* ====== PANEL MÓVIL ====== */}
      <div className={`ing-mobilePanel ${mobileOpen ? "open" : ""}`}>
        <nav className="ing-mobileNav" aria-label="Menú móvil">
          <ul className="ing-mobileList">
            {menu.map((item) => {
              const hasChildren = !!item.children?.length;
              const id = `mdd-${item.label.replace(/\s+/g, "-").toLowerCase()}`;
              const isOpen = openDropdown === id;

              return (
                <li key={item.label} className="ing-mobileItem">
                  <div className="ing-mobileRow">
                    <NavLink
                      className={mobileLinkClass}
                      to={item.href}
                      onClick={closeAll}
                      end={item.href === "/"}
                    >
                      {item.label}
                    </NavLink>

                    {hasChildren && (
                      <button
                        type="button"
                        className="ing-mobileDdBtn"
                        aria-label={`Abrir submenú de ${item.label}`}
                        aria-expanded={isOpen}
                        onClick={() => toggleDropdown(id)}
                      >
                        <ChevronDownIcon />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <ul className={`ing-mobileDropdown ${isOpen ? "open" : ""}`}>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <NavLink
                            className={mobileSubLinkClass}
                            to={c.href}
                            onClick={closeAll}
                          >
                            {c.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurgerIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6h16M4 12h16M4 18h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ opacity: open ? 0 : 1 }}
      />
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ opacity: open ? 1 : 0 }}
      />
    </svg>
  );
}

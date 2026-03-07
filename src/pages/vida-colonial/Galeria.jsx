import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Galeria.css";
import { createPortal } from "react-dom";
import { normalizeText } from "../../utils/text"; // 🔥 helper global

/**
 * ✅ RECOMENDACIÓN:
 * Guarda tus imágenes en /public/galeria/
 * Ej:
 * /public/galeria/campus-1.webp
 * /public/galeria/campus-2.webp
 * etc.
 */

// Edita esto con tus fotos reales:
const IMAGES = [
  { id: 1, src: "/images/galeria/futbol-1.webp", alt: "Juegos intercolegiales", tag: "Eventos" },
  { id: 2, src: "/images/galeria/futbol-2.webp", alt: "Juegos intercolegiales", tag: "Eventos" },
  { id: 3, src: "/images/galeria/misa-1.webp", alt: "Celebraciones", tag: "Celebraciones" },
  { id: 4, src: "/images/galeria/misa-2.webp", alt: "Celebraciones", tag: "Celebraciones" },
  { id: 5, src: "/images/galeria/misa-3.webp", alt: "Celebraciones", tag: "Celebraciones" },
];

// Mini componente: imagen con lazy + “blur” placeholder
function LazyPhoto({ src, alt, onClick, priority = false }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // IntersectionObserver para cargar solo cuando aparece
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    // si priority, carga inmediato (útil para las primeras 2-3 fotos)
    if (priority) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.dataset.inview = "true";
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "250px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [priority]);

  return (
    <button className="gal__tile" onClick={onClick} type="button" aria-label={`Abrir imagen: ${alt}`}>
      <div className={`gal__ph ${loaded ? "is-loaded" : ""}`} />
      <img
        ref={imgRef}
        className={`gal__img ${loaded ? "is-loaded" : ""}`}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        data-nozoom // ✅ evita que el ImageModal global “por default” se dispare aquí
      />
      <span className="gal__shine" aria-hidden="true" />
    </button>
  );
}

function Lightbox({ open, items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;
  const it = items[index];

  return createPortal(
    <div className="lb" role="dialog" aria-modal="true" aria-label="Visor de imagen">
      {/* overlay clickable */}
      <button className="lb__overlay" type="button" onClick={onClose} aria-label="Cerrar visor" />

      <div className="lb__shell" role="document">
        <div className="lb__top">
          <span className="lb__pill">{it.tag}</span>

          <div className="lb__topRight">
            <span className="lb__counter">
              {index + 1} / {items.length}
            </span>
            <button className="lb__close" onClick={onClose} type="button" aria-label="Cerrar">
              ✕
            </button>
          </div>
        </div>

        <button className="lb__nav lb__nav--left" onClick={onPrev} type="button" aria-label="Anterior">
          ‹
        </button>

        <figure className="lb__figure">
          <img className="lb__img" src={it.src} alt={it.alt} decoding="async" />
          <figcaption className="lb__cap">{it.alt}</figcaption>
        </figure>

        <button className="lb__nav lb__nav--right" onClick={onNext} type="button" aria-label="Siguiente">
          ›
        </button>
      </div>
    </div>,
    document.body
  );
}

export default function Galeria() {
  const tags = useMemo(() => {
    const s = new Set(IMAGES.map((x) => x.tag));
    return ["Todas", ...Array.from(s)];
  }, []);

  const [active, setActive] = useState("Todas");
  const [q, setQ] = useState("");
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  const filtered = useMemo(() => {
    const query = normalizeText(q.trim());

    return IMAGES.filter((x) => {
      const okTag =
        active === "Todas" ? true : normalizeText(x.tag) === normalizeText(active);

      if (!query) return okTag;

      const hay = normalizeText(`${x.alt} ${x.tag}`);
      const okQ = hay.includes(query);

      return okTag && okQ;
    });
  }, [active, q]);

  const openAt = (idx) => {
    setLbIndex(idx);
    setLbOpen(true);
  };

  const onPrev = () => setLbIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const onNext = () => setLbIndex((i) => (i + 1) % filtered.length);

  return (
    <>
      <Helmet>
        <title>Galería Colegio Colonial | Fotos y Vida Escolar</title>
        <meta
          name="description"
          content="Explora la Galería del Colegio Colonial en Querétaro: fotos de campus, aulas, eventos y actividades de primaria y secundaria. Momentos reales."
        />
        <link
          rel="canonical"
          href="https://www.colegiocolonial.edu.mx/vida-colonial/galeria"
        />

        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta property="og:title" content="Galería Colegio Colonial | Vida Colonial" />
        <meta
          property="og:description"
          content="Fotos y momentos del Colegio Colonial en Querétaro: campus, aulas, eventos y actividades escolares de primaria y secundaria."
        />
        <meta
          property="og:url"
          content="https://www.colegiocolonial.edu.mx/vida-colonial/galeria"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galería Colegio Colonial | Vida Colonial" />
        <meta
          name="twitter:description"
          content="Explora fotos del Colegio Colonial en Querétaro: campus, aulas, eventos y actividades escolares de primaria y secundaria."
        />
      </Helmet>

      <section className="gal">
        <div className="gal__bg" aria-hidden="true">
          <span className="gal__orb gal__orb--1" />
          <span className="gal__orb gal__orb--2" />
          <span className="gal__grid" />
        </div>

        <div className="gal__container">
          <header className="gal__head">
            <p className="gal__kicker">Colegio Colonial</p>
            <h1 className="gal__title">Galería</h1>
            <p className="gal__sub">
              Un vistazo a nuestro campus, aulas, experiencias y momentos que se viven día a día.
            </p>
          </header>

          <div className="gal__controls">
            <div className="gal__search">
              <span className="gal__searchIcon" aria-hidden="true">
                ⌕
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="gal__input"
                type="text"
                placeholder="Buscar: aulas, campus, eventos…"
                aria-label="Buscar en la galería"
              />
            </div>

            <div className="gal__chips" role="tablist" aria-label="Filtros de galería">
              {tags.map((t) => (
                <button
                  key={t}
                  className={`gal__chip ${active === t ? "is-active" : ""}`}
                  onClick={() => setActive(t)}
                  type="button"
                  role="tab"
                  aria-selected={active === t}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="gal__meta">
            <span className="gal__count">
              Mostrando <strong>{filtered.length}</strong> de <strong>{IMAGES.length}</strong> fotos
            </span>
            <span className="gal__tip">Tip: usa ← → en el visor</span>
          </div>

          <div className="gal__masonry" aria-label="Cuadrícula de galería">
            {filtered.map((it, idx) => (
              <LazyPhoto
                key={it.id}
                src={it.src}
                alt={it.alt}
                priority={idx < 3}
                onClick={() => openAt(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={lbOpen}
        items={filtered}
        index={lbIndex}
        onClose={() => setLbOpen(false)}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}
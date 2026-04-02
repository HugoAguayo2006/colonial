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
  { id: 3, src: "/images/galeria/misa-1.webp", alt: "Celebraciones", tag: ["Celebraciones" ]},
    { id: 5, src: "/images/galeria/misa-3.webp", alt: "Celebraciones", tag: ["Celebraciones"] },
  { id: 4, src: "/images/galeria/misa-2.webp", alt: "Celebraciones", tag: ["Celebraciones" ]},


  { id: 6, src: "/images/intercolegiales/bienvenida-1.webp", alt: "Bienvenida", tag: ["Intercolegiales"] },
  { id: 7, src: "/images/intercolegiales/futbol-1.webp", alt: "Fútbol", tag: ["Intercolegiales", "Fútbol"] },
  { id: 8, src: "/images/intercolegiales/futbol-2.webp", alt: "Fútbol", tag: ["Intercolegiales", "Fútbol"] },
  { id: 9, src: "/images/intercolegiales/futbol-3.webp", alt: "Fútbol", tag: ["Intercolegiales", "Fútbol"] },
  { id: 10, src: "/images/intercolegiales/futbol-4.webp", alt: "Fútbol", tag: ["Intercolegiales", "Fútbol"] },
  { id: 11, src: "/images/intercolegiales/futbol-5.webp", alt: "Fútbol", tag: ["Intercolegiales", "Fútbol"] },
  { id: 12, src: "/images/intercolegiales/futbol-6.webp", alt: "Fútbol", tag: ["Intercolegiales", "Fútbol"] },
  { id: 13, src: "/images/intercolegiales/futbol-7.webp", alt: "Fútbol", tag: ["Intercolegiales", "Fútbol"] },
  { id: 14, src: "/images/intercolegiales/futbol-8.webp", alt: "Fútbol", tag: ["Intercolegiales", "Fútbol"] },
  { id: 15, src: "/images/intercolegiales/futbol-9.webp", alt: "Fútbol", tag: ["Intercolegiales", "Fútbol"] },

  { id: 16, src: "/images/intercolegiales/basquet-1.webp", alt: "Basquetbol", tag: ["Intercolegiales", "Basquetbol"] },
  { id: 48, src: "/images/intercolegiales/basquet-02.webp", alt: "Basquetbol", tag: ["Intercolegiales", "Basquetbol"] },
  { id: 49, src: "/images/intercolegiales/basquet-03.webp", alt: "Basquetbol", tag: ["Intercolegiales", "Basquetbol"] },
  { id: 50, src: "/images/intercolegiales/basquet-04.webp", alt: "Basquetbol", tag: ["Intercolegiales", "Basquetbol"] },
  { id: 51, src: "/images/intercolegiales/basquet-05.webp", alt: "Basquetbol", tag: ["Intercolegiales", "Basquetbol"] },
  { id: 52, src: "/images/intercolegiales/basquet-06.webp", alt: "Basquetbol", tag: ["Intercolegiales", "Basquetbol"] },
  { id: 53, src: "/images/intercolegiales/basquet-07.webp", alt: "Basquetbol", tag: ["Intercolegiales", "Basquetbol"] },

  { id: 17, src: "/images/intercolegiales/voley-1.webp", alt: "Voley", tag: ["Intercolegiales", "Voley"] },
  { id: 18, src: "/images/intercolegiales/voley-2.webp", alt: "Voley", tag: ["Intercolegiales", "Voley"] },
  { id: 19, src: "/images/intercolegiales/voley-3.webp", alt: "Voley", tag: ["Intercolegiales", "Voley"] },
  { id: 54, src: "/images/intercolegiales/voley-04.webp", alt: "Voley", tag: ["Intercolegiales", "Voley"] },
  { id: 55, src: "/images/intercolegiales/voley-05.webp", alt: "Voley", tag: ["Intercolegiales", "Voley"] },

  { id: 20, src: "/images/intercolegiales/ajedrez-1.webp", alt: "Ajedrez", tag: ["Intercolegiales", "Ajedrez"] },
  { id: 21, src: "/images/intercolegiales/ajedrez-2.webp", alt: "Ajedrez", tag: ["Intercolegiales", "Ajedrez"] },
  { id: 22, src: "/images/intercolegiales/ajedrez-3.webp", alt: "Ajedrez", tag: ["Intercolegiales", "Ajedrez"] },

  { id: 56, src: "/images/intercolegiales/atletismo-01.webp", alt: "Atletismo", tag: ["Intercolegiales", "Atletismo"] },
{ id: 57, src: "/images/intercolegiales/atletismo-02.webp", alt: "Atletismo", tag: ["Intercolegiales", "Atletismo"] },
{ id: 58, src: "/images/intercolegiales/atletismo-03.webp", alt: "Atletismo", tag: ["Intercolegiales", "Atletismo"] },

  // premiación igual 👇
 
  { id: 23, src: "/images/intercolegiales/premiacion-01.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 24, src: "/images/intercolegiales/premiacion-02.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 25, src: "/images/intercolegiales/premiacion-03.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 26, src: "/images/intercolegiales/premiacion-04.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 27, src: "/images/intercolegiales/premiacion-05.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 28, src: "/images/intercolegiales/premiacion-06.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 29, src: "/images/intercolegiales/premiacion-07.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 30, src: "/images/intercolegiales/premiacion-08.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 31, src: "/images/intercolegiales/premiacion-09.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 32, src: "/images/intercolegiales/premiacion-10.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 33, src: "/images/intercolegiales/premiacion-11.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 34, src: "/images/intercolegiales/premiacion-12.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 35, src: "/images/intercolegiales/premiacion-13.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 36, src: "/images/intercolegiales/premiacion-14.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 37, src: "/images/intercolegiales/premiacion-15.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 38, src: "/images/intercolegiales/premiacion-16.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 39, src: "/images/intercolegiales/premiacion-17.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 40, src: "/images/intercolegiales/premiacion-18.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 41, src: "/images/intercolegiales/premiacion-19.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 42, src: "/images/intercolegiales/premiacion-20.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 43, src: "/images/intercolegiales/premiacion-21.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 44, src: "/images/intercolegiales/premiacion-22.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 45, src: "/images/intercolegiales/premiacion-23.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 46, src: "/images/intercolegiales/premiacion-24.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },
{ id: 47, src: "/images/intercolegiales/premiacion-25.webp", alt: "Premiación", tag: ["Intercolegiales", "Premiación"] },


];

const TAG_ORDER = [
  "Todas",
  "Celebraciones",
  "Intercolegiales",
  "Bienvenida",
  "Fútbol",
  "Basquetbol",
  "Voley",
  "Ajedrez",
   "Atletismo",
  "Premiación",
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
  const set = new Set();

  IMAGES.forEach((img) => {
    img.tag.forEach((t) => set.add(t));
  });

  return TAG_ORDER.filter((t) => t === "Todas" || set.has(t));
}, []);

  const [active, setActive] = useState("Todas");
  const [q, setQ] = useState("");
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  const filtered = useMemo(() => {
    const query = normalizeText(q.trim());

    return IMAGES.filter((x) => {
const okTag =
  active === "Todas"
    ? true
    : x.tag.some((t) => normalizeText(t) === normalizeText(active));

      if (!query) return okTag;

      const hay = normalizeText(`${x.alt} ${x.tag.join(" ")}`);
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
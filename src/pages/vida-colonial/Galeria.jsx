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

{ id: 59, src: "/images/galeria/semana-cultural-01.webp", alt: "Semana Cultural", tag: ["Semana Cultural"] },
{ id: 60, src: "/images/galeria/semana-cultural-02.webp", alt: "Semana Cultural", tag: ["Semana Cultural"] },
{ id: 61, src: "/images/galeria/semana-cultural-03.webp", alt: "Semana Cultural", tag: ["Semana Cultural"] },
{ id: 62, src: "/images/galeria/semana-cultural-04.webp", alt: "Semana Cultural", tag: ["Semana Cultural"] },
{ id: 63, src: "/images/galeria/semana-cultural-05.webp", alt: "Semana Cultural", tag: ["Semana Cultural"] },
{ id: 64, src: "/images/galeria/semana-cultural-06.webp", alt: "Semana Cultural", tag: ["Semana Cultural"] },
{ id: 65, src: "/images/galeria/semana-cultural-07.webp", alt: "Semana Cultural", tag: ["Semana Cultural"] },
{ id: 66, src: "/images/galeria/semana-cultural-08.webp", alt: "Semana Cultural", tag: ["Semana Cultural"] },
{ id: 67, src: "/images/galeria/semana-cultural-09.webp", alt: "Semana Cultural", tag: ["Semana Cultural"] },


{ id: 68, src: "/images/galeria/celebraciones-01.webp", alt: "Celebraciones", tag: ["Celebraciones"] },
{ id: 69, src: "/images/galeria/celebraciones-02.webp", alt: "Celebraciones", tag: ["Celebraciones"] },
{ id: 70, src: "/images/galeria/celebraciones-03.webp", alt: "Celebraciones", tag: ["Celebraciones"] },
{ id: 71, src: "/images/galeria/celebraciones-04.webp", alt: "Celebraciones", tag: ["Celebraciones"] },
{ id: 72, src: "/images/galeria/celebraciones-05.webp", alt: "Celebraciones", tag: ["Celebraciones"] },
{ id: 73, src: "/images/galeria/celebraciones-06.webp", alt: "Celebraciones", tag: ["Celebraciones"] },
{ id: 74, src: "/images/galeria/celebraciones-07.webp", alt: "Celebraciones", tag: ["Celebraciones"] },

{ id: 75, src: "/images/galeria/mexicana-01.webp", alt: "Mañanitas Mexicanas", tag: ["Mañanitas Mexicanas"] },
{ id: 76, src: "/images/galeria/mexicana-02.webp", alt: "Mañanitas Mexicanas", tag: ["Mañanitas Mexicanas"] },
{ id: 77, src: "/images/galeria/mexicana-03.webp", alt: "Mañanitas Mexicanas", tag: ["Mañanitas Mexicanas"] },
{ id: 78, src: "/images/galeria/mexicana-04.webp", alt: "Mañanitas Mexicanas", tag: ["Mañanitas Mexicanas"] },

{ id: 79, src: "/images/galeria/mexicana-05.webp", alt: "Mañanitas Mexicanas", tag: ["Mañanitas Mexicanas"] },
{ id: 80, src: "/images/galeria/mexicana-06.webp", alt: "Mañanitas Mexicanas", tag: ["Mañanitas Mexicanas"] },

{ id: 81, src: "/images/galeria/muertos-01.webp", alt: "Día de Muertos", tag: ["Día de Muertos"] },
{ id: 82, src: "/images/galeria/muertos-02.webp", alt: "Día de Muertos", tag: ["Día de Muertos"] },
{ id: 83, src: "/images/galeria/muertos-03.webp", alt: "Día de Muertos", tag: ["Día de Muertos"] },
{ id: 84, src: "/images/galeria/muertos-04.webp", alt: "Día de Muertos", tag: ["Día de Muertos"] },
{ id: 85, src: "/images/galeria/muertos-05.webp", alt: "Día de Muertos", tag: ["Día de Muertos"] },
{ id: 86, src: "/images/galeria/muertos-06.webp", alt: "Día de Muertos", tag: ["Día de Muertos"] },

{ id: 87, src: "/images/galeria/navidad-01.webp", alt: "Posada Navideña", tag: ["Posada Navideña"] },
{ id: 88, src: "/images/galeria/navidad-02.webp", alt: "Posada Navideña", tag: ["Posada Navideña"] },
{ id: 89, src: "/images/galeria/navidad-03.webp", alt: "Posada Navideña", tag: ["Posada Navideña"] },
{ id: 90, src: "/images/galeria/navidad-04.webp", alt: "Posada Navideña", tag: ["Posada Navideña"] },
{ id: 91, src: "/images/galeria/navidad-05.webp", alt: "Posada Navideña", tag: ["Posada Navideña"] },
{ id: 92, src: "/images/galeria/navidad-06.webp", alt: "Posada Navideña", tag: ["Posada Navideña"] },
{ id: 93, src: "/images/galeria/navidad-07.webp", alt: "Posada Navideña", tag: ["Posada Navideña"] },

{ id: 94, src: "/images/galeria/estudiante-01.webp", alt: "Día del Estudiante", tag: ["Día del Estudiante"] },
{ id: 95, src: "/images/galeria/estudiante-02.webp", alt: "Día del Estudiante", tag: ["Día del Estudiante"] },
{ id: 96, src: "/images/galeria/estudiante-03.webp", alt: "Día del Estudiante", tag: ["Día del Estudiante"] },

{ id: 97, src: "/images/galeria/graduaciones-01.webp", alt: "Graduaciones", tag: ["Graduaciones"] },
{ id: 98, src: "/images/galeria/graduaciones-02.webp", alt: "Graduaciones", tag: ["Graduaciones"] },
{ id: 99, src: "/images/galeria/graduaciones-03.webp", alt: "Graduaciones", tag: ["Graduaciones"] },
{ id: 100, src: "/images/galeria/graduaciones-04.webp", alt: "Graduaciones", tag: ["Graduaciones"] },
{ id: 101, src: "/images/galeria/graduaciones-05.webp", alt: "Graduaciones", tag: ["Graduaciones"] },
{ id: 102, src: "/images/galeria/graduaciones-06.webp", alt: "Graduaciones", tag: ["Graduaciones"] },
{ id: 103, src: "/images/galeria/conocimiento-01.webp", alt: "Olimpiada de Conocimiento", tag: ["Olimpiada de Conocimiento"] },
{ id: 104, src: "/images/galeria/bee-01.webp", alt: "Spelling Bee", tag: ["Spelling Bee"] },
{ id: 105, src: "/images/galeria/bee-02.webp", alt: "Spelling Bee", tag: ["Spelling Bee"] },
{ id: 106, src: "/images/galeria/bee-03.webp", alt: "Spelling Bee", tag: ["Spelling Bee"] },
{ id: 107, src: "/images/galeria/revolucion-01.webp", alt: "20 de Noviembre - Revolución Mexicana", tag: ["20 de Noviembre - Revolución Mexicana"] },
{ id: 108, src: "/images/galeria/revolucion-02.webp", alt: "20 de Noviembre - Revolución Mexicana", tag: ["20 de Noviembre - Revolución Mexicana"] },
{ id: 109, src: "/images/galeria/revolucion-03.webp", alt: "20 de Noviembre - Revolución Mexicana", tag: ["20 de Noviembre - Revolución Mexicana"] },
{ id: 110, src: "/images/galeria/familia-01.webp", alt: "Día de la Familia", tag: ["Día de la Familia"] },
{ id: 111, src: "/images/galeria/familia-02.webp", alt: "Día de la Familia", tag: ["Día de la Familia"] },
{ id: 112, src: "/images/galeria/familia-03.webp", alt: "Día de la Familia", tag: ["Día de la Familia"] },
{ id: 113, src: "/images/galeria/12-01.webp", alt: "12 de diciembre - Virgen de Guadalupe", tag: ["12 de diciembre - Virgen de Guadalupe"] },
{ id: 114, src: "/images/galeria/12-02.webp", alt: "12 de diciembre - Virgen de Guadalupe", tag: ["12 de diciembre - Virgen de Guadalupe"] },
{ id: 115, src: "/images/galeria/12-03.webp", alt: "12 de diciembre - Virgen de Guadalupe", tag: ["12 de diciembre - Virgen de Guadalupe"] },
{ id: 116, src: "/images/galeria/puerta-01.webp", alt: "Inauguración de la Puerta Santa", tag: ["Inauguración de la Puerta Santa"] },
{ id: 117, src: "/images/galeria/puerta-02.webp", alt: "Inauguración de la Puerta Santa", tag: ["Inauguración de la Puerta Santa"] },
{ id: 118, src: "/images/galeria/puerta-03.webp", alt: "Inauguración de la Puerta Santa", tag: ["Inauguración de la Puerta Santa"] },
{ id: 119, src: "/images/galeria/puerta-04.webp", alt: "Inauguración de la Puerta Santa", tag: ["Inauguración de la Puerta Santa"] },
{ id: 120, src: "/images/galeria/puerta-05.webp", alt: "Inauguración de la Puerta Santa", tag: ["Inauguración de la Puerta Santa"] },
{ id: 121, src: "/images/galeria/rosario-01.webp", alt: "Rosario Misionero", tag: ["Rosario Misionero"] },
{ id: 122, src: "/images/galeria/rosario-02.webp", alt: "Rosario Misionero", tag: ["Rosario Misionero"] },
{ id: 123, src: "/images/galeria/rosario-03.webp", alt: "Rosario Misionero", tag: ["Rosario Misionero"] },

{ id: 125, src: "/images/galeria/nino-01.webp", alt: "Día del Niño", tag: ["Día del Niño"] },
{ id: 126, src: "/images/galeria/nino-02.webp", alt: "Día del Niño", tag: ["Día del Niño"] },
{ id: 127, src: "/images/galeria/nino-03.webp", alt: "Día del Niño", tag: ["Día del Niño"] },
{ id: 128, src: "/images/galeria/nino-04.webp", alt: "Día del Niño", tag: ["Día del Niño"] },
{ id: 129, src: "/images/galeria/nino-05.webp", alt: "Día del Niño", tag: ["Día del Niño"] },

{ id: 130, src: "/images/galeria/cristo-01.webp", alt: "Encuentro con Cristo", tag: ["Encuentro con Cristo"] },
{ id: 131, src: "/images/galeria/cristo-02.webp", alt: "Encuentro con Cristo", tag: ["Encuentro con Cristo"] },
{ id: 132, src: "/images/galeria/cristo-03.webp", alt: "Encuentro con Cristo", tag: ["Encuentro con Cristo"] },
{ id: 133, src: "/images/galeria/cristo-04.webp", alt: "Encuentro con Cristo", tag: ["Encuentro con Cristo"] },
{ id: 134, src: "/images/galeria/cristo-05.webp", alt: "Encuentro con Cristo", tag: ["Encuentro con Cristo"] },
{ id: 135, src: "/images/galeria/cristo-06.webp", alt: "Encuentro con Cristo", tag: ["Encuentro con Cristo"] },
];

const TAG_ORDER = [
  "Todas",
  "Celebraciones",
  "Semana Cultural",
  "Mañanitas Mexicanas",
  "Día de Muertos",
  "Posada Navideña",
  "Día del Estudiante",
  "Graduaciones",
  "Olimpiada de Conocimiento",
  "Spelling Bee",
  "20 de Noviembre - Revolución Mexicana",
  "Día de la Familia",
  "12 de diciembre - Virgen de Guadalupe",
  "Inauguración de la Puerta Santa",
  "Rosario Misionero",
  "Día del Niño",
  "Encuentro con Cristo",
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
<span className="lb__pill">
  {Array.isArray(it.tag) ? it.tag.join(" · ") : it.tag}
</span>

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

      const hay = normalizeText(`${x.alt} ${x.tag.join(" · ")}`);
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
        <html lang="es-MX" />
        <title>Galería del Colegio Colonial | Fotos y Eventos Escolares</title>
        <meta
          name="description"
          content="Explora la galería del Colegio Colonial en Querétaro: fotos del día a día, eventos escolares, celebraciones, Intercolegiales y actividades de primaria y secundaria con filtros por evento."
        />
        <link
          rel="canonical"
          href="https://colegiocolonial.edu.mx/vida-colonial/galeria"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta property="og:title" content="Galería del Colegio Colonial | Vida Escolar" />
        <meta
          property="og:description"
          content="Fotos de eventos, celebraciones, Intercolegiales, Semana Cultural, Día de Muertos, Posada Navideña, Día del Estudiante y Graduaciones con filtros por evento."
        />
        <meta
          property="og:url"
          content="https://colegiocolonial.edu.mx/vida-colonial/galeria"
        />
        <meta
          property="og:image"
          content="https://colegiocolonial.edu.mx/images/galeria/celebraciones-01.webp"
        />
        <meta
          property="og:image:alt"
          content="Galería de eventos escolares del Colegio Colonial en Querétaro"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galería del Colegio Colonial | Vida Escolar" />
        <meta
          name="twitter:description"
          content="Consulta fotos del Colegio Colonial en Querétaro y filtra por eventos escolares, celebraciones, Intercolegiales y actividades."
        />
        <meta
          name="twitter:image"
          content="https://colegiocolonial.edu.mx/images/galeria/celebraciones-01.webp"
        />
        <meta name="geo.region" content="MX-QUE" />
        <meta name="geo.placename" content="Querétaro, México" />
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

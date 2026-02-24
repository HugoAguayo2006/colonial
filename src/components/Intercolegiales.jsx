import { useMemo, useRef, useState } from "react";
import "./Intercolegiales.css";

const SPORTS = [
  { key: "all", label: "Todos" },
  { key: "ajedrez", label: "Ajedrez" },
  { key: "futbol", label: "Fútbol" },
  { key: "basquetbol", label: "Básquetbol" },
  { key: "voley", label: "Vóley" },
];

// ✅ Cambia rutas por tus imágenes reales
const ITEMS = [
  { id: "i1", sport: "futbol", image: "/intercolegiales/futbol-1.webp" },
  { id: "i2", sport: "futbol", image: "/intercolegiales/futbol-2.webp" },
  { id: "i3", sport: "basquetbol", image: "/intercolegiales/basquet-1.webp" },
  { id: "i4", sport: "basquetbol", image: "/intercolegiales/basquet-2.webp" },
  { id: "i5", sport: "voley", image: "/intercolegiales/voley-1.webp" },
  { id: "i6", sport: "voley", image: "/intercolegiales/voley-2.webp" },
  { id: "i7", sport: "ajedrez", image: "/intercolegiales/ajedrez-1.webp" },
  { id: "i8", sport: "ajedrez", image: "/intercolegiales/ajedrez-2.webp" },
];

const labelSport = (k) =>
  k === "ajedrez"
    ? "Ajedrez"
    : k === "futbol"
    ? "Fútbol"
    : k === "basquetbol"
    ? "Básquetbol"
    : "Vóley";

export default function IntercolegialesCarousel() {
  const [activeSport, setActiveSport] = useState("all");
  const trackRef = useRef(null);

  const filtered = useMemo(() => {
    if (activeSport === "all") return ITEMS;
    return ITEMS.filter((it) => it.sport === activeSport);
  }, [activeSport]);

  const scrollOne = (dir) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector(".icc-card");
    if (!firstCard) return;

    const computed = window.getComputedStyle(track);
    const gap = parseFloat(computed.columnGap || computed.gap || "0") || 0;

    const step = firstCard.getBoundingClientRect().width + gap;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="icc">
      {/* Header sigue centrado bonito */}
      <div className="icc-container">
        <div className="icc-head">
          <div className="icc-chip">Colegio Colonial</div>
          <h2 className="icc-title">Juegos Intercolegiales</h2>
          <p className="icc-subtitle">
            Filtra por deporte y recorre la galería.
          </p>

          <div className="icc-filters" role="tablist" aria-label="Filtros de deporte">
            {SPORTS.map((s) => (
              <button
                key={s.key}
                type="button"
                className={`icc-filter ${activeSport === s.key ? "is-active" : ""}`}
                onClick={() => setActiveSport(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Carrusel FULL WIDTH */}
      <div className="icc-bleed">
        <div className="icc-wrap">
          <button
            className="icc-arrow icc-arrow--left"
            type="button"
            onClick={() => scrollOne(-1)}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className="icc-track" ref={trackRef}>
            {filtered.map((item) => (
              <article className="icc-card" key={item.id}>
                <div className="icc-media">
                  <img
                    src={item.image}
                    alt={`Intercolegiales ${labelSport(item.sport)}`}
                    loading="lazy"
                  />
                  <span className={`icc-tag icc-tag--${item.sport}`}>
                    {labelSport(item.sport)}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <button
            className="icc-arrow icc-arrow--right"
            type="button"
            onClick={() => scrollOne(1)}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
import { useMemo, useRef, useState, useEffect } from "react";
import "./IntercolegialesVideoHero.css";

export default function IntercolegialesVideoHero({
  title = "Intercolegiales 2026",
  subtitle = "Invitamos a los colegios de la orden a vivir una jornada de competencia, convivencia y espíritu deportivo.",
  youtubeId = "VNn2FhvNGTI",
  start = 0, // lo dejamos por compatibilidad, pero lo vamos a ignorar si quieres forzar 0
  logoSrc = "/logo.svg",
  logoAlt = "Escudo",
}) {
  // ✅ FORZAR SIEMPRE 0 (si quieres respetar start, cambia esta línea por: const forcedStart = Number(start) || 0;)
  const forcedStart = 0;

  // ✅ Cache buster para evitar reuso/caché del iframe
  const [cb] = useState(() => Date.now());

  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?start=${forcedStart}&rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&cb=${cb}`;

  /* =======================
     DATA CARRUSEL
  ======================= */

  const SPORTS = [
    { key: "all", label: "Todos" },
    { key: "ajedrez", label: "Ajedrez" },
    { key: "futbol", label: "Fútbol" },
    { key: "basquetbol", label: "Básquetbol" },
    { key: "voley", label: "Vóley" },
  ];

  const ITEMS = [
    { id: "f1", sport: "futbol", image: "/images/intercolegiales/futbol-1.webp" },
    { id: "f2", sport: "futbol", image: "/images/intercolegiales/futbol-2.webp" },

    { id: "b1", sport: "basquetbol", image: "/images/intercolegiales/basquet-1.webp" },

    { id: "v1", sport: "voley", image: "/images/intercolegiales/voley-1.webp" },
    { id: "v2", sport: "voley", image: "/images/intercolegiales/voley-2.webp" },

    { id: "a1", sport: "ajedrez", image: "/images/intercolegiales/ajedrez-1.webp" },
    { id: "a2", sport: "ajedrez", image: "/images/intercolegiales/ajedrez-2.webp" },
    { id: "a3", sport: "ajedrez", image: "/images/intercolegiales/ajedrez-3.webp" },
  ];

  const [activeSport, setActiveSport] = useState("all");
  const trackRef = useRef(null);

  const filtered = useMemo(() => {
    if (activeSport === "all") return ITEMS;
    return ITEMS.filter((it) => it.sport === activeSport);
  }, [activeSport]);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track) return;

    setCanScrollLeft(track.scrollLeft > 0);
    setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 5);
  };

  const scrollOne = (dir) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector(".inter-carousel__card");
    if (!firstCard) return;

    const computed = window.getComputedStyle(track);
    const gap = parseFloat(computed.columnGap || computed.gap || "0") || 0;

    const step = firstCard.getBoundingClientRect().width + gap;

    track.scrollBy({ left: dir * step, behavior: "smooth" });
    setTimeout(updateScrollState, 400);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: 0, behavior: "smooth" });
    setTimeout(updateScrollState, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSport]);

  useEffect(() => {
    setTimeout(updateScrollState, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const labelSport = (k) =>
    k === "ajedrez"
      ? "Ajedrez"
      : k === "futbol"
      ? "Fútbol"
      : k === "basquetbol"
      ? "Básquetbol"
      : "Vóley";

  return (
    <section className="inter-video">
      {/* ================= VIDEO HERO ================= */}
      <div className="inter-video__wrap">
        <header className="inter-video__head">
          <h1 className="inter-video__title">{title}</h1>

          {subtitle && <p className="inter-video__subtitle">{subtitle}</p>}

          <div className="inter-video__actions">
            <a
              className="inter-video__secondary"
              href={`https://www.youtube.com/watch?v=${youtubeId}&t=${forcedStart}s`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir en YouTube
            </a>
          </div>
        </header>

        <div className="inter-video__frame">
          <div className="inter-video__ratio">
            <iframe
              // ✅ KEY para forzar remount real del iframe
              key={`${youtubeId}-${forcedStart}-${cb}`}
              className="inter-video__iframe"
              src={embedUrl}
              title={title}
              loading="eager"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {logoSrc && (
            <div className="inter-video__logo">
              <img src={logoSrc} alt={logoAlt} />
            </div>
          )}
        </div>
      </div>

      {/* ================= MEMORIA FOTOGRÁFICA ================= */}
      <div className="inter-carousel">
        <div className="inter-carousel__intro">
          <h2 className="inter-carousel__memoryTitle">Memoria Fotográfica</h2>
          <p className="inter-carousel__memorySubtitle">
            Revivamos los mejores momentos de los Intercolegiales 2026.
          </p>
        </div>

        <div className="inter-carousel__filters">
          {SPORTS.map((s) => (
            <button
              key={s.key}
              className={`inter-carousel__filter ${activeSport === s.key ? "active" : ""}`}
              onClick={() => setActiveSport(s.key)}
              type="button"
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="inter-carousel__wrap">
          <button
            className={`inter-carousel__arrow left ${!canScrollLeft ? "disabled" : ""}`}
            onClick={() => scrollOne(-1)}
            disabled={!canScrollLeft}
            type="button"
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className="inter-carousel__track" ref={trackRef} onScroll={updateScrollState}>
            {filtered.map((item) => (
              <div className="inter-carousel__card" key={item.id}>
                <div className="inter-carousel__media">
                  <img
                    src={item.image}
                    alt={`Intercolegiales ${labelSport(item.sport)}`}
                    loading="lazy"
                  />
                  <span className={`tag-${item.sport}`}>{labelSport(item.sport)}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`inter-carousel__arrow right ${!canScrollRight ? "disabled" : ""}`}
            onClick={() => scrollOne(1)}
            disabled={!canScrollRight}
            type="button"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
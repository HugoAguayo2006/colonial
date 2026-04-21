// src/pages/Eventos.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { EVENTS } from "../../data/data_events";
import { normalizeText } from "../../utils/text";
import "./Eventos.css";

/* ============================
   👀 Hook: render when in view
============================ */
function useInView(options = { rootMargin: "220px 0px", threshold: 0.01 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function Eventos() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalizeText(query).trim();
    if (!q) return EVENTS;

    return EVENTS.filter((e) => {
      const hayRaw = `${e.title} ${e.desc} ${e.date ?? ""} ${e.time ?? ""} ${e.place ?? ""} ${e.tag ?? ""}`;
      const hay = normalizeText(hayRaw);
      return hay.includes(q);
    });
  }, [query]);

  const { ref: gridRef, inView } = useInView();

  return (
    <main className="ev" id="evTop">
      <Helmet>
        <html lang="es-MX" />
        <title>Eventos Escolares en Querétaro | Colegio Colonial</title>

        <meta
          name="description"
          content="En el Colegio Colonial celebramos eventos escolares en Querétaro que fortalecen la comunidad, los valores cristianos y la experiencia educativa de alumnos de primaria y secundaria."
        />

        <link
          rel="canonical"
          href="https://www.colegiocolonial.edu.mx/vida-colonial/eventos"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta property="og:locale" content="es_MX" />

        <meta
          property="og:title"
          content="Eventos Escolares en Querétaro | Colegio Colonial"
        />

        <meta
          property="og:description"
          content="Festivales, convivencias, celebraciones litúrgicas y actividades cívicas y culturales del Colegio Colonial en Querétaro."
        />

        <meta
          property="og:url"
          content="https://www.colegiocolonial.edu.mx/vida-colonial/eventos"
        />
        <meta
          property="og:image"
          content="https://www.colegiocolonial.edu.mx/images/galeria/celebraciones-02.webp"
        />
        <meta
          property="og:image:alt"
          content="Eventos escolares del Colegio Colonial en Querétaro"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Eventos Escolares en Querétaro | Colegio Colonial"
        />

        <meta
          name="twitter:description"
          content="Eventos del Colegio Colonial: festivales, convivencias y celebraciones que fortalecen valores cristianos en Querétaro."
        />
        <meta
          name="twitter:image"
          content="https://www.colegiocolonial.edu.mx/images/galeria/celebraciones-02.webp"
        />
        <meta name="geo.region" content="MX-QUE" />
        <meta name="geo.placename" content="Querétaro, México" />
      </Helmet>

      {/* HERO */}
      <header className="ev__hero">
        <div className="ev__heroBg" aria-hidden="true">
          <span className="ev__orb ev__orb--1" />
          <span className="ev__orb ev__orb--2" />
          <span className="ev__gridGlow" />
          <span className="ev__shine" />
        </div>

        <div className="ev__heroInner">
          <div className="ev__kicker">Vida escolar</div>

          <h1 className="ev__title">Eventos</h1>

          <p className="ev__subtitle">
            Actividades que fortalecen valores, talento y comunidad en el Colegio
            Colonial.
          </p>

          <div className="ev__search">
            <label className="ev__searchLabel" htmlFor="evSearch">
              Buscar
            </label>

            <div className="ev__searchRow">
              <input
                id="evSearch"
                className="ev__input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nombre, fecha o lugar…"
                aria-label="Buscar eventos"
              />

              <span className="ev__count">
                {filtered.length} {filtered.length === 1 ? "evento" : "eventos"}
              </span>
            </div>


          </div>
        </div>
      </header>

      {/* GRID */}
      <section className="ev__section" ref={gridRef}>
        <div className="ev__grid">
          {!inView
            ? Array.from({ length: 6 }).map((_, i) => (
                <article className="evCard evCard--skeleton" key={`sk-${i}`}>
                  <div className="evCard__media">
                    <div className="evSk__photo" />
                  </div>

                  <div className="evCard__body">
                    <div className="evSk__line evSk__line--title" />
                    <div className="evSk__line" />
                    <div className="evSk__line" />
                    <div className="evSk__meta" />
                    <div className="evSk__btn" />
                  </div>
                </article>
              ))
            : filtered.map((event) => (
                <article className="evCard" key={event.id}>
                  <div className="evCard__media">
                    <div
                      className={`evCard__photos evCard__photos--${Math.min(
                        (event.images?.length ?? 0) || 1,
                        2
                      )}`}
                    >
                      {(event.images?.slice(0, 2) ?? []).map((src, idx) => (
                        <figure className="evCard__imgWrap" key={src + idx}>
                          <img
                            className="evCard__img"
                            src={src}
                            alt={`${event.title} - foto ${idx + 1}`}
                            loading="lazy"
                            decoding="async"
                          />
                        </figure>
                      ))}
                    </div>

                    {event.tag && (
                      <span className="evCard__tag">{event.tag}</span>
                    )}
                  </div>

                  <div className="evCard__body">
                    <h3 className="evCard__title">{event.title}</h3>

                    <p className="evCard__desc">{event.desc}</p>

                    {(event.date || event.time || event.place) && (
                      <ul className="evCard__meta">
                        {event.date && (
                          <li className="evCard__metaItem">
                            <span
                              className="evCard__dot"
                              aria-hidden="true"
                            />
                            {event.date}
                          </li>
                        )}

                        {event.time && (
                          <li className="evCard__metaItem">
                            <span
                              className="evCard__dot"
                              aria-hidden="true"
                            />
                            {event.time}
                          </li>
                        )}

                        {event.place && (
                          <li className="evCard__metaItem">
                            <span
                              className="evCard__dot"
                              aria-hidden="true"
                            />
                            {event.place}
                          </li>
                        )}
                      </ul>
                    )}

                    {/* BOTÓN GALERÍA */}
                    <div className="evCard__actions">
                      <Link
                        className="evCard__btn"
                        to="/vida-colonial/galeria"
                      >
                        Presiona para ver más fotos en la galería.
                      </Link>

                      <Link
                        className="evCard__btn"
                        to="/calendario"
                      >
                        Presiona para consultar el calendario.
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
        </div>

        {inView && filtered.length === 0 && (
          <div className="evEmpty">
            <h3 className="evEmpty__title">No encontramos resultados</h3>

            <p className="evEmpty__text">
              Prueba buscando con otras palabras (por ejemplo: “Open House”,
              “deportivo”, “festival”).
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Extracurriculares.css";
import { ACTIVIDADES } from "../../data/actividades";
import { normalizeText } from "../../utils/text"; // 🔥 helper global

export default function Actividades() {
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const t = normalizeText(q);

    if (!t) return ACTIVIDADES;

    return ACTIVIDADES.filter((a) => {
      const nombre = normalizeText(a.nombre);
      const descripcion = normalizeText(a.descripcion);
      const meta = normalizeText((a.meta || []).join(" "));

      return nombre.includes(t) || descripcion.includes(t) || meta.includes(t);
    });
  }, [q]);

  return (
    <main className="exa">
      <Helmet>
        <html lang="es-MX" />
        <title>Actividades Extracurriculares en Querétaro | Colegio Colonial</title>

        <meta
          name="description"
          content="Descubre las actividades extracurriculares del Colegio Colonial en Querétaro, diseñadas para potenciar talento, creatividad y trabajo en equipo en primaria y secundaria."
        />

        <link
          rel="canonical"
          href="https://colegiocolonial.edu.mx/vida-colonial/extracurriculares"
        />

        {/* Open Graph */}
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta
          property="og:title"
          content="Actividades Extracurriculares en Querétaro | Colegio Colonial"
        />
        <meta
          property="og:description"
          content="Experiencias artísticas, deportivas y culturales que complementan la formación académica de estudiantes del Colegio Colonial."
        />
        <meta
          property="og:url"
          content="https://colegiocolonial.edu.mx/vida-colonial/extracurriculares"
        />
        <meta
          property="og:image"
          content="https://colegiocolonial.edu.mx/images/extras/futbol-1.webp"
        />
        <meta
          property="og:image:alt"
          content="Actividades extracurriculares del Colegio Colonial en Querétaro"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Actividades Extracurriculares en Querétaro | Colegio Colonial"
        />
        <meta
          name="twitter:description"
          content="Actividades extracurriculares en Querétaro para potenciar talento, creatividad y trabajo en equipo en primaria y secundaria."
        />
        <meta
          name="twitter:image"
          content="https://colegiocolonial.edu.mx/images/extras/futbol-1.webp"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="geo.region" content="MX-QUE" />
        <meta name="geo.placename" content="Querétaro, México" />
      </Helmet>

      <header className="exa__hero">
        <div className="exa__heroBg" aria-hidden="true">
          <span className="exa__orb exa__orb--1" />
          <span className="exa__orb exa__orb--2" />
          <span className="exa__grid" />
        </div>

        <div className="exa__heroInner">
          <p className="exa__badge">Vida escolar</p>
          <h1 className="exa__title">Actividades extracurriculares</h1>
          <p className="exa__subtitle">
            Áreas diseñadas para potenciar talentos, desarrollar habilidades y
            fomentar la convivencia (deportes, artes, tecnología y mucho más).
          </p>

          <div className="exa__search">
            <input
              className="exa__input"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar actividad (ej. fútbol, danza, pintura...)"
              aria-label="Buscar actividad"
            />

            <button
              className="exa__clear"
              onClick={() => setQ("")}
              type="button"
            >
              Limpiar
            </button>
          </div>
        </div>
      </header>

      <section className="exa__wrap">
        <div className="exa__gridCards">
          {items.map((a) => (
            <article className="exaCard" key={a.id}>
              <div className="exaCard__media">
                <div
                  className={`exaCard__mediaGrid ${
                    (a.fotos?.length || 0) > 1 ? "is-2" : "is-1"
                  }`}
                >
                  {(a.fotos || []).slice(0, 2).map((src, idx) => (
                    <img
                      key={`${a.id}-${idx}`}
                      className="exaCard__img"
                      src={src}
                      alt={`${a.nombre} - foto ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>

                <span className="exaCard__corner" aria-hidden="true" />
              </div>

              <div className="exaCard__body">
                <h3 className="exaCard__title">{a.nombre}</h3>
                <p className="exaCard__desc">{a.descripcion}</p>

                {!!(a.meta && a.meta.length) && (
                  <ul className="exaCard__meta">
                    {a.meta.slice(0, 4).map((m, i) => (
                      <li key={i} className="exaCard__pill">
                        {m}
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </article>
          ))}
        </div>

        {!items.length && (
          <div className="exa__empty">
            <h3>No encontramos actividades con ese texto</h3>
            <p>Prueba con otra palabra (ej. “deporte”, “arte”, “maker”).</p>
          </div>
        )}
      </section>
    </main>
  );
}

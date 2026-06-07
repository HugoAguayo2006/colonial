import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { normalizeText } from "../utils/text";
import "./talleres.css";

const LABELS = {
  preescolar: "Preescolar",
  primaria: "Primaria",
  secundaria: "Secundaria",
  preparatoria: "Preparatoria",
};

export default function Extracurriculares({
  nivel = "primaria",
  badge = "Vida escolar",
  title = "Actividades extracurriculares",
  subtitle = `Áreas diseñadas para potenciar talentos, desarrollar habilidades y fomentar la convivencia
(deportes, artes, tecnología y mucho más).`,
  placeholder = "Buscar actividad (ej. fútbol, danza, pintura...)",
  items = [],
  showHeader = true,
  showLevelPill = true,
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const lvl = normalizeText(nivel).trim();

    // 1) filtro por nivel
    const byLevel = items.filter((a) => {
      const niveles = (a.niveles || []).map((x) => normalizeText(x));
      return !lvl || niveles.includes(lvl);
    });

    // 2) filtro por texto (tu lógica)
    const t = normalizeText(q).trim();
    if (!t) return byLevel;

    return byLevel.filter((a) => {
      const nombre = normalizeText(a.nombre || "");
      const descripcion = normalizeText(a.descripcion || "");
      const meta = normalizeText((a.meta || []).join(" "));

      return nombre.includes(t) || descripcion.includes(t) || meta.includes(t);
    });
  }, [q, items, nivel]);

  return (
    <section className="exa exa--component">
      {showHeader && (
        <header className="exa__hero">
          <div className="exa__heroBg" aria-hidden="true">
            <span className="exa__orb exa__orb--1" />
            <span className="exa__orb exa__orb--2" />
            <span className="exa__grid" />
          </div>

          <div className="exa__heroInner">
            <div className="exa__topRow">
              <p className="exa__badge">{badge}</p>

              {showLevelPill && (
                <span className="exa__levelPill">
                  {LABELS[nivel] ?? nivel}
                </span>
              )}
            </div>

            <h2 className="exa__title">{title}</h2>
            <p className="exa__subtitle">{subtitle}</p>

            <div className="exa__search">
              <input
                className="exa__input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={placeholder}
                aria-label="Buscar actividad"
              />
              <button
                className="exa__clear"
                onClick={() => setQ("")}
                type="button"
                disabled={!q.trim()}
              >
                Limpiar
              </button>
            </div>
          </div>
        </header>
      )}

      <div className="exa__wrap">
        <div className="exa__gridCards">
          {filtered.map((a) => {
            const fotos = (a.fotos || []).slice(0, 2);

            return (
              <article className="exaCard" key={a.id}>
                <div className="exaCard__media">
                  <div
                    className={`exaCard__mediaGrid ${
                      (fotos?.length || 0) > 1 ? "is-2" : "is-1"
                    }`}
                  >
                    {fotos.map((src, idx) => (
                      <img
                        key={`${a.id}-${idx}`}
                        className="exaCard__img"
                        src={src}
                        alt={`${a.nombre} - foto ${idx + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}

                    {!fotos.length && (
                      <div className="exaCard__fallback" aria-hidden="true">
                        <span className="exaCard__fallbackIcon">★</span>
                        <span className="exaCard__fallbackText">
                          {a.nombre || "Actividad"}
                        </span>
                      </div>
                    )}
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
            );
          })}
        </div>

        {!filtered.length && (
          <div className="exa__empty">
            <h3>No hay actividades para {LABELS[nivel] ?? nivel}</h3>
            <p>Prueba con otra palabra o revisa la configuración de niveles en la data.</p>
          </div>
        )}
      </div>
    </section>
  );
}

Extracurriculares.propTypes = {
  nivel: PropTypes.oneOf(["preescolar", "primaria", "secundaria", "preparatoria"]),
  badge: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  placeholder: PropTypes.string,
  items: PropTypes.array,
  contactHref: PropTypes.string,
  whatsappHref: PropTypes.string,
  showHeader: PropTypes.bool,
  showLevelPill: PropTypes.bool,
};

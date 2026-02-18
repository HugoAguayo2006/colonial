import { useMemo, useState } from "react";
import { normalizeText } from "../utils/text";
import "./Talleres.css";

export default function Talleres({
  badge = "Primaria",
  title = "Actividades extracurriculares",
  subtitle =
    "Además, ofrecemos actividades extracurriculares que estimulan la creatividad, el desarrollo físico y el pensamiento crítico.",
  placeholder = "Buscar taller (ej. danza, fútbol, manualidades...)",
  items = [],
  schedule = { label: "Horario", value: "2:40 – 3:40" },
  showSchedule = true,
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const t = normalizeText(q.trim());
    if (!t) return items;

    return items.filter((a) => {
      const nombre = normalizeText(a?.nombre || "");
      const descripcion = normalizeText(a?.descripcion || "");
      const meta = normalizeText((a?.meta || []).join(" "));
      return nombre.includes(t) || descripcion.includes(t) || meta.includes(t);
    });
  }, [q, items]);

  const chips = useMemo(() => {
    // Chips únicos (máx 12) para que se vea limpio
    const names = Array.from(new Set(items.map((x) => x?.nombre).filter(Boolean)));
    return names.slice(0, 12);
  }, [items]);

  return (
    <section className="tj2">
      {/* ===== HERO ===== */}
      <header className="tj2__hero">
        <div className="tj2__heroInner">
          <div className="tj2__topRow">
            <span className="tj2__badge">{badge}</span>

            {showSchedule && schedule?.value ? (
              <div className="tj2__schedule">
                <span className="tj2__scheduleLabel">{schedule.label}</span>
                <span className="tj2__scheduleValue">{schedule.value}</span>
              </div>
            ) : null}
          </div>

          <h2 className="tj2__title">{title}</h2>
          <p className="tj2__subtitle">{subtitle}</p>

          {/* Search */}
          <div className="tj2__searchRow">
            <div className="tj2__search">
              <input
                className="tj2__input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={placeholder}
                aria-label="Buscar taller"
              />
              <button
                className="tj2__clear"
                type="button"
                onClick={() => setQ("")}
                disabled={!q.trim()}
                aria-disabled={!q.trim()}
              >
                Limpiar
              </button>
            </div>

            <div className="tj2__count" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "taller" : "talleres"}
            </div>
          </div>

          {/* Chips */}
          {!!chips.length && (
            <div className="tj2__chips" aria-label="Accesos rápidos">
              {chips.map((name) => (
                <button
                  key={name}
                  className="tj2__chip"
                  type="button"
                  onClick={() => setQ(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* decor */}
        <div className="tj2__heroDecor" aria-hidden="true">
          <span className="tj2__orb tj2__orb--a" />
          <span className="tj2__orb tj2__orb--b" />
          <span className="tj2__grid" />
        </div>
      </header>

      {/* ===== GRID ===== */}
      <div className="tj2__wrap">
        <div className="tj2__grid">
          {filtered.map((a) => {
            const fotos = (a?.fotos || []).filter(Boolean).slice(0, 2);
            const hasTwo = fotos.length > 1;

            return (
              <article className="tj2Card" key={a?.id || a?.nombre}>
                <div className="tj2Card__media">
                  {fotos.length ? (
                    <div className={`tj2Card__mediaGrid ${hasTwo ? "is-2" : "is-1"}`}>
                      {fotos.map((src, idx) => (
                        <img
                          key={`${a?.id || a?.nombre}-${idx}`}
                          src={src}
                          alt={`${a?.nombre} - imagen ${idx + 1}`}
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="tj2Card__mediaEmpty">
                      <span>Sin imagen</span>
                    </div>
                  )}
                </div>

                <div className="tj2Card__body">
                  <h3 className="tj2Card__title">{a?.nombre}</h3>
                  <p className="tj2Card__desc">{a?.descripcion}</p>

                  {!!(a?.meta && a.meta.length) && (
                    <ul className="tj2Card__meta">
                      {a.meta.slice(0, 5).map((m, i) => (
                        <li key={i} className="tj2Card__pill">
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
          <div className="tj2__empty">
            <h3>No encontramos talleres con ese texto</h3>
            <p>Prueba con otra palabra (ej. Danza, Fútbol, Manualidades).</p>
            <button className="tj2__emptyBtn" type="button" onClick={() => setQ("")}>
              Ver todos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

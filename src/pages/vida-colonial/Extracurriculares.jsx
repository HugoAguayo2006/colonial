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

    return (
      nombre.includes(t) ||
      descripcion.includes(t) ||
      meta.includes(t)
    );
  });
}, [q]);


  return (
    <main className="exa">
      <Helmet>
        <title>Actividades extracurriculares | Colegio Colonial</title>
        <meta
          name="description"
          content="Actividades extracurriculares: deportes, artes, tecnología y más."
        />
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
Áreas diseñadas para potenciar talentos, desarrollar habilidades y fomentar la convivencia
(deportes, artes, tecnología y mucho más).
          </p>

          <div className="exa__search">
<input
  className="exa__input"
  value={q}
  onChange={(e) => setQ(e.target.value)}
  placeholder="Buscar actividad (ej. fútbol, danza, pintura...)"
  aria-label="Buscar actividad"
/>

            <button className="exa__clear" onClick={() => setQ("")} type="button">
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

                <div className="exaCard__cta">
                  <a className="exaCard__btn" href="/contacto">
                    Solicitar informes
                  </a>

                  <a
                    className="exaCard__btn exaCard__btn--ghost"
                    href="https://wa.me/523331585919?text=Hola,%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20actividades%20extracurriculares%20y%20horarios."
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
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

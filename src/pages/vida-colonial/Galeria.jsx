import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Galeria.css";
import { GALLERY } from "../../data/data_galeria"; // ✅ data externa

export default function Galeria() {
  const [q, setQ] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return GALLERY;

    return GALLERY.filter((it) => {
      const hay = `${it.title} ${it.desc} ${it.tag}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q]);

  const active = activeIndex != null ? filtered[activeIndex] : null;

  const openAt = (idx) => setActiveIndex(idx);
  const close = () => setActiveIndex(null);

  const prev = () =>
    setActiveIndex((i) => (i == null ? i : (i - 1 + filtered.length) % filtered.length));
  const next = () =>
    setActiveIndex((i) => (i == null ? i : (i + 1) % filtered.length));

  // ✅ Lock scroll + teclado (modal fullscreen)
  useEffect(() => {
    if (activeIndex == null) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex, filtered.length]);

  return (
    <main className="gal" data-no-global-image-modal>
      <Helmet>
        <title>Galería | Colegio Colonial</title>
        <meta
          name="description"
          content="Galería del Colegio Colonial: instalaciones, vida escolar, eventos y espacios para aprender."
        />
      </Helmet>

      <header className="gal__hero">
        <div className="gal__heroInner">
          <p className="gal__badge">Colegio Colonial</p>
          <h1 className="gal__title">Galería</h1>
          <p className="gal__subtitle">
            Conoce nuestras instalaciones y momentos destacados a través de imágenes.
            Da click en cualquier foto para verla en grande.
          </p>

          <div className="gal__search">
            <span className="gal__searchIcon" aria-hidden="true">
              ⌕
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar (ej. cancha, aula, biblioteca...)"
              className="gal__input"
              aria-label="Buscar en la galería"
            />
            {q ? (
              <button className="gal__clear" onClick={() => setQ("")} type="button">
                Limpiar
              </button>
            ) : null}
          </div>

          <div className="gal__meta">
            <span className="gal__count">
              Mostrando <b>{filtered.length}</b> {filtered.length === 1 ? "imagen" : "imágenes"}
            </span>
            <span className="gal__hint">Tip: usa ← → para cambiar y Esc para cerrar</span>
          </div>
        </div>
      </header>

      <section className="gal__wrap">
        {filtered.length === 0 ? (
          <div className="gal__empty">
            <h2>No encontré resultados</h2>
            <p>Prueba con otra palabra (ej. “patio”, “deportes”, “eventos”).</p>
            <button className="gal__btn" onClick={() => setQ("")} type="button">
              Ver todo
            </button>
          </div>
        ) : (
          <div className="gal__grid" role="list">
            {filtered.map((it, idx) => (
              <button
                key={it.id}
                className="gal__card"
                onClick={() => openAt(idx)}
                type="button"
                role="listitem"
              >
                <div className="gal__imgWrap">
                  <img
                    src={it.src}
                    alt={it.title}
                    loading="lazy"
                    className="gal__img"
                    data-nozoom
                  />
                  <span className="gal__tag">{it.tag}</span>
                </div>

                <div className="gal__caption">
                  <h3 className="gal__capTitle">{it.title}</h3>
                  <p className="gal__capDesc">{it.desc}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ✅ MODAL FULLSCREEN (único en pantalla + blur atrás) */}
      {active ? (
        <div className="galm" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
          <button className="galm__overlay" type="button" onClick={close} aria-label="Cerrar visor" />

          <div className="galm__viewer" onClick={(e) => e.stopPropagation()}>
            <div className="galm__top">
              <span className="galm__pill">{active.tag}</span>

              <div className="galm__topRight">
                <span className="galm__counter">
                  {activeIndex + 1} / {filtered.length}
                </span>

                <button className="galm__close" onClick={close} type="button" aria-label="Cerrar">
                  ✕
                </button>
              </div>
            </div>

            <button
              className="galm__nav galm__nav--left"
              onClick={prev}
              type="button"
              aria-label="Anterior"
            >
              ‹
            </button>

            <figure className="galm__figure">
              <img className="galm__img" src={active.src} alt={active.title} data-nozoom />
              <figcaption className="galm__cap">
                <strong>{active.tag} — {active.title}</strong>
                <span>{active.desc}</span>
              </figcaption>
            </figure>

            <button
              className="galm__nav galm__nav--right"
              onClick={next}
              type="button"
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}

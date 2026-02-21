import { Helmet } from "react-helmet-async";
import { HISTORIA } from "../../data/historia";
import "./Historia.css";

export default function Historia() {
  return (
    <>
      <Helmet>
        <title>Nuestra Historia | Colegio Colonial</title>
        <meta
          name="description"
          content="Conoce la historia del Colegio Colonial: momentos clave, crecimiento y compromiso con la educación."
        />
      </Helmet>

      <main className="hist">
        <header className="hist__hero">
          <div className="hist__heroInner">
            <p className="hist__kicker">Colegio Colonial</p>
            <h1 className="hist__title">Nuestra Historia</h1>
            <p className="hist__subtitle">
              Un camino construido con valores, compromiso y pasión por la educación.
            </p>
          </div>
          <div className="hist__heroGlow" aria-hidden="true" />
        </header>

        <section className="hist__wrap">
          <div className="hist__timeline" role="list">
            {Array.isArray(HISTORIA) &&
              HISTORIA.map((item, index) => (
                <article
                  key={`${item.year ?? "year"}-${index}`}
                  className="hist__item"
                  role="listitem"
                >
                  <div className="hist__rail" aria-hidden="true">
                    <span className="hist__dot" />
                    <span className="hist__pulse" />
                  </div>

                  <div className="hist__card">
                    <div className="hist__media">
                      <img
                        src={item.image}
                        alt={item.title || "Historia"}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="hist__content">
                      <div className="hist__meta">
                        <span className="hist__year">{item.year}</span>
                        {item.tag ? (
                          <span className="hist__tag">{item.tag}</span>
                        ) : null}
                      </div>

                      <h3 className="hist__h3">{item.title}</h3>
                      <p className="hist__p">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
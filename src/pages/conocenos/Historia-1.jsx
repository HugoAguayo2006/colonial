import { Helmet } from "react-helmet-async";
import { HISTORIA } from "../../data/historia";
import "./Historia.css";

export default function Historia() {
  return (
    <>
      <Helmet>
        <title>Historia del Colegio Colonial en Querétaro | Trayectoria</title>
        <meta
          name="description"
          content="Descubre la historia del Colegio Colonial en Querétaro: hitos, evolución institucional y compromiso formativo que han marcado nuestra trayectoria."
        />
        <link
          rel="canonical"
          href="https://www.colegiocolonial.edu.mx/conocenos/historia"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta property="og:locale" content="es_MX" />
        <meta
          property="og:url"
          content="https://www.colegiocolonial.edu.mx/conocenos/historia"
        />
        <meta
          property="og:title"
          content="Historia del Colegio Colonial en Querétaro"
        />
        <meta
          property="og:description"
          content="Conoce la trayectoria del Colegio Colonial en Querétaro: momentos clave, crecimiento y un compromiso constante con la educación."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Historia del Colegio Colonial en Querétaro"
        />
        <meta
          name="twitter:description"
          content="Explora nuestra historia institucional y los hitos que han consolidado al Colegio Colonial en Querétaro."
        />
      </Helmet>

      <main className="hist">
        <header className="hist__hero">
          <div className="hist__heroInner">
            <p className="hist__kicker">Colegio Colonial</p>
            <h1 className="hist__title">Nuestra Historia</h1>
            <p className="hist__subtitle">
              Un camino construido con valores, compromiso y pasión por la
              educación.
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
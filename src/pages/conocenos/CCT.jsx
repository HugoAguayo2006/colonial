import { Helmet } from "react-helmet-async";
import "./CCT.css";

export default function ClaveCentroTrabajo() {
  return (
    <>
      <Helmet>
        <title>Clave del Centro de Trabajo | Colegio Colonial</title>
        <meta
          name="description"
          content="Consulta la Clave de Centro de Trabajo (CCT) del Colegio Colonial en Querétaro, México. Información oficial registrada ante la Secretaría de Educación."
        />

        <link
          rel="canonical"
          href="https://www.colegiocolonial.edu.mx/conocenos/clave-de-centro-de-trabajo"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta
          property="og:title"
          content="Clave del Centro de Trabajo | Colegio Colonial"
        />
        <meta
          property="og:description"
          content="Consulta la Clave de Centro de Trabajo (CCT) del Colegio Colonial en Querétaro, México. Información oficial registrada ante la Secretaría de Educación."
        />
        <meta
          property="og:url"
          content="https://www.colegiocolonial.edu.mx/conocenos/clave-de-centro-de-trabajo"
        />
        <meta property="og:locale" content="es_MX" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Clave del Centro de Trabajo | Colegio Colonial"
        />
        <meta
          name="twitter:description"
          content="Consulta la Clave de Centro de Trabajo (CCT) del Colegio Colonial en Querétaro, México. Información oficial registrada ante la Secretaría de Educación."
        />

        <meta name="geo.region" content="MX-QUE" />
        <meta name="geo.placename" content="Querétaro, México" />
      </Helmet>

      <main className="cct-page">
        <section className="cct-hero">
          <h1>Claves del Centro de Trabajo</h1>
          <p>
            Consulta las claves oficiales registradas ante la Secretaría de
            Educación.
          </p>
        </section>

        <section className="cct-cards">
          {/* Secundaria */}
          <div className="cct-card secundaria">
            <div className="cct-badge">Secundaria</div>

            <img
              src="/images/secundaria/escudo-secundaria.webp"
              alt="Escudo Secundaria Colegio Colonial"
              className="cct-logo"
            />

            <div className="cct-info">
              <span className="cct-label">Clave CCT</span>
              <h2>22PESO110M</h2>
            </div>
          </div>

          {/* Primaria */}
          <div className="cct-card primaria">
            <div className="cct-badge">Primaria</div>

            <img
              src="/images/primaria/escudo-primaria.webp"
              alt="Escudo Primaria Colegio Colonial"
              className="cct-logo"
            />

            <div className="cct-info">
              <span className="cct-label">Clave CCT</span>
              <h2>22PPR041N</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
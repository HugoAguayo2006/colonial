import { Helmet } from "react-helmet-async";
import "./CCT.css";

export default function ClaveCentroTrabajo() {
  return (
    <>
      <Helmet>
        <html lang="es-MX" />
        <title>Clave del Centro de Trabajo | Colegio Colonial</title>
        <meta
          name="description"
          content="Consulta las Claves de Centro de Trabajo del Colegio Colonial en Querétaro para primaria y secundaria: 22PPR041N y 22PESO110M, información oficial institucional."
        />

        <link
          rel="canonical"
          href="https://www.colegiocolonial.edu.mx/conocenos/clave-de-centro-de-trabajo"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta
          property="og:title"
          content="Clave del Centro de Trabajo | Colegio Colonial"
        />
        <meta
          property="og:description"
          content="Claves oficiales CCT del Colegio Colonial en Querétaro para primaria y secundaria: 22PPR041N y 22PESO110M."
        />
        <meta
          property="og:url"
          content="https://www.colegiocolonial.edu.mx/conocenos/clave-de-centro-de-trabajo"
        />
        <meta property="og:locale" content="es_MX" />
        <meta
          property="og:image"
          content="https://www.colegiocolonial.edu.mx/images/logo-escudo.webp"
        />
        <meta
          property="og:image:alt"
          content="Clave de Centro de Trabajo del Colegio Colonial"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Clave del Centro de Trabajo | Colegio Colonial"
        />
        <meta
          name="twitter:description"
          content="Consulta las claves CCT de primaria y secundaria del Colegio Colonial en Querétaro."
        />
        <meta
          name="twitter:image"
          content="https://www.colegiocolonial.edu.mx/images/logo-escudo.webp"
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

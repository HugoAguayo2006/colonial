import { Helmet } from "react-helmet-async";
import "./CCT.css";

export default function ClaveCentroTrabajo() {
  return (
    <>
      <Helmet>
        <title>Clave del Centro de Trabajo | Colegio Colonial</title>
        <meta
          name="description"
          content="Consulta la Clave del Centro de Trabajo (CCT) de Primaria y Secundaria del Colegio Colonial."
        />
      </Helmet>

      <main className="cct-page">
        <section className="cct-hero">
          <h1>Clave del Centro de Trabajo</h1>
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
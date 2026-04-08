import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./NotFound.css";

const quickLinks = [
  { label: "Volver al inicio", to: "/" },
  { label: "Primaria", to: "/niveles/primaria" },
  { label: "Secundaria", to: "/niveles/secundaria" },
  { label: "Calendario", to: "/calendario" },
  { label: "Contacto", to: "/contacto" },
    { label: "Ver otros campus", to: "/conocenos/otros-campus" },
];

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Colegio Colonial</title>
        <meta
          name="description"
          content="La página que buscas no fue encontrada. Explora las secciones principales de Colegio Colonial."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="nf-page">
        <section className="nf-wrap">
          <div className="nf-glow nf-glow--1" />
          <div className="nf-glow nf-glow--2" />

          <div className="nf-top">
            <span className="nf-badge">Error 404</span>
          </div>

          <div className="nf-grid">
            <div className="nf-copy">
              <p className="nf-kicker">Colegio Colonial</p>

              <h1 className="nf-title">
                Esta página
                <span> no existe</span>
              </h1>

              <p className="nf-text">
                La sección que intentaste abrir no está disponible, cambió de
                dirección o ya no existe. Puedes volver al inicio o entrar
                directamente a las secciones más importantes del sitio.
              </p>

              <div className="nf-actions">
                {quickLinks.map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`nf-btn ${
                      index === 0 ? "nf-btn--primary" : "nf-btn--secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="nf-help">
                <strong>Tip:</strong> revisa la URL o usa el menú principal para
                seguir navegando.
              </div>
            </div>

            <div className="nf-visual" aria-hidden="true">
              <div className="nf-visual-card">
                <div className="nf-404">404</div>
                <div className="nf-visual-line" />
                <p className="nf-visual-text">
                  Sigamos explorando juntos el sitio de Colegio Colonial.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

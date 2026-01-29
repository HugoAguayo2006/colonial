import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./NotFound.css";

export default function NotFound() {
  const wa =
    "https://wa.me/523328343223?text=" +
    encodeURIComponent(
      "Hola, vengo del sitio del Instituto Nueva Galicia Tlajomulco. Entré a una página que no encontré y me gustaría más información."
    );

  return (
    <main className="nf">
      <Helmet>
        <title>404 | Página no encontrada</title>
        <meta
          name="description"
          content="La página que buscas no existe o fue movida. Vuelve al inicio o contáctanos."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* fondo / decor */}
      <div className="nf__bg" aria-hidden="true">
        <span className="nf__orb nf__orb--1" />
        <span className="nf__orb nf__orb--2" />
        <span className="nf__grid" />
        <span className="nf__redLine" />
      </div>

      <section className="nf__wrap">
        <div className="nf__card">
          <div className="nf__badge">Instituto Nueva Galicia</div>

          <div className="nf__code" aria-label="Error 404">
            404
          </div>

          <h1 className="nf__title">Página no encontrada</h1>
          <p className="nf__text">
            La ruta que buscabas no existe o fue movida. Si llegaste aquí por un
            link, avísanos y lo corregimos.
          </p>

          <div className="nf__actions">
            <Link className="nf__btn nf__btn--primary" to="/">
              Volver al inicio
            </Link>
            <Link className="nf__btn nf__btn--ghost" to="/contacto">
              Ir a contacto
            </Link>

            <a
              className="nf__btn nf__btn--wa"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <div className="nf__links">
            <span className="nf__hint">Rutas rápidas:</span>
            <Link to="/eventos">Eventos</Link>
            <span className="nf__dot">•</span>
            <Link to="/calendario">Calendario</Link>
            <span className="nf__dot">•</span>
            <Link to="/galeria">Galería</Link>
            <span className="nf__dot">•</span>
            <Link to="/actividades">Extracurriculares</Link>
          </div>

          <div className="nf__small">
            Si esto fue un error, escríbenos y lo arreglamos rápido.
          </div>
        </div>
      </section>
    </main>
  );
}

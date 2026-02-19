import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="nf">
      <Helmet>
        <title>404 | Colegio Colonial</title>
        <meta
          name="description"
          content="La página que buscas no existe o fue movida. Regresa al inicio del Colegio Colonial."
        />
      </Helmet>

      <div className="nf__bg" aria-hidden="true">
        <span className="nf__orb nf__orb--red" />
        <span className="nf__orb nf__orb--blue" />
        <span className="nf__grid" />
      </div>

      <section className="nf__card" role="alert" aria-live="polite">
        <div className="nf__badge">
          <span className="nf__dot" />
          Colegio Colonial
        </div>

        <h1 className="nf__title">
          Error <span className="nf__code">404</span>
        </h1>

        <p className="nf__subtitle">
          No encontramos esta página. Puede que el enlace esté mal escrito o que el
          contenido haya cambiado de ubicación.
        </p>

        <div className="nf__actions">
          <NavLink className="nf__btn nf__btn--primary" to="/">
            Volver al inicio
          </NavLink>
          <NavLink className="nf__btn nf__btn--ghost" to="/contacto">
            Contacto
          </NavLink>
        </div>

        <div className="nf__help">
          <span className="nf__helpLabel">Tip:</span> revisa la URL o usa el menú para
          navegar.
        </div>

        <div className="nf__footer">
          <span className="nf__mini">Colegio Colonial • Sitio Oficial</span>
          <span className="nf__sep">•</span>
          <NavLink className="nf__miniLink" to="/niveles">
            Ver niveles
          </NavLink>
        </div>
      </section>
    </main>
  );
}

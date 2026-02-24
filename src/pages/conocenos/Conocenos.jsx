import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Conocenos.css";

const SECTIONS = [
  {
    title: "Historia",
    desc:
      "Nuestra esencia nace de la tradición y crece con innovación, construyendo una comunidad sólida con identidad propia.",
    to: "/historia",
    icon: "🏛️",
    tone: "blue",
  },
  {
    title: "Modelo Educativo",
    desc:
      "Aprender haciendo: pensamiento crítico, acompañamiento docente y formación integral para la vida.",
    to: "/modelo-educativo",
    icon: "📚",
    tone: "red",
  },
  {
    title: "Misión y Visión",
    desc:
      "Guiamos con propósito: formar alumnos responsables, preparados y con valores que trascienden el aula.",
    to: "/mision-vision",
    icon: "🎯",
    tone: "blue",
  },
  {
    title: "Valores",
    desc:
      "Respeto, responsabilidad y compromiso: lo que vivimos todos los días dentro y fuera del salón.",
    to: "/valores",
    icon: "🤝",
    tone: "red",
  },
  {
    title: "Otros Campus",
    desc:
      "Conoce nuestras sedes y descubre espacios diseñados para impulsar el desarrollo académico y personal.",
    to: "/otros-campus",
    icon: "🏫",
    tone: "blue",
  },
  {
    title: "Clave de Centro de Trabajo",
    desc:
      "Información institucional oficial que respalda nuestra operación y el reconocimiento educativo.",
    to: "/cct",
    icon: "✅",
    tone: "red",
  },
];

export default function Conocenos() {
  return (
    <main className="cc-page">
      <Helmet>
        <title>Conócenos | Colegio Colonial</title>
        <meta
          name="description"
          content="Conoce la historia, el modelo educativo, misión y visión, valores, campus y CCT del Colegio Colonial."
        />
      </Helmet>

      {/* HERO */}
{/* HERO */}
<section className="cc-hero">
  <div className="cc-hero-bg" aria-hidden="true" />

  <div className="cc-hero-wrap">
    {/* IZQUIERDA: TARJETA GLASS */}
    <aside className="cc-hero-mock" aria-label="Colegio Colonial - vista general">
      <div className="cc-mock-top">
        <div className="cc-mock-brand">Colegio Colonial</div>
        <div className="cc-mock-chip">Conócenos</div>
      </div>

      {/* Collage */}
      <div className="cc-mock-collage">
        <div className="cc-mock-img cc-mock-img-1" />
        <div className="cc-mock-img cc-mock-img-2" />
        <div className="cc-mock-img cc-mock-img-3" />
      </div>

      {/* Pills */}
      <div className="cc-mock-pills">
        <div className="cc-mock-pill">
          <div className="cc-pill-title">Historia</div>
          <div className="cc-pill-sub">Identidad + tradición</div>
        </div>

        <div className="cc-mock-pill">
          <div className="cc-pill-title">Modelo</div>
          <div className="cc-pill-sub">Aprendizaje integral</div>
        </div>

        <div className="cc-mock-pill">
          <div className="cc-pill-title">Valores</div>
          <div className="cc-pill-sub">Respeto y compromiso</div>
        </div>
      </div>
    </aside>

    {/* DERECHA: COPY */}
    <div className="cc-hero-copy">
      <h1>Conócenos: tradición que forma, innovación que impulsa.</h1>

      <p>
        Aquí la educación es acompañamiento, carácter y futuro. Explora nuestras
        secciones clave y descubre lo que nos distingue.
      </p>

      <div className="cc-hero-actions">
        <NavLink to="/inscripciones" className="cc-btn cc-btn-primary">
          Iniciar Inscripción
        </NavLink>
        <NavLink to="/contacto" className="cc-btn cc-btn-ghost">
          Agendar visita
        </NavLink>
      </div>

      <div className="cc-hero-stats">
        <div className="cc-stat">
          <div className="cc-stat-num">+6</div>
          <div className="cc-stat-label">Secciones clave</div>
        </div>
        <div className="cc-stat">
          <div className="cc-stat-num">100%</div>
          <div className="cc-stat-label">Enfoque integral</div>
        </div>
      </div>
    </div>
  </div>
</section>

      <div className="separator-blue"></div>

      {/* CARDS */}
      <section className="cc-section">
        <div className="cc-wrap">
          <header className="cc-head">
            <h2>Explora nuestras secciones</h2>
            <p>
              Un vistazo rápido a lo más importante. Entra a cada apartado para ver la información completa.
            </p>
          </header>

          <div className="cc-grid">
            {SECTIONS.map((s) => (
              <article key={s.title} className={`cc-card cc-${s.tone}`}>
                <div className="cc-card-top">
                  <div className="cc-icon" aria-hidden="true">
                    {s.icon}
                  </div>
                  <div className="cc-pill">{s.title}</div>
                </div>

                <p className="cc-card-desc">{s.desc}</p>

                <NavLink to={s.to} className="cc-card-link">
                  Ver más <span aria-hidden="true">→</span>
                </NavLink>

                <div className="cc-card-glow" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / ROUTE */}
      <section className="cc-route">
        <div className="cc-wrap">
          <header className="cc-head cc-head-light">
            <h2>Tu ruta rápida para conocer el Colegio</h2>
            <p>
              Si vienes por primera vez, este recorrido te lleva por lo esencial en orden.
            </p>
          </header>

          <ol className="cc-timeline">
            <li className="cc-step">
              <div className="cc-step-dot" />
              <div className="cc-step-card">
                <h3>1) Nuestra historia</h3>
                <p>De dónde venimos y qué nos define como institución.</p>
                <NavLink to="/historia" className="cc-mini-link">Ir a Historia →</NavLink>
              </div>
            </li>

            <li className="cc-step">
              <div className="cc-step-dot" />
              <div className="cc-step-card">
                <h3>2) Cómo enseñamos</h3>
                <p>Modelo educativo: lo académico + lo humano + habilidades para la vida.</p>
                <NavLink to="/modelo-educativo" className="cc-mini-link">Ir a Modelo →</NavLink>
              </div>
            </li>

            <li className="cc-step">
              <div className="cc-step-dot" />
              <div className="cc-step-card">
                <h3>3) Propósito y dirección</h3>
                <p>Misión y visión que guían cada proyecto y decisión.</p>
                <NavLink to="/mision-vision" className="cc-mini-link">Ir a Misión y Visión →</NavLink>
              </div>
            </li>

            <li className="cc-step">
              <div className="cc-step-dot" />
              <div className="cc-step-card">
                <h3>4) Lo que vivimos</h3>
                <p>Valores que se reflejan en la convivencia y el crecimiento.</p>
                <NavLink to="/valores" className="cc-mini-link">Ir a Valores →</NavLink>
              </div>
            </li>

            <li className="cc-step">
              <div className="cc-step-dot" />
              <div className="cc-step-card">
                <h3>5) Nuestras sedes</h3>
                <p>Otros campus y espacios para aprender, crear y convivir.</p>
                <NavLink to="/otros-campus" className="cc-mini-link">Ir a Campus →</NavLink>
              </div>
            </li>

            <li className="cc-step">
              <div className="cc-step-dot" />
              <div className="cc-step-card">
                <h3>6) Información institucional</h3>
                <p>Consulta la Clave de Centro de Trabajo (CCT).</p>
                <NavLink to="/cct" className="cc-mini-link">Ir a CCT →</NavLink>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="cc-cta">
        <div className="cc-wrap">
          <div className="cc-cta-box">
            <div className="cc-cta-left">
              <h2>¿Listo para dar el siguiente paso?</h2>
              <p>
                Inicia tu proceso o agenda una visita. Te acompañamos en todo el camino.
              </p>
            </div>
            <div className="cc-cta-actions">
              <NavLink to="/inscripciones" className="cc-btn cc-btn-primary">
                Inscripciones
              </NavLink>
              <NavLink to="/contacto" className="cc-btn cc-btn-primary">
                Contáctanos
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
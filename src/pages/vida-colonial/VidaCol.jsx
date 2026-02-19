import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./VidaCol.css";

const SECTIONS = [
  {
    key: "talleres",
    title: "Actividades extracurriculares",
    desc:
      "Talleres y actividades que fortalecen habilidades artísticas, deportivas y formativas. Un espacio para descubrir talentos y crecer con confianza.",
    to: "/talleres", // ajusta si tu ruta real es otra
    icon: "🎨",
    accent: "blue",
    chips: ["Creatividad", "Deporte", "Formación"],
  },
  {
    key: "calendario",
    title: "Calendario escolar",
    desc:
      "Consulta fechas clave, periodos académicos y actividades importantes del ciclo escolar. Todo organizado para que no se te pase nada.",
    to: "/calendario",
    icon: "🗓️",
    accent: "red",
    chips: ["Fechas clave", "Ciclo escolar", "Planeación"],
  },
  {
    key: "eventos",
    title: "Eventos",
    desc:
      "Conoce los eventos que dan vida a nuestra comunidad: celebraciones, encuentros, actividades culturales y más.",
    to: "/eventos",
    icon: "🎉",
    accent: "blue",
    chips: ["Comunidad", "Cultura", "Participación"],
  },
  {
    key: "galeria",
    title: "Galería",
    desc:
      "Revive momentos especiales y descubre el ambiente del Colegio Colonial a través de imágenes que reflejan nuestra esencia.",
    to: "/galeria", // ajusta si tu ruta es /galeria-fotos o similar
    icon: "📸",
    accent: "red",
    chips: ["Momentos", "Instalaciones", "Experiencias"],
  },
  {
    key: "servicios",
    title: "Otros servicios",
    desc:
      "Conoce servicios y apoyos que acompañan el desarrollo integral: atención, orientación y recursos para familias y estudiantes.",
    to: "/servicios", // ajusta si aún no existe, puedes crearla después
    icon: "🤝",
    accent: "blue",
    chips: ["Apoyo", "Acompañamiento", "Bienestar"],
  },
];

export default function VidaColonial() {
  return (
    <main className="vc">
      <Helmet>
        <title>Vida Colonial | Colegio Colonial</title>
        <meta
          name="description"
          content="Descubre la vida en el Colegio Colonial: actividades extracurriculares, calendario, eventos, galería y servicios."
        />
      </Helmet>

      {/* HERO */}
      <section className="vc-hero">
        <div className="vc-hero__bg" aria-hidden="true" />
        <div className="vc-hero__wrap">
          <div className="vc-hero__left">
            <span className="vc-kicker">Vida Colonial</span>
            <h1 className="vc-title">
              Una comunidad que se vive <span>todos los días</span>
            </h1>
            <p className="vc-subtitle">
              En el Colegio Colonial, cada etapa se construye con experiencias:
              aprendizaje, convivencia, actividades y momentos que forman
              recuerdos. Aquí puedes explorar todo lo que hace especial nuestra
              vida escolar.
            </p>

            <div className="vc-ctaRow">
              <NavLink className="vc-btn vc-btn--primary" to="/eventos">
                Ver eventos
              </NavLink>
              <NavLink className="vc-btn vc-btn--ghost" to="/galeria">
                Explorar galería
              </NavLink>
            </div>

            <div className="vc-miniStats" aria-label="Resumen de secciones">
              <div className="vc-miniStat">
                <div className="vc-miniStat__num">5</div>
                <div className="vc-miniStat__txt">Secciones</div>
              </div>
              <div className="vc-miniStat">
                <div className="vc-miniStat__num">100%</div>
                <div className="vc-miniStat__txt">Vida escolar</div>
              </div>
              <div className="vc-miniStat">
                <div className="vc-miniStat__num">+</div>
                <div className="vc-miniStat__txt">Experiencias</div>
              </div>
            </div>
          </div>

          <div className="vc-hero__right">
            <div className="vc-heroCard">
              <div className="vc-heroCard__top">
                <div className="vc-heroBadge">Colegio Colonial</div>
                <div className="vc-heroDot" aria-hidden="true" />
              </div>

              <h3 className="vc-heroCard__title">Explora rápidamente</h3>
              <p className="vc-heroCard__text">
                Accede directo a cada sección y conoce todo lo que construye la
                experiencia Colonial.
              </p>

              <div className="vc-quickLinks">
                {SECTIONS.map((s) => (
                  <NavLink
                    key={s.key}
                    to={s.to}
                    className={({ isActive }) =>
                      "vc-quickLink" + (isActive ? " is-active" : "")
                    }
                  >
                    <span className="vc-quickLink__icon" aria-hidden="true">
                      {s.icon}
                    </span>
                    <span className="vc-quickLink__label">{s.title}</span>
                    <span className="vc-quickLink__arrow" aria-hidden="true">
                      →
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="vc-grid">
        <div className="vc-container">
          <header className="vc-head">
            <h2 className="vc-h2">Todo lo que pasa en Colonial</h2>
            <p className="vc-p">
              Navega por cada sección y encuentra información clara, actualizada
              y organizada para familias y estudiantes.
            </p>
          </header>

          <div className="vc-cards">
            {SECTIONS.map((s) => (
              <article
                key={s.key}
                className={`vc-card vc-card--${s.accent}`}
              >
                <div className="vc-card__top">
                  <div className="vc-icon" aria-hidden="true">
                    {s.icon}
                  </div>
                  <div className="vc-card__chips">
                    {s.chips.map((c) => (
                      <span className="vc-chip" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="vc-card__title">{s.title}</h3>
                <p className="vc-card__desc">{s.desc}</p>

                <div className="vc-card__actions">
                  <NavLink className="vc-btn vc-btn--small" to={s.to}>
                    Ir a {s.title.toLowerCase()}
                  </NavLink>
                  <NavLink className="vc-link" to={s.to}>
                    Ver más <span aria-hidden="true">→</span>
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="vc-finalCta">
        <div className="vc-container vc-finalCta__wrap">
          <div className="vc-finalCta__left">
            <h2 className="vc-finalCta__title">¿Listo para conocer más?</h2>
            <p className="vc-finalCta__text">
              Explora las secciones y descubre cómo se vive el día a día en el
              Colegio Colonial.
            </p>
          </div>

          <div className="vc-finalCta__right">
            <NavLink className="vc-btn vc-btn--primary" to="/calendario">
              Ver calendario
            </NavLink>
            <NavLink className="vc-btn vc-btn--ghost" to="/contacto">
              Contáctanos
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./NivelesEscolares.css"; // reutiliza tu CSS

const LEVELS = [
  {
    key: "preescolar",
    label: "Preescolar",
    minAge: "3 años",
    route: "preescolar",
    icon: "🧸",
    tagline: "Aprenden jugando, explorando y conviviendo.",
    desc:
      "En preescolar fortalecemos el lenguaje, la motricidad y la seguridad emocional en un ambiente cálido y guiado. Aquí, aprender es una experiencia que se vive con entusiasmo, respeto y esperanza.",
    bullets: [
      "Juego guiado y aprendizaje activo",
      "Motricidad fina y gruesa (arte, movimiento, coordinación)",
      "Primer acercamiento a lectura, números y lenguaje",
      "Rutinas y hábitos: autonomía, orden y convivencia",
      "Actividades creativas: música, cuentos y expresión",
    ],
  },
  {
    key: "primaria",
    label: "Primaria",
    minAge: "6 años",
    route: "primaria",
    icon: "📘",
    tagline: "Bases académicas sólidas y valores para la vida.",
    desc:
      "En primaria consolidamos lectura, escritura y pensamiento matemático, impulsando hábitos de estudio y curiosidad. Si buscas una escuela donde tu hijo se sienta acompañado en su camino de crecimiento, tanto en lo espiritual como en lo académico, Instituto Nueva Galicia es el lugar ideal.",
    bullets: [
      "Comprensión lectora y escritura con acompañamiento",
      "Pensamiento matemático y resolución de problemas",
      "Ciencias y proyectos para aprender haciendo",
      "Tecnología educativa con uso responsable",
      "Trabajo en equipo, respeto y habilidades sociales",
    ],
  },
  {
    key: "secundaria",
    label: "Secundaria",
    minAge: "12 años",
    route: "secundaria",
    icon: "🚀",
    tagline: "Pensamiento crítico, autonomía y proyectos.",
    desc:
      "En secundaria desarrollamos análisis, responsabilidad y habilidades para el futuro con proyectos y actividades formativas.",
    bullets: [
      "Pensamiento crítico y análisis de información",
      "Aula Maker: robótica / creatividad / proyectos",
      "Comunicación efectiva e inglés aplicado",
      "Deporte y formación integral",
      "Orientación académica y seguimiento cercano",
    ],
  },
  {
    key: "preparatoria",
    label: "Preparatoria",
    minAge: "15 años",
    route: "preparatoria",
    icon: "🎓",
    tagline: "Preparación para universidad y vida profesional.",
    desc:
      "En preparatoria reforzamos alto nivel académico, proyectos de impacto y orientación vocacional para elegir con seguridad.",
    bullets: [
      "Formación académica sólida y exigente",
      "Proyectos de investigación / innovación",
      "Orientación vocacional y acompañamiento universitario",
      "Servicio social y compromiso con la comunidad",
      "Habilidades de liderazgo y pensamiento estratégico",
    ],
  },
];

export default function Niveles() {
  const [activeKey, setActiveKey] = useState("preescolar");

  const active = useMemo(
    () => LEVELS.find((l) => l.key === activeKey) ?? LEVELS[0],
    [activeKey]
  );

  return (
    <main>
      <Helmet>
        <title>Niveles escolares | Instituto Nueva Galicia</title>
        <meta
          name="description"
          content="Conoce nuestros niveles escolares: Preescolar, Primaria, Secundaria y Preparatoria. Edad mínima de ingreso y lo que se trabaja en cada etapa."
        />
      </Helmet>

      <section className="inglvl" aria-labelledby="inglvl-title">
        <div className="inglvl__bg" aria-hidden="true">
          <span className="inglvl__orb inglvl__orb--1" />
          <span className="inglvl__orb inglvl__orb--2" />
          <span className="inglvl__grid" />
        </div>

        <div className="inglvl__container">
          <header className="inglvl__header">
            <p className="inglvl__kicker">Niveles escolares</p>
            <h1 className="inglvl__title" id="inglvl-title">
              Un camino completo, etapa por etapa
            </h1>
            <p className="inglvl__subtitle">
              Elige un nivel para ver qué trabajamos, la edad mínima de ingreso y
              algunos puntos clave de cada etapa.
            </p>
          </header>

          {/* Botones / Tabs */}
          <div
            className="inglvl__tabs"
            role="tablist"
            aria-label="Niveles escolares"
          >
            {LEVELS.map((l) => {
              const isActive = l.key === activeKey;
              return (
                <button
                  key={l.key}
                  type="button"
                  className={`inglvl__tab ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveKey(l.key)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${l.key}`}
                >
                  <span className="inglvl__tabIcon" aria-hidden="true">
                    {l.icon}
                  </span>
                  <span className="inglvl__tabText">
                    <span className="inglvl__tabLabel">{l.label}</span>
                    <span className="inglvl__tabMeta">
                      Edad mínima: {l.minAge}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel activo */}
          <article
            className="inglvl__panel"
            id={`panel-${active.key}`}
            role="tabpanel"
          >
            <div className="inglvl__panelTop">
              <div className="inglvl__panelTitle">
                <span className="inglvl__badge">
                  {active.icon} {active.label}
                </span>
                <h2 className="inglvl__h3">{active.tagline}</h2>
                <p className="inglvl__desc">{active.desc}</p>
              </div>

              <div className="inglvl__panelCtas">
                <div className="inglvl__age">
                  <span className="inglvl__ageLabel">Ingreso</span>
                  <span className="inglvl__ageValue">Desde {active.minAge}</span>
                </div>

                <Link className="inglvl__btn" to={active.route}>
                  Conocer {active.label}
                  <span className="inglvl__btnArrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <ul className="inglvl__list">
              {active.bullets.map((b) => (
                <li key={b} className="inglvl__item">
                  <span className="inglvl__dot" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA inferior */}
            <div className="inglvl__bottomCta">
              <Link to="/contacto" className="inglvl__bottomBtn">
                Solicitar informes <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

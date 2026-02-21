import { Helmet } from "react-helmet-async";
import "./MisionVision.css";

export default function MisionVision() {
  return (
    <main className="mv2">
      <Helmet>
        <title>Misión y Visión | Colegio Colonial</title>
        <meta
          name="description"
          content="Misión y visión del Colegio Colonial: educación con calidad basada en humildad, amor y servicio."
        />
      </Helmet>

      {/* HERO */}
      <header className="mv2-hero">
        <div className="mv2-hero-bg" aria-hidden="true" />
        <div className="mv2-hero-inner">
          <div className="mv2-kicker">
            <span className="mv2-dot" />
            Identidad institucional
          </div>

          <h1 className="mv2-title">
            Misión <span className="mv2-amp">&amp;</span> Visión
          </h1>

          <p className="mv2-subtitle">
            Una formación con propósito, basada en la pedagogía de la encarnación:
            <strong> humildad</strong>, <strong>amor</strong> y <strong>servicio</strong>.
          </p>

          <div className="mv2-badges">
            <span className="mv2-badge mv2-badge-blue">Humildad</span>
            <span className="mv2-badge mv2-badge-red">Amor</span>
            <span className="mv2-badge mv2-badge-blue">Servicio</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mv2-wrap">
        <div className="mv2-grid">
          {/* VISIÓN */}
          <article className="mv2-card mv2-card-vision">
            <div className="mv2-card-top">
              <div className="mv2-icon mv2-icon-vision" aria-hidden="true">
                👁️
              </div>
              <div>
                <h2 className="mv2-h2">Visión</h2>
                <p className="mv2-lead">
                  Calidad educativa con identidad católica y compromiso comunitario.
                </p>
              </div>
            </div>

            <div className="mv2-divider" />

            <p className="mv2-text">
              Ser una institución católica que satisfaga la demanda educativa con
              calidad, basada en la pedagogía de la encarnación:{" "}
              <strong>humildad, amor y servicio</strong>.
            </p>

            <p className="mv2-text">
              Educar y formar una personalidad fuerte, capaz de vivir en sociedad,
              con opciones libres y comprometidas en su momento histórico, mediante
              la participación comprometida de docentes y padres de familia.
            </p>

            <div className="mv2-callout mv2-callout-blue">
              <span className="mv2-callout-title">Enfoque</span>
              <span className="mv2-callout-body">
                Formación sólida para actuar con libertad y compromiso.
              </span>
            </div>
          </article>

          {/* MISIÓN */}
          <article className="mv2-card mv2-card-mision">
            <div className="mv2-card-top">
              <div className="mv2-icon mv2-icon-mision" aria-hidden="true">
                🎯
              </div>
              <div>
                <h2 className="mv2-h2">Misión</h2>
                <p className="mv2-lead">
                  Apoyar a las familias en una formación integral y con valores.
                </p>
              </div>
            </div>

            <div className="mv2-divider" />

            <p className="mv2-text">
              Apoyar a los padres de familia en la formación integral de sus hijos,
              proporcionando en ellos el desarrollo armónico de sus procesos
              cognitivos, habilidades y actitudes.
            </p>

            <p className="mv2-text">
              Bajo una propuesta coherente de virtudes y valores:
            </p>

            <div className="mv2-chips">
              <span className="mv2-chip">Libertad</span>
              <span className="mv2-chip">Honestidad</span>
              <span className="mv2-chip">Responsabilidad</span>
              <span className="mv2-chip">Respeto</span>
              <span className="mv2-chip">Gratitud</span>
              <span className="mv2-chip">Solidaridad</span>
              <span className="mv2-chip">Alegría</span>
            </div>

            <div className="mv2-callout mv2-callout-red">
              <span className="mv2-callout-title">Propósito</span>
              <span className="mv2-callout-body">
                Desarrollo cognitivo, habilidades y actitudes en armonía.
              </span>
            </div>
          </article>
        </div>

        {/* FOOT STRIP */}
        <div className="mv2-strip">
          <div className="mv2-strip-inner">
            <div className="mv2-strip-left">
              <h3 className="mv2-strip-title">Comunidad educativa</h3>
              <p className="mv2-strip-text">
                La participación de docentes y padres de familia fortalece el proceso formativo.
              </p>
            </div>
            <div className="mv2-strip-right" aria-hidden="true">
              <span className="mv2-pill">Docentes</span>
              <span className="mv2-pill">Padres de familia</span>
              <span className="mv2-pill">Alumnos</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./NivelesEscolares.css";

export default function Niveles() {
  return (
    <main className="nv_page">
      <Helmet>
        <html lang="es-MX" />
        <title>Niveles Educativos | Primaria y Secundaria en Querétaro</title>
        <meta
          name="description"
          content="Conoce los niveles educativos del Colegio Colonial en Querétaro: escuela primaria y escuela secundaria con formación académica, fe, valores y acompañamiento cercano."
        />

        <link rel="canonical" href="https://colegiocolonial.edu.mx/niveles" />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta property="og:locale" content="es_MX" />
        <meta
          property="og:title"
          content="Niveles Educativos en Querétaro | Colegio Colonial"
        />
        <meta
          property="og:description"
          content="Primaria y secundaria en Querétaro con formación humana, fe, acompañamiento cercano, valores y exigencia académica."
        />
        <meta
          property="og:url"
          content="https://colegiocolonial.edu.mx/niveles"
        />
        <meta
          property="og:image"
          content="https://colegiocolonial.edu.mx/images/inicio/hero-1.webp"
        />
        <meta
          property="og:image:alt"
          content="Niveles educativos del Colegio Colonial en Querétaro"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Niveles Educativos | Colegio Colonial Querétaro"
        />
        <meta
          name="twitter:description"
          content="Oferta académica del Colegio Colonial: escuela primaria y secundaria en Querétaro con valore, fe y formación integral."
        />
        <meta
          name="twitter:image"
          content="https://colegiocolonial.edu.mx/images/inicio/hero-1.webp"
        />

        {/* Refuerzo local */}
        <meta name="geo.region" content="MX-QUE" />
        <meta name="geo.placename" content="Querétaro, México" />
      </Helmet>

      {/* HERO / HEADER */}
      <header className="nv_hero">
        <div className="nv_heroInner">
          <div className="nv_kicker">
            <span className="nv_dot" />
            Colegio Colonial
          </div>

          <h1 className="nv_title">
            Niveles <span>Académicos</span>
          </h1>

          <p className="nv_lead">
            Elige el nivel ideal para tu hijo(a). En cada etapa combinamos formación
            humana, acompañamiento cercano y exigencia académica.
          </p>

          <div className="nv_actions">
            <Link className="nv_btn nv_btnBlue" to="/niveles/primaria">
              Primaria <span className="nv_arrow">→</span>
            </Link>
            <Link className="nv_btn nv_btnRed" to="/niveles/secundaria">
              Secundaria <span className="nv_arrow">→</span>
            </Link>
            <Link className="nv_btn nv_btnGhost" to="/contacto">
              Solicitar informes
            </Link>
          </div>

          <div className="nv_stats">
            <div className="nv_stat">
              <div className="nv_statNum">Formación</div>
              <div className="nv_statTxt">Académica y humana</div>
            </div>
            <div className="nv_stat">
              <div className="nv_statNum">Acompañamiento</div>
              <div className="nv_statTxt">Cercano y continuo</div>
            </div>
            <div className="nv_stat">
              <div className="nv_statNum">Valores</div>
              <div className="nv_statTxt">Base del crecimiento</div>
            </div>
          </div>
        </div>

        {/* Diagonal band */}
        <div className="nv_band" aria-hidden="true" />
      </header>

      {/* CONTENT */}
      <section className="nv_section">
        <div className="nv_container">
          <div className="nv_grid">
            {/* PRIMARIA */}
            <article className="nv_card nv_cardBlue">
              <div className="nv_cardTop">
                <div className="nv_badge nv_badgeBlue">PRIMARIA</div>
                <h2 className="nv_cardTitle">Bases sólidas para aprender con confianza</h2>
                <p className="nv_cardText">
                  Reforzamos lectura, escritura y pensamiento lógico, al mismo tiempo que
                  desarrollamos hábitos, convivencia y autonomía.
                </p>
              </div>

              <div className="nv_features">
                <div className="nv_feat">
                  <div className="nv_featIcon">📚</div>
                  <div>
                    <div className="nv_featTitle">Aprendizaje guiado</div>
                    <div className="nv_featText">Acompañamiento y hábitos de estudio.</div>
                  </div>
                </div>

                <div className="nv_feat">
                  <div className="nv_featIcon">🤝</div>
                  <div>
                    <div className="nv_featTitle">Convivencia y valores</div>
                    <div className="nv_featText">Respeto, responsabilidad y cooperación.</div>
                  </div>
                </div>

                <div className="nv_feat">
                  <div className="nv_featIcon">🧠</div>
                  <div>
                    <div className="nv_featTitle">Habilidades clave</div>
                    <div className="nv_featText">Comprensión lectora y lógica.</div>
                  </div>
                </div>
              </div>

              <div className="nv_cardActions">
                <Link className="nv_btn nv_btnBlue" to="/niveles/primaria">
                  Conocer Primaria <span className="nv_arrow">→</span>
                </Link>
                <Link className="nv_link" to="/inscripciones/primaria">
                  Inscripciones Primaria
                </Link>
              </div>

              <div className="nv_watermark nv_wmBlue" aria-hidden="true" />
            </article>

            {/* SECUNDARIA */}
            <article className="nv_card nv_cardRed">
              <div className="nv_cardTop">
                <div className="nv_badge nv_badgeRed">SECUNDARIA</div>
                <h2 className="nv_cardTitle">Pensamiento crítico y preparación académica</h2>
                <p className="nv_cardText">
                  Consolidamos conocimientos con docentes especialistas, proyectos y
                  evaluaciones periódicas para formar estudiantes responsables y seguros.
                </p>
              </div>

              <div className="nv_features">
                <div className="nv_feat">
                  <div className="nv_featIcon">🎯</div>
                  <div>
                    <div className="nv_featTitle">Exigencia académica</div>
                    <div className="nv_featText">Metas claras y seguimiento constante.</div>
                  </div>
                </div>

                <div className="nv_feat">
                  <div className="nv_featIcon">🧩</div>
                  <div>
                    <div className="nv_featTitle">Proyectos y evaluación</div>
                    <div className="nv_featText">Cuaderno, proyectos y exámenes.</div>
                  </div>
                </div>

                <div className="nv_feat">
                  <div className="nv_featIcon">🚀</div>
                  <div>
                    <div className="nv_featTitle">Crecimiento integral</div>
                    <div className="nv_featText">Compromiso, criterio y liderazgo.</div>
                  </div>
                </div>
              </div>

              <div className="nv_cardActions">
                <Link className="nv_btn nv_btnRed" to="/niveles/secundaria">
                  Conocer Secundaria <span className="nv_arrow">→</span>
                </Link>
                <Link className="nv_link" to="/inscripciones/secundaria">
                  Inscripciones Secundaria
                </Link>
              </div>

              <div className="nv_watermark nv_wmRed" aria-hidden="true" />
            </article>
          </div>

          {/* Quick compare */}
          <section className="nv_compare">
            <div className="nv_compareHead">
              <h3 className="nv_h3">Comparación rápida</h3>
              <p className="nv_muted">
                Una guía breve para elegir según la etapa y necesidades.
              </p>
            </div>

            <div className="nv_table">
              <div className="nv_row nv_rowHead">
                <div className="nv_cell nv_left">Aspecto</div>
                <div className="nv_cell nv_colBlue">Primaria</div>
                <div className="nv_cell nv_colRed">Secundaria</div>
              </div>

              <div className="nv_row">
                <div className="nv_cell nv_left">Enfoque</div>
                <div className="nv_cell">Bases académicas + hábitos</div>
                <div className="nv_cell">Consolidación + criterio</div>
              </div>

              <div className="nv_row">
                <div className="nv_cell nv_left">Metodología</div>
                <div className="nv_cell">Guía cercana y práctica</div>
                <div className="nv_cell">Docentes especialistas + proyectos</div>
              </div>

              <div className="nv_row">
                <div className="nv_cell nv_left">Objetivo</div>
                <div className="nv_cell">Confianza, orden, aprendizaje</div>
                <div className="nv_cell">Responsabilidad, autonomía</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="nv_cta">
            <div className="nv_ctaText">
              <h3 className="nv_h3">¿Quieres información de inscripciones?</h3>
              <p className="nv_muted">
                Te compartimos proceso, costos y disponibilidad por nivel.
              </p>
            </div>
            <div className="nv_ctaBtns">
              <Link className="nv_btn nv_btnOutline" to="/contacto">
                Contacto <span className="nv_arrow">→</span>
              </Link>
              <Link className="nv_btn nv_btnOutline" to="/conocenos">
                Conócenos <span className="nv_arrow">→</span>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

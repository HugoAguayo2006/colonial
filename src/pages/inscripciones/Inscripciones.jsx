// src/pages/Inscripciones.jsx
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Inscripciones.css";

export default function Inscripciones() {
  return (
    <main className="insc2">
      <Helmet>
        <title>Inscripciones | Colegio Colonial Querétaro</title>
        <meta
          name="description"
          content="Inscripciones Colegio Colonial en Querétaro. Admisiones para Primaria y Secundaria: requisitos, pasos y cupo. Solicita informes y asegura tu lugar."
        />
        <link
          rel="canonical"
          href="https://www.colegiocolonial.edu.mx/inscripciones"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Inscripciones | Colegio Colonial Querétaro"
        />
        <meta
          property="og:description"
          content="Admisiones en Querétaro para Primaria y Secundaria. Consulta requisitos y pasos de inscripción del Colegio Colonial y solicita informes."
        />
        <meta
          property="og:url"
          content="https://www.colegiocolonial.edu.mx/inscripciones"
        />
        <meta property="og:site_name" content="Colegio Colonial" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Inscripciones | Colegio Colonial Querétaro"
        />
        <meta
          name="twitter:description"
          content="Inscripciones en Querétaro: Primaria y Secundaria. Requisitos, pasos y cupo. Solicita informes del Colegio Colonial."
        />
      </Helmet>

      {/* HERO */}
      <section className="insc2_hero">
        <div className="insc2_wrap">
          <div className="insc2_topline">
            <span className="insc2_chip">Admisiones</span>
            <span className="insc2_dot" />
            <span className="insc2_brand">Colegio Colonial</span>
          </div>

          <div className="insc2_heroGrid">
            <div className="insc2_heroLeft">
              <h1 className="insc2_title">Inscripciones</h1>
              <p className="insc2_lead">
                Un proceso claro, cercano y rápido. Elige tu nivel para ver
                requisitos, horarios y pasos de admisión.
              </p>

              <div className="insc2_ctas">
                <NavLink to="/inscripciones/primaria" className="insc2_btn insc2_btnPrimary">
                  Primaria
                  <span className="insc2_btnArrow" aria-hidden="true">
                    →
                  </span>
                </NavLink>

                <NavLink
                  to="/inscripciones/secundaria"
                  className="insc2_btn insc2_btnOutline"
                >
                  Secundaria
                  <span className="insc2_btnArrow" aria-hidden="true">
                    →
                  </span>
                </NavLink>
              </div>

              <div className="insc2_kpis">
                <div className="insc2_kpi">
                  <div className="insc2_kpiNum">2</div>
                  <div className="insc2_kpiText">Niveles</div>
                </div>
                <div className="insc2_kpi">
                  <div className="insc2_kpiNum">2</div>
                  <div className="insc2_kpiText">Rutas de inscripción</div>
                </div>
                <div className="insc2_kpi">
                  <div className="insc2_kpiNum">100%</div>
                  <div className="insc2_kpiText">Acompañamiento</div>
                </div>
              </div>
            </div>

            <div className="insc2_heroRight" aria-hidden="true">
              <div className="insc2_crest">
                <div className="insc2_crestRing" />
                <div className="insc2_crestCore">
                  <div className="insc2_crestTitle">Colegio Colonial</div>
                  <div className="insc2_crestSub">Admisiones</div>
                </div>
              </div>

              <div className="insc2_heroNote">
                <div className="insc2_heroNoteTitle">Tip rápido</div>
                <div className="insc2_heroNoteText">
                  Entra al nivel y usa el botón principal para avanzar directo a
                  inscripciones.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="insc2_bg" aria-hidden="true" />
      </section>

      {/* NIVEL CARDS */}
      <section className="insc2_section">
        <div className="insc2_wrap">
          <div className="insc2_header">
            <div>
              <h2 className="insc2_h2">Elige tu nivel</h2>
              <p className="insc2_p">
                Resumen rápido y acceso directo a la página del nivel.
              </p>
            </div>
            <div className="insc2_headerBadge">
              Inscripciones abiertas • Cupo limitado
            </div>
          </div>

          <div className="insc2_cards">
            {/* PRIMARIA */}
            <article className="insc2_card insc2_cardBlue">
              <div className="insc2_cardHead">
                <div className="insc2_icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 7.5L12 4l8 3.5v9L12 20l-8-3.5v-9Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 4v16"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="insc2_cardTitles">
                  <h3 className="insc2_h3">Primaria</h3>
                  <p className="insc2_muted">
                    Bases sólidas, hábitos y formación integral.
                  </p>
                </div>
                <span className="insc2_pill">Nivel</span>
              </div>

              <ul className="insc2_list">
                <li>
                  <span className="insc2_bullet" />
                  Acompañamiento cercano y enfoque formativo.
                </li>
                <li>
                  <span className="insc2_bullet" />
                  Desarrollo de lectura, lógica y convivencia.
                </li>
                <li>
                  <span className="insc2_bullet" />
                  Actividades para disciplina, valores y confianza.
                </li>
              </ul>

              <div className="insc2_actions">
                <NavLink to="/niveles/primaria" className="insc2_btn insc2_btnPrimary">
                  Ir a Primaria <span aria-hidden="true">→</span>
                </NavLink>
                <NavLink to="/inscripciones/primaria" className="insc2_btn insc2_btnSoft">
                  Ver pasos
                </NavLink>
              </div>
            </article>

            {/* SECUNDARIA */}
            <article className="insc2_card insc2_cardRed">
              <div className="insc2_cardHead">
                <div className="insc2_icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 7h10v14H7V7Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 3h6v4H9V3Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11h6M9 15h6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="insc2_cardTitles">
                  <h3 className="insc2_h3">Secundaria</h3>
                  <p className="insc2_muted">
                    Pensamiento crítico, responsabilidad y alto nivel académico.
                  </p>
                </div>
                <span className="insc2_pill insc2_pillRed">Turno Matutino</span>
              </div>

              <ul className="insc2_list">
                <li>
                  <span className="insc2_bullet insc2_bulletRed" />
                  Docentes especialistas por asignatura.
                </li>
                <li>
                  <span className="insc2_bullet insc2_bulletRed" />
                  Proyectos, trabajos y evaluaciones periódicas.
                </li>
                <li>
                  <span className="insc2_bullet insc2_bulletRed" />
                  Inglés desde 1° (sin certificación externa).
                </li>
              </ul>

              <div className="insc2_actions">
                <NavLink to="/niveles/secundaria" className="insc2_btn insc2_btnPrimary">
                  Ir a Secundaria <span aria-hidden="true">→</span>
                </NavLink>

                <NavLink to="/inscripciones/secundaria" className="insc2_btn insc2_btnSoft">
                  Ver pasos
                </NavLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PASOS */}
      <section id="pasos" className="insc2_steps">
        <div className="insc2_wrap">
          <div className="insc2_stepsHead">
            <h2 className="insc2_h2">Pasos de inscripción</h2>
            <p className="insc2_p">
              Ruta simple para avanzar sin perderte (los detalles exactos están
              dentro de cada nivel).
            </p>
          </div>

          <div className="insc2_timeline">
            <div className="insc2_step">
              <div className="insc2_stepNum">1</div>
              <div className="insc2_stepBody">
                <div className="insc2_stepTitle">Elegir nivel</div>
                <div className="insc2_stepText">
                  Selecciona Primaria o Secundaria para ver la información
                  completa.
                </div>
              </div>
            </div>

            <div className="insc2_step">
              <div className="insc2_stepNum">2</div>
              <div className="insc2_stepBody">
                <div className="insc2_stepTitle">Requisitos</div>
                <div className="insc2_stepText">
                  Prepara documentos y datos del alumno según el nivel.
                </div>
              </div>
            </div>

            <div className="insc2_step">
              <div className="insc2_stepNum">3</div>
              <div className="insc2_stepBody">
                <div className="insc2_stepTitle">Entrega y confirmación</div>
                <div className="insc2_stepText">
                  Se valida la información y se confirma el lugar.
                </div>
              </div>
            </div>
          </div>

          <div className="insc2_bottomCtas">
            <NavLink to="/inscripciones/primaria" className="insc2_btn insc2_btnOutline">
              Empezar con Primaria <span aria-hidden="true">→</span>
            </NavLink>
            <NavLink to="/inscripciones/secundaria" className="insc2_btn insc2_btnOutline">
              Empezar con Secundaria <span aria-hidden="true">→</span>
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}
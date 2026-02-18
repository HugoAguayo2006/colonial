import { Link } from "react-router-dom";
import "./NivelesEscolares.css";

export default function Niveles() {
  return (
    <main className="niv_page">
      {/* HERO */}
      <header className="niv_hero">
        <div className="niv_heroInner">
          <h1 className="niv_title">Niveles Académicos</h1>
          <p className="niv_subtitle">
            Una formación que combina exigencia académica, acompañamiento humano y
            valores para que cada estudiante crezca con propósito.
          </p>

          <div className="niv_heroCtas">
            <Link className="niv_btn niv_btnBlue" to="/primaria">
              Ver Primaria
              <span className="niv_btnArrow">→</span>
            </Link>
            <Link className="niv_btn niv_btnRed" to="/secundaria">
              Ver Secundaria
              <span className="niv_btnArrow">→</span>
            </Link>
          </div>

          <div className="niv_metrics">
            <div className="niv_metric">
              <div className="niv_metricNum">2</div>
              <div className="niv_metricTxt">Niveles disponibles</div>
            </div>
            <div className="niv_metric">
              <div className="niv_metricNum">Valores</div>
              <div className="niv_metricTxt">Formación integral</div>
            </div>
            <div className="niv_metric">
              <div className="niv_metricNum">Enfoque</div>
              <div className="niv_metricTxt">Académico y humano</div>
            </div>
          </div>
        </div>
      </header>

              <div className="separator-red"></div>

      {/* CONTENT */}
      <section className="niv_section">
        <div className="niv_container">
          <h2 className="niv_h2">Elige el nivel</h2>
          <p className="niv_p">
            Cada etapa tiene su propio enfoque, pero comparten el mismo objetivo:
            formar estudiantes capaces, responsables y con visión.
          </p>

          <div className="niv_grid">
            {/* PRIMARIA */}
            <article className="niv_card niv_cardBlue">
              <div className="niv_cardTop">
                <div className="niv_iconWrap">
                  <span className="niv_icon">📘</span>
                </div>
                <div className="niv_cardHead">
                  <h3 className="niv_cardTitle">Primaria</h3>
                  <div className="niv_chips">
                    <span className="niv_chip">Bases académicas</span>
                    <span className="niv_chip">Hábitos</span>
                    <span className="niv_chip">Valores</span>
                  </div>
                </div>
              </div>

              <p className="niv_cardText">
                Fortalecemos lectura, escritura y pensamiento lógico, mientras se
                desarrollan habilidades socioemocionales, disciplina y trabajo en
                equipo.
              </p>

              <ul className="niv_list">
                <li>Aprendizaje activo y acompañamiento cercano</li>
                <li>Desarrollo de hábitos de estudio</li>
                <li>Formación en valores y convivencia</li>
              </ul>

              <div className="niv_cardActions">
                <Link className="niv_btn niv_btnBlue" to="/primaria">
                  Conocer Primaria <span className="niv_btnArrow">→</span>
                </Link>
                <Link className="niv_link" to="/contacto">
                  Solicitar informes
                </Link>
              </div>

              <div className="niv_cornerTag">Azul Institucional</div>
            </article>

            {/* SECUNDARIA */}
            <article className="niv_card niv_cardRed">
              <div className="niv_cardTop">
                <div className="niv_iconWrap">
                  <span className="niv_icon">🎓</span>
                </div>
                <div className="niv_cardHead">
                  <h3 className="niv_cardTitle">Secundaria</h3>
                  <div className="niv_chips">
                    <span className="niv_chip">Pensamiento crítico</span>
                    <span className="niv_chip">Responsabilidad</span>
                    <span className="niv_chip">Proyectos</span>
                  </div>
                </div>
              </div>

              <p className="niv_cardText">
                Consolidamos conocimientos con docentes especialistas, evaluaciones
                periódicas y proyectos, impulsando el compromiso, el criterio y la
                autonomía del estudiante.
              </p>

              <ul className="niv_list">
                <li>Enfoque académico exigente y humano</li>
                <li>Proyectos, exámenes mensuales y trimestrales</li>
                <li>Formación integral y liderazgo</li>
              </ul>

              <div className="niv_cardActions">
                <Link className="niv_btn niv_btnRed" to="/secundaria">
                  Conocer Secundaria <span className="niv_btnArrow">→</span>
                </Link>
                <Link className="niv_link" to="/contacto">
                  Solicitar informes
                </Link>
              </div>

              <div className="niv_cornerTag">Rojo Institucional</div>
            </article>
          </div>

          {/* CTA STRIP */}
          <div className="niv_strip">
            <div className="niv_stripLeft">
              <h3 className="niv_stripTitle">¿Listo para dar el siguiente paso?</h3>
              <p className="niv_stripText">
                Si quieres conocer costos, proceso de inscripción y disponibilidad,
                contáctanos y te respondemos rápido.
              </p>
            </div>

            <div className="niv_stripRight">
              <Link className="niv_btn niv_btnGhost" to="/contacto">
                Contacto <span className="niv_btnArrow">→</span>
              </Link>
              <Link className="niv_btn niv_btnOutline" to="/conocenos">
                Conócenos <span className="niv_btnArrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

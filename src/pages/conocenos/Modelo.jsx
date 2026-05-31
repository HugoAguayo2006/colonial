// src/pages/ModeloEducativo.jsx
import { Helmet } from "react-helmet-async";
import "./Modelo.css";

export default function ModeloEducativo() {
  return (
    <main className="modelo">
      <Helmet>
        <html lang="es-MX" />
        <title>Modelo Educativo en Querétaro | Colegio Colonial</title>
        <meta
          name="description"
          content="Conoce el modelo educativo del Colegio Colonial en Querétaro: primaria y secundaria con enfoque integral, valores, inglés y acompañamiento."
        />

        <link
          rel="canonical"
          href="https://colegiocolonial.edu.mx/conocenos/modelo-educativo"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Modelo Educativo en Querétaro | Colegio Colonial"
        />
        <meta
          property="og:description"
          content="Modelo educativo del Colegio Colonial en Querétaro: formación integral para primaria y secundaria, con valores, inglés y acompañamiento."
        />
        <meta
          property="og:url"
          content="https://colegiocolonial.edu.mx/conocenos/modelo-educativo"
        />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta property="og:locale" content="es_MX" />
        <meta
          property="og:image"
          content="https://colegiocolonial.edu.mx/images/conocenos/img3.webp"
        />
        <meta
          property="og:image:alt"
          content="Modelo educativo del Colegio Colonial en Querétaro"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Modelo Educativo en Querétaro | Colegio Colonial"
        />
        <meta
          name="twitter:description"
          content="Formación integral en primaria y secundaria en Querétaro: valores, excelencia académica, inglés y acompañamiento."
        />
        <meta
          name="twitter:image"
          content="https://colegiocolonial.edu.mx/images/conocenos/img3.webp"
        />
        <meta name="geo.region" content="MX-QUE" />
        <meta name="geo.placename" content="Querétaro, México" />
      </Helmet>

      {/* HERO */}
      <section className="modelo-hero">
        <div className="modelo-hero-content">
          <h1>Nuestro Modelo Educativo</h1>
          <p>
            Formamos estudiantes con excelencia académica, valores sólidos y
            visión global, preparados para enfrentar los retos del futuro.
          </p>
        </div>
      </section>

      <div className="separator-red"></div>

      {/* PILARES */}
      <section className="modelo-pilares">
        <h2 className="section-title">Nuestros Pilares</h2>

        <div className="pilares-grid">
          <div className="pilar-card">
            <div className="pilar-icon">🎓</div>
            <h3>Excelencia Académica</h3>
            <p>
              Programas sólidos que fortalecen el pensamiento crítico,
              habilidades analíticas y dominio de conocimientos clave.
            </p>
          </div>

          <div className="pilar-card">
            <div className="pilar-icon">🤝</div>
            <h3>Formación en Valores</h3>
            <p>
              Fomentamos el respeto, la responsabilidad y el compromiso social
              como base del desarrollo integral.
            </p>
          </div>

          <div className="pilar-card">
            <div className="pilar-icon">🌎</div>
            <h3>Visión Global</h3>
            <p>
              Impulsamos el aprendizaje del idioma inglés y el desarrollo de
              habilidades para un mundo interconectado.
            </p>
          </div>
        </div>
      </section>

      <div className="separator-red"></div>

      {/* ENFOQUE INTEGRAL */}
      <section className="modelo-enfoque">
        <div className="enfoque-content">
          <div className="enfoque-text">
            <h2>Educación Integral</h2>
            <p>
              Nuestro modelo integra el desarrollo académico, emocional,
              social y físico, promoviendo el crecimiento equilibrado de cada
              estudiante.
            </p>
            <ul>
              <li>✔ Aprendizaje basado en proyectos</li>
              <li>✔ Evaluaciones formativas</li>
              <li>✔ Acompañamiento personalizado</li>
              <li>✔ Actividades culturales y deportivas</li>
            </ul>
          </div>
        </div>
      </section>

                  <div className="separator-white"></div>

      {/* CTA FINAL */}
      <section className="modelo-cta">
        <h2>Forma parte del Colegio Colonial</h2>
        <p>Descubre cómo nuestro modelo puede impulsar el futuro de tu hijo.</p>
        <a href="/inscripciones" className="cta-btn">
          Conocer Inscripciones
        </a>
      </section>

 
    </main>
  );
}

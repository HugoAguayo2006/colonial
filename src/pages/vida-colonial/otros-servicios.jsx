import { Helmet } from "react-helmet-async";
import "./otros-servicios.css";

export default function OtrosServicios() {
  return (
    <main className="os">
      <Helmet>
        <html lang="es-MX" />
        <title>Otros Servicios Escolares | Colegio Colonial Querétaro</title>
        <meta
          name="description"
          content="En el Colegio Colonial ofrecemos servicios complementarios en Querétaro como cafetería, viajes educativos y actividades recreativas que enriquecen la formación integral de nuestros alumnos."
        />

        <link
          rel="canonical"
          href="https://colegiocolonial.edu.mx/vida-colonial/otros-servicios"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Otros Servicios Escolares | Colegio Colonial Querétaro"
        />
        <meta
          property="og:description"
          content="Cafetería, viajes educativos y actividades recreativas que complementan la vida escolar de primaria y secundaria en Colegio Colonial."
        />
        <meta
          property="og:url"
          content="https://colegiocolonial.edu.mx/vida-colonial/otros-servicios"
        />
        <meta
          property="og:image"
          content="https://colegiocolonial.edu.mx/images/galeria/familia-01.webp"
        />
        <meta
          property="og:image:alt"
          content="Servicios complementarios del Colegio Colonial en Querétaro"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Otros Servicios Escolares | Colegio Colonial Querétaro"
        />
        <meta
          name="twitter:description"
          content="Servicios complementarios del Colegio Colonial: cafetería, viajes educativos y actividades recreativas en Querétaro."
        />
        <meta
          name="twitter:image"
          content="https://colegiocolonial.edu.mx/images/galeria/familia-01.webp"
        />
        <meta name="geo.region" content="MX-QUE" />
        <meta name="geo.placename" content="Querétaro, México" />
      </Helmet>

      {/* HERO */}
      <section className="os-hero">
        <div className="os-hero-overlay" />
        <div className="os-hero-content">
          <h1>Otros Servicios</h1>
          <p>
            Complementamos la formación académica con experiencias y servicios
            que enriquecen el desarrollo integral de nuestros estudiantes.
          </p>
        </div>
      </section>

      <div className="separator-red"></div>

      {/* SERVICIOS */}
      <section className="os-services">
        {/* Cafetería */}
        <div className="os-card">
          <div className="os-icon">🍎</div>
          <h2>Cafetería</h2>
          <p>
            El colegio ofrece un servicio de cafetería con opciones saludables
            y nutritivas, promoviendo una alimentación balanceada durante la
            jornada escolar. Nuestro objetivo es apoyar el bienestar físico y
            el rendimiento académico de cada estudiante.
          </p>
        </div>

        {/* Excursiones */}
        <div className="os-card">
          <div className="os-icon">🚌</div>
          <h2>Excursiones Escolares</h2>
          <p>
            Las excursiones escolares brindan la oportunidad de aprender en un
            entorno práctico y natural, complementando la enseñanza académica
            con experiencias directas, formativas y enriquecedoras.
          </p>
        </div>
      </section>

                  <div className="separator-blue"></div>

      {/* CTA FINAL */}
      <section className="os-cta">
        <h3>¿Deseas más información?</h3>
        <a href="/contacto" className="os-btn">
          Contáctanos
        </a>
      </section>
    </main>
  );
}

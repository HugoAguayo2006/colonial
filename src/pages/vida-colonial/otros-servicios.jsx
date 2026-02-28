import { Helmet } from "react-helmet-async";
import "./otros-servicios.css";

export default function OtrosServicios() {
  return (
    <main className="os">
      <Helmet>
        <title>Otros Servicios Escolares | Colegio Colonial Qro</title>
        <meta
          name="description"
          content="Conoce los servicios del Colegio Colonial en Querétaro: apoyo a familias, opciones para alumnos y atención diaria en primaria y secundaria."
        />

        <link
          rel="canonical"
          href="https://www.colegiocolonial.edu.mx/vida-colonial/otros-servicios"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Otros Servicios Escolares | Colegio Colonial Querétaro"
        />
        <meta
          property="og:description"
          content="Servicios y apoyo para familias y alumnos en Querétaro: atención y acompañamiento diario en primaria y secundaria del Colegio Colonial."
        />
        <meta
          property="og:url"
          content="https://www.colegiocolonial.edu.mx/vida-colonial/otros-servicios"
        />
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
          content="Descubre los servicios escolares del Colegio Colonial en Querétaro: apoyo a familias, atención a alumnos y acompañamiento en primaria y secundaria."
        />
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
import { Helmet } from "react-helmet-async";
import "./otros-servicios.css";

export default function OtrosServicios() {
  return (
    <main className="os">
      <Helmet>
        <title>Otros Servicios | Colegio Colonial</title>
        <meta
          name="description"
          content="Conoce los servicios adicionales que ofrece el Colegio Colonial: cafetería saludable y excursiones escolares formativas."
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

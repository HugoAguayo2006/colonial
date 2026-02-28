import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contacto.css";

// ✅ Helmet (SEO)
import { Helmet } from "react-helmet-async";

export default function ContactoPage() {
  return (
    <div className="ct_page">
      <Helmet>
        {/* Title (≤ ~60 chars) */}
        <title>Contacto Colegio Colonial Querétaro | Teléfono y Dirección</title>

        {/* Meta Description (155–160 chars aprox) */}
        <meta
          name="description"
          content="Contacta a Colegio Colonial en Querétaro. Teléfono +52 1 442 431 7022, WhatsApp, horario y ubicación. Solicita informes e inscripciones hoy."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.colegiocolonial.edu.mx/contacto" />

        {/* Robots */}
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:title" content="Contacto Colegio Colonial en Querétaro" />
        <meta
          property="og:description"
          content="Teléfono +52 1 442 431 7022, WhatsApp, horario y ubicación. Solicita informes e inscripciones en Colegio Colonial, Querétaro."
        />
        <meta property="og:url" content="https://www.colegiocolonial.edu.mx/contacto" />

        {/* ⚠️ Ajusta la ruta si tu imagen OG es diferente */}
        <meta
          property="og:image"
          content="https://www.colegiocolonial.edu.mx/og/og-contacto.jpg"
        />
        <meta property="og:image:alt" content="Contacto Colegio Colonial Querétaro" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto Colegio Colonial Querétaro" />
        <meta
          name="twitter:description"
          content="Teléfono +52 1 442 431 7022, WhatsApp, horario y ubicación. Informes e inscripciones en Colegio Colonial, Querétaro."
        />
        <meta
          name="twitter:image"
          content="https://www.colegiocolonial.edu.mx/og/og-contacto.jpg"
        />
      </Helmet>

      {/* HERO ROJO INSTITUCIONAL */}
      <header className="ct_hero">
        <div className="ct_heroGlow" />
        <div className="ct_heroGrid" />

        <div className="ct_heroInner">
          <h1 className="ct_title">Contáctanos</h1>
          <p className="ct_subtitle">
            Estamos listos para acompañarte en el proceso educativo de tu hijo.
          </p>

          <div className="ct_actions">
            <a
              className="ct_btn ct_btnPrimary"
              href="https://wa.me/5214421234567?text=Hola%20Colegio%20Colonial,%20me%20gustaría%20recibir%20información."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              className="ct_btn ct_btnGhost"
              href="mailto:informes@colegiocolonial.edu.mx"
            >
              <FaEnvelope /> Enviar correo
            </a>
          </div>

          <div className="ct_quick">
            <div className="ct_quickItem">
              <FaClock />
              <span>Lunes a Viernes · 7:00 a.m. – 3:00 p.m.</span>
            </div>

            <div className="ct_quickItem">
              <FaPhoneAlt />
              <span>(442) 123 4567 · (442) 765 4321</span>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="ct_main">
        <div className="ct_container">
          {/* PANEL IZQUIERDO */}
          <aside className="ct_panel">
            <h2 className="ct_h2">Información de contacto</h2>
            <p className="ct_p">
              Si deseas informes, costos o agendar una visita, escríbenos.
              Respondemos lo antes posible.
            </p>

            <div className="ct_cards">
              <div className="ct_card">
                <div className="ct_icon">
                  <FaEnvelope />
                </div>
                <div className="ct_cardBody">
                  <h3>Correo</h3>
                  <a href="mailto:informes@colegiocolonial.edu.mx">
                    informes@colegiocolonial.edu.mx
                  </a>
                </div>
              </div>

              <div className="ct_card">
                <div className="ct_icon">
                  <FaPhoneAlt />
                </div>
                <div className="ct_cardBody">
                  <h3>Teléfonos</h3>
                  <a href="tel:+524421234567">(442) 123 4567</a>
                  <span className="ct_sep">·</span>
                  <a href="tel:+524427654321">(442) 765 4321</a>
                </div>
              </div>

              <div className="ct_card ct_cardHighlight">
                <div className="ct_icon ct_iconGreen">
                  <FaWhatsapp />
                </div>
                <div className="ct_cardBody">
                  <h3>WhatsApp</h3>
                  <a
                    href="https://wa.me/5214421234567?text=Hola%20Colegio%20Colonial,%20me%20gustaría%20recibir%20información."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enviar mensaje
                  </a>
                </div>
              </div>

              <div className="ct_card">
                <div className="ct_icon">
                  <FaClock />
                </div>
                <div className="ct_cardBody">
                  <h3>Horario</h3>
                  <p>Lunes a Viernes</p>
                  <p>7:00 a.m. – 3:00 p.m.</p>
                </div>
              </div>

              <div className="ct_card">
                <div className="ct_icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="ct_cardBody">
                  <h3>Ubicación</h3>
                  <p>Querétaro, Querétaro</p>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* FORMULARIO */}
          <section className="ct_formWrap">
            <div className="ct_formHeader">
              <h2 className="ct_h2">Envíanos un mensaje</h2>
              <p className="ct_p">Completa el formulario y te contactamos.</p>
            </div>

            <form className="ct_form" onSubmit={(e) => e.preventDefault()}>
              <div className="ct_row">
                <label>
                  Nombre
                  <input type="text" placeholder="Tu nombre completo" required />
                </label>

                <label>
                  Teléfono
                  <input type="tel" placeholder="(###) ### ####" />
                </label>
              </div>

              <label>
                Correo
                <input type="email" placeholder="tucorreo@email.com" required />
              </label>

              <label>
                Mensaje
                <textarea
                  rows="5"
                  placeholder="Cuéntanos qué necesitas..."
                  required
                />
              </label>

              <button className="ct_submit" type="submit">
                Enviar mensaje
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
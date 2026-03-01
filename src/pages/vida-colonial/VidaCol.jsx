import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./VidaCol.css";

const CAL_DATES = [
  { day: "10", month: "FEB", title: "Inicio de inscripciones", meta: "Febrero – Agosto" },
  { day: "23", month: "FEB", title: "Actividad escolar", meta: "1:00 p.m." },
  { day: "15", month: "MAR", title: "Evaluación trimestral", meta: "Horario escolar" },
];

const SECTIONS = [
  {
    key: "talleres",
    title: "Actividades extracurriculares",
    desc:
      "Talleres deportivos, artísticos y formativos que impulsan disciplina, creatividad y confianza.",
    to: "/talleres",
    tag: "Talento + crecimiento",
    icon: "★",
  },
  {
    key: "calendario",
    title: "Calendario",
    desc:
      "Fechas clave del ciclo escolar, periodos, actividades y organización clara para familias y alumnos.",
    to: "/calendario",
    tag: "Planeación",
    icon: "▦",
  },
  {
    key: "eventos",
    title: "Eventos",
    desc:
      "Celebraciones, convivencias y actividades culturales que fortalecen el sentido de comunidad.",
    to: "/eventos",
    tag: "Comunidad",
    icon: "✦",
  },
  {
    key: "galeria",
    title: "Galería",
    desc:
      "Momentos que reflejan nuestra esencia: aprendizaje, convivencia y experiencias en el Colegio Colonial.",
    to: "/galeria",
    tag: "Memorias",
    icon: "⬚",
  },
  {
    key: "servicios",
    title: "Otros servicios",
    desc:
      "Cafetería, excursiones y apoyos que complementan el día a día y el desarrollo integral.",
    to: "/servicios",
    tag: "Bienestar",
    icon: "❖",
  },
];

export default function VidaColonial() {
  return (
    <main className="vc">
      <Helmet>
        <title>Vida Colonial Querétaro | Actividades y Eventos</title>
        <meta
          name="description"
          content="Conoce la Vida Colonial en Querétaro: actividades extracurriculares, eventos escolares, galería y servicios que impulsan la formación integral en primaria y secundaria."
        />
        <link
          rel="canonical"
          href="https://www.colegiocolonial.edu.mx/vida-colonial"
        />

        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta
          property="og:title"
          content="Vida Colonial en Querétaro | Actividades y Eventos"
        />
        <meta
          property="og:description"
          content="Actividades, eventos y vida estudiantil en el Colegio Colonial. Formación integral en Querétaro para primaria y secundaria."
        />
        <meta
          property="og:url"
          content="https://www.colegiocolonial.edu.mx/vida-colonial"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Vida Colonial en Querétaro | Actividades y Eventos"
        />
        <meta
          name="twitter:description"
          content="Vida estudiantil, actividades y eventos del Colegio Colonial en Querétaro. Conoce galería, servicios y formación integral."
        />
      </Helmet>

      {/* HERO */}
      <header className="vc-hero">
        <div className="vc-hero__ribbon" aria-hidden="true" />
        <div className="vc-container vc-hero__wrap">
          <div className="vc-hero__left">
            <span className="vc-badge">Colegio Colonial</span>
            <h1 className="vc-title">
              Vida Colonial: <span>se vive</span>, se aprende y se comparte
            </h1>
            <p className="vc-subtitle">
              Descubre lo que hace especial nuestro día a día: actividades,
              eventos, calendario, galería y servicios que acompañan a cada familia.
            </p>

            <div className="vc-actions">
              <NavLink className="vc-btn vc-btn--primary" to="/eventos">
                Ver eventos
              </NavLink>
              <NavLink className="vc-btn vc-btn--outline" to="/contacto">
                Contáctanos
              </NavLink>
            </div>

            <nav className="vc-quickbar" aria-label="Accesos rápidos">
              {SECTIONS.map((s) => (
                <NavLink
                  key={s.key}
                  to={s.to}
                  className={({ isActive }) =>
                    "vc-chiplink" + (isActive ? " is-active" : "")
                  }
                >
                  <span className="vc-chiplink__dot" aria-hidden="true" />
                  {s.title}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="vc-hero__right">
            <aside className="vc-calCard" aria-label="Fechas destacadas del calendario">
              <div className="vc-calCard__top">
                <div>
                  <div className="vc-calCard__kicker">Calendario</div>
                  <h3 className="vc-calCard__title">Fechas destacadas</h3>
                </div>

                <NavLink className="vc-calCard__link" to="/calendario">
                  Ver todo →
                </NavLink>
              </div>

              <div className="vc-calList">
                {CAL_DATES.map((d) => (
                  <div className="vc-calItem" key={`${d.day}-${d.month}-${d.title}`}>
                    <div className="vc-calDate" aria-hidden="true">
                      <div className="vc-calDate__day">{d.day}</div>
                      <div className="vc-calDate__month">{d.month}</div>
                    </div>

                    <div className="vc-calText">
                      <div className="vc-calText__title">{d.title}</div>
                      <div className="vc-calText__meta">{d.meta}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="vc-calCard__cta">
                <NavLink className="vc-btn vc-btn--primary vc-calBtn" to="/calendario">
                  Ir al calendario
                </NavLink>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* MOSAICO */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-head">
            <h2>Explora cada parte de la vida escolar</h2>
            <p>
              Entra a la sección que necesitas y conoce todo lo que sucede en
              nuestra comunidad Colonial.
            </p>
          </div>

          <div className="vc-mosaic">
            {SECTIONS.map((s, idx) => (
              <article
                key={s.key}
                className={"vc-tile " + (idx === 0 ? "is-featured" : "")}
              >
                <div className="vc-tile__top">
                  <span className="vc-icon" aria-hidden="true">
                    {s.icon}
                  </span>
                  <span className="vc-tag">{s.tag}</span>
                </div>

                <h3 className="vc-tile__title">{s.title}</h3>
                <p className="vc-tile__desc">{s.desc}</p>

                <div className="vc-tile__actions">
                  <NavLink className="vc-btn vc-btn--soft" to={s.to}>
                    Ir a la sección
                  </NavLink>

                </div>

                <div className="vc-tile__accent" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PADRES DE FAMILIA */}
      <section className="vc-parents">
        <div className="vc-container vc-parents__wrap">
          <div className="vc-parents__left">
            <span className="vc-parents__kicker">Vida en comunidad</span>
            <h2 className="vc-parents__title">
              Comités y Asociaciones de Padres de Familia
            </h2>
            <p className="vc-parents__text">
              La participación de los padres de familia es fundamental en la vida
              escolar. A través de comités y asociaciones, colaboran activamente
              en la organización de eventos, el fortalecimiento de los valores
              institucionales y el acompañamiento del proceso formativo de sus
              hijos, promoviendo una comunidad unida y comprometida.
            </p>

            <div className="vc-parents__actions">
              <NavLink className="vc-btn vc-btn--primary" to="/contacto">
                Quiero participar
              </NavLink>
              <NavLink className="vc-btn vc-btn--outline" to="/eventos">
                Ver próximos eventos
              </NavLink>
            </div>
          </div>

          <div className="vc-parents__right" aria-hidden="true">
            <div className="vc-parentsCard">
              <div className="vc-parentsCard__badge">Participación activa</div>

              <div className="vc-parentsCard__list">
                <div className="vc-parentsItem">
                  <span className="vc-parentsItem__dot" />
                  <div>
                    <div className="vc-parentsItem__title">Organización</div>
                    <div className="vc-parentsItem__desc">
                      Apoyo en eventos y actividades escolares.
                    </div>
                  </div>
                </div>

                <div className="vc-parentsItem">
                  <span className="vc-parentsItem__dot" />
                  <div>
                    <div className="vc-parentsItem__title">Valores</div>
                    <div className="vc-parentsItem__desc">
                      Fortalecen la identidad y el sentido institucional.
                    </div>
                  </div>
                </div>

                <div className="vc-parentsItem">
                  <span className="vc-parentsItem__dot" />
                  <div>
                    <div className="vc-parentsItem__title">Acompañamiento</div>
                    <div className="vc-parentsItem__desc">
                      Cercanía en el proceso formativo de sus hijos.
                    </div>
                  </div>
                </div>
              </div>

              <div className="vc-parentsCard__footer">
                <span className="vc-parentsCard__pill" />
                <span className="vc-parentsCard__pill" />
                <span className="vc-parentsCard__pill" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL ROJO */}
      <section className="vc-cta">
        <div className="vc-container vc-cta__wrap">
          <div>
            <h2>¿Quieres conocer más de Colonial?</h2>
            <p>
              Visita nuestras secciones o contáctanos para recibir información y
              agendar una visita.
            </p>
          </div>

          <div className="vc-cta__btns">
            <NavLink className="vc-btn vc-btn--white" to="/galeria">
              Ver galería
            </NavLink>
            <NavLink className="vc-btn vc-btn--whiteOutline" to="/calendario">
              Ver calendario
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Ins-primaria.css";

const AccordionItem = ({ title, children, tone = "blue" }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className={`pacc pacc--${tone}`}>
      <button
        className="pacc__header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        type="button"
      >
        <span className="pacc__title">{title}</span>
        <span className={`pacc__arrow ${open ? "open" : ""}`} aria-hidden="true">
          ⌄
        </span>
      </button>

      {open && <div className="pacc__content">{children}</div>}
    </article>
  );
};

export default function InscripcionesPrimaria() {
  const costos = useMemo(
    () => [
      { label: "Inscripción", value: "$4,450", note: "Pago único" },
      { label: "Colegiatura", value: "$2,650", note: "Mensual (12 meses)" },
      {
        label: "Becas y apoyos",
        value: "Disponibles",
        note: "Rendimiento + estudio socioeconómico",
      },
      {
        label: "Pagos",
        value: "Efectivo / Transferencia",
        note: "Para mayor comodidad",
      },
    ],
    []
  );

  const pasos = useMemo(
    () => [
      {
        t: "1) Solicitar informes",
        d: "Me acerco al colegio para recibir orientación general del nivel Primaria y resolver dudas iniciales.",
      },
      {
        t: "2) Inicio del proceso (Febrero–Agosto)",
        d: "El proceso abre en febrero y se mantiene hasta agosto, sujeto a disponibilidad de lugares.",
      },
      {
        t: "3) Evaluación académica (Examen de conocimientos)",
        d: "Se aplica un examen de conocimientos como parte del proceso de admisión para conocer el nivel del aspirante.",
      },
      {
        t: "4) Valoración por Psicología",
        d: "Se realiza una valoración por el área de Psicología para conocer el perfil académico y emocional del estudiante.",
      },
      {
        t: "5) Entrevista con alumno y/o padres",
        d: "Se agenda una entrevista como parte del proceso de admisión para acompañar el ingreso de manera integral.",
      },
      {
        t: "6) Resultado de admisión",
        d: "Una vez concluida la evaluación y entrevista, se informa el resultado del proceso.",
      },
      {
        t: "7) Apertura de expediente y ficha descriptiva",
        d: "Al ser aceptado, se abre el expediente del alumno y se completa una ficha descriptiva.",
      },
      {
        t: "8) Diálogo con maestras",
        d: "Se realiza un diálogo con las maestras para alinear expectativas y acompañar la adaptación del estudiante.",
      },
      {
        t: "9) Documentos y pago de inscripción",
        d: "Se solicitan los documentos necesarios y se realiza el pago de la inscripción.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "¿Cuándo inicia el proceso de inscripción y hasta cuándo hay cupo?",
        a: (
          <p>
            El proceso inicia en <b>febrero</b> y permanece abierto hasta{" "}
            <b>agosto</b>, <b>sujeto a disponibilidad de lugares</b>.
          </p>
        ),
      },
      {
        q: "¿Aceptan traslados de otras escuelas?",
        a: (
          <p>
            Sí. El colegio acepta <b>traslados</b> de estudiantes provenientes de
            otras instituciones, siempre que se cumplan los requisitos
            establecidos para la admisión.
          </p>
        ),
      },
      {
        q: "¿Cómo es la admisión para alumnos nuevos?",
        a: (
          <div className="plist">
            <p>
              Para la admisión se considera:
            </p>
            <ul>
              <li>Examen de conocimientos.</li>
              <li>Valoración por el área de Psicología.</li>
              <li>Entrevista con el alumno y/o padres.</li>
            </ul>
          </div>
        ),
      },
      {
        q: "¿Cuánto cuesta la inscripción y la colegiatura?",
        a: (
          <div className="plist">
            <ul>
              <li>
                <b>Inscripción:</b> $4,450.
              </li>
              <li>
                <b>Colegiatura:</b> $2,650 por mes (12 meses).
              </li>
            </ul>
          </div>
        ),
      },
      {
        q: "¿Ofrecen becas o apoyos?",
        a: (
          <p>
            Sí. Se ofrecen <b>becas en Primaria</b> considerando el rendimiento
            académico y un <b>estudio socioeconómico</b>. También hay{" "}
            <b>apoyos para hermanos inscritos</b>.
          </p>
        ),
      },
      {
        q: "¿Qué métodos de pago están disponibles?",
        a: (
          <p>
            Los métodos de pago disponibles son <b>en efectivo</b> y mediante{" "}
            <b>transferencia bancaria</b>.
          </p>
        ),
      },
      {
        q: "¿Hay costos adicionales?",
        a: (
          <p>
            Algunas <b>actividades extracurriculares o servicios especiales</b>{" "}
            pueden tener cuotas adicionales, las cuales se informan previamente
            según la actividad o servicio correspondiente.
          </p>
        ),
      },
      {
        q: "¿Qué ocurre después de ser aceptado?",
        a: (
          <div className="plist">
            <ul>
              <li>Se abre el expediente del alumno.</li>
              <li>Se completa una ficha descriptiva.</li>
              <li>Se realiza un diálogo con las maestras.</li>
              <li>Se solicitan los documentos necesarios.</li>
              <li>Se efectúa el pago de la inscripción.</li>
            </ul>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Inscripciones Primaria | Instituto Nueva Galicia</title>
        <meta
          name="description"
          content="Inscripciones de Primaria: costos, becas, métodos de pago, proceso de admisión y preguntas frecuentes."
        />
      </Helmet>

      <main className="pinc">
        {/* HERO */}
        <section className="pinc__hero">
          <div className="pinc__heroInner">
            <div className="pinc__heroText">
              <p className="pinc__kicker">Primaria</p>
              <h1 className="pinc__title">Inscripciones</h1>
              <p className="pinc__subtitle">
                Proceso de admisión, costos, becas y preguntas frecuentes para
                nuevo ingreso.
              </p>

              <div className="pinc__ctaRow">
                <a className="pbtn pbtn--primary" href="#proceso">
                  Ver proceso
                </a>
                <a className="pbtn pbtn--ghost" href="#faq">
                  Preguntas frecuentes
                </a>
              </div>

              <div className="pinc__note">
                <span className="pbadge">Febrero – Agosto</span>
                <span className="pbadge pbadge--red">Sujeto a cupo</span>
              </div>
            </div>

            <aside className="pinc__heroCard" aria-label="Resumen de costos">
              <h2 className="pinc__cardTitle">Resumen de costos</h2>
              <div className="pinc__grid">
                {costos.map((c) => (
                  <div key={c.label} className="pcost">
                    <div className="pcost__top">
                      <span className="pcost__label">{c.label}</span>
                      <span className="pcost__value">{c.value}</span>
                    </div>
                    <p className="pcost__note">{c.note}</p>
                  </div>
                ))}
              </div>

              <div className="pinc__small">
                <p>
                  <b>Nota:</b> Actividades extracurriculares o servicios
                  especiales pueden generar cuotas adicionales.
                </p>
              </div>

              <div className="pinc__actions">
                <Link className="pbtn pbtn--secondary" to="/contacto">
                  Solicitar informes
                </Link>
                <a className="plink" href="#faq">
                  Ver FAQ ↘
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* PROCESO */}
        <section className="pinc__section" id="proceso">
          <header className="pinc__header">
            <h2>Proceso de admisión</h2>
            <p>
              Para ingresar a Primaria, el proceso contempla evaluación académica,
              valoración psicológica y entrevista.
            </p>
          </header>

          <div className="pinc__block">
            {pasos.map((s, i) => (
              <AccordionItem
                key={i}
                title={s.t}
                tone={i % 2 === 0 ? "blue" : "red"}
              >
                <p>{s.d}</p>
              </AccordionItem>
            ))}
          </div>

          <div className="pinc__strip">
            <div className="pstrip__item">
              <span className="pstrip__dot" aria-hidden="true" />
              <p>
                <b>Traslados:</b> se aceptan, siempre que se cumplan requisitos de
                admisión.
              </p>
            </div>
            <div className="pstrip__item">
              <span className="pstrip__dot pred" aria-hidden="true" />
              <p>
                <b>Pagos:</b> efectivo y transferencia bancaria.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pinc__section" id="faq">
          <header className="pinc__header">
            <h2>Preguntas frecuentes</h2>
            <p>Lo esencial sobre fechas, costos, becas y requisitos del proceso.</p>
          </header>

          <div className="pinc__block">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                title={f.q}
                tone={i % 3 === 0 ? "red" : "blue"}
              >
                {f.a}
              </AccordionItem>
            ))}
          </div>

          <div className="pinc__final">
            <div className="pfinal__card">
              <h3>¿Listo para iniciar?</h3>
              <p>
                Si quieres avanzar con el proceso, puedo solicitar informes y agendar
                los siguientes pasos con el colegio.
              </p>
              <div className="pfinal__actions">
                <Link className="pbtn pbtn--primary" to="/contacto">
                  Contacto
                </Link>
                <a className="pbtn pbtn--ghost" href="#proceso">
                  Revisar proceso
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

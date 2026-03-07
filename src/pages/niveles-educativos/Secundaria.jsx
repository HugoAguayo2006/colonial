import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Primaria.css";
import Extracurriculares from "../../components/Talleres";
import { ACTIVIDADES } from "../../data/actividades-3";

export default function Secundaria() {
  // ✅ HERO: fotos SOLO del hero
  const heroSlides = useMemo(
    () => ["/images/secundaria/hero-1.webp", "/images/secundaria/hero-3.webp"],
    []
  );

  // ✅ FORMACIÓN EN LA FE: fotos SOLO de la sección fe
  const feSlides = useMemo(
    () => [
      "/images/secundaria/fe-1.webp",
      "/images/secundaria/fe-2.webp",
      "/images/secundaria/fe-3.webp",
      "/images/secundaria/fe-4.webp",
    ],
    []
  );

  // =========================
  // HERO carousel state
  // =========================
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  const go = (next) => {
    const n = heroSlides.length;
    if (!n) return;
    setIdx((next + n) % n);
  };

  useEffect(() => {
    if (!heroSlides.length) return;
    intervalRef.current = setInterval(() => {
      setIdx((v) => (v + 1) % heroSlides.length);
    }, 5200);

    return () => clearInterval(intervalRef.current);
  }, [heroSlides.length]);

  // =========================
  // FE carousel state
  // =========================
  const [feIdx, setFeIdx] = useState(0);

  const goFe = (next) => {
    const n = feSlides.length;
    if (!n) return;
    setFeIdx((next + n) % n);
  };

  useEffect(() => {
    if (!feSlides.length) return;
    const t = setInterval(() => {
      setFeIdx((v) => (v + 1) % feSlides.length);
    }, 5500);
    return () => clearInterval(t);
  }, [feSlides.length]);

  const scrollToInscripciones = () => {
    const el = document.getElementById("secundaria-inscripciones");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90; // offset navbar
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main className="prim">
      <Helmet>
        <title>Secundaria en Querétaro | Colegio Colonial</title>
        <meta
          name="description"
          content="Secundaria privada en Querétaro con enfoque académico exigente y formación humana. Conoce horarios, talleres y solicita informes en Colegio Colonial."
        />
        <link
          rel="canonical"
          href="https://www.colegiocolonial.edu.mx/niveles/secundaria"
        />

        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta
          property="og:title"
          content="Secundaria en Querétaro | Colegio Colonial"
        />
        <meta
          property="og:description"
          content="Secundaria privada en Querétaro con enfoque académico exigente y formación humana. Conoce horarios, talleres y solicita informes en Colegio Colonial."
        />
        <meta
          property="og:url"
          content="https://www.colegiocolonial.edu.mx/niveles/secundaria"
        />
        <meta
          property="og:image"
          content="https://www.colegiocolonial.edu.mx/images/secundaria/hero-1.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Secundaria en Querétaro | Colegio Colonial"
        />
        <meta
          name="twitter:description"
          content="Secundaria privada en Querétaro con enfoque académico exigente y formación humana. Conoce horarios, talleres y solicita informes en Colegio Colonial."
        />
        <meta
          name="twitter:image"
          content="https://www.colegiocolonial.edu.mx/images/secundaria/hero-1.webp"
        />
      </Helmet>

      {/* =========================
          HERO con carrusel de fondo
      ========================== */}
      <section className="prim-hero">
        <div className="prim-hero__bg" aria-hidden="true">
          {heroSlides.map((src, i) => (
            <img
              key={src}
              className={`prim-hero__bgImg ${i === idx ? "is-on" : ""}`}
              src={src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
          <div className="prim-hero__shade" />
        </div>

        <div className="prim-hero__container">
          <div className="prim-hero__content">
            <span className="prim-chip">Nivel escolar</span>
            <h1 className="prim-title">Secundaria</h1>

            <p className="prim-sub">
              Reforzamos los aprendizajes con un enfoque académico exigente y
              humano, formando estudiantes críticos, responsables y
              comprometidos.
            </p>

            {/* ✅ HORARIO INTEGRADO */}
            <div
              className="prim-heroInfo"
              role="note"
              aria-label="Horario de clases"
            >
              <span className="prim-heroInfo__pill">🕒 Horario matutino</span>
              <span className="prim-heroInfo__text">
                Lunes a viernes · <strong>7:50 a.m.</strong> a{" "}
                <strong>2:00 p.m.</strong>
              </span>
            </div>

            <div className="prim-hero__actions">
              <Link
                className="prim-btn prim-btn--solid"
                to="/inscripciones/secundaria"
              >
                Inscripciones Secundaria
              </Link>
              <Link className="prim-btn prim-btn--ghost" to="/contacto">
                Quiero más información
              </Link>
            </div>

            <div
              className="prim-dots"
              role="tablist"
              aria-label="Carrusel de bienvenida"
            >
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  className={`prim-dot ${i === idx ? "is-active" : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Ir a foto ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* =========================
              Bloque escudo + “bienvenida”
          ========================== */}
          <aside className="prim-card">
            <div className="prim-card__bg" aria-hidden="true">
              <span className="prim-orb prim-orb--1" />
              <span className="prim-orb prim-orb--2" />
              <span className="prim-gridGlow" />
            </div>

            <div className="prim-card__top">
              <img
                className="prim-shield"
                src="/images/secundaria/escudo-secundaria.webp"
                alt="Escudo de Secundaria"
                loading="lazy"
                decoding="async"
              />

              <div>
                <h2 className="prim-card__title">¡Bienvenidos!</h2>
                <p className="prim-card__text">
                  Nuestra secundaria refuerza los aprendizajes previos con un
                  enfoque académico exigente y humano, impulsando el pensamiento
                  crítico, el compromiso y la responsabilidad.
                </p>
              </div>
            </div>

            <div className="prim-stats">
              <div className="prim-stat">
                <span className="prim-stat__k">Docentes</span>
                <span className="prim-stat__v">Especialistas</span>
              </div>
              <div className="prim-stat">
                <span className="prim-stat__k">Evaluación</span>
                <span className="prim-stat__v">Mensual / Trimestral</span>
              </div>
              <div className="prim-stat">
                <span className="prim-stat__k">Inglés</span>
                <span className="prim-stat__v">Desde 1°</span>
              </div>
            </div>

            <div className="prim-miniActions">
              <button className="prim-linkBtn" onClick={() => go(idx - 1)}>
                ← Anterior
              </button>
              <button className="prim-linkBtn" onClick={() => go(idx + 1)}>
                Siguiente →
              </button>
            </div>
          </aside>
        </div>
      </section>

      <div className="separator-blue" />

      {/* =========================
          SECCIONES
      ========================== */}
      <section className="prim-section">
        <div className="prim-wrap">
          <header className="prim-head">
            <h2 className="prim-h2">Instalaciones y recursos</h2>
            <p className="prim-p">
              Laboratorios, tecnología y áreas deportivas para aprender, crear y
              convivir con orden y seguridad.
            </p>
          </header>

          <div className="prim-grid3">
            <article className="prim-feature">
              <div className="prim-feature__icon">🧪</div>
              <h3 className="prim-h3">Laboratorios</h3>
              <p className="prim-p2">
                Laboratorios de ciencias y computación para fortalecer el
                aprendizaje práctico.
              </p>
            </article>

            <article className="prim-feature">
              <div className="prim-feature__icon">🖥️</div>
              <h3 className="prim-h3">Recursos tecnológicos</h3>
              <p className="prim-p2">
                Proyectores y herramientas didácticas que enriquecen las clases
                y los proyectos.
              </p>
            </article>

            <article className="prim-feature">
              <div className="prim-feature__icon">🏀</div>
              <h3 className="prim-h3">Áreas deportivas</h3>
              <p className="prim-p2">
                Espacios para el desarrollo físico, convivencia y trabajo en
                equipo.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="prim-section prim-section--alt">
        <div className="prim-wrap">
          <div className="prim-split prim-split--fe">
            {/* IZQUIERDA: texto */}
            <div className="prim-feText">
              <h2 className="prim-h2">Formación en la fe</h2>
              <p className="prim-p">
                La dimensión espiritual está presente en la vida escolar. A
                través del carisma del Verbo Encarnado, promovemos valores
                cristianos, compromiso social y participación en celebraciones
                religiosas.
              </p>

              <ul className="prim-list">
                <li>Vivencia de valores cristianos en el día a día</li>
                <li>Compromiso social y sentido de servicio</li>
                <li>Participación en celebraciones y momentos de comunidad</li>
              </ul>

              <div className="prim-ctaRow">
                <Link
                  className="prim-btn prim-btn--solid"
                  to="/inscripciones/secundaria"
                >
                  Inscripciones Secundaria
                </Link>
                <Link className="prim-btn prim-btn--ghost" to="/contacto">
                  Agenda una visita
                </Link>
              </div>
            </div>

            {/* DERECHA: carrusel */}
            <div className="prim-feCol">
              <div
                className="prim-photoCard"
                aria-label="Galería de formación en la fe"
              >
                <div className="prim-photoCard__img prim-feCarousel">
                  <div
                    className="prim-feTrack"
                    style={{ transform: `translateX(-${feIdx * 100}%)` }}
                  >
                    {feSlides.map((src, i) => (
                      <div className="prim-feSlide" key={src}>
                        <img
                          src={src}
                          alt={`Formación en la fe ${i + 1}`}
                          loading="lazy"
                          draggable="false"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    className="prim-carouselBtn prim-carouselBtn--prev"
                    onClick={() => goFe(feIdx - 1)}
                    aria-label="Anterior"
                    type="button"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    className="prim-carouselBtn prim-carouselBtn--next"
                    onClick={() => goFe(feIdx + 1)}
                    aria-label="Siguiente"
                    type="button"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>

                <div className="prim-photoCard__bar">
                  <span>Galería de formación en la fe</span>
                  <span className="prim-photoCard__pill">
                    Imagen {feIdx + 1} de {feSlides.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="separator-blue"></div>

      <Extracurriculares
        nivel="secundaria"
        items={ACTIVIDADES}
        title="Extracurriculares en Secundaria"
        subtitle="Actividades para fortalecer hábitos, disciplina y talentos."
      />

      <div className="separator-blue"></div>

      <section className="prim-section">
        <div className="prim-wrap">
          <header className="prim-head">
            <h2 className="prim-h2">Atención personalizada y apoyo</h2>
            <p className="prim-p">
              Acompañamiento académico y emocional para resolver dudas, mejorar
              el rendimiento y reforzar habilidades, en un entorno de confianza.
            </p>
          </header>

          <div className="prim-grid2">
            <article className="prim-card2">
              <h3 className="prim-h3">Tutorías personalizadas</h3>
              <p className="prim-p2">
                Seguimiento cercano para fortalecer hábitos de estudio,
                confianza y progreso constante.
              </p>
            </article>

            <article className="prim-card2">
              <h3 className="prim-h3">Seguridad escolar</h3>
              <p className="prim-p2">
                Protocolos de protección civil, cámaras de circuito cerrado y
                educación en seguridad vial.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="prim-section prim-section--alt">
        <div className="prim-wrap">
          <header className="prim-head">
            <h2 className="prim-h2">Actividades y talleres</h2>
            <p className="prim-p">
              Además de la formación académica, impulsamos actividades que
              fortalecen habilidades, creatividad y sentido de pertenencia.
            </p>
          </header>

          <div className="prim-grid3">
            <article className="prim-feature">
              <div className="prim-feature__icon">🎨</div>
              <h3 className="prim-h3">Arte y creatividad</h3>
              <p className="prim-p2">Pintura, danza y manualidades.</p>
            </article>

            <article className="prim-feature">
              <div className="prim-feature__icon">⚽</div>
              <h3 className="prim-h3">Deportes</h3>
              <p className="prim-p2">Fútbol, básquetbol y voleibol.</p>
            </article>

            <article className="prim-feature">
              <div className="prim-feature__icon">🏆</div>
              <h3 className="prim-h3">Competencias</h3>
              <p className="prim-p2">
                Participación en eventos académicos, deportivos y culturales,
                internos y externos.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          INSCRIPCIONES
      ========================== */}
      <section
        className="prim-section prim-section--cta"
        id="secundaria-inscripciones"
      >
        <div className="prim-wrap">
          <div className="prim-cta">
            <div>
              <h2 className="prim-cta__title">Inscripciones · Secundaria</h2>
              <p className="prim-cta__text">
                Solicita informes y conoce el proceso de inscripción para
                Secundaria.
              </p>

              <ul className="prim-list-1" style={{ marginTop: 14 }}>
                <li>Turno matutino: lunes a viernes (7:00 a.m. a 2:10 p.m.)</li>
                <li>Docentes especialistas por asignatura</li>
                <li>
                  Evaluación: cuaderno, proyectos, exámenes mensuales y
                  trimestrales
                </li>
                <li>Inglés desde 1° (sin certificación externa)</li>
              </ul>
            </div>

            <div className="prim-cta__actions">
              <Link
                className="prim-btn prim-btn--solid"
                to="/inscripciones/secundaria"
              >
                Más información
              </Link>

              <a
                className="prim-btn prim-btn--ghost prim-btn--big"
                href="https://wa.me/5214424317022?text=Hola,%20quiero%20informaci%C3%B3n%20de%20Inscripciones%20para%20Secundaria."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
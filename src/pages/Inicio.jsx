import { useEffect, useRef, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Inicio.css";
import IntercolegialesVideoHero from "../components/IntercolegialesVideoHero";
import Intercolegiales from "../components/Intercolegiales";




export default function Inicio() {


  // INTERCOLEGIALES

  const SPORTS = [
  { key: "all", label: "Todos" },
  { key: "ajedrez", label: "Ajedrez" },
  { key: "futbol", label: "Fútbol" },
  { key: "basquetbol", label: "Básquetbol" },
  { key: "voley", label: "Vóley" },
];

const ITEMS = [
  { id: "i1", sport: "futbol", image: "/intercolegiales/futbol-1.webp" },
  { id: "i2", sport: "futbol", image: "/intercolegiales/futbol-2.webp" },
  { id: "i3", sport: "basquetbol", image: "/intercolegiales/basquet-1.webp" },
  { id: "i4", sport: "voley", image: "/intercolegiales/voley-1.webp" },
  { id: "i5", sport: "ajedrez", image: "/intercolegiales/ajedrez-1.webp" },
];

const [activeSport, setActiveSport] = useState("all");
const trackRef = useRef(null);

const filtered = useMemo(() => {
  if (activeSport === "all") return ITEMS;
  return ITEMS.filter((it) => it.sport === activeSport);
}, [activeSport]);

const scrollOne = (dir) => {
  const track = trackRef.current;
  if (!track) return;

  const firstCard = track.querySelector(".home-icc-card");
  if (!firstCard) return;

  const computed = window.getComputedStyle(track);
  const gap = parseFloat(computed.columnGap || computed.gap || "0") || 0;
  const step = firstCard.getBoundingClientRect().width + gap;

  track.scrollBy({ left: dir * step, behavior: "smooth" });
};

const labelSport = (k) =>
  k === "ajedrez"
    ? "Ajedrez"
    : k === "futbol"
    ? "Fútbol"
    : k === "basquetbol"
    ? "Básquetbol"
    : "Vóley";


  // ✅ Carrusel SOLO en el Hero detrás del título
  const slides = useMemo(
    () => [
      "/images/inicio/hero-1.webp",
      "/images/inicio/hero-2.webp",
    ],
    []
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const quick = [
    { label: "Primaria", to: "/niveles/primaria" },
    { label: "Secundaria", to: "/niveles/secundaria" },
    { label: "Calendario", to: "/calendario" },
    { label: "Otros campus", to: "/otros-campus" },
  ];

  const explore = [
    { label: "Modelo educativo", to: "/modelo-educativo" },
    { label: "Instalaciones", to: "/instalaciones" },
    { label: "Galería", to: "/galeria" },
  ];

  return (
    <main className="cc-home">
      {/* =========================
          HERO (solo aquí carrusel)
      ========================== */}
<header className="cc-hero" aria-label="Inicio Colegio Colonial">
  <div className="cc-hero-bg" aria-hidden="true">
    {slides.map((src, i) => (
      <div
        key={src}
        className={`cc-hero-slide ${i === idx ? "is-active" : ""}`}
        style={{ backgroundImage: `url("${src}")` }}
      />
    ))}
    <div className="cc-hero-overlay" />
  </div>

  <div className="cc-hero-inner cc-hero-left">
    <div className="cc-hero-titleWrap">
      <h1 className="cc-hero-title">Colegio Colonial</h1>
      <p className="cc-hero-tag">
        Formación integral • Comunidad • Excelencia académica
      </p>

      <div className="cc-hero-actions" role="navigation" aria-label="Acciones principales">
        {quick.map((b) => (
          <NavLink key={b.to} className="cc-btn cc-btnPrimary" to={b.to}>
            {b.label}
          </NavLink>
        ))}
      </div>

      <div className="cc-hero-actions cc-hero-actions--secondary" role="navigation" aria-label="Explorar">
        {explore.map((b) => (
          <NavLink key={b.to} className="cc-btn cc-btnGhost" to={b.to}>
            {b.label}
          </NavLink>
        ))}
      </div>

      <div className="cc-dots" aria-label="Cambiar imagen del carrusel">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`cc-dot ${i === idx ? "is-active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</header>

            <div className="separator-blue" />
    <div>
      <IntercolegialesVideoHero
        title="Intercolegiales 2026"
        subtitle="Invitamos a los colegios de la orden a disputar torneos deportivos y vivir una experiencia de unidad, respeto y convivencia."
        youtubeId="VNn2FhvNGTI"
        start={44}
        ctaHref="/intercolegiales/inscripcion"
        logoSrc="/images/logo-escudo.webp"
        logoAlt="Escudo ING"
      />
    </div>


      {/* =========================
          SECCIÓN: “Manifiesto”
      ========================== */}
      <section className="cc-band cc-bandRed" aria-label="Manifiesto">
        <div className="cc-wrap">
          <div className="cc-bandGrid">
            <div>
              <h2 className="cc-h2">Nuestro compromiso</h2>
              <p className="cc-p">
                Educación con estructura, corazón y propósito. Un ambiente seguro,
                exigente y humano.
              </p>
            </div>

            <div className="cc-metrics">
              <div className="cc-metric">
                <span className="cc-metricNum">01</span>
                <span className="cc-metricTxt">Acompañamiento</span>
              </div>
              <div className="cc-metric">
                <span className="cc-metricNum">02</span>
                <span className="cc-metricTxt">Excelencia</span>
              </div>
              <div className="cc-metric">
                <span className="cc-metricNum">03</span>
                <span className="cc-metricTxt">Comunidad</span>
              </div>
            </div>
          </div>
        </div>
      </section>
                  <div className="separator-blue" />

      {/* =========================
          SECCIÓN: Cards creativas
      ========================== */}
      <section className="cc-section" aria-label="Secciones principales">
        <div className="cc-wrap">
          <div className="cc-cardGrid">
  <article className="cc-feature">
    <div className="cc-featureText">
      <div className="cc-featureHead">
        <span className="cc-kicker">Oferta educativa</span>
        <h3>Primaria</h3>
      </div>
      <p>
        Bases académicas sólidas, hábitos de estudio y formación en valores.
      </p>
      <NavLink className="cc-link" to="/niveles/primaria">
        Ver Primaria →
      </NavLink>
    </div>

    <div className="cc-featureMedia" aria-hidden="true">
      <img
        src="/images/inicio/primaria-card.webp"
        alt=""
        loading="lazy"
      />
    </div>
  </article>

  <article className="cc-feature">
    <div className="cc-featureText">
      <div className="cc-featureHead">
        <span className="cc-kicker">Oferta educativa</span>
        <h3>Secundaria</h3>
      </div>
      <p>
        Disciplina, pensamiento crítico y crecimiento integral con acompañamiento.
      </p>
      <NavLink className="cc-link" to="/niveles/secundaria">
        Ver Secundaria →
      </NavLink>
    </div>

    <div className="cc-featureMedia" aria-hidden="true">
      <img
        src="/images/inicio/secundaria-card.webp"
        alt=""
        loading="lazy"
      />
    </div>
  </article>

<article className="cc-feature">
  <div className="cc-featureText">
    <div className="cc-featureHead">
      <span className="cc-kicker">Vida escolar</span>
      <h3>Calendario</h3>
    </div>
    <p>
      Fechas importantes, eventos y actividades. Todo en un solo lugar.
    </p>
    <NavLink className="cc-link" to="/calendario">
      Abrir Calendario →
    </NavLink>

<div className="cc-miniGrid">
  <div className="cc-mini">
    <span className="cc-miniDate">12 SEP</span>
    <span className="cc-miniText">Misa inicio</span>
  </div>

  <div className="cc-mini">
    <span className="cc-miniDate">15 SEP</span>
    <span className="cc-miniText">Festival patrio</span>
  </div>

  <div className="cc-mini">
    <span className="cc-miniDate">02 OCT</span>
    <span className="cc-miniText">Junta padres</span>
  </div>

  <div className="cc-mini">
    <span className="cc-miniDate">18 OCT</span>
    <span className="cc-miniText">Convivencia</span>
  </div>
</div>
  </div>
</article>


<article className="cc-feature">
  <div className="cc-featureText">
    <div className="cc-featureHead">
      <span className="cc-kicker">Comunidad</span>
      <h3>Otros campus</h3>
    </div>
    <p>
      Conoce nuestras sedes y encuentra la mejor opción para tu familia.
    </p>
    <NavLink className="cc-link" to="/otros-campus">
      Ver otros campus →
    </NavLink>

    <div className="cc-campusStats" aria-label="Presencia internacional">
  <div className="cc-stat">
    <span className="cc-statNum">12</span>
    <span className="cc-statLabel">Colegios</span>
    <span className="cc-statHint">en la Orden</span>
  </div>

  <div className="cc-stat">
    <span className="cc-statNum">10</span>
    <span className="cc-statLabel">Países</span>
    <span className="cc-statHint">presencia educativa</span>
  </div>

  {/* mini detalle visual */}
  <div className="cc-stat cc-stat--map">
    <span className="cc-mapTitle">Alcance</span>
    <div className="cc-mapDots" aria-hidden="true">
      <span className="cc-dotMap" />
      <span className="cc-dotMap" />
      <span className="cc-dotMap" />
      <span className="cc-dotMap" />
      <span className="cc-dotMap" />
    </div>
    <span className="cc-mapHint">Comunidad internacional</span>
  </div>
</div>
  </div>
</article>

</div>
        </div>
      </section>

      {/* =========================
          SECCIÓN: Citas + Video
      ========================== */}
      <section className="cc-split" aria-label="Citas y video">
        <div className="cc-wrap cc-splitGrid">
          <article className="cc-panel cc-panelQuotes">
            <h3 className="cc-panelTitle">Jeanne Chézard de Matel</h3>
            <p className="cc-panelSub">
              Tres frases que inspiran nuestro modo de formar.
            </p>

            <div className="cc-quoteList">
              <figure className="cc-quote">
                <blockquote>
"Alabado sea el Verbo Encarnado en el Santísimo Sacramento"
                </blockquote>
                <figcaption>— Jeanne Chézard de Matel</figcaption>
              </figure>

              <figure className="cc-quote">
                <blockquote>
                  “Mi único deseo es pertenecer totalmente al Verbo Encarnado."
                </blockquote>
                <figcaption>— Jeanne Chézard de Matel</figcaption>
              </figure>

              <figure className="cc-quote">
                <blockquote>
"Deseo que mi vida entera sea un acto de amor al Verbo Encarnado."
                </blockquote>
                <figcaption>— Jeanne Chézard de Matel</figcaption>
              </figure>

                            <figure className="cc-quote">
                <blockquote>
"No puedo desear otra cosa que cumplir en todo la voluntad de Dios."
                </blockquote>
                <figcaption>— Jeanne Chézard de Matel</figcaption>
              </figure>
            </div>
          </article>

          <article className="cc-panel cc-panelVideo">
            <h3 className="cc-panelTitle">
Nuestras Instalaciones.</h3>
            <p className="cc-panelSub">
Una vista de nuestras maravillosas instalaciones.
            </p>

            <div className="cc-videoFrame" aria-label="Video de YouTube">
              <iframe
                src="https://www.youtube.com/embed/Eg_MtjuNGtM"
                title="Video Colegio Colonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="cc-videoActions">
              <NavLink className="cc-btn cc-btnBlue" to="/modelo-educativo">
                Modelo educativo
              </NavLink>
              <NavLink className="cc-btn cc-btnOutline" to="/galeria">
                Galería
              </NavLink>
            </div>
          </article>
        </div>
      </section>
                  <div className="separator-red" />
      {/* =========================
          BANDA FINAL
      ========================== */}
      <section className="cc-band cc-bandBlue" aria-label="Explorar más">
        <div className="cc-wrap">
          <div className="cc-footerCTA">
            <div>
              <h3>Explora el Colegio Colonial</h3>
              <p>Accesos directos a secciones clave.</p>
            </div>

            <div className="cc-footerLinks">
              <NavLink className="cc-chip" to="/instalaciones">Instalaciones</NavLink>
              <NavLink className="cc-chip" to="/galeria">Galería</NavLink>
              <NavLink className="cc-chip" to="/eventos">Eventos</NavLink>
              <NavLink className="cc-chip" to="/contacto">Contacto</NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

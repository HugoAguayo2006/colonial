import { Helmet } from "react-helmet-async";
import "./Valores.css";

const VALORES = [
  { t: "Identidad", d: "Saber quién soy y actuar con coherencia." },
  { t: "Empatía", d: "Comprender al otro y acompañarlo con humanidad." },
  { t: "Respeto", d: "Tratar con dignidad, límites y buen trato." },
  { t: "Libertad", d: "Elegir con conciencia, responsabilidad y propósito." },
  { t: "Lealtad", d: "Ser fiel a los compromisos y a la comunidad." },
  { t: "Solidaridad", d: "Servir y ayudar con acciones concretas." },
  { t: "Confianza", d: "Construir vínculos con honestidad y constancia." },
  { t: "Responsabilidad", d: "Cumplir, responder por mis actos y mejorar." },
  { t: "Gratitud", d: "Reconocer lo recibido y valorarlo." },
  { t: "Trabajo colaborativo", d: "Lograr más juntos, escuchando y sumando." },
];

export default function Valores() {
  return (
    <main className="val">
      <Helmet>
        <html lang="es-MX" />
        <title>Valores del Colegio Colonial en Querétaro</title>
        <meta
          name="description"
          content="Conoce los valores del Colegio Colonial en Querétaro: identidad, respeto, empatía y responsabilidad, con formación integral humana y académica."
        />
        <link
          rel="canonical"
          href="https://www.colegiocolonial.edu.mx/conocenos/valores"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta property="og:locale" content="es_MX" />
        <meta
          property="og:title"
          content="Valores del Colegio Colonial | Querétaro"
        />
        <meta
          property="og:description"
          content="Valores institucionales en Querétaro: identidad, empatía, respeto, libertad, lealtad y trabajo colaborativo, con formación integral."
        />
        <meta
          property="og:url"
          content="https://www.colegiocolonial.edu.mx/conocenos/valores"
        />
        <meta
          property="og:image"
          content="https://www.colegiocolonial.edu.mx/images/conocenos/img2.webp"
        />
        <meta
          property="og:image:alt"
          content="Valores institucionales del Colegio Colonial en Querétaro"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Valores del Colegio Colonial | Querétaro"
        />
        <meta
          name="twitter:description"
          content="Educación con valores en Querétaro: formación humana, académica y espiritual, centrada en la persona."
        />
        <meta
          name="twitter:image"
          content="https://www.colegiocolonial.edu.mx/images/conocenos/img2.webp"
        />
        <meta name="geo.region" content="MX-QUE" />
        <meta name="geo.placename" content="Querétaro, México" />
      </Helmet>

      {/* HERO */}
      <header className="val-hero">
        <div className="val-bg" aria-hidden="true" />
        <div className="val-ribbon" aria-hidden="true">
          <span>Fe · Amor · Servicio</span>
        </div>

        <div className="val-hero-inner">
          <div className="val-kicker">
            <span className="val-dot" />
            <span>Formación centrada en la persona</span>
          </div>

          <h1 className="val-title">
            Valores <span>Institucionales</span>
          </h1>

          <p className="val-sub">
            Educar es formar el corazón, la mente y el espíritu. En el Colegio
            Colonial promovemos una visión integral: emocional, espiritual y
            académica, para un desarrollo armónico en cada etapa.
          </p>

          <div className="val-hero-cards">
            <div className="val-mini">
              <h3>Dimensión emocional</h3>
              <p>Aprender a sentir, expresarse y convivir con respeto.</p>
            </div>
            <div className="val-mini">
              <h3>Dimensión espiritual</h3>
              <p>Crecer desde la fe, el amor y el servicio a los demás.</p>
            </div>
            <div className="val-mini">
              <h3>Dimensión académica</h3>
              <p>
                Disciplina, pensamiento crítico y compromiso con la excelencia.
              </p>
            </div>
          </div>
        </div>
      </header>


                  <div className="separator-red"></div>

      {/* CONSTELACIÓN DE VALORES */}
      <section className="val-section">
        <div className="val-wrap">
          <div className="val-head">
            <h2>Nuestros valores se viven</h2>
            <p>
              No son solo palabras: son hábitos que construyen comunidad y guían
              decisiones todos los días.
            </p>
          </div>

          <div className="val-grid" role="list">
            {VALORES.map((v, i) => (
              <article
                key={v.t}
                className={`val-card v-${(i % 6) + 1}`}
                role="listitem"
              >
                <div className="val-card-top">
                  <span className="val-chip">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="val-line" aria-hidden="true" />
                </div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

                        <div className="separator-red"></div>

      {/* MANIFIESTO / RELIGIOSO */}
      <section className="val-manifesto">
        <div className="val-wrap val-man-grid">
          <div className="val-man-text">
            <h2>Valores religiosos en nuestra educación</h2>
            <p>
              Es fundamental que la educación impartida en nuestro colegio esté
              centrada en la persona, entendida como un ser integral.
            </p>
            <p>
              Por ello, la formación que ofrecemos abarca las dimensiones
              emocional, espiritual y académica, promoviendo así un desarrollo
              armónico en todos los aspectos de la vida.
            </p>
            <p>
              Esta visión responde a nuestro compromiso con una educación basada
              en valores cristianos, que impulsa el crecimiento humano desde la{" "}
              <strong>fe</strong>, el <strong>amor</strong> y el{" "}
              <strong>servicio</strong>.
            </p>

            <div className="val-seal">
              <div className="val-seal-badge">Compromiso</div>
              <div className="val-seal-body">
                <div className="val-seal-title">Educación con propósito</div>
                <div className="val-seal-sub">
                  Formar personas íntegras para transformar su entorno.
                </div>
              </div>
            </div>
          </div>

          <aside className="val-man-card" aria-label="Principios clave">
            <h3>Enfoque integral</h3>

            <div className="val-pill">
              <span className="val-ico" aria-hidden="true">
                ❤
              </span>
              <div>
                <strong>Emocional</strong>
                <small>Bienestar, convivencia, autoestima.</small>
              </div>
            </div>

            <div className="val-pill">
              <span className="val-ico" aria-hidden="true">
                ✦
              </span>
              <div>
                <strong>Espiritual</strong>
                <small>Fe, amor, servicio, sentido.</small>
              </div>
            </div>

            <div className="val-pill">
              <span className="val-ico" aria-hidden="true">
                ⟡
              </span>
              <div>
                <strong>Académica</strong>
                <small>Excelencia, disciplina, pensamiento crítico.</small>
              </div>
            </div>

            <div className="val-quote">
              <p>
                “Educar es enseñar a vivir con verdad, con amor y con
                responsabilidad.”
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

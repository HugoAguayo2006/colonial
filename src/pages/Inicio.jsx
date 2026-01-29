import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Inicio.css";

export default function Inicio() {
  // 👉 Reemplaza por tus imágenes reales (ideal en /public/images/...)
  const slides = useMemo(
    () => [
      "/images/inicio/slide-1.webp",
      "/images/inicio/slide-2.webp",
      "/images/inicio/slide-3.webp",
      "/images/inicio/slide-4.webp",
    ],
    []
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const t = setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const goTo = (i) => setIdx(i);

  return (
    <main className="inicio-page">
      {/* HERO / CARRUSEL */}
      <section className="inicio-hero" aria-label="Inicio Colegio Colonial">
        {/* Fondo (crossfade simple) */}
        <div className="inicio-hero-bg" aria-hidden="true">
          {slides.map((src, i) => (
            <div
              key={src}
              className={`inicio-hero-slide ${i === idx ? "is-active" : ""}`}
              style={{ backgroundImage: `url("${src}")` }}
            />
          ))}
          <div className="inicio-hero-overlay" />
          <div className="inicio-hero-grain" />
        </div>

        <div className="inicio-hero-content">
          <div className="inicio-badge">Bienvenidos</div>

          <h1 className="inicio-title">
            Colegio <span className="inicio-title-accent">Colonial</span>
          </h1>

          <p className="inicio-subtitle">
            Formación integral con identidad, excelencia académica y comunidad.
          </p>

          <div className="inicio-actions" role="navigation" aria-label="Acciones principales">
            <NavLink className="btn btn-primary" to="/primaria">
              Primaria
            </NavLink>
            <NavLink className="btn btn-primary" to="/secundaria">
              Secundaria
            </NavLink>
            <NavLink className="btn btn-outline" to="/calendario">
              Calendario
            </NavLink>
            <NavLink className="btn btn-outline" to="/otros-campus">
              Otros campus
            </NavLink>
          </div>

          <div className="inicio-actions secondary" role="navigation" aria-label="Explorar más">
            <NavLink className="btn btn-ghost" to="/modelo-educativo">
              Modelo educativo
            </NavLink>
            <NavLink className="btn btn-ghost" to="/instalaciones">
              Instalaciones
            </NavLink>
            <NavLink className="btn btn-ghost" to="/galeria">
              Galería
            </NavLink>
            <NavLink className="btn btn-ghost" to="/mas">
              Más
            </NavLink>
          </div>

          {/* Dots carrusel */}
          <div className="inicio-dots" aria-label="Cambiar imagen del carrusel">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`inicio-dot ${i === idx ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="inicio-section">
        <div className="inicio-grid">
          {/* CITAS */}
          <article className="card">
            <header className="card-head">
              <h2 className="card-title">Citas de Jeanne Chézard de Matel</h2>
              <p className="card-sub">
                Ideas que inspiran nuestro estilo de formación y comunidad.
              </p>
            </header>

            <div className="quotes">
              <figure className="quote">
                <blockquote>
                  “I have never wanted, nor will I ever want to be learned; rather, I
                  want to be a lover…”
                </blockquote>
                <figcaption>— Jeanne Chézard de Matel</figcaption>
              </figure>

              <figure className="quote">
                <blockquote>
                  “La distancia geográfica o la ruptura de los lazos físicos no separan
                  ni alejan a los espíritus unidos por el amor”.
                </blockquote>
                <figcaption>— Jeanne Chézard de Matel</figcaption>
              </figure>

              <figure className="quote">
                <blockquote>
                  “We must preserve peace with our neighbor… Let us be mediators of
                  peace between our neighbor and God.”
                </blockquote>
                <figcaption>— Jeanne Chézard de Matel</figcaption>
              </figure>
            </div>
          </article>

          {/* VIDEO */}
          <article className="card">
            <header className="card-head">
              <h2 className="card-title">Conoce más en video</h2>
              <p className="card-sub">
                Inserta aquí un video institucional, invitación o mensaje formativo.
              </p>
            </header>

            <div className="video-wrap" aria-label="Video de YouTube">
              {/* Cambia el VIDEO_ID */}
              <iframe
                className="video"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Video Colegio Colonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="card-cta">
              <NavLink className="btn btn-primary" to="/contacto">
                Agendar visita / Contacto
              </NavLink>
              <NavLink className="btn btn-outline" to="/inscripciones">
                Inscripciones
              </NavLink>
            </div>
          </article>
        </div>
      </section>

      {/* BANDA CREATIVA */}
      <section className="inicio-band" aria-label="Accesos rápidos">
        <div className="band-inner">
          <div className="band-copy">
            <h3>Explora el Colegio Colonial</h3>
            <p>
              Accesos rápidos a secciones clave: vida escolar, eventos, instalaciones y
              recursos.
            </p>
          </div>

          <div className="band-actions">
            <NavLink className="chip" to="/eventos">Eventos</NavLink>
            <NavLink className="chip" to="/vida-escolar">Vida escolar</NavLink>
            <NavLink className="chip" to="/admisiones">Admisiones</NavLink>
            <NavLink className="chip" to="/ubicacion">Ubicación</NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

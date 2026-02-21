import "./IntercolegialesVideoHero.css";

export default function IntercolegialesVideoHero({
  title = "Intercolegiales 2026",
  subtitle = "Invitamos a los colegios de la orden a vivir una jornada de competencia, convivencia y espíritu deportivo.",
  youtubeId = "VNn2FhvNGTI",
  start = 0,
  logoSrc = "/logo.svg",
  logoAlt = "Escudo",
}) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?start=0&rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1`;;

  return (
    <section className="inter-video">
      <div className="inter-video__wrap">
        <header className="inter-video__head">
          <h1 className="inter-video__title">{title}</h1>

          {subtitle && (
            <p className="inter-video__subtitle">{subtitle}</p>
          )}

          <div className="inter-video__actions">
            <a
              className="inter-video__secondary"
              href={`https://www.youtube.com/watch?v=${youtubeId}&t=${start}s`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir en YouTube
            </a>
          </div>
        </header>

        <div className="inter-video__frame">
          <div className="inter-video__topbar" aria-hidden="true">
            <span className="inter-video__dot red" />
            <span className="inter-video__dot yellow" />
            <span className="inter-video__dot green" />
            <span className="inter-video__label">
              Intercolegiales • Video oficial
            </span>
          </div>

          <div className="inter-video__ratio">
            <iframe
              className="inter-video__iframe"
              src={embedUrl}
              title={title}
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {logoSrc && (
            <div className="inter-video__logo">
              <img src={logoSrc} alt={logoAlt} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
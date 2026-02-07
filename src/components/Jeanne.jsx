import { useEffect, useState } from "react";
import "./Jeanne.css";

const WHATSAPP_URL =
  "https://wa.me/523328343223?text=Hola,%20quiero%20más%20información%20del%20Instituto%20Nueva%20Galicia";

export default function JeanneFloat() {
  const [isApple, setIsApple] = useState(false);
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);

  useEffect(() => {
    /* 🍎 Detect Apple (iPhone / iPad) */
    const ua = navigator.userAgent.toLowerCase();
    const apple =
      ua.includes("iphone") ||
      ua.includes("ipad") ||
      (ua.includes("macintosh") && "ontouchend" in document);
    setIsApple(apple);

    /* 📱 Detect mobile landscape (iPhone horizontal incluido) */
    const mq = window.matchMedia(
      "(orientation: landscape) and (max-height: 600px)"
    );

    const updateLandscape = () => setIsLandscapeMobile(mq.matches);
    updateLandscape();

    if (mq.addEventListener) mq.addEventListener("change", updateLandscape);
    else mq.addListener(updateLandscape);

    /* ⏳ Speech SIEMPRE después de 10s */
    const timer = setTimeout(() => {
      setShowSpeech(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      if (mq.removeEventListener) mq.removeEventListener("change", updateLandscape);
      else mq.removeListener(updateLandscape);
    };
  }, []);

  const rootClass = [
    "jeanne-float",
    isApple ? "jeanne-apple" : "",
    isLandscapeMobile ? "jeanne-landscape" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const jeanneSrc = isLandscapeMobile
    ? "/images/jeanne_ing_sin_fondo.webp"
    : "/images/jeanne.webp";

  return (
    <div className={rootClass}>
      {/* Speech (aparece después de 10s) */}
      {showSpeech && (
        <div className="jeanne-speech">
          <div className="jeanne-float-bubble">
            Presiona el escudo para ir a{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-inline"
              aria-label="Ir a WhatsApp"
            >
              WhatsApp
              <img
                src="/images/WhatsApp.webp"
                alt="WhatsApp"
                className="wa-icon"
                draggable="false"
              />
            </a>
          </div>
        </div>
      )}

      {/* Jeanne (siempre visible) */}
      <div className="jeanne-float-figure">
        <img
          src={jeanneSrc}
          alt="Madre Jeanne Chézard de Matel"
          className="jeanne-float-img"
          draggable="false"
        />

        {/* Hitbox: toda la monita */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="jeanne-float-shield"
          aria-label="Ir a WhatsApp"
        />
      </div>
    </div>
  );
}
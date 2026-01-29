import { useEffect, useState } from "react";
import "./ImageModal.css";

export default function ImageModal() {
  const [imageSrc, setImageSrc] = useState(null);

  /* =====================================================
     📸 Detectar clic en imágenes (GLOBAL)
     ===================================================== */
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;

      if (target.tagName !== "IMG") return;
      if (target.closest(".imgmodal")) return;
      if (target.hasAttribute("data-nozoom")) return;
      if (target.closest("a")) return;

      setImageSrc(target.currentSrc || target.src);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  /* =====================================================
     ⌨️ Cerrar con ESC
     ===================================================== */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setImageSrc(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  /* =====================================================
     🚫 Bloquear scroll + calcular offset del navbar
     ===================================================== */
  useEffect(() => {
    if (!imageSrc) return;

    // lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // calcular “rango” (navbar height + margen)
    const nav =
      document.querySelector("[data-navbar]") ||
      document.querySelector(".navbar") ||
      document.querySelector("header");

    const navH = nav ? Math.round(nav.getBoundingClientRect().height) : 0;
    const topOffset = navH + 16; // margen extra
    document.documentElement.style.setProperty("--imgmodal-top", `${topOffset}px`);

    // también recalcular si cambia el tamaño (responsive)
    const onResize = () => {
      const n = nav
        ? Math.round(nav.getBoundingClientRect().height)
        : (document.querySelector("[data-navbar], .navbar, header")?.getBoundingClientRect().height || 0);
      document.documentElement.style.setProperty("--imgmodal-top", `${Math.round(n) + 16}px`);
    };

    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.removeProperty("--imgmodal-top");
      window.removeEventListener("resize", onResize);
    };
  }, [imageSrc]);

  if (!imageSrc) return null;

  return (
    <div className="imgmodal" onClick={() => setImageSrc(null)} role="dialog" aria-modal="true">
      <div className="imgmodal__stage" onClick={(e) => e.stopPropagation()}>
        <button
          className="imgmodal__close"
          onClick={() => setImageSrc(null)}
          aria-label="Cerrar imagen"
          title="Cerrar"
          type="button"
        >
          ✕
        </button>

        <img className="imgmodal__img" src={imageSrc} alt="Vista ampliada" />
      </div>
    </div>
  );
}

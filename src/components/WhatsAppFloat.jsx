import "./WhatsAppFloat.css";
export default function WhatsAppFloat() {
  const url = "https://wa.me/523331585919?text=Hola,%20me%20gustaría%20más%20información.";

  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
      WhatsApp
    </a>
  );
}

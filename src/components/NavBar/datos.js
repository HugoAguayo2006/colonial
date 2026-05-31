// src/data.js

// ==============================
// MENÚ PRINCIPAL (SEO + sitelinks)
// ==============================
export const MENU = [
  { path: "/", label: "Inicio" },

  // 🔹 Niveles educativos (ideal para sitelinks)
  { path: "/jardin", label: "Jardín de niños" },
  { path: "/primaria", label: "Primaria" },
  { path: "/calendario", label: "Calendario" },
  { path: "/licenciatura", label: "Licenciatura" },

  // 🔹 Institución
  { path: "/eventos", label: "Eventos" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/contacto", label: "Contacto" },

  // 🔹 Vida escolar
  { path: "/extracurriculares", label: "Actividades extracurriculares" },
  { path: "/horario-extendido", label: "Horario extendido" },
  

  // 🔹 Utilidad / Informativo

  { path: "/90", label: "90 años" },
];

// ==============================
// CONTACTO
// ==============================
export const CONTACT = {
  address: "Calle 16 de Septiembre 84, Col. Centro, Santiago de Querétaro, Querétaro",
  email: "contacto@colegiocolonial.edu.mx",

  // Teléfonos de oficina (fijos)
  phones: ["+52 442 224 2501"],

  // WhatsApp (principal)
  whatsapp: "+52 442 431 7022",

  hours: [
    { label: "Lun - Vie", value: "8:00 am – 3:00 pm" },
    { label: "Sábado", value: "Cerrado" },
    { label: "Domingo", value: "Cerrado" },
  ],

  mapsEmbedSrc:
    "https://www.google.com/maps?q=C.+16+de+Septiembre+84,+Santiago+de+Quer%C3%A9taro,+Quer%C3%A9taro,+M%C3%A9xico&output=embed",
};

// ==============================
// GALERÍA (default / placeholder)
// ==============================
export const GALLERY_DEFAULT = [
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529694157871-88ae5c29a88b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1444824775686-4185f172c44b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533587851505-d119e13fa0d1?q=80&w=800&auto=format&fit=crop",
];

// src/data/campuses.js
export const FEATURED_CAMPUS_IDS = ["queretaro", "hidalgo"]; // 👈 pon aquí tus 2 IDs


export const CAMPUSES = [

      {
    id: "tlajomulco",
    name: "Instituto Nueva Galicia – Campus Tlajomulco",
    country: "México",
    state: "Jalisco", // solo aplica si country === "México"
    city: "Guadalajara",
    address: "Chapalita, Guadalajara, Jal.",
    lat: 20.537633,
    lng: -103.5175329,

    // 👇 links
    whatsapp: "523328343223", // SOLO números con LADA (ej: 52133...)
    website: "https://nuevagalicia.edu.mx/",
  },
    {
    id: "hidalgo",
    name: "Instituto Nueva Galicia – Campus Centro",
    country: "México",
    state: "Jalisco", // solo aplica si country === "México"
    city: "Guadalajara",
    address: "Chapalita, Guadalajara, Jal.",
    lat: 20.6736,
    lng: -103.344,

    // 👇 links
    whatsapp: "523328343223", // SOLO números con LADA (ej: 52133...)
    website: "https://nuevagalicia.edu.mx/",
  },
  {
    id: "chapalita",
    name: "Colegio Matel Chapalita",
    country: "México",
    state: "Jalisco", // solo aplica si country === "México"
    city: "Guadalajara",
    address: "Chapalita, Guadalajara, Jal.",
    lat: 21.6736,
    lng: -103.344,

    // 👇 links
    whatsapp: "5213312345678", // SOLO números con LADA (ej: 52133...)
    website: "https://tusitio.com/chapalita",
  },

  {
    id: "cdmx-centro",
    name: "Campus CDMX Centro",
    country: "México",
    state: "CDMX",
    city: "Ciudad de México",
    address: "Centro, CDMX",
    lat: 19.4326,
    lng: -99.1332,
    whatsapp: "5215512345678",
    website: "https://tusitio.com/cdmx",
  },

   {
    id: "cdmx-sebastian",
    name: "Colegio Sebastián de Aparicio",
    country: "México",
    state: "CDMX",
    city: "Ciudad de México",
    address: "Calle Adriano Brower #38, Colonia Alfonso XIII, Alcaldía Álvaro Obregón",
    lat: 19.4326,
    lng: -99.1332,
    whatsapp: "5215512345678",
    website: "https://sebastiandeaparicio.com.mx/",
    niveles: ["Preescolar"] // 👈 NUEVO
  },

     {
    id: "cdmx-sebastian-2",
    name: "Colegio Sebastián de Aparicio",
    country: "México",
    state: "CDMX",
    city: "Ciudad de México",
    address: "Calle Pablo Veronés #112, Colonia Alfonso XIII, Alcaldía Álvaro Obregón",
    lat: 19.4326,
    lng: -99.1332,
    whatsapp: "5215512345678",
    website: "https://sebastiandeaparicio.com.mx/",
    niveles: ["Primaria"] // 👈 NUEVO
  },

  {
    id: "queretaro",
    name: "Colegio Colonial",
    country: "México",
    state: "Querétaro",
    city: "Querétaro",
    address: "Centro, CDMX",
    lat: 18.4326,
    lng: -101.1332,
    whatsapp: "5214424317022",
    website: "https://www.colegiocolonial.edu.mx/",
  }, 
  
  
   {
    id: "yahualica",
    name: "Colegio Yahualica",
    country: "México",
    state: "Jalisco",
    city: "Yahualica",
    address: "Centro, CDMX",
    lat: 18.4326,
    lng: -101.1332,
    whatsapp: "5214424317022",
    website: "https://www.colegiocolonial.edu.mx/",
  },  


  {
    id: "miami",
    name: "Campus Miami",
    country: "EUA",
    state: "", // en otros países puedes dejar vacío o usar "Florida" si quieres
    city: "Miami",
    address: "Miami, Florida",
    lat: 25.7617,
    lng: -80.1918,
    whatsapp: "13051234567", // EUA ejemplo
    website: "https://tusitio.com/miami",
  },

  {
    id: "madrid",
    name: "Campus Madrid",
    country: "España",
    state: "",
    city: "Madrid",
    address: "Madrid, España",
    lat: 40.4168,
    lng: -3.7038,
    whatsapp: "34600111222",
    website: "https://tusitio.com/madrid",
  },
];

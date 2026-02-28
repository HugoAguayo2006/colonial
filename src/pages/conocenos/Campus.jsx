// src/pages/Campus.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { CAMPUSES, FEATURED_CAMPUS_IDS } from "../../data/campuses";
import "./Campus.css";
import { GoogleMap, Marker, OverlayView, useJsApiLoader } from "@react-google-maps/api";
import { Helmet } from "react-helmet-async";

const MAP_DEFAULT_CENTER = { lat: 20.63, lng: -103.42 };
const MAP_DEFAULT_ZOOM = 4;

function mapsLink(lat, lng) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}
function waLink(whatsapp, text = "Hola, me gustaría recibir información.") {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${whatsapp}?text=${msg}`;
}

// ✅ helpers para coords
function toNum(v) {
  const n = typeof v === "string" ? parseFloat(v) : Number(v);
  return Number.isFinite(n) ? n : null;
}
function hasCoords(c) {
  const lat = toNum(c.lat);
  const lng = toNum(c.lng);
  return lat !== null && lng !== null;
}

function CampusActionButtons({ campus, onViewMap }) {
  return (
    <div className="camp_actions">
      <a className="camp_btnMini camp_btnWhatsapp" href={waLink(campus.whatsapp)} target="_blank" rel="noreferrer">
        WhatsApp
      </a>

      <a className="camp_btnMini" href={mapsLink(campus.lat, campus.lng)} target="_blank" rel="noreferrer">
        Google Maps
      </a>

      <a className="camp_btnMini camp_btnWeb" href={campus.website} target="_blank" rel="noreferrer">
        Página web
      </a>

      <button className="camp_btnMini camp_btnMap" type="button" onClick={() => onViewMap(campus)}>
        Ver en el mapa
      </button>
    </div>
  );
}

export default function Campus() {
  const { isLoaded } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const mapListenersRef = useRef([]);
  const mapRef = useRef(null);

  const [selected, setSelected] = useState(null);
  const [focusMode, setFocusMode] = useState(false);

  // ✅ Touch devices = móviles + iPads (coarse pointer) => tarjeta debajo del mapa
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 544px)");

    const onChange = () => setIsTouchDevice(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // filtros
  const [country, setCountry] = useState("Todos");
  const [stateMx, setStateMx] = useState("Todos");

  // destacados (2)
  const featuredList = useMemo(() => {
    const ids = Array.isArray(FEATURED_CAMPUS_IDS) ? FEATURED_CAMPUS_IDS.slice(0, 2) : [];
    return ids.map((id) => CAMPUSES.find((c) => c.id === id)).filter(Boolean);
  }, []);

  // opciones de país
  const countries = useMemo(() => {
    const set = new Set(CAMPUSES.map((c) => c.country).filter(Boolean));
    return ["Todos", ...Array.from(set).sort((a, b) => a.localeCompare(b, "es"))];
  }, []);

  // estados de méxico
  const mexicoStates = useMemo(() => {
    const set = new Set(
      CAMPUSES.filter((c) => c.country === "México")
        .map((c) => c.state)
        .filter(Boolean)
    );
    return ["Todos", ...Array.from(set).sort((a, b) => a.localeCompare(b, "es"))];
  }, []);

  // campus filtrados
  const filtered = useMemo(() => {
    return CAMPUSES.filter((c) => {
      if (country !== "Todos" && c.country !== country) return false;
      if (country === "México" && stateMx !== "Todos" && c.state !== stateMx) return false;
      return true;
    });
  }, [country, stateMx]);

  // ✅ SOLO coords válidas
  const filteredWithCoords = useMemo(() => {
    return filtered
      .filter(hasCoords)
      .map((c) => ({
        ...c,
        lat: toNum(c.lat),
        lng: toNum(c.lng),
      }));
  }, [filtered]);

  const allWithCoords = useMemo(() => {
    return CAMPUSES.filter(hasCoords).map((c) => ({
      ...c,
      lat: toNum(c.lat),
      lng: toNum(c.lng),
    }));
  }, []);

  const fitTo = (list) => {
    if (!mapRef.current || !list?.length || !window.google?.maps) return;

    if (list.length === 1) {
      mapRef.current.panTo({ lat: list[0].lat, lng: list[0].lng });
      mapRef.current.setZoom(15);
      return;
    }

    const bounds = new window.google.maps.LatLngBounds();
    list.forEach((c) => bounds.extend({ lat: c.lat, lng: c.lng }));
    mapRef.current.fitBounds(bounds);
  };

  const isOneColumnLayout = () => {
    const listEl = document.querySelector(".camp_list");
    const mapEl = document.querySelector(".camp_mapCard");
    if (!listEl || !mapEl) return false;

    const listRect = listEl.getBoundingClientRect();
    const mapRect = mapEl.getBoundingClientRect();

    // ✅ 1 columna = el mapa está claramente debajo de la lista
    return mapRect.top > listRect.top + 80;
  };

  const scrollToMapIfOneColumn = () => {
    if (!isOneColumnLayout()) return;

    const mapEl = document.querySelector(".camp_mapCard");
    if (!mapEl) return;

    const top = mapEl.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: top - 300, behavior: "smooth" });
  };

  // ✅ Reset
  const resetMapView = () => {
    setSelected(null);
    setFocusMode(false);
    const list = filteredWithCoords.length ? filteredWithCoords : allWithCoords;
    setTimeout(() => fitTo(list), 0);
  };

  // ✅ Ver en el mapa
  const goTo = (campus) => {
    if (!mapRef.current) return;

    const lat = toNum(campus.lat);
    const lng = toNum(campus.lng);
    if (lat === null || lng === null) return;

    const fixed = { ...campus, lat, lng };
    setSelected(fixed);
    setFocusMode(true);

    mapRef.current.setZoom(15);
    mapRef.current.panTo({ lat, lng });

    scrollToMapIfOneColumn();
  };

  // si cambia país y ya no es México, resetea estado
  useEffect(() => {
    if (country !== "México") setStateMx("Todos");
  }, [country]);

  // al cambiar filtros: encuadra
  useEffect(() => {
    if (!isLoaded) return;
    setSelected(null);
    setFocusMode(false);
    if (filteredWithCoords.length) fitTo(filteredWithCoords);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, stateMx, isLoaded, filteredWithCoords.length]);

  // al cargar: encuadra todos
  useEffect(() => {
    if (!isLoaded) return;
    const t = setTimeout(() => fitTo(allWithCoords), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, allWithCoords.length]);

  if (!isLoaded) return <div className="camp_skeleton">Cargando mapa…</div>;

  return (
    <main className="camp_page camp_pagePad">
      <Helmet>
        <title>Otros campus del Colegio Colonial en Querétaro</title>

        <meta
          name="description"
          content="Explora el mapa de todos los colegios del Colegio Colonial a lo largo del mundo y consulta sedes en Querétaro, México: ubicación, WhatsApp y sitio web."
        />

        <link rel="canonical" href="https://www.colegiocolonial.edu.mx/conocenos/otros-campus" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colegio Colonial" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:title" content="Otros campus del Colegio Colonial en Querétaro" />
        <meta
          property="og:description"
          content="Explora el mapa de todos los colegios del Colegio Colonial a lo largo del mundo y revisa sedes en Querétaro: campus, ubicación y accesos rápidos."
        />
        <meta property="og:url" content="https://www.colegiocolonial.edu.mx/conocenos/otros-campus" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Otros campus del Colegio Colonial en Querétaro" />
        <meta
          name="twitter:description"
          content="Mapa de todos los colegios del Colegio Colonial a lo largo del mundo + sedes en Querétaro, México: ubicación, WhatsApp y sitio web."
        />

        {/* SEO extra */}
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      </Helmet>

      <div className="camp_container">
        <header className="camp_head">
          <div className="camp_headInner">
            <h1 className="camp_title">Nuestros colegios en México y el mundo</h1>
            <p className="camp_subtitle">Filtra por país y, si es México, por estado. Cada campus tiene WhatsApp, Maps y su web.</p>
          </div>

          <div className="camp_filters camp_filtersWide">
            <label className="camp_label">
              País
              <select className="camp_select" value={country} onChange={(e) => setCountry(e.target.value)}>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className={`camp_label ${country !== "México" ? "isDisabled" : ""}`}>
              Estado (México)
              <select
                className="camp_select"
                value={stateMx}
                onChange={(e) => setStateMx(e.target.value)}
                disabled={country !== "México"}
              >
                {mexicoStates.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <button
              className="camp_btn"
              type="button"
              onClick={() => {
                setCountry("Todos");
                setStateMx("Todos");
                resetMapView();
              }}
            >
              Ver todos
            </button>
          </div>
        </header>

        {/* ===== 2 CAMPUS DESTACADOS ===== */}
        {featuredList.length > 0 && (
          <section className="camp_featured">
            <div className="camp_badge">Campus destacados</div>

            <div className="camp_featuredTwo">
              {featuredList.map((campus, idx) => (
                <article key={campus.id} className={`camp_featureCard ${idx === 0 ? "isPrimary" : ""}`}>
                  <div className="camp_featureTop">
                    <div className="camp_featureTag">{idx === 0 ? "Principal" : "Destacado"}</div>

                    <div className="camp_featuredName">{campus.name}</div>
                    <div className="camp_featuredMeta">
                      {campus.country}
                      {campus.country === "México" && campus.state ? ` · ${campus.state}` : ""}
                      {campus.city ? ` · ${campus.city}` : ""}
                    </div>
                    <div className="camp_featuredAddr">{campus.address}</div>
                  </div>

                  <CampusActionButtons campus={campus} onViewMap={goTo} />
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ===== Lista + Mapa ===== */}
        <section className="camp_grid">
          <aside className="camp_list">
            <div className="camp_listHead">
              <div className="camp_listTitle">Resultados</div>
              <div className="camp_listCount">{filtered.length} campus</div>
            </div>

            <div className="camp_cards">
              {filtered.map((c) => (
                <article key={c.id} className={`camp_card ${FEATURED_CAMPUS_IDS?.includes?.(c.id) ? "isFeatured" : ""}`}>
                  <div className="camp_cardName">{c.name}</div>
                  <div className="camp_cardMeta">
                    {c.country}
                    {c.country === "México" && c.state ? ` · ${c.state}` : ""}
                    {c.city ? ` · ${c.city}` : ""}
                  </div>
                  <div className="camp_cardAddr">{c.address}</div>

                  {Array.isArray(c.niveles) && c.niveles.length > 0 && (
                    <div className="camp_cardNiveles">
                      {c.niveles.map((nivel, index) => (
                        <span key={index} className="camp_nivelTag">
                          {nivel}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="camp_cardBtns">
                    <a className="camp_btnMini camp_btnWhatsapp" href={waLink(c.whatsapp)} target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>
                    <a className="camp_btnMini" href={mapsLink(c.lat, c.lng)} target="_blank" rel="noreferrer">
                      Maps
                    </a>
                    <a className="camp_btnMini camp_btnWeb" href={c.website} target="_blank" rel="noreferrer">
                      Web
                    </a>
                    <button className="camp_btnMini camp_btnMap" type="button" onClick={() => goTo(c)}>
                      Ver en el mapa
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </aside>

          {/* ✅ Mapa */}
          <div className="camp_mapCard" data-nozoom>
            <button
              type="button"
              className={`camp_mapResetBtn ${selected || focusMode ? "isVisible" : ""}`}
              onClick={resetMapView}
              aria-label="Regresar al mapa original"
            >
              Ver todos
            </button>

            <GoogleMap
              mapContainerClassName="camp_map"
              center={MAP_DEFAULT_CENTER}
              zoom={MAP_DEFAULT_ZOOM}
              onLoad={(map) => {
                mapRef.current = map;

                mapListenersRef.current.forEach((l) => l.remove?.());
                mapListenersRef.current = [];

                const lockNorth = () => {
                  if (map.getHeading?.() !== 0) map.setHeading?.(0);
                  if (map.getTilt?.() !== 0) map.setTilt?.(0);
                };

                map.setOptions({ heading: 0, tilt: 0, rotateControl: false });
                lockNorth();

                mapListenersRef.current.push(map.addListener("heading_changed", lockNorth));
                mapListenersRef.current.push(map.addListener("tilt_changed", lockNorth));
                mapListenersRef.current.push(map.addListener("idle", lockNorth));

                setTimeout(() => (filteredWithCoords.length ? fitTo(filteredWithCoords) : fitTo(allWithCoords)), 250);
              }}
              onUnmount={(map) => {
                mapListenersRef.current.forEach((l) => l.remove?.());
                mapListenersRef.current = [];

                if (window.google?.maps?.event) {
                  window.google.maps.event.clearInstanceListeners(map);
                }

                mapRef.current = null;

                const el = document.querySelector(".camp_map");
                if (el) el.innerHTML = "";
              }}
              options={{
                zoomControl: true,
                streetViewControl: true,
                mapTypeControl: true,
                fullscreenControl: true,
                rotateControl: true,
                keyboardShortcuts: true,
                gestureHandling: "cooperative",
                tilt: 0,
                heading: 0,
              }}
            >
              {filteredWithCoords.map((c) => (
                <Marker
                  key={c.id}
                  position={{ lat: c.lat, lng: c.lng }}
                  onClick={() => {
                    setSelected(c);
                    setFocusMode(false);
                    scrollToMapIfOneColumn();
                  }}
                />
              ))}

              {/* ✅ SOLO DESKTOP: tarjeta en el mapa */}
              {selected && !isTouchDevice && (
                <OverlayView
                  position={{ lat: selected.lat, lng: selected.lng }}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  getPixelPositionOffset={(width, height) => ({
                    x: -(width / 2),
                    y: -(height + (focusMode ? 18 : 10)),
                  })}
                >
                  <div className={`camp_iwShift ${focusMode ? "isFocus" : ""}`}>
                    <div className={`camp_iwCard ${focusMode ? "isFocus" : ""}`}>
                      <div className="camp_iwHeader">
                        <h4 className="camp_iwTitle">{selected.name}</h4>
                        <button
                          className="camp_iwClose"
                          type="button"
                          onClick={() => {
                            setSelected(null);
                            setFocusMode(false);
                          }}
                          aria-label="Cerrar"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="camp_iwMeta">
                        {selected.country}
                        {selected.country === "México" && selected.state ? ` · ${selected.state}` : ""}
                        {selected.city ? ` · ${selected.city}` : ""}
                      </div>

                      <div className="camp_iwAddress">{selected.address}</div>

                      {Array.isArray(selected.niveles) && selected.niveles.length > 0 && (
                        <div className="camp_iwNiveles">
                          {selected.niveles.map((nivel, i) => (
                            <span key={i} className="camp_nivelTag">
                              {nivel}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="camp_iwButtons">
                        <a href={waLink(selected.whatsapp)} target="_blank" rel="noreferrer">
                          WhatsApp
                        </a>
                        <a href={mapsLink(selected.lat, selected.lng)} target="_blank" rel="noreferrer">
                          Maps
                        </a>
                        <a href={selected.website} target="_blank" rel="noreferrer">
                          Web
                        </a>
                      </div>
                    </div>
                  </div>
                </OverlayView>
              )}
            </GoogleMap>
          </div>

          {/* ✅ MÓVIL + iPad: tarjeta DEBAJO del mapa (FUERA del mapCard, para que NO se recorte) */}
          {selected && isTouchDevice && (
            <div className="camp_belowCard">
              <div className="camp_iwCard isFocus">
                <div className="camp_iwHeader">
                  <h4 className="camp_iwTitle">{selected.name}</h4>
                  <button
                    className="camp_iwClose"
                    type="button"
                    onClick={() => {
                      setSelected(null);
                      setFocusMode(false);
                    }}
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>
                </div>

                <div className="camp_iwMeta">
                  {selected.country}
                  {selected.country === "México" && selected.state ? ` · ${selected.state}` : ""}
                  {selected.city ? ` · ${selected.city}` : ""}
                </div>

                <div className="camp_iwAddress">{selected.address}</div>

                {Array.isArray(selected.niveles) && selected.niveles.length > 0 && (
                  <div className="camp_iwNiveles">
                    {selected.niveles.map((nivel, i) => (
                      <span key={i} className="camp_nivelTag">
                        {nivel}
                      </span>
                    ))}
                  </div>
                )}

                <div className="camp_iwButtons">
                  <a href={waLink(selected.whatsapp)} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                  <a href={mapsLink(selected.lat, selected.lng)} target="_blank" rel="noreferrer">
                    Maps
                  </a>
                  <a href={selected.website} target="_blank" rel="noreferrer">
                    Web
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
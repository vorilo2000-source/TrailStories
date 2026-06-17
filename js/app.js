// =======================================================
// app.js — v1.0.0
// TrailStories — i18n loader + app init
// Implementeert T0-005: detecteert/zet actieve taal, laadt
// ui-strings.json + route-JSON uit data/i18n/<taal>/, en vult
// alle data-i18n / data-i18n-aria elementen in de pagina.
// =======================================================
"use strict";

// ---------------------------------------------------------
// 1. CONFIG
// DEFAULT_LANG: standaardtaal voor MVP. Geen automatische
// browser-taal detectie in deze fase (zie CLAUDE.md, I18N sectie).
// ---------------------------------------------------------
const DEFAULT_LANG = "nl";

// ---------------------------------------------------------
// 2. TAAL BEPALEN
// Leest het actieve taal-attribuut van <html>, valt terug op
// DEFAULT_LANG als dat niet (correct) gezet is. Toekomstige
// taal-switcher kan dit overschrijven door het html-attribuut
// of een opgeslagen voorkeur aan te passen vóór deze functie draait.
// ---------------------------------------------------------
function getActiveLanguage() {
  // lang-attribuut van de <html id="html-root"> tag uit het template
  const htmlLang = document.documentElement.getAttribute("lang");
  return htmlLang || DEFAULT_LANG;
}

// ---------------------------------------------------------
// 3. JSON OPHALEN
// Generieke fetch-helper met foutafhandeling, zodat één
// ontbrekend bestand niet de hele pagina laat crashen.
// ---------------------------------------------------------
async function fetchJson(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      console.error(`TrailStories i18n: kon ${path} niet laden (status ${response.status})`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`TrailStories i18n: fout bij laden van ${path}`, error);
    return null;
  }
}

// ---------------------------------------------------------
// 4. NESTED KEY LOOKUP
// ui-strings.json gebruikt geneste keys (bv. "section.story").
// Deze helper zoekt zo'n key op in het geladen object.
// ---------------------------------------------------------
function resolveKey(stringsObject, dottedKey) {
  return dottedKey
    .split(".")
    .reduce((value, part) => (value && typeof value === "object" ? value[part] : undefined), stringsObject);
}

// ---------------------------------------------------------
// 5. DOM VULLEN MET VERTAALDE TEKST
// Doorloopt alle [data-i18n] elementen (zichtbare tekst) en
// [data-i18n-aria] elementen (aria-label, niet zichtbaar maar
// voorgelezen door screenreaders) en vult ze met de juiste string.
// ---------------------------------------------------------
function applyTranslations(uiStrings) {
  if (!uiStrings) return; // geen bestand geladen → niets te vullen, fout staat al in console

  // Zichtbare tekst: innerText vullen
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = resolveKey(uiStrings, key);
    if (value !== undefined) {
      element.textContent = value;
    } else {
      console.error(`TrailStories i18n: key "${key}" niet gevonden in ui-strings.json`);
    }
  });

  // Aria-labels: niet zichtbaar, wel relevant voor toegankelijkheid
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria");
    const value = resolveKey(uiStrings, key);
    if (value !== undefined) {
      element.setAttribute("aria-label", value);
    } else {
      console.error(`TrailStories i18n: aria-key "${key}" niet gevonden in ui-strings.json`);
    }
  });
}

// ---------------------------------------------------------
// 6. INIT
// Laadt ui-strings.json voor de actieve taal en past de
// vertalingen toe. Route-specifieke content (naam, story, etc.)
// wordt apart geladen door routes.js, dat na app.js draait.
// Exporteert de actieve taal + route-JSON-loader globaal (window.TrailStories)
// zodat routes.js/map.js dezelfde taal-context kunnen gebruiken
// zonder de taal-logica te dupliceren.
// ---------------------------------------------------------
async function initI18n() {
  const lang = getActiveLanguage();
  const uiStrings = await fetchJson(`../data/i18n/${lang}/ui-strings.json`);
  applyTranslations(uiStrings);

  // Globale namespace voor andere modules (routes.js, map.js, gpx.js)
  window.TrailStories = window.TrailStories || {};
  window.TrailStories.language = lang;
  window.TrailStories.uiStrings = uiStrings;

  // Helper die andere modules kunnen gebruiken om route-content te laden,
  // bv. window.TrailStories.loadRouteData("ninglinspo")
  window.TrailStories.loadRouteData = (routeId) => fetchJson(`../data/i18n/${lang}/${routeId}.json`);
}

// Start de i18n-init zodra de DOM klaar is, vóór routes.js/map.js verder gaan
document.addEventListener("DOMContentLoaded", initI18n);

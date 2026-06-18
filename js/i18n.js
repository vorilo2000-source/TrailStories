// =======================================================
// i18n.js — v1.0.0
// MyTrailWalks — wrapper rond i18next (T0-005)
// Verantwoordelijk voor: i18next initialiseren, namespaces laden,
// vertalingen toepassen op [data-i18n]/[data-i18n-aria] elementen,
// en de loadScript()-helper voor latere component-injectie (T0-006).
// Bevat GEEN UI-taal-vs-content-taal fallback-logica — die regelt
// app.js, omdat dat de route-content (language-veld) kent.
// =======================================================
"use strict";

// ---------------------------------------------------------
// 1. CONFIG
// SUPPORTED_LANGUAGES: lijst van UI-talen die het systeem nu
// daadwerkelijk aanbiedt (zie CLAUDE.md, I18N-sectie). Nu enkel
// NL, met EN als universele fallback-taal voor de UI-laag.
// Uitbreidbaar zonder herontwerp: extra taalcode toevoegen +
// bijbehorende data/i18n/<taal>/ map aanmaken is voldoende.
// ---------------------------------------------------------
const SUPPORTED_LANGUAGES = ["nl", "en"];
const FALLBACK_LANGUAGE = "en";
const DEFAULT_LANGUAGE = "nl"; // eerste/standaardtaal van het systeem (zie PROJECT.md)

// ---------------------------------------------------------
// 2. LOADSCRIPT HELPER
// Promise-gebaseerde scriptloader. Voorkomt race conditions
// wanneer een script afhankelijk is van een eerder geladen
// script (bv. component-fragmenten in T0-006, of CDN-libraries
// die in een vaste volgorde moeten laden). Gebruik:
//   loadScript("js/topbar.js").then(() => { ... });
// ---------------------------------------------------------
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(src);
    script.onerror = () => reject(new Error(`i18n.js: kon script niet laden: ${src}`));
    document.head.appendChild(script);
  });
}

// ---------------------------------------------------------
// 3. I18NEXT INITIALISEREN
// Init draait op i18next + i18next-http-backend (laadt JSON
// bestanden van data/i18n/<taal>/<namespace>.json) en
// i18next-browser-languagedetector (detecteert voorkeurstaal,
// maar blijft begrensd tot SUPPORTED_LANGUAGES via whitelist/
// supportedLngs zodat een browser-taal als "fr" niet per ongeluk
// een niet-bestaande namespace-map probeert te laden).
// "common" is de gedeelde namespace (nav, footer, knoppen) en
// wordt altijd mee geladen; paginaspecifieke namespaces komen
// er via loadNamespace() bovenop.
// ---------------------------------------------------------
function init(initialNamespaces) {
  const namespaces = ["common"].concat(initialNamespaces || []);

  return new Promise((resolve, reject) => {
    i18next
      .use(i18nextHttpBackend)
      .use(i18nextBrowserLanguageDetector)
      .init(
        {
          // supportedLngs + fallbackLng samen dwingen af dat de UI-laag
          // nooit buiten NL/EN terechtkomt, ook niet via browser-detectie
          supportedLngs: SUPPORTED_LANGUAGES,
          fallbackLng: FALLBACK_LANGUAGE,
          lng: undefined, // laat de language-detector de eerste keuze maken
          ns: namespaces,
          defaultNS: namespaces[namespaces.length - 1],
          backend: {
            // {{lng}}/{{ns}} worden door i18next ingevuld, bv. data/i18n/nl/common.json
            loadPath: "../data/i18n/{{lng}}/{{ns}}.json",
          },
          detection: {
            // Volgorde van detectiebronnen; geen localStorage-cache in MVP
            // (zie CLAUDE.md, geen aannames over user-accounts/voorkeuren in deze fase)
            order: ["querystring", "navigator"],
            caches: [],
          },
          interpolation: {
            escapeValue: false, // we renderen geen HTML via i18next, alleen platte tekst
          },
        },
        (error) => {
          if (error) {
            console.error("i18n.js: i18next init mislukt", error);
            reject(error);
            return;
          }
          resolve();
        }
      );
  });
}

// ---------------------------------------------------------
// 4. NAMESPACE LADEN (op aanvraag)
// Voor pagina's die naast "common" een eigen namespace nodig
// hebben (bv. "home" voor index.html, "ninglinspo" voor de
// routepagina). i18next-http-backend regelt het ophalen; deze
// helper wacht het laadproces netjes af via een Promise.
// ---------------------------------------------------------
function loadNamespace(namespace) {
  return new Promise((resolve, reject) => {
    i18next.loadNamespaces(namespace, (error) => {
      if (error) {
        console.error(`i18n.js: kon namespace "${namespace}" niet laden`, error);
        reject(error);
        return;
      }
      resolve();
    });
  });
}

// ---------------------------------------------------------
// 5. VERTAALHELPER
// Dunne wrapper rond i18next.t() zodat de rest van de codebase
// niet rechtstreeks de globale i18next-instantie aanspreekt.
// Verwacht "namespace:key.pad"-notatie, conform CLAUDE.md.
// ---------------------------------------------------------
function t(key) {
  return i18next.t(key);
}

// ---------------------------------------------------------
// 6. VERTALINGEN TOEPASSEN OP DE DOM
// Doorloopt [data-i18n] (zichtbare tekst → textContent) en
// [data-i18n-aria] (aria-label, niet zichtbaar, voor screenreaders)
// elementen en vult ze met de vertaalde string. Ontbrekende keys
// loggen een console error i.p.v. de pagina te laten crashen,
// zodat één missende vertaling niet de hele render blokkeert.
// ---------------------------------------------------------
function applyTranslations(root) {
  const scope = root || document;

  scope.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = t(key);
    if (value && value !== key) {
      element.textContent = value;
    } else {
      console.error(`i18n.js: key "${key}" niet gevonden`);
    }
  });

  scope.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria");
    const value = t(key);
    if (value && value !== key) {
      element.setAttribute("aria-label", value);
    } else {
      console.error(`i18n.js: aria-key "${key}" niet gevonden`);
    }
  });
}

// ---------------------------------------------------------
// 7. PUBLIEKE API
// Eén globaal object, vergelijkbaar met het i18nModule-patroon
// uit het referentievoorbeeld (MyFamTreeCollab). app.js roept
// dit aan voor page-init; andere modules (routes.js, map.js)
// kunnen t() en loadNamespace() hergebruiken zonder i18next
// rechtstreeks te importeren.
// ---------------------------------------------------------
window.i18nModule = {
  init,
  loadNamespace,
  applyTranslations,
  t,
  loadScript,
  SUPPORTED_LANGUAGES,
  FALLBACK_LANGUAGE,
  DEFAULT_LANGUAGE,
};

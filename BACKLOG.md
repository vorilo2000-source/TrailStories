# MyTrailWalks — BACKLOG.md
## Bijgewerkt: 25-06-2026
> Versie: v2.7.0 · MVP backlog structure

---

# [BACKLOG]

---

## Fase 0 — Concept & architectuur

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T0-001 | architecture | Project setup | Basis projectstructuur opzetten (HTML/CSS/JS + folders data/assets/js/css) | Feature | 🔴 High | 📋 Open |
| T0-002 | architecture | JSON data model | Definitief routes.json schema implementeren | Feature | 🔴 High | ✅ Done — sessie 01 (18-06-2026). |
| T0-003 | architecture | Route template | Standaard routepagina template (hero, stats, map, story) bouwen | Feature | 🔴 High | ✅ Done — sessie 05 (25-06-2026). |
| T0-004 | architecture | Design system | Basis UI design rules (typografie, spacing, kleuren outdoor theme) | Improvement | 🟡 Medium | ✅ Done |
| T0-005 | architecture, i18n | I18next systeem | `js/i18n.js` v1.3.0: loadPath dynamisch, localStorage via `mtw_language`. getBasePath() filtert .html segmenten. | Feature | 🔴 High | ✅ Done — sessie 03 (21-06-2026). |
| T0-006 | architecture, components | Component-systeem | `js/app.js` v3.0.0: centrale i18n init + fetch+injectie topbar/footer via `window.appReady` + `window.i18nReady` Promise. | Feature | 🔴 High | ✅ Done — sessie 04 (22-06-2026). |
| T0-007 | architecture, media | Cloudinary integratie | Cloudinary gratis tier. Cloud name: dgzlcqdcc. Upload workflow gedocumenteerd in `data/docs/cloudinary-workflow.md`. Automatische WebP via f_auto. Hero: w_1200,f_auto. Thumbnail: w_400,f_auto. Galerij: w_800,f_auto. | Feature | 🔴 High | ✅ Done — sessie 05 (25-06-2026). |
| T0-008 | architecture, api | API integraties | Drie externe APIs: Open-Meteo, Nominatim, Anthropic API. Leaflet.js via jsdelivr CDN voor kaarten. | Feature | 🔴 High | ✅ Done — sessie 03 (21-06-2026). |
| T0-009 | architecture, analytics | Analytics systeem | `js/analytics.js` v1.1.0: pageviews, sessieduur, terugkerende bezoekers via Supabase `page_views` tabel. | Feature | 🔴 High | ✅ Done — sessie 04 (22-06-2026). |

---

## Fase 1 — Core MVP (routesysteem)

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T1-001 | routes | Homepage grid | Route-overzicht met tiles (foto + stats + titel). Top 3 meest recente routes. Link naar wandelingen.html. | Feature | 🔴 High | ✅ Done — sessie 02 + sessie 05. |
| T1-002 | routes | Route detail page | `routes/route.html` + `js/route.js` + `css/route.css`. Dynamisch via `?id=`. Hero, stats, weer, verhaal blokken, tips, Leaflet kaart, vervoersmiddel, galerij, acties. i18n NL+EN. | Feature | 🔴 High | ✅ Done — sessie 05 (25-06-2026). |
| T1-003 | routes | JSON loader | routes/routes.json inladen en renderen in UI | Feature | 🔴 High | ✅ Done |
| T1-004 | routes | Routing logic | Navigatie via `?id=` query parameter. `wandelingen.html` als overzicht. `routes/route.html` als detail. | Feature | 🔴 High | ✅ Done — sessie 05 (25-06-2026). |
| T1-005 | routes | Eerste route entry | Kalmthoutse Heide + Grenspark Kalmthout aangemaakt. JSON in `routes/`. Entry in `routes/routes.json`. | Feature | 🔴 High | ✅ Done — sessie 05 (25-06-2026). |
| T1-006 | routes, ui, ai | Route creator | `creator.html` v2.0.0 + `css/creator.css` + `js/creator.js` v2.1.0. Visuele preview, blokken-editor (tekst/foto/fotogrid/link), JSON import, Leaflet kaart preview, moeilijkheid via SAC-schaal T1-T6, vervoersmiddel multi-select, galerij sectie, twee JSON exports (content + routes entry). | Feature | 🔴 High | ✅ Done — sessie 03 + sessie 05. |
| T1-007 | routes, ui | Route kaartpagina | `routes/[id]-map.html`: interactieve Leaflet kaart + GPX overlay. Apart tabblad. | Feature | 🟡 Medium | 📋 Open |
| T1-008 | routes, ux | Draft management | Homepage grid toont routes op basis van status. Draft-routes tonen "Binnenkort" badge maar zijn niet klikbaar. | Feature | 🟡 Medium | 📋 Open |
| T1-009 | routes | Wandelingen overzicht | `wandelingen.html` + `js/wandelingen.js` + `css/wandelingen.css`. Alle routes als grid. i18n NL+EN. Klik → route detail. | Feature | 🔴 High | ✅ Done — sessie 05 (25-06-2026). |

---

## Fase 2 — Maps & GPX integratie

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T2-001 | maps | Leaflet setup | Leaflet.js via jsdelivr CDN. Kaart in creator preview + route detail pagina. | Feature | 🔴 High | ✅ Done — sessie 05 (25-06-2026). |
| T2-002 | maps | GPX parser | GPX bestand client-side parsen: coördinaten, tijdstempels, hoogte, snelheid. trackPoints opgeslagen voor routetekening. startLat/startLon opgeslagen in JSON export. | Feature | 🔴 High | ✅ Done — sessie 03 + sessie 05. |
| T2-003 | maps | Route overlay | GPX track overlay in creator preview via Leaflet polyline. Route detail pagina toont kaart op startpunt (trackPoints nog niet in route.html). | Feature | 🔴 High | 🔄 Gedeeltelijk — sessie 05. |
| T2-004 | maps | Elevation profile | Hoogteprofiel genereren uit GPX data | Feature | 🟡 Medium | 📋 Open |
| T2-005 | maps | GPX upload | GPX-bestand inladen in creator. trackPoints samplen tot max 500 voor performantie. | Feature | 🟡 Medium | ✅ Done — sessie 05. |
| T2-006 | maps, print | Statische kaartafbeelding | Bij afdrukken: interactieve kaart vervangen door statische kaartafbeelding. | Feature | 🟡 Medium | 📋 Open |

---

## Fase 3 — Storytelling UI

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T3-001 | ui | Hero section | Fullscreen hero foto op route detail pagina. Gradient overlay + titel + badges. | Feature | 🔴 High | ✅ Done — sessie 05. |
| T3-002 | ui | Story blocks | Blokken-editor in creator: tekst, foto (volledig breed), fotogrid (2 of 3 kolommen), link. Vrije volgorde. Rendered op route detail pagina. | Feature | 🔴 High | ✅ Done — sessie 05. |
| T3-003 | ui | Galerij | Galerij sectie onderaan route pagina. Grid layout. Aparte sectie in creator. | Feature | 🟡 Medium | ✅ Done — sessie 05. |
| T3-004 | ui | Stats dashboard | Afstand, duur, stijging, daling, gem. snelheid, hoogste/laagste punt op route detail pagina. | Feature | 🔴 High | ✅ Done — sessie 05. |
| T3-005 | ui | Tips & info blocks | Tips sectie op route detail pagina. | Feature | 🟡 Medium | ✅ Done — sessie 05. |
| T3-006 | ui | Weer-blok | Weerdata op route detail pagina: temperatuur, neerslag, wind, conditie. | Feature | 🟡 Medium | ✅ Done — sessie 05. |

---

## Fase 4 — UX & filtering

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T4-001 | ux | Filters | Filter routes op moeilijkheid, afstand, regio | Feature | 🟡 Medium | 📋 Open |
| T4-002 | ux | Search | Zoekfunctie op routes (naam + tags) | Feature | 🟡 Medium | 📋 Open |
| T4-003 | ux | Tags system | Tag-based categorisatie (waterval, bos, berg) | Feature | 🟡 Medium | 📋 Open |
| T4-004 | ux | Route rating | Persoonlijke rating per route | Feature | 🟢 Low | 📋 Open |

---

## Fase 5 — Performance & scaling

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T5-001 | performance | Lazy loading | Lazy load images via `loading="lazy"` op alle route foto's. | Improvement | 🔴 High | ✅ Done — sessie 05. |
| T5-002 | performance | Image optimization | WebP via Cloudinary f_auto. Transformaties w_1200/w_800/w_400 per context. Auto-fix in creator bij import. | Improvement | 🔴 High | ✅ Done — sessie 05. |
| T5-003 | performance | Code splitting | Modulaire JS per feature (map, routes, ui) | Improvement | 🟡 Medium | 📋 Open |

---

## Fase 6 — Cloud & Accounts

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T6-001 | cloud | Supabase auth | Auth systeem live. profiles tabel met role (gast/creator/admin). | Feature | 🟡 Medium | ✅ Done — sessie 04 (22-06-2026). |
| T6-002 | cloud | Sync | Offline → cloud sync engine | Feature | 🟡 Medium | 🔮 Future |
| T6-003 | cloud | Sharing | Shareable trail links. Deel-knop op route detail pagina via Web Share API + clipboard fallback. | Feature | 🟡 Medium | ✅ Done — sessie 05. |
| T6-004 | i18n, community | User-generated taal-content | Wandelverhalen in eigen taal. Vereist T6-001. | Feature | 🟡 Medium | 🔮 Future |
| T6-005 | cloud, analytics | Analytics dashboard | Admin dashboard voor page_views data. | Feature | 🟡 Medium | 📋 Open |

---

## Fase 7 — Print & Publiek gebruik

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T7-001 | print, ux | Print CSS routepagina | `@media print`: A4-formaat, kaart → statisch beeld, alle links actief. | Feature | 🟡 Medium | 📋 Open |
| T7-002 | print, ux | Print knop | Print-knop aanwezig op route detail pagina via `window.print()`. | Feature | 🟡 Medium | ✅ Done — sessie 05. |
| T7-003 | print, ux | Planningsinformatie | Vervoer-links, parkeerinfo, startpunt-coördinaten op routepagina. | Feature | 🟢 Low | 📋 Open |

---

## Fase 8 — Community & Growth (post-MVP)

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T8-001 | community | Public trails | Publieke route gallery | Feature | 🟢 Low | 🔮 Future |
| T8-002 | community | Likes | Likes/bookmarks systeem | Feature | 🟢 Low | 🔮 Future |
| T8-003 | community | Comments | Comment systeem per route | Feature | 🟢 Low | 🔮 Future |

---

## Fase 9 — Advanced Features (post-MVP)

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T9-001 | ai | AI route analyse | Uitgebreide AI-analyse van GPX: vergelijking met vorige wandelingen, trends, aanbevelingen | Feature | Future | 🔮 Future |
| T9-002 | analytics | Stats dashboard | Route analytics dashboard | Feature | Future | 🔮 Future |
| T9-003 | marketplace | Community trails | Community trail marketplace | Feature | Future | 🔮 Future |

---

## TECHNISCHE SCHULD

| ID | Tags | Taak | Omschrijving | Type | Status |
|----|------|------|--------------|------|--------|
| TD-001 | cleanup | Legacy JS | Vermijden van globale variabelen in app.js | Tech Debt | 📋 Open |
| TD-002 | cleanup | DOM coupling | HTML structuur te sterk gekoppeld aan JS selectors | Tech Debt | 📋 Open |
| TD-003 | cleanup | Map logic | Leaflet logic nog niet modulair gescheiden. Creator heeft eigen initLeafletMap(). Route detail heeft eigen implementatie. | Tech Debt | 📋 Open |
| TD-004 | cleanup | app.js herzien | Herzien naar i18next-architectuur. | Tech Debt | ✅ Done — sessie 02 (20-06-2026) |
| TD-005 | cleanup | localStorage prefix | `mtw_language` geïmplementeerd in `js/i18n.js` v1.2.0. | Tech Debt | ✅ Done — sessie 02 (20-06-2026) |
| TD-006 | cleanup | Favicon toevoegen | Favicon tags toegevoegd aan creator.html, route.html, wandelingen.html. | Tech Debt | ✅ Done — sessie 05 (25-06-2026) |
| TD-007 | cleanup | i18n init centraliseren | i18nModule.init() gecentraliseerd in app.js v3.0.0. | Tech Debt | ✅ Done — sessie 04 (22-06-2026) |
| TD-008 | cleanup | Supabase RLS policies | RLS policies correct ingesteld op profiles en page_views tabellen. | Tech Debt | ✅ Done — sessie 04 (22-06-2026) |
| TD-009 | cleanup | Bestandsstructuur routes | Route JSON bestanden verplaatst naar `routes/`. routes.json verplaatst naar `routes/routes.json`. data/content/ map overbodig. | Tech Debt | ✅ Done — sessie 05 (25-06-2026) |
| TD-010 | cleanup | Route IDs | Route IDs mogen geen spaties bevatten. Gebruik koppeltekens: `grenspark-kalmthout`, `kalmthoutse-heide`. | Tech Debt | ✅ Done — sessie 05 (25-06-2026) |

---

## CREATOR BACKLOG (volgende sessie)

| Item | Omschrijving |
|------|-------------|
| Route op kaart | GPX route tekenen op kaart in route.html (trackPoints beschikbaar in JSON maar nog niet gebruikt) |
| Vervoersmiddelen | Boot en vliegtuig reeds toegevoegd. Eventueel uitbreiden. |
| SAC-schaal verfijnen | Drempelwaarden controleren op basis van echte wandeldata |
| OpenRunner integratie | Voorbeeld: https://www.openrunner.com/en/route-details/18416689 |

---

## STANDAARD AFSPRAKEN (bijgewerkt sessie 05)

| Onderwerp | Afspraak |
|-----------|---------|
| **Script volgorde** | Altijd onderaan `<body>`: Eruda → Supabase SDK → i18next CDN → i18n.js → auth.js → topbar-auth.js → analytics.js → app.js → [pagina].js → Leaflet vóór pagina.js indien kaart nodig |
| **Eruda** | Niet verwijderen als aanwezig in een HTML pagina |
| **CSS** | Altijd in `<head>` |
| **Favicon** | Elke nieuwe pagina krijgt favicon tags na `<title>`, vóór CSS |
| **Cache busting** | Versienummer toevoegen aan script tags bij elke deploy: `?v=x.x.x` |
| **Rollen** | gast / creator / admin — via `role` kolom in profiles tabel |
| **i18n namespaces** | common (altijd) + auth (altijd) + paginaspecifiek via app.js |
| **Cloudinary URL's** | Hero: w_1200,f_auto · Galerij/blokken: w_800,f_auto · Thumbnail: w_400,f_auto |
| **Route bestanden** | Volledige JSON in `routes/[id].json` · Overzicht in `routes/routes.json` |
| **Route IDs** | Altijd lowercase met koppeltekens, geen spaties |
| **Leaflet CDN** | `https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.js` (geen integrity check) |

---

## AANBEVOLEN VOLGORDE VOLGENDE SESSIE

1. **T2-003** — GPX route tekenen op kaart in route.html
2. **T1-007** — Route kaartpagina (apart tabblad)
3. **T1-008** — Draft management (binnenkort badge)
4. **T7-001** — Print CSS voor routepagina
5. **T6-005** — Analytics dashboard voor admin
6. **T4-001** — Filters op wandelingen.html

---

## DEFINITION OF DONE

- [ ] Werkt op desktop én mobile
- [ ] Geen console errors
- [ ] Code gedocumenteerd (inline comments)
- [ ] JSON data correct geïntegreerd
- [ ] UI consistent met route template
- [ ] Performance getest (load time < 2s target)

---

## WERKWIJZE

1. Kies taak uit backlog
2. Vraag toestemming vóór uitvoering
3. Bouw feature in kleine iteraties
4. Test direct in browser
5. Update JSON + UI samen
6. Markeer taakstatus
7. Log wijziging in PROJECTLOG.md

---

# END OF BACKLOG.md

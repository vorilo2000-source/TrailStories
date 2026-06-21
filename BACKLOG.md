# MyTrailWalks — # MyTrailWalks — BACKLOG.md
## Bijgewerkt: 21-06-2026
> Versie: v2.5.0 · MVP backlog structure

---

# [BACKLOG]

---

## Fase 0 — Concept & architectuur

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T0-001 | architecture | Project setup | Basis projectstructuur opzetten (HTML/CSS/JS + folders data/assets/js/css) | Feature | 🔴 High | 📋 Open |
| T0-002 | architecture | JSON data model | Definitief routes.json schema implementeren | Feature | 🔴 High | ✅ Done — sessie 01 (18-06-2026). |
| T0-003 | architecture | Route template | Standaard routepagina template (hero, stats, map, story) bouwen | Feature | 🔴 High | 🔄 Heropend |
| T0-004 | architecture | Design system | Basis UI design rules (typografie, spacing, kleuren outdoor theme) | Improvement | 🟡 Medium | ✅ Done |
| T0-005 | architecture, i18n | I18next systeem | `js/i18n.js` v1.3.0: loadPath dynamisch, localStorage via `mtw_language`. getBasePath() filtert .html segmenten. | Feature | 🔴 High | ✅ Done — sessie 03 (21-06-2026). |
| T0-006 | architecture, components | Component-systeem | `js/app.js` v2.2.0: fetch+injectie topbar/footer via `window.appReady` Promise. getBasePath() fix voor .html segmenten. | Feature | 🔴 High | ✅ Done — sessie 03 (21-06-2026). |
| T0-007 | architecture, media | Cloudinary integratie | Cloudinary gratis tier (25GB opslag, 25GB bandbreedte/maand) als externe foto-opslag. Automatische WebP. Account aanmaken + upload workflow documenteren. | Feature | 🔴 High | 📋 Open |
| T0-008 | architecture, api | API integraties | Drie externe APIs voor de creator: (1) Open-Meteo — historische weerdata, gratis, geen key. (2) OpenStreetMap Nominatim — locatienamen uit coördinaten, gratis. (3) Anthropic API — AI-gegenereerde tekst, betaald per gebruik, key ingevoerd door gebruiker in creator. | Feature | 🔴 High | ✅ Done — sessie 03 (21-06-2026). |

---

## Fase 1 — Core MVP (routesysteem)

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T1-001 | routes | Homepage grid | Route-overzicht met tiles (foto + stats + titel) | Feature | 🔴 High | ✅ Done — sessie 02 (20-06-2026). |
| T1-002 | routes | Route detail page | Dynamische routepagina rendering via JSON. A4-layout bij print. Kaart-knop opent apart tabblad. Print-knop publiek. | Feature | 🔴 High | 📋 Open |
| T1-003 | routes | JSON loader | routes.json inladen en renderen in UI | Feature | 🔴 High | ✅ Done |
| T1-004 | routes | Routing logic | Navigatie tussen homepage en route detail pages | Feature | 🔴 High | 📋 Open |
| T1-005 | routes | Ninglinspo route entry | `data/content/ninglinspo.json` aanmaken met placeholder data + Cloudinary foto-URLs. | Feature | 🔴 High | 📋 Open |
| T1-006 | routes, ui, ai | Route creator | `creator.html` + `css/creator.css` + `js/creator.js` gebouwd. Formulier + live JSON preview + AI-assistentie. GPX parser (Haversine), Nominatim, Open-Meteo, Anthropic API. Twee modi: handmatig en AI-assisted. Export naar [id].json. Toegang via admin dropdown na inlog. | Feature | 🔴 High | ✅ Done — sessie 03 (21-06-2026). |
| T1-007 | routes, ui | Route kaartpagina | `routes/[id]-map.html`: interactieve Leaflet kaart + GPX overlay. Apart tabblad. Topbar + footer. | Feature | 🟡 Medium | 📋 Open |
| T1-008 | routes, ux | Draft management | Homepage grid toont routes op basis van status. Draft-routes tonen "Binnenkort" badge maar zijn niet klikbaar. Creator kan bestaande draft openen en aanvullen na de wandeling. | Feature | 🟡 Medium | 📋 Open |

---

### T1-006 — Route creator (uitgebreide beschrijving)

**Bestand:** `creator.html` + `css/creator.css` + `js/creator.js`

**Workflow:**
1. GPX uploaden → stats automatisch berekend (afstand, duur, hoogtemeters, snelheid, steilste stukken, hoogste/laagste punt)
2. Datum + startcoördinaten → weerdata automatisch opgehaald via Open-Meteo (historisch)
3. Locatienaam automatisch via Nominatim op basis van GPX-coördinaten
4. Foto-URLs invoeren (Cloudinary links) → optioneel AI-gegenereerde captions
5. Steekwoorden/ervaringen invoeren → AI genereert verhaal + tips + grid-samenvatting
6. Live preview: JSON zichtbaar naast formulier
7. Exportknop: downloadt ingevulde `[id].json`

**AI-functies (Anthropic API):**
- Verhaal genereren op basis van GPX-verloop + weerdata + steekwoorden
- Tips formuleren uit ruwe notities
- Korte samenvatting voor grid-tile

**API-key:** gebruiker voert Anthropic API-key in bij openen creator (niet opgeslagen, niet in code)

**Modi:**
- Handmatig — geen AI, alles zelf invullen
- AI-assisted — AI stelt voor, gebruiker keurt goed en past aan

**Toegang:** enkel via admin dropdown in topbar na inlog (Supabase auth)

---

## Fase 2 — Maps & GPX integratie

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T2-001 | maps | Leaflet setup | Leaflet.js integratie met OpenStreetMap tiles | Feature | 🔴 High | 📋 Open |
| T2-002 | maps | GPX parser | GPX bestand client-side parsen: coördinaten, tijdstempels, hoogte, snelheid, steilste hellingen, rustpunten. | Feature | 🔴 High | ✅ Done — sessie 03 (21-06-2026) — ingebouwd in creator.js. |
| T2-003 | maps | Route overlay | GPX track overlay op interactieve kaart | Feature | 🔴 High | 📋 Open |
| T2-004 | maps | Elevation profile | Hoogteprofiel genereren uit GPX data | Feature | 🟡 Medium | 📋 Open |
| T2-005 | maps | Ninglinspo GPX | GPX-bestand Ninglinspo inladen zodra beschikbaar | Feature | 🟡 Medium | 📋 Open |
| T2-006 | maps, print | Statische kaartafbeelding | Bij afdrukken: interactieve kaart vervangen door statische kaartafbeelding. Interactieve versie blijft in apart tabblad. | Feature | 🟡 Medium | 📋 Open |

---

## Fase 3 — Storytelling UI

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T3-001 | ui | Hero section | Fullscreen hero foto per route | Feature | 🔴 High | 📋 Open |
| T3-002 | ui | Story blocks | Alternating tekst/foto storytelling layout | Feature | 🔴 High | 📋 Open |
| T3-003 | ui | Masonry gallery | Foto galerij in masonry grid layout | Feature | 🟡 Medium | 📋 Open |
| T3-004 | ui | Stats dashboard | Afstand, duur, hoogtemeters, snelheid, moeilijkheid — uit GPX stats | Feature | 🔴 High | 📋 Open |
| T3-005 | ui | Tips & info blocks | Praktische info + tips & waarschuwingen sectie | Feature | 🟡 Medium | 📋 Open |
| T3-006 | ui | Weer-blok | Weerdata van de wandeldag tonen op routepagina: temperatuur, neerslag, wind, conditie. Nuttig voor planners. | Feature | 🟡 Medium | 📋 Open |

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
| T5-001 | performance | Lazy loading | Lazy load images en media content | Improvement | 🔴 High | 🔄 Gedeeltelijk |
| T5-002 | performance | Image optimization | WebP via Cloudinary automatisch — afhankelijk van T0-007 | Improvement | 🔴 High | 🔄 Gedeeltelijk |
| T5-003 | performance | Code splitting | Modulaire JS per feature (map, routes, ui) | Improvement | 🟡 Medium | 📋 Open |

---

## Fase 6 — Cloud & Accounts (post-MVP)

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T6-001 | cloud | Supabase auth | Auth systeem — Supabase project MyTrailWalks aangemaakt. `js/auth.js` + `js/topbar-auth.js` gebouwd. Login modal + admin dropdown in topbar. profiles tabel vereist. | Feature | 🟡 Medium | ✅ Done — sessie 03 (21-06-2026). |
| T6-002 | cloud | Sync | Offline → cloud sync engine | Feature | 🟡 Medium | 🔮 Future |
| T6-003 | cloud | Sharing | Shareable trail links | Feature | 🟡 Medium | 🔮 Future |
| T6-004 | i18n, community | User-generated taal-content | Wandelverhalen in eigen taal. Vereist T6-001. | Feature | 🟡 Medium | 🔮 Future |

---

## Fase 7 — Print & Publiek gebruik

| ID | Tags | Taak | Omschrijving | Type | Prioriteit | Status |
|----|------|------|--------------|------|-----------|--------|
| T7-001 | print, ux | Print CSS routepagina | `@media print`: A4-formaat, kaart → statisch beeld, alle links actief, topbar + footer meegedrukt. WYSIWYG. | Feature | 🟡 Medium | 📋 Open |
| T7-002 | print, ux | Print knop | Publieke "Print / Bewaar als PDF" knop op routepagina. Browser-native print-dialoog. | Feature | 🟡 Medium | 📋 Open |
| T7-003 | print, ux | Planningsinformatie | Vervoer-links, parkeerinfo, startpunt-coördinaten, weerslink op routepagina. Bruikbaar voor wandelplanning. | Feature | 🟢 Low | 📋 Open |

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
| TD-003 | cleanup | Map logic | Leaflet logic nog niet modulair gescheiden | Tech Debt | 📋 Open |
| TD-004 | cleanup | app.js herzien | Herzien naar i18next-architectuur. | Tech Debt | ✅ Done — sessie 02 (20-06-2026) |
| TD-005 | cleanup | localStorage prefix | `mtw_language` geïmplementeerd in `js/i18n.js` v1.2.0. | Tech Debt | ✅ Done — sessie 02 (20-06-2026) |
| TD-006 | cleanup | Favicon toevoegen | Favicon `<link>` tags toegevoegd aan `creator.html` en `index.html`. Overige pagina's nog te doen bij aanmaak. | Tech Debt | 🔄 Gedeeltelijk — sessie 03 (21-06-2026) |

---

## STANDAARD AFSPRAKEN (vastgelegd sessie 03)

| Onderwerp | Afspraak |
|-----------|---------|
| **Script volgorde** | Altijd onderaan `<body>`: Eruda → Supabase SDK → i18next CDN → i18n.js → auth.js → topbar-auth.js → app.js → [pagina].js |
| **Eruda** | Niet verwijderen als aanwezig in een HTML pagina |
| **CSS** | Altijd in `<head>` |
| **Favicon** | Elke nieuwe pagina krijgt favicon tags na `<title>`, vóór CSS |

---

## AANBEVOLEN VOLGORDE VOLGENDE SESSIE

1. **Supabase** — `profiles` tabel aanmaken + eigen account admin maken
2. **T0-007** — Cloudinary account + integratie documenteren
3. **T1-005** — `data/content/ninglinspo.json` aanmaken
4. **T1-002** — Route detail pagina (A4 + print-CSS)
5. **T1-007** — Route kaartpagina

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

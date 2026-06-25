# MyTrailWalks — PROJECTLOG.md
## Bijgewerkt: 25-06-2026
> Versie: v1.4.0 · Projectlog — chronologisch overzicht van sessies en wijzigingen

---

# ======================= ENTRIES =======================

---

## Sessie 01 — 18-06-2026
**Onderwerp:** T0-005 (i18next systeem) + T0-002 (routes.json schema) + T1-001 (homepage grid) + component-fragmenten (topbar/navbar/footer)
**Status aan einde sessie:** T0-005 ✅ Done · T0-002 ✅ Done · T1-001 🔄 Gedeeltelijk

### Aangeleverde bestanden

| Bestand | Versie | Omschrijving |
|---------|--------|--------------|
| `js/i18n.js` | v1.1.0 | Nieuwe wrapper rond i18next. |
| `data/i18n/nl/common.json` | v1.0.0 | Gedeelde NL UI-teksten. |
| `data/i18n/nl/home.json` | v1.0.0 | Homepage-specifieke NL UI-teksten. |
| `data/i18n/en/common.json` | v1.0.0 | Engelse fallback voor common namespace. |
| `data/i18n/en/home.json` | v1.0.0 | Engelse fallback voor home namespace. |
| `data/routes.json` | v2.0.0 | Schema bijgewerkt. |
| `index.html` | v1.1.0 | Homepage grid. |
| `css/home.css` | v1.0.0 | Grid-layout. |
| `js/home.js` | v1.0.0 | Homepage init. |
| `components/topbar.html` | v1.0.0 | Topbar fragment. |
| `css/topbar.css` | v1.0.0 | Topbar stijlen. |
| `components/footer.html` | v1.0.0 | Footer fragment. |
| `css/footer.css` | v1.0.0 | Footer stijlen. |

---

## Sessie 02 — 20-06-2026
**Onderwerp:** UI/UX redesign homepage — hero sectie, component-injectie, topbar zichtbaar, i18n keys, favicon, logo
**Status aan einde sessie:** T0-006 ✅ Done · T0-005 ✅ Done (v1.2.0) · T1-001 ✅ Done · TD-004 ✅ Done · TD-005 ✅ Done

### Aangeleverde bestanden

| Bestand | Versie | Omschrijving |
|---------|--------|--------------|
| `index.html` | v2.1.0 | Hero sectie toegevoegd. |
| `css/home.css` | v2.1.0 | Hero styling. |
| `js/app.js` | v2.1.0 | fetch+injectie topbar + footer via `window.appReady`. |
| `js/home.js` | v2.0.0 | Wacht op `window.appReady`. |
| `js/i18n.js` | v1.2.0 | `loadPath` dynamisch via `getBasePath()`. |
| `data/i18n/nl/home.json` | v2.0.0 | Hero keys toegevoegd. |
| `data/i18n/en/home.json` | v2.0.0 | Hero keys toegevoegd. |
| `components/topbar.html` | v1.1.0 | Logo toegevoegd. |
| `css/topbar.css` | v1.1.0 | Logo stijlen. |

---

## Sessie 02b/c/d — 20-06-2026
**Onderwerp:** Architectuurbeslissingen route creator, print, foto-opslag, login, AI, GPX, draft/published workflow
**Status:** Beslissingen vastgelegd, taken toegevoegd aan backlog. Geen code gebouwd.

---

## Sessie 03 — 21-06-2026
**Onderwerp:** Route creator + Supabase auth + topbar login + getBasePath fix
**Status aan einde sessie:** T1-006 ✅ Done · T6-001 ✅ Done · T0-008 ✅ Done · T2-002 ✅ Done · T0-005 ✅ Done (v1.3.0) · T0-006 ✅ Done (v2.2.0)

### Aangeleverde bestanden

| Bestand | Versie | Omschrijving |
|---------|--------|--------------|
| `creator.html` | v1.0.1 | Route creator pagina. 6 stappen. Live JSON preview. AI-modus toggle. |
| `css/creator.css` | v1.0.0 | Creator styling. |
| `js/creator.js` | v1.0.0 | GPX parser, Nominatim, Open-Meteo, AI, JSON export. |
| `js/auth.js` | v1.0.0 | Supabase auth module. |
| `js/topbar-auth.js` | v1.0.0 | Login modal + admin dropdown. |
| `components/topbar.html` | v2.0.0 | 3-koloms layout: auth + logo + taal. |
| `css/topbar.css` | v2.0.0 | 3-koloms grid. |
| `js/app.js` | v2.2.0 | getBasePath() fix voor .html segmenten. |
| `index.html` | v2.4.0 | Scripts onderaan body. Supabase SDK toegevoegd. |

---

## Sessie 04 — 22-06-2026
**Onderwerp:** Supabase live testen + auth i18n + analytics + rollen + robuuste init-volgorde
**Status aan einde sessie:** T6-001 ✅ Volledig live · T0-009 ✅ Done · TD-007 ✅ Done · TD-008 ✅ Done

### Aangeleverde bestanden

| Bestand | Versie | Omschrijving |
|---------|--------|--------------|
| `js/auth.js` | v1.1.0 | role i.p.v. is_admin, window._supabase, redirectTo fix |
| `js/analytics.js` | v1.1.0 | Supabase pageview tracking met retry loop |
| `js/topbar-auth.js` | v2.1.0 | i18n via _updateModalTexts(), wacht op appReady |
| `js/app.js` | v3.0.0 | Centrale i18n init, window.i18nReady + window.appReady |
| `js/home.js` | v2.2.0 | Geen eigen i18n init meer |
| `js/creator.js` | v1.2.0 | Geen eigen i18n init meer |
| `components/topbar.html` | v2.2.0 | Fallback inlogknop terug voor laadmoment |
| `css/topbar.css` | v2.1.0 | position: relative op topbar__auth |
| `data/i18n/nl/auth.json` | v1.0.0 | Auth modal teksten NL |
| `data/i18n/en/auth.json` | v1.0.0 | Auth modal teksten EN |

---

## Sessie 05 — 25-06-2026
**Onderwerp:** Cloudinary opzetten + creator uitbreiden + route detail pagina + wandelingen overzicht + bestandsstructuur
**Status aan einde sessie:** T0-007 ✅ Done · T1-002 ✅ Done · T1-004 ✅ Done · T1-005 ✅ Done · T1-009 ✅ Done · T2-001 ✅ Done · T2-003 🔄 Gedeeltelijk

### Uitgevoerde taken

**Cloudinary (T0-007):**
- Account aangemaakt, cloud name: `dgzlcqdcc`
- Workflow gedocumenteerd in `data/docs/cloudinary-workflow.md`
- URL structuur: Hero `w_1200,f_auto`, Galerij `w_800,f_auto`, Thumbnail `w_400,f_auto`
- Auto-fix in creator: URL's worden automatisch voorzien van transformaties bij blur

**Creator uitbreidingen (T1-006 v2.0.0 → v2.1.0):**
- Ruwe JSON preview vervangen door visuele route preview
- Blokken-editor: tekst, foto (volledig breed), fotogrid (2 of 3 kolommen), link
- JSON import: bestaande route laden en bewerken
- Leaflet kaart in preview met GPX route getekend
- Moeilijkheid automatisch berekend via SAC-schaal T1-T6 (afstand + stijging + weer)
- Vervoersmiddel multi-select (wandelen, fietsen, motor, auto, trein, bus, boot, vliegtuig)
- Galerij sectie onderaan
- Twee JSON exports: volledige content + routes.json entry
- Knoppen in header leesbaar gemaakt op donkere achtergrond
- startLat/startLon opgeslagen in JSON export voor kaart bij import

**Route detail pagina (T1-002):**
- `routes/route.html` + `js/route.js` + `css/route.css`
- Laadt via `?id=` query parameter
- Hero, stats (7 velden), weerdata, verhaal blokken, tips, Leaflet kaart, vervoersmiddel, galerij, acties
- Deel-knop via Web Share API + clipboard fallback
- Print-knop via window.print()
- i18n NL + EN

**Wandelingen overzicht (T1-009):**
- `wandelingen.html` + `js/wandelingen.js` + `css/wandelingen.css`
- Alle routes als preview kaartjes
- Klik → `routes/route.html?id=[id]`
- i18n NL + EN

**Homepage update (T1-001):**
- `index.html` v2.5.0: wandelingen sectie met top 3 meest recente routes
- "Alle wandelingen →" link naar `wandelingen.html`
- `home.js` v2.3.0: sorteert op date_walked, max 3 routes, links naar route detail
- `home.css` v2.2.0: routes-section__header layout

**Bestandsstructuur (TD-009, TD-010):**
- Route JSON bestanden verplaatst naar `routes/`
- `routes.json` verplaatst naar `routes/routes.json`
- Route IDs gecorrigeerd: geen spaties, koppeltekens
- Alle paden aangepast in route.js, wandelingen.js, home.js, creator.js

**i18n bestanden:**
- `data/i18n/nl/creator.json` v1.0.0
- `data/i18n/en/creator.json` v1.0.0
- `data/i18n/nl/route.json` v1.0.0
- `data/i18n/en/route.json` v1.0.0
- `data/i18n/nl/wandelingen.json` v1.0.0
- `data/i18n/en/wandelingen.json` v1.0.0

### Aangeleverde bestanden

| Bestand | Versie | Omschrijving |
|---------|--------|--------------|
| `creator.html` | v2.0.0 | Visuele preview, blokken-editor, JSON import, vervoersmiddel, galerij |
| `css/creator.css` | v2.0.0 | Blokken-editor, visuele preview, transport checkboxes |
| `js/creator.js` | v2.1.0 | Alle uitbreidingen, Leaflet, SAC-schaal, auto Cloudinary fix |
| `routes/route.html` | v1.0.0 | Route detail pagina |
| `css/route.css` | v1.0.0 | Route detail styling |
| `js/route.js` | v1.1.0 | Route detail logica + i18n |
| `wandelingen.html` | v1.0.0 | Wandelingen overzicht |
| `css/wandelingen.css` | v1.0.0 | Wandelingen overzicht styling |
| `js/wandelingen.js` | v1.1.0 | Wandelingen overzicht logica + i18n |
| `index.html` | v2.5.0 | Top 3 routes + "Alle wandelingen →" link |
| `css/home.css` | v2.2.0 | routes-section__header |
| `js/home.js` | v2.3.0 | Max 3 routes, sortering op datum, route detail links |
| `routes/routes.json` | v2.1.0 | Gecorrigeerde route entries |
| `data/docs/cloudinary-workflow.md` | v1.0.0 | Cloudinary upload workflow documentatie |
| `data/i18n/nl/creator.json` | v1.0.0 | Creator i18n NL |
| `data/i18n/en/creator.json` | v1.0.0 | Creator i18n EN |
| `data/i18n/nl/route.json` | v1.0.0 | Route i18n NL |
| `data/i18n/en/route.json` | v1.0.0 | Route i18n EN |
| `data/i18n/nl/wandelingen.json` | v1.0.0 | Wandelingen i18n NL |
| `data/i18n/en/wandelingen.json` | v1.0.0 | Wandelingen i18n EN |

### Architectuurbeslissingen sessie 05

| Onderwerp | Beslissing |
|-----------|-----------|
| **Bestandsstructuur** | Route JSON bestanden in `routes/`. Geen aparte `data/content/` map. |
| **Route IDs** | Altijd lowercase met koppeltekens, geen spaties |
| **Moeilijkheid** | SAC-wandelschaal T1-T6. Score = afstand(km) + stijging(/100m) + weerfactoren |
| **Cloudinary** | Auto-fix bij import en blur: w_1200 hero, w_800 galerij/blokken, w_400 thumbnail |
| **Leaflet CDN** | jsdelivr zonder integrity check (unpkg blokkeerde op GitHub Pages) |
| **Routes overzicht** | `wandelingen.html` als generiek patroon — later ook `hikes.html`, `ritten.html` |
| **Homepage** | Top 3 meest recente routes. "Alle wandelingen →" naar `wandelingen.html` |
| **Twee JSON exports** | Creator exporteert (1) volledige route JSON en (2) routes.json entry apart |

### Openstaande punten na sessie 05
- GPX route tekenen op kaart in route.html (trackPoints aanwezig in JSON maar niet gebruikt)
- Route kaartpagina (T1-007)
- Draft management (T1-008)
- Print CSS (T7-001)
- Analytics dashboard (T6-005)
- Filters op wandelingen.html (T4-001)

---

# END OF PROJECTLOG.md

# MyTrailWalks — PROJECTLOG.md
## Bijgewerkt: 21-06-2026
> Versie: v1.2.0 · Projectlog — chronologisch overzicht van sessies en wijzigingen

---

# ======================= ENTRIES =======================

---

## Sessie 01 — 18-06-2026
**Onderwerp:** T0-005 (i18next systeem) + T0-002 (routes.json schema) + T1-001 (homepage grid) + component-fragmenten (topbar/navbar/footer)
**Status aan einde sessie:** T0-005 ✅ Done · T0-002 ✅ Done · T1-001 🔄 Gedeeltelijk (grid gebouwd, fetch-injectie componenten volgt in T0-006)

### Aangeleverde bestanden

| Bestand | Versie | Omschrijving |
|---------|--------|--------------|
| `js/i18n.js` | v1.1.0 | Nieuwe wrapper rond i18next: init, loadNamespace, t(), applyTranslations(), loadScript(), changeLanguage(), buildLanguageSwitcher(). |
| `data/i18n/nl/common.json` | v1.0.0 | Gedeelde NL UI-teksten: navigatie, footer, route-stat-labels, moeilijkheidsgraden, a11y-labels. |
| `data/i18n/nl/home.json` | v1.0.0 | Homepage-specifieke NL UI-teksten. |
| `data/i18n/en/common.json` | v1.0.0 | Engelse fallback voor common namespace. |
| `data/i18n/en/home.json` | v1.0.0 | Engelse fallback voor home namespace. |
| `data/routes.json` | v2.0.0 | Schema bijgewerkt: `language`-veld toegevoegd, `content_json` pad gecorrigeerd. |
| `index.html` | v1.1.0 | Homepage grid: CDN-scripts i18next, component-placeholders, page-header. |
| `css/home.css` | v1.0.0 | Grid-layout (mobile-first), tile-component, sticky nav-spacing via CSS-variabelen. |
| `js/home.js` | v1.0.0 | Homepage init: i18next + routes.json laden + grid renderen. |
| `components/topbar.html` | v1.0.0 | Topbar fragment: auth-slot, merknaam midden, taalwisselaar rechts. |
| `css/topbar.css` | v1.0.0 | Topbar stijlen: sticky, --topbar-height: 44px. |
| `components/navbar.html` | v1.0.0 | Navbar fragment: logo, navigatielinks, hamburger mobile. |
| `css/navbar.css` | v1.0.0 | Navbar stijlen: sticky, forest achtergrond, --navbar-height: 60px. |
| `components/footer.html` | v1.0.0 | Footer fragment: logo + copyright + placeholder-links. |
| `css/footer.css` | v1.0.0 | Footer stijlen: forest-dark achtergrond. |

### Openstaande punten na sessie 01
- `js/app.js` herzien naar i18next-architectuur (TD-004)
- `data/content/ninglinspo.json` aanmaken (T1-005)
- CLAUDE.md localStorage-prefixtabel bijwerken naar `mtw_*` (TD-005)

---

## Sessie 02 — 20-06-2026
**Onderwerp:** UI/UX redesign homepage — hero sectie, component-injectie, topbar zichtbaar, i18n keys, favicon, logo
**Status aan einde sessie:** T0-006 ✅ Done · T0-005 ✅ Done (v1.2.0) · T1-001 ✅ Done · TD-004 ✅ Done · TD-005 ✅ Done

### Aangeleverde bestanden

| Bestand | Versie | Omschrijving |
|---------|--------|--------------|
| `index.html` | v2.1.0 | Navbar verwijderd. Hero sectie toegevoegd (eyebrow + titel + subtitel + CTA). `app.js` als script toegevoegd. |
| `css/home.css` | v2.1.0 | Dubbele hero-definitie verwijderd. Hero hoogte: `height: 55vh; max-height: 500px`. Overlay verlicht. Hero achtergrondafbeelding: `assets/images/hero.jpg`. |
| `js/app.js` | v2.1.0 | Nieuw: fetch+injectie topbar + footer via `window.appReady` Promise. `getBasePath()` helper. `setActiveNavLink()`. |
| `js/home.js` | v2.0.0 | Wacht op `window.appReady` vóór `buildLanguageSwitcher()`. i18n init volgorde gecorrigeerd. |
| `js/i18n.js` | v1.2.0 | `loadPath` dynamisch via `getBasePath()` — werkt correct vanuit root én submappen. |
| `data/i18n/nl/home.json` | v2.0.0 | Hero keys toegevoegd. |
| `data/i18n/en/home.json` | v2.0.0 | Hero keys toegevoegd (Engelse fallback). |
| `components/topbar.html` | v1.1.0 | Logo (Logo2.png) toegevoegd naast merknaam. |
| `css/topbar.css` | v1.1.0 | Logo stijlen. --topbar-height: 52px. |

### Architectuurbeslissingen sessie 02
- Navbar definitief verwijderd
- Hero sectie toegevoegd
- `window.appReady` patroon voor component-injectie
- Dynamisch loadPath in i18n.js

---

## Sessie 02b/c/d — 20-06-2026
**Onderwerp:** Architectuurbeslissingen route creator, print, foto-opslag, login, AI, GPX, draft/published workflow
**Status:** Beslissingen vastgelegd, taken toegevoegd aan backlog. Geen code gebouwd.

Zie backlog voor beslissingstabellen en nieuwe taken (T0-007, T0-008, T1-006, T1-007, T1-008, T2-006, T3-006, T6-001, T7-001/002/003, TD-006).

---

## Sessie 03 — 21-06-2026
**Onderwerp:** Route creator + Supabase auth + topbar login + getBasePath fix
**Status aan einde sessie:** T1-006 ✅ Done · T6-001 ✅ Done · T0-008 ✅ Done · T2-002 ✅ Done · T0-005 ✅ Done (v1.3.0) · T0-006 ✅ Done (v2.2.0)

### Aangeleverde bestanden

| Bestand | Versie | Omschrijving |
|---------|--------|--------------|
| `creator.html` | v1.0.1 | Route creator pagina. 6 stappen: GPX, datum/locatie/weer, route-info, foto's, verhaal/tips, export. Live JSON preview. AI-modus toggle. Favicon. Eruda. Scripts conform standaard volgorde. |
| `css/creator.css` | v1.0.0 | Creator styling: 2-koloms layout, drop zone, stats grid, weerblok, AI-actiebalk, JSON preview. |
| `js/creator.js` | v1.0.0 | GPX parser (Haversine), Nominatim locatie, Open-Meteo weer, foto's, AI generatie (Anthropic API), live preview, JSON export. |
| `js/auth.js` | v1.0.0 | Supabase auth module: register, login, logout, resetPassword, getProfile (username + is_admin). URL: bzcevvfesushlorymszd.supabase.co |
| `js/topbar-auth.js` | v1.0.0 | Login modal (tabs: inloggen/registreren/vergeten) + gebruikersdropdown met admin sectie (Route creator link). Stijl op MyTrailWalks design tokens. |
| `components/topbar.html` | v2.0.0 | Bijgewerkt: #top-auth slot links, logo midden, taalswitch rechts. 3-koloms grid. |
| `css/topbar.css` | v2.0.0 | Bijgewerkt: 3-koloms grid layout voor auth + logo + taal. |
| `js/app.js` | v2.2.0 | getBasePath() fix: filtert .html segmenten — lost ../  prefix bug op voor /index.html URLs. |
| `index.html` | v2.4.0 | Alle scripts verplaatst naar onderaan body conform standaard volgorde. Supabase SDK + auth scripts toegevoegd. |

### Architectuurbeslissingen sessie 03

| Onderwerp | Beslissing |
|-----------|-----------|
| **Script volgorde** | Altijd onderaan `<body>`: Eruda → Supabase SDK → i18next → i18n.js → auth.js → topbar-auth.js → app.js → [pagina].js |
| **Eruda** | Niet verwijderen als aanwezig in HTML pagina |
| **CSS** | Altijd in `<head>` |
| **getBasePath()** | Filtert .html segmenten zodat /index.html en /routes/x.html beide depth 0 resp. 1 geven |
| **Supabase project** | MyTrailWalks — bzcevvfesushlorymszd.supabase.co |
| **Admin toegang creator** | Via `is_admin = true` in profiles tabel — dropdown verschijnt automatisch na inlog |

### Nog te doen na sessie 03
- Supabase `profiles` tabel aanmaken (SQL in auth.js commentaar)
- Eigen account `is_admin = true` zetten via Supabase dashboard
- Cloudinary account aanmaken (T0-007)
- `data/content/ninglinspo.json` aanmaken (T1-005)
- Route detail pagina (T1-002)

---

# END OF PROJECTLOG.md

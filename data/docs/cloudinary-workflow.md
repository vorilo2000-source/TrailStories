# Cloudinary Workflow — MyTrailWalks

## Account

| Gegeven | Waarde |
|---------|--------|
| **Cloud name** | `dgzlcqdcc` |
| **Dashboard** | https://console.cloudinary.com |
| **API key nodig?** | Nee — alleen publieke URLs |

---

## Foto uploaden

1. Ga naar [Cloudinary Dashboard](https://console.cloudinary.com)
2. Klik op **Media Library**
3. Klik op **Upload** (rechtsboven)
4. Sleep foto's naar het uploadvenster of klik om te bladeren
5. Wacht tot de upload klaar is
6. Klik op de foto → kopieer de **Public ID** (bv. `wandelingen/kalmthout-heide`)

---

## URL-structuur

### Basis URL
```
https://res.cloudinary.com/dgzlcqdcc/image/upload/[public_id]
```

### Hero foto (fullscreen)
```
https://res.cloudinary.com/dgzlcqdcc/image/upload/w_1200,f_auto/[public_id]
```

### Thumbnail (overzichtskaart)
```
https://res.cloudinary.com/dgzlcqdcc/image/upload/w_400,f_auto/[public_id]
```

### Galerij foto (middelgroot)
```
https://res.cloudinary.com/dgzlcqdcc/image/upload/w_800,f_auto/[public_id]
```

---

## Mappenstructuur (aanbevolen)

```
wandelingen/
  [route-id]/
    hero
    thumb
    gallery-01
    gallery-02
    ...
```

Voorbeeld public ID: `wandelingen/kalmthout-heide/hero`

---

## Foto toevoegen aan route JSON

```json
{
  "hero_image": "https://res.cloudinary.com/dgzlcqdcc/image/upload/w_1200,f_auto/wandelingen/kalmthout-heide/hero",
  "thumbnail": "https://res.cloudinary.com/dgzlcqdcc/image/upload/w_400,f_auto/wandelingen/kalmthout-heide/thumb",
  "gallery": [
    "https://res.cloudinary.com/dgzlcqdcc/image/upload/w_800,f_auto/wandelingen/kalmthout-heide/gallery-01",
    "https://res.cloudinary.com/dgzlcqdcc/image/upload/w_800,f_auto/wandelingen/kalmthout-heide/gallery-02"
  ]
}
```

---

## Transformatie parameters (referentie)

| Parameter | Betekenis |
|-----------|-----------|
| `w_1200` | Breedte 1200px |
| `w_400` | Breedte 400px |
| `f_auto` | Automatisch beste formaat (WebP, AVIF…) |
| `q_auto` | Automatische kwaliteitsoptimalisatie |
| `c_fill` | Bijsnijden tot exacte afmeting |

Combineren kan: `w_400,h_300,c_fill,f_auto,q_auto`

---

*Aangemaakt: sessie 05 — 22-06-2026*

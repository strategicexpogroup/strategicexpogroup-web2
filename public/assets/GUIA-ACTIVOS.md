# Guía de activos visuales (Strategic Expo Group)

Todos los archivos estáticos van en **`public/assets/`**. En el código se referencian sin `public`, por ejemplo: `/assets/logos/logo-main.svg`.

## Estructura de carpetas

| Carpeta | Uso |
|---------|-----|
| `public/assets/logos/` | Logo corporativo, logo blanco (footer), logo de ferias |
| `public/assets/logos/partners/` | Logos de **aliados estratégicos** |
| `public/assets/images/` | Fotografías globales (hero, eventos, portadas) |
| `public/assets/images/{slug-de-feria}/expositores/` | Fotos de perfil — sección **Expositores** por feria |
| `public/assets/images/{slug-de-feria}/internacional/` | Imágenes — sección **Componente internacional** |
| `public/assets/icons/` | (Opcional) iconografía SVG si no usas Lucide |

## Convención de nombres

- **Minúsculas**, palabras separadas por **guión**: `hero-banner-01.webp`
- Sin espacios ni tildes en el nombre de archivo
- **Formato preferido**: **WebP** para fotos; **SVG** para logos vectoriales
- **PNG** cuando haga falta transparencia compleja

---

## Catálogo por sección (nombre, ruta, formato, tamaño)

### 1. Página de inicio — banner (hero)

| Archivo | Ruta completa en `public/` | Formato | Tamaño recomendado | Uso |
|---------|----------------------------|----------|--------------------|-----|
| `hero-banner-01.webp` | `assets/images/hero-banner-01.webp` | WebP (calidad ~78–85 %) | **1920 × 1080 px** (16:9); máx. ~350–500 KB | Fondo del hero en escritorio y móvil |

**Notas:** horizontal; zona central suele tener texto encima: evita caras o textos críticos justo en el centro si no hay overlay fuerte.

---

### 2. Página de inicio — «Nuestras líneas» (6 tarjetas)

Carpeta: **`public/assets/images/service-lines/`**. Rutas en código: `assetPaths.serviceLine("line-01")` → `/assets/images/service-lines/line-01.webp`.

| Orden | Línea (`lib/data.ts` → `serviceLines`) | Archivo | Ruta |
|-------|----------------------------------------|---------|------|
| 1 | Eventos corporativos | `line-01.webp` | `assets/images/service-lines/line-01.webp` |
| 2 | Ferias comerciales | `line-02.webp` | `assets/images/service-lines/line-02.webp` |
| 3 | Congresos | `line-03.webp` | `assets/images/service-lines/line-03.webp` |
| 4 | Stands y experiencias | `line-04.webp` | `assets/images/service-lines/line-04.webp` |
| 5 | Ruedas de negocios | `line-05.webp` | `assets/images/service-lines/line-05.webp` |
| 6 | Activaciones comerciales | `line-06.webp` | `assets/images/service-lines/line-06.webp` |

**Formato:** WebP · **Tamaño recomendado:** **800 × 600 px** (4:3) u orientación similar para recorte `object-cover`.

---

### 3. Página de inicio / detalle — otras imágenes globales

| Archivo | Ruta | Formato | Tamaño recomendado | Uso |
|---------|------|---------|--------------------|-----|
| `feria-educacion-caribe-cover.webp` | `assets/images/feria-educacion-caribe-cover.webp` | WebP | **1200 × 630 px** (OG/social) o **1600 × 900** | Portada feria, tarjetas |
| `event-education-caribe.webp` | `assets/images/event-education-caribe.webp` | WebP | **800 × 1000 px** (retrato) | Bloques laterales, Stands |

---

### 4. Página **Stands** (`/stands`)

| Archivo (mismo que arriba o dedicados) | Ruta | Formato | Tamaño recomendado | Rol en la página |
|----------------------------------------|------|---------|--------------------|-------------------|
| `hero-banner-01.webp` | `assets/images/hero-banner-01.webp` | WebP | **1920 × 1080** o recorte **1200 × 900** | Columna derecha — imagen principal grande |
| `event-education-caribe.webp` | `assets/images/event-education-caribe.webp` | WebP | **900 × 675** (4:3) | Miniatura 1 |
| `feria-educacion-caribe-cover.webp` | `assets/images/feria-educacion-caribe-cover.webp` | WebP | **900 × 675** (4:3) | Miniatura 2 |

Si quieres **archivos solo para Stands**, usa por ejemplo `stands-gallery-01.webp` … `03.webp` en `assets/images/` y actualiza `app/stands/page.tsx` (`galleryImages`).

---

### 5. Feria **Educación Caribe 2026** — sección **Expositores**

Carpeta base (el `slug` de la feria en `lib/data.ts`):

`public/assets/images/feria-educacion-caribe/expositores/`

| ID en `lib/data.ts` (`expositores[].id`) | Nombre del archivo | Ruta completa | Formato | Tamaño recomendado |
|------------------------------------------|---------------------|---------------|---------|--------------------|
| `expositor-01` | `expositor-01.webp` | `assets/images/feria-educacion-caribe/expositores/expositor-01.webp` | WebP | **900 × 1125 px** (ratio 4:5 retrato) o **800 × 1000** |
| `expositor-02` | `expositor-02.webp` | `…/expositores/expositor-02.webp` | WebP | Igual |
| `expositor-03` | `expositor-03.webp` | `…/expositores/expositor-03.webp` | WebP | Igual |

Añade más filas en `expositores` y archivos `expositor-04.webp`, etc. El `id` **debe coincidir** con el nombre del archivo sin extensión.

Si el archivo **no existe**, la tarjeta muestra un placeholder «Foto pendiente».

---

### 6. Feria **Educación Caribe 2026** — **Componente internacional**

Carpeta:

`public/assets/images/feria-educacion-caribe/internacional/`

| Campo `file` en `internationalGallery` | Ruta | Formato | Tamaño recomendado |
|------------------------------------------|------|---------|--------------------|
| `internacional-01-programas-exterior.webp` | `assets/images/feria-educacion-caribe/internacional/internacional-01-programas-exterior.webp` | WebP | **1200 × 750 px** (16:10) |
| `internacional-02-agencias.webp` | `…/internacional/internacional-02-agencias.webp` | WebP | **1200 × 750 px** |
| `internacional-03-networking-global.webp` | `…/internacional/internacional-03-networking-global.webp` | WebP | **1200 × 750 px** |

Los textos `label` y `alt` se editan en `lib/data.ts` (`internationalGallery`).

---

## Archivos que usa el sitio hoy (resumen)

### Logos corporativos (`public/assets/logos/`)

| Archivo | Descripción | Formato |
|---------|-------------|---------|
| `logo-main.svg` | Logo color (header) | SVG |
| `logo-white.svg` | Logo footer | SVG |
| `feria-educacion-caribe.png` | Marca feria en bloques | PNG transparente ~**1200×720** |

### Aliados (`public/assets/logos/partners/`)

`partner-{slug}.webp` según `lib/data.ts` → `partners` (ver lista en código).

---

## Paleta de marca (referencia)

- Azul oscuro: `#162134`
- Verde: `#048240`
- Amarillo: `#e1e11e`
- Celeste: `#17a3dd`
- Fondo claro sitio: `#F8F9FA`

## Tips para Vercel y rendimiento

1. Comprime WebP antes de subir (Squoosh, TinyPNG).
2. Evita PNG muy pesados; prioriza WebP.
3. No subas `node_modules` ni `.next` al repositorio.

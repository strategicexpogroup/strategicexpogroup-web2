# Guía de activos visuales (Strategic Expo Group)

Todos los archivos estáticos van en **`public/assets/`**. En el código se referencian sin `public`, por ejemplo: `/assets/logos/logo-main.svg`.

## Estructura de carpetas

| Carpeta | Uso |
|---------|-----|
| `public/assets/logos/` | Logo corporativo, logo blanco (footer), logo de ferias |
| `public/assets/logos/partners/` | Logos de aliados y patrocinadores |
| `public/assets/images/` | Fotografías hero, eventos, banners |
| `public/assets/icons/` | (Opcional) iconografía SVG si no usas Lucide |

## Convención de nombres

- **Minúsculas**, palabras separadas por **guión**: `hero-banner-01.webp`
- Sin espacios ni tildes en el nombre de archivo (evita problemas en servidores y CDNs)
- **Formato preferido**: **WebP** para fotos; **SVG** para logos e iconos vectoriales
- **PNG** solo si necesitas transparencia con degradados complejos (exportar ~2x para retina)

## Archivos que usa el sitio hoy

### Logos corporativos (`public/assets/logos/`)

| Archivo | Descripción | Formato | Resolución / tamaño |
|---------|-------------|----------|----------------------|
| `logo-main.svg` | Logo color (header) | SVG | Vector; altura visual ~40px en header |
| `logo-white.svg` | Logo para fondos oscuros (footer) | SVG | Vector |
| `feria-educacion-caribe.svg` o `.png` | Marca de la feria en bloque destacado | SVG o PNG | PNG transparente ~600×400 px máx. |

> Para usar **PNG** en feria: nómbralo `feria-educacion-caribe.png` y actualiza la ruta en `lib/assets.ts` (`feriaEducacionCaribe`).

### Imágenes (`public/assets/images/`)

| Archivo | Descripción | Formato | Resolución recomendada |
|---------|-------------|----------|-------------------------|
| `hero-banner-01.webp` | Foto principal del hero (reemplaza el SVG placeholder) | WebP (o JPG optimizado) | **1920×1080** px, compresión ~70–85% calidad |
| `event-education-caribe.webp` | Foto vertical feria destacada | WebP | **800×1000** px aprox. (ratio retrato) |

Tras exportar WebP, puedes **borrar** los `.svg` placeholder del mismo rol o mantenerlos como respaldo y cambiar la importación en `lib/assets.ts`.

### Aliados (`public/assets/logos/partners/`)

Nombre fijo por slug (definidos en `lib/data.ts` → `partners`):

| Archivo | Entidad |
|---------|---------|
| `partner-alcaldia-cartagena.webp` | ALCALDÍA DE CARTAGENA |
| `partner-gobierno-bolivar.webp` | GOBIERNO DE BOLÍVAR |
| `partner-camara-comercio-costa.webp` | CAMARA COMERCIO DE LA COSTA |
| `partner-universidad-costa.webp` | UNIVERSIDAD DE LA COSTA |
| `partner-mas-pais.webp` | MAS PAÍS |
| `partner-comfamiliar.webp` | comfamiliar |

- **Tamaño**: ancho máximo **300px** en el lienzo, altura proporcional; fondo transparente si aplica
- **Formato**: WebP o PNG transparente

Si un archivo **no existe**, la web muestra el **nombre en texto** en el carrusel.

## Paleta del mockup (referencia de diseño)

- Azul oscuro: `#002855`
- Verde: `#00A859`
- Fondo claro: `#F8F9FA`

## Tips para Vercel y rendimiento

1. Comprime imágenes antes de subir (Squoosh, TinyPNG, etc.).
2. Evita PNG gigantes; prioriza WebP.
3. No subas `node_modules` ni `.next` al repositorio Git.

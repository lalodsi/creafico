# Creafico

Sitio de Creafico: publicidad, impresión, exhibición y papelería. La interfaz está en español. Es un export estático de Next.js que se publica en GitHub Pages.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- `output: "export"` en `next.config.ts`. No hay servidor en producción.
- Imágenes sin optimizar (`images.unoptimized: true`)
- Alias de `tsconfig.json`: `components/*`, `types/*`
- CI: `.github/workflows/deploy.yml` usa pnpm, `pnpm run build` y publica `./out` en la rama `master`
- `@reduxjs/toolkit` y `react-redux` están instalados y no se usan. No agregues un store salvo que se pida.

## Comandos

```bash
pnpm dev
pnpm run build
pnpm lint
```

En local el sitio vive en `http://localhost:3000`. En producción el `basePath` es `/creafico`.

## Mapa

| Ruta | Archivo | Qué muestra |
| --- | --- | --- |
| `/` | `src/app/(app)/page.tsx` | Inicio, marquesina de servicios y clientes |
| `/services` | `src/app/(app)/services/page.tsx` | Catálogo: un grupo por servicio y una ficha por subservicio |
| `/services/[serviceId]` | `src/app/(app)/services/[serviceId]/page.tsx` | Descripción larga y galería |
| `/contact` | `src/app/(app)/contact/page.tsx` | Formulario. Oculta `Header` y `Footer` |

`src/app/(app)/layout.tsx` arma navbar, header y footer. El fondo global está en `src/app/layout.tsx`.

## Servicios

La fuente de verdad es `src/types/services.ts`.

- Un servicio con `subItems` genera una ruta por subservicio: `{id}-{subItem.id}`.
- Un servicio sin subservicios usa solo su `id`. Ejemplo: `/services/maletas-y-estuches-personalizados`.
- `servicePath()` arma el enlace. `listServicePages()` y `findServicePage()` alimentan la página dinámica.
- `slugPart()` quita acentos. El id `viñetas` se publica como `vinetas`.
- El catálogo muestra `shortDescription` y la primera imagen. La ficha muestra `description` y todas las imágenes.
- Los ids van en kebab-case y son el contrato de la URL. No los cambies sin actualizar los enlaces.

`generateStaticParams` debe devolver cada slug y `dynamicParams` se queda en `false`. Una ruta que no esté en esa lista responde 404 en el export.

## Imágenes y archivos públicos

Los archivos viven en `public/` (`products/`, `Logo.png`, `BackgroundPlain.png`). Los datos guardan rutas como `./products/archivo.jpg`.

Usa `assetUrl()` de `src/types/assets.ts` en `next/image` y en `background-image`. Next no antepone `basePath` cuando las imágenes van sin optimizar, y una ruta relativa `./products/...` se resuelve contra la URL actual. En `/services/una-ficha` eso pide `/services/products/...` y rompe el catálogo al volver.

```tsx
import { assetUrl } from "types/assets";

<Image src={assetUrl(image.url)} alt={image.name} />
```

`assetUrl()` también antepone `/creafico` en producción.

## Interfaz

Colores en `src/app/globals.css`: amarillo `#FFC000` (`bg-yellow`) y morado `#9A6699` (`bg-purple`), con `text-in-yellow-bg` y `text-in-purple-bg`.

El catálogo de servicios es una cuadrícula de fichas iguales. La variación de `layoutType` (`Right`, `Left`, `Carousel`, `Grid`, etc.) ya no cambia el listado; la ficha individual es el lugar del detalle.

## Qué no hacer

- No uses Server Actions, `cookies()`, `headers()` ni rutas que dependan de un servidor.
- No pongas `src="./products/..."` ni `src="/products/..."` directo en un componente.
- No copies descripciones de servicios fuera de `src/types/services.ts`.
- El tipo `PAGES` en `src/types/constants.ts` solo lista `/`, `/services` y `/contact`. Las fichas son `/services/...` y también deben mostrar header y footer.

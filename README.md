# Pulseras Noe — Landing page

Landing page para el emprendimiento de pulseras artesanales de Noe, hecha con **Next.js 14 (App Router)** y **Tailwind CSS**.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Qué incluye

- **`app/page.js`** — Página principal: hero con la presentación de Noe, sección "Nuevos modelos" (4 productos) y sección "Catálogo" (8 productos). Se scrollea de punta a punta de la página.
- **`app/producto/[id]/page.js`** — Página de detalle de cada producto (imagen, nombre, precio, colores disponibles y botón "Agregar al carrito"), igual a la referencia de la segunda pantalla.
- **`components/Navbar.jsx`** — Barra de navegación fija arriba con "INICIO" y "CATÁLOGO" (sin el ítem de carrito). "CATÁLOGO" te lleva directo a la sección de catálogo de la home (`/#catalogo`), con scroll suave.
- **`components/ProductCard.jsx`** — Tarjeta de producto con la animación de hover (borde y sombra celeste `#16BDE7`, se eleva un poco y la imagen hace zoom). Al hacer click te lleva a la página de detalle del producto.
- **`components/ColorSwatches.jsx`** — Selector de color en la página de producto; los colores sin stock se muestran tachados con una ✕, igual que en la referencia.
- **`data/products.js`** — Datos de ejemplo de los 8 productos del catálogo (nombre, precio, imagen, colores y stock). Acá es donde reemplazarías por tus productos reales.

## Colores

- Celeste de marca / acento: `#16BDE7`
- Blanco: `#FFFFFF`
- Negro: `#000000`

Configurados en `tailwind.config.js` como `brand.blue`, `brand.white`, `brand.black`.

## Imágenes

Todas las imágenes provistas están en `public/images/`:

- `profile.jpg` — foto/ilustración de Noe (ya incluye el borde celeste ondulado).
- `bracelet-color.jpg`, `bracelet-detail.jpg`, `bracelet-sinstock.jpg` — fotos de producto.
- `icon-instagram.jpg`, `icon-whatsapp.jpg`, `icon-tiktok.jpg` — íconos de redes.
- `bg-leaves-vertical.jpg`, `bg-leaves-horizontal.jpg` — fondos decorativos de hojas, usados como fondo de página.

## Notas

- Para cambiar textos, precios o agregar productos nuevos, editá `data/products.js`.
- El botón "Agregar al carrito" no está conectado a un carrito real (no se pidió esa sección), pero queda el componente `AddToCartButton.jsx` listo para conectar a tu lógica de carrito cuando la agregues.

# Airfryer sin complicaciones

Landing de venta para el ebook **Airfryer sin complicaciones**, desarrollada con Next.js y preparada para publicarse desde GitHub.

## Datos ya configurados

- Precio promocional: USD 10,99.
- Precio de referencia: USD 59,99.
- Checkout de Hotmart: `https://pay.hotmart.com/K107213143H`.
- Meta Pixel: `1084363423922504`.
- Evento `PageView` al visitar la landing.
- Evento `InitiateCheckout` al presionar un botón de compra.
- Diseño responsive para computadora, tablet y celular.
- Imágenes del ebook, recetas y cinco bonos incluidas en `public/assets`.

## Subir a GitHub desde la web

1. Crear un repositorio nuevo en GitHub.
2. Entrar al repositorio y elegir **Add file → Upload files**.
3. Descomprimir el ZIP de este proyecto.
4. Arrastrar a GitHub todo el contenido de la carpeta descomprimida, no la carpeta contenedora.
5. Esperar a que se carguen los archivos y presionar **Commit changes**.

## Publicar con Vercel

1. Iniciar sesión en Vercel con GitHub.
2. Elegir **Add New → Project**.
3. Importar el repositorio de esta landing.
4. Mantener el framework en **Next.js**.
5. Presionar **Deploy**.

El archivo `vercel.json` ya indica el comando correcto de compilación para Vercel. No hacen falta variables de entorno ni configuraciones adicionales.

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

La landing se edita principalmente desde:

- `app/page.tsx`: textos, precio, secciones y enlace de Hotmart.
- `app/globals.css`: diseño, colores y adaptación a celulares.
- `app/layout.tsx`: título, descripción y Meta Pixel.
- `public/assets`: mockup, portadas de bonos y páginas de muestra.

## Compilación para Vercel

```bash
npm run build:vercel
```

## Marca

Next Level eBooks — Aprende · Mejora · Crece

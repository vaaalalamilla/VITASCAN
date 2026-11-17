# VITASCAN

Sitio web educativo de información y orientación sobre VIH-1, VIH-2, hepatitis B y sífilis. Cada enfermedad dispone de una ficha HTML independiente con apartados detallados y fuentes de información.

## Estructura del sitio

- `index.html`: página de inicio y accesos a las cuatro fichas.
- `enfermedades.html`: catálogo de enfermedades.
- `enfermedades/vih-1.html`: ficha de VIH-1.
- `enfermedades/vih-2.html`: ficha de VIH-2.
- `enfermedades/hepatitis-b.html`: ficha de hepatitis B.
- `enfermedades/sifilis.html`: ficha de sífilis.
- `ubicaciones.html`: búsqueda voluntaria de centros de atención por ciudad o ubicación del dispositivo.
- `preguntas.html`: respuestas a dudas comunes.
- `css/styles.css`: diseño responsive, tipografía y navegación.
- `js/script.js`: menú desplegable y búsquedas de centros.
- `assets/vitascan-logo.jpg`: logotipo.

No se generan ni muestran códigos QR dentro del software. Los QR de acceso pueden crearse por separado como imágenes, apuntando a las URLs públicas de cada ficha.

## Publicar en GitHub Pages

1. Abre **Settings → Pages** en GitHub.
2. Selecciona **Deploy from a branch**.
3. Configura la rama `main` y carpeta `/(root)`.
4. Guarda la configuración.

URL prevista: https://vaaalalamilla.github.io/VITASCAN/

## Centros de atención y privacidad

La búsqueda abre Google Maps para encontrar centros cercanos. La geolocalización solo se solicita al pulsar «Usar mi ubicación» y la persona puede negarse; alternativamente, puede escribir una ciudad o colonia. VITASCAN no almacena sus coordenadas ni el texto de búsqueda. Al abrir Google Maps, ese proveedor gestiona los datos de la búsqueda conforme a sus propias políticas.

Los servicios y horarios deben verificarse con el centro antes de acudir.

## Aviso de salud

VITASCAN es un proyecto educativo; no diagnostica enfermedades, no sustituye las pruebas de laboratorio ni la valoración profesional. Las fichas enlazan a fuentes médicas y explican posibles síntomas, pruebas, prevención, tratamiento y seguimiento sin emitir diagnósticos individuales.

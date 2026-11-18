# VITASCAN — Aplicación multipágina

VITASCAN es un prototipo educativo que organiza síntomas, estados de ánimo, citas y recordatorios y ofrece información general sobre VIH-1, VIH-2, hepatitis B, sífilis, gonorrea y VPH.

## Páginas independientes

- `index.html`: inicio y acceso a las funciones.
- `calendario.html`: calendario mensual, registro diario, intensidad, estado de ánimo, historial, edición, exportación y recordatorios de citas o medicamentos indicados por un profesional.
- `comunidad.html`: subforos anónimos de demostración para crear hilos y responder.
- `informacion.html`: fichas informativas de las seis enfermedades, síntomas posibles y fuentes médicas.
- `centros.html`: búsquedas de centros en Google Maps por ciudad o geolocalización voluntaria, y preguntas frecuentes.
- `asistente.html`: asistente de demostración con respuestas predefinidas sobre cómo utilizar la aplicación.
- `configuracion.html`: modo discreto para avisos, permiso del navegador, exportación y eliminación de datos.
- `assets/vitascan-logo.jpg`: logotipo original.
- `css/styles.css`: estilos responsive comunes.
- `js/script.js`: interacciones y almacenamiento local.

## Qué funciona / limitaciones

**Registros:** se guardan en `localStorage` del navegador con la clave `vitascan.records.v2` para conservar registros de la versión anterior en ese navegador. Se pueden editar y exportar. No se sincronizan entre dispositivos. Los registros pueden perderse si se borran datos del sitio.

**Recordatorios:** se guardan en el navegador. Los avisos requieren que VITASCAN esté abierta y que se hayan activado permisos de notificación. No existe servicio push con la página cerrada ni garantías de entrega. En modo discreto se omiten detalles sensibles de la actividad. No es un sistema de recordatorios médicos críticos.

**Comunidad:** por ahora los hilos y las respuestas son una demostración **local**, no una comunidad entre usuarios conectados. Para publicar conversaciones reales y anónimas se necesitaría backend, base de datos, herramientas de reporte y moderación y una política de privacidad.

**Asistente virtual:** contesta preguntas frecuentes sobre el uso de VITASCAN mediante respuestas predeterminadas. No usa un modelo de lenguaje, no accede al historial y no ofrece diagnóstico ni indicaciones médicas personalizadas.

**Ubicaciones:** la búsqueda abre Google Maps; no guarda coordenadas. Google Maps maneja los datos de la consulta bajo sus propias políticas. Hay que verificar teléfonos y servicios directamente con los centros.

## Privacidad y salud

La información se conserva únicamente en el navegador; cualquier persona con acceso a ese navegador podría consultarla. Los archivos exportados pueden contener información médica sensible y deben protegerse. El software no confirma enfermedades, no diagnostica, no deduce etapas y no recomienda medicamentos ni dosis. Los síntomas pueden tener otras causas o estar ausentes.

## Publicación

GitHub → Settings → Pages → Deploy from a branch → main → /(root).
URL prevista: https://vaaalalamilla.github.io/VITASCAN/

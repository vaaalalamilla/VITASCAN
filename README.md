# VITASCAN — Seguimiento personal y puente hacia la atención médica

VITASCAN es una **aplicación web educativa centrada en las personas que desean llevar seguimiento de síntomas, emociones, actividades y citas de salud**. Su propósito es organizar información personal y facilitar que el usuario encuentre atención profesional. No es una plataforma de médicos, un CRM de consultorios, una aplicación de diagnóstico ni un sistema oficial de reservas.

## Una sola experiencia de usuario

Se eliminó la antigua doble vista paciente/médico, la selección de perfiles, el campo de cédula de demostración y el panel CRM. Al abrir `index.html`, se ingresa directamente a las funciones personales, sin exigir autenticación ficticia.

### Páginas

- `index.html`: inicio enfocado en seguimiento, emociones y acceso a recursos.
- `calendario.html`: registro de síntomas, estado de ánimo, intensidad, notas y recordatorios de citas o medicación previamente indicada por profesionales.
- `reportes.html`: resumen visual de registros por fechas, barras de síntomas y ánimo, exportación JSON y guardado PDF mediante impresión del navegador.
- `mi-consultorio.html`: **Mi atención y mis citas**. Enlace al mapa para buscar establecimientos, acceso al reporte personal y **agenda local de citas que el usuario ya acordó por su cuenta**. Guardar aquí una cita no la solicita ni la confirma con ningún establecimiento.
- `centros.html`: búsqueda de centros de atención en Google Maps por ciudad o ubicación voluntaria, con preguntas frecuentes. Google Maps es un tercero; sus resultados no constituyen verificación oficial de VITASCAN.
- `informacion.html`: fichas educativas sobre VIH-1, VIH-2, hepatitis B, sífilis, gonorrea y VPH.
- `comunidad.html`: foro anónimo **solo local de demostración**, con hilos, respuestas, reporte y filtros preventivos básicos.
- `eventos.html`: orientación hacia portales oficiales de campañas y convocatorias; no inventa eventos vigentes.
- `planes.html`: propuesta de funciones gratuitas y Premium para usuarios; **sin pagos reales**.
- `seguridad.html`: límites actuales de privacidad, comunidad y tratamiento de datos.
- `configuracion.html`: modo discreto, permisos de avisos y exportación o borrado de registros locales.

## Cómo probar

1. Abrir `index.html`: ya no pide elegir paciente/médico.
2. Ir al **Calendario** y crear datos **ficticios** de ejemplo.
3. Abrir **Mis reportes** y generar un resumen de esos datos.
4. Entrar a **Mi atención** y seguir el enlace a **Centros** para buscar en el mapa.
5. Anotar una cita previamente acordada mediante la agenda personal. Se guarda localmente y no se envía a un doctor.

## Limitaciones y seguridad

- Los datos se almacenan actualmente en `localStorage`. **No utilices datos de salud reales**: cualquier persona con acceso al mismo perfil de navegador puede leerlos y podrían perderse al limpiar datos de sitios.
- No existen cuentas reales, base de datos, autenticación, consultorios conectados, personal médico verificado, pagos ni reservas reales.
- El usuario controla la descarga y presentación de su resumen; ningún reporte se comparte automáticamente.
- Las notificaciones del navegador pueden funcionar solamente con el sitio abierto y permiso concedido; no sustituyen recordatorios médicos críticos.
- El foro no es compartido entre diferentes dispositivos, y sus reportes/filtros locales no equivalen a moderación centralizada.
- VITASCAN no identifica, diagnostica, trata ni determina etapas de enfermedades.

## Antes de utilizar con personas reales

Se necesita evaluación legal y de privacidad, infraestructura segura con controles de acceso, consentimiento para datos sensibles, políticas y moderación del foro, verificación de recursos oficiales y pruebas técnicas exhaustivas. Cualquier futura conexión administrativa con centros de salud necesitará permisos y acuerdos reales; no debe simularse como disponible.

## Publicación

GitHub Pages puede publicar la rama `main` en https://vaaalalamilla.github.io/VITASCAN/ cuando el despliegue esté habilitado y concluido.

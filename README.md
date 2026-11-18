# VITASCAN · Salud sexual, acompañamiento y seguimiento personal

**VITASCAN es un prototipo educativo de apoyo**, centrado en las personas que desean informarse y organizar su atención en salud sexual, particularmente sobre VIH-1, VIH-2, hepatitis B, sífilis, gonorrea y VPH. **No diagnostica, no interpreta enfermedades ni sustituye a profesionales o pruebas médicas.**

## Funciones gratuitas

- `index.html`: presentación y acceso a los recursos.
- `comunidad.html`: foro local de prueba por temas, sin chats privados.
- `informacion.html`: fichas educativas con fuentes externas.
- `centros.html`: mapa / búsqueda en Google Maps por ciudad o ubicación voluntaria (la ubicación no se guarda en VITASCAN).
- `eventos.html`: enlaces a fuentes oficiales sobre campañas de salud y empleo. Incluye **encuesta local** sobre experiencias en eventos con preguntas de opción múltiple y **buzón flotante de ideas** en todas las páginas.
- `calendario.html`: calendario y recordatorios de citas, medicamentos indicados y otras actividades.
- `configuracion.html`: modo discreto, permisos de avisos, exportación y eliminación de datos.
- `planes.html`: explicación del modelo gratuito y Premium.

## Funciones Premium — vista previa educativa

Desde `planes.html` se activa una **vista previa Premium sin pago** por sesión del navegador. No se cobra, no se verifica una suscripción ni se solicitan tarjetas.

- En `calendario.html`, el usuario puede elegir un tema de salud en seguimiento de forma voluntaria, con aviso sobre sensibilidad de la información. La selección personaliza las listas de síntomas **sin implicar diagnóstico**.
- Puede registrar síntomas, intensidad, emociones y notas. El programa cuenta con listas de seguimiento diferentes según el tema.
- `reportes.html` presenta gráficas de frecuencia y un resumen por fechas para imprimir / guardar como PDF con la opción del navegador.
- El registro personal y su exportación no deben quedar secuestrados por un plan de pago. Los registros anteriores permanecen en este navegador.

Los planes comerciales previstos son **mensual** y **anual**, con precios pendientes de evaluación. El procesamiento de pagos real requiere infraestructura y proveedor especializado.

## Privacidad y necesidad de datos

Solo se solicita información vinculada a una función concreta:
- Tema de salud: adaptar listas de seguimiento (opcional y sensible).
- Síntomas, emociones, intensidad y notas: crear un historial personal visual (Premium).
- Fecha, horario y descripción de medicamentos/citas: organizar recordatorios (Gratis).
- Ubicación: realizar una búsqueda voluntaria de centros; los resultados se abren en Google Maps.
- Respuestas sobre eventos e ideas: evaluar actividades y recoger sugerencias **en el navegador**, sin envío externo.
- Conversaciones de foro: demostración anónima local; no es una comunidad compartida por internet.

**La información se almacena en `localStorage` y no se cifra como un sistema clínico.** En un equipo compartido otras personas pueden acceder a esos datos. **No debe utilizarse con datos sensibles reales hasta construir una solución segura y obtener una revisión legal.** En esta demostración no existen cuentas, autenticación, moderación centralizada, servicios de pago ni backend.

El usuario puede exportar o borrar los datos locales desde Configuración. La vista Premium puede desactivarse cerrando la pestaña/sesión; el almacenamiento personal se conserva hasta su eliminación.

Antes del uso real: revisar la ley mexicana aplicable a datos personales sensibles, aviso de privacidad, finalidad y minimización, consentimiento válido, medidas de seguridad, políticas de conservación, derechos de titulares, auditorías y procesos contra abuso en la comunidad. No basta con un aviso para eximir responsabilidades.

## Archivos técnicos

- `css/styles.css`: estilos originales.
- `css/extras.css`: estilos de gráficas, encuestas, planes y buzón.
- `js/script.js`: calendario, foro, información, mapa y configuración.
- `js/extras.js`: vista previa Premium, gráficas, PDF mediante impresión, encuesta y buzón.
- `assets/`: recursos gráficos.

GitHub Pages: https://vaaalalamilla.github.io/VITASCAN/

**El mapa enlaza a Google Maps, no acredita consultorios ni confirma servicios.** La encuesta y el buzón no remiten resultados a instituciones. Los datos de registro no se comparten automáticamente con ningún centro médico.

# VITASCAN · Seguimiento personal y CRM administrativo (prototipo)

VITASCAN es un **proyecto educativo** para organizar síntomas, estados de ánimo, citas y reportes, junto con una **demostración de CRM básico** para consultorios. Este repositorio es una web estática: **no está preparado para pacientes reales ni para operar una clínica**.

## Estructura de páginas

### Paciente
- `index.html`: inicio y navegación
- `calendario.html`: diario de síntomas, estado de ánimo, recordatorios e historial
- `reportes.html`: reporte con gráficos de barras, selección de fechas, impresión/guardado como PDF desde el navegador y exportación JSON
- `mi-consultorio.html`: código ficticio, selección explícita de profesional e identificación de cada cita por `doctorId` y `clinicId`; solicitudes locales sin reserva real
- `comunidad.html`: subforos y respuestas locales, opciones de reporte y filtro preventivo básico contra algunos datos de contacto
- `informacion.html`: información educativa de VIH-1, VIH-2, hepatitis B, sífilis, gonorrea y VPH
- `centros.html`: búsqueda externa en Google Maps y preguntas frecuentes
- `eventos.html`: referencias a fuentes institucionales de salud y empleo; no inventa eventos o convocatorias vigentes
- `configuracion.html`: modo discreto y exportación/eliminación local de datos
- `seguridad.html`: explicación honesta del estado de privacidad y los requisitos futuros
- `planes.html`: propuesta de planes, **sin pagos reales**

### Consultorio
- `acceso.html`: puerta de entrada obligatoria para escoger paciente o profesional; cédula de 7 u 8 dígitos solo se comprueba en formato y se descarta, **sin consulta oficial ni autenticación real**
- `crm.html`: panel ficticio restringido por navegación de demostración; solo muestra citas asociadas al ID del profesional elegido al entrar. **No equivale a autorización segura**
- `moderacion.html`: reporte y ocultamiento de publicaciones/respuestas locales **sin permisos de moderador reales**

Archivos principales: `css/styles.css`, `css/portal.css`, `js/script.js`, `js/portal.js`.

## Cómo probarlo

1. Abrir `index.html` desde un servidor local o GitHub Pages y entrar a **Mi consultorio**.
2. Escribir el código ficticio `VS-DEMO-2026` para observar la simulación de validación.
3. Crear una solicitud de cita de prueba. Ir a **CRM** en el mismo navegador para confirmarla o rechazarla.
4. En **Calendario**, registrar datos **completamente ficticios**. Después abrir **Reportes** para revisar estadísticas y usar **Guardar como PDF** (diálogo de impresión del navegador).
5. En **Comunidad**, crear hilos de prueba, reportarlos y revisarlos en **Moderación**. La moderación no es centralizada.
6. Abrir **Eventos** y **Planes** para consultar la propuesta de estructura.

Los registros anteriores del mismo navegador pueden seguir en `localStorage`. **No ingreses información médica real durante estas pruebas.**

## Límites funcionales y de seguridad

- **Sin usuarios reales:** la selección de perfil se recuerda en `sessionStorage` únicamente para cambiar de vista. No hay autenticación, roles aplicados por servidor, validación oficial de cédulas, autorización clínica ni base de datos central. Un visitante técnicamente podría acceder a los archivos del sitio: no utilices pacientes reales.
- **Sin consultorios oficiales conectados:** el código y nombre del consultorio son ficticios. No se puede reservar una cita real. No se envían mensajes entre médicos y pacientes.
- **Sin comunicación privada:** no se implementan chats directos ni envío de fotografías, ubicaciones o documentos por mensajería.
- **Foro:** los hilos y respuestas existen **solo en el navegador**. Los filtros básicos de texto y reportes NO garantizan detección de acoso, odio, contactos encubiertos o contenido peligroso. Un foro público requerirá protección a nivel de servidor, moderadores autorizados, límites, reportes y revisión continua.
- **Datos:** `localStorage` no ofrece protección adecuada para información médica real. Los datos podrían verse por otras personas con acceso al mismo navegador o perderse al limpiar el almacenamiento.
- **Reportes:** son resúmenes de información autodeclarada, no diagnósticos ni expedientes clínicos certificados; el PDF se genera mediante la opción de impresión del navegador.
- **Suscripciones:** los precios están por definir y los pagos no están conectados.
- **Notificaciones:** los avisos locales dependen de permisos y requieren tener el sitio abierto. No sustituyen recordatorios médicos confiables.

## Qué falta antes de utilizarlo con pacientes reales

1. Revisión legal mexicana del tratamiento de datos sensibles, aviso de privacidad y consentimiento aplicable, responsabilidades de consultorios y normas sanitarias.
2. Backend HTTPS seguro, autenticación y roles de acceso verificados **del lado del servidor**, cifrado, auditoría, retención y procedimientos de derechos sobre datos.
3. Verificación documental real de consultorios/profesionales y administración de su estado de aprobación.
4. Vinculación segura con consentimiento explícito por paciente y permisos revocables para futuros accesos.
5. Agenda con base de datos transaccional y control real de doble reserva.
6. Moderación pública completa y seguridad contra filtración de información en comunidades.
7. Infraestructura para pagos recurrentes y control de planes.
8. API de asistente conversacional mediante **servidor** sin exponer claves y con políticas de seguridad de salud.

## Publicación

La rama `main` publica habitualmente en https://vaaalalamilla.github.io/VITASCAN/ mediante GitHub Pages cuando el despliegue está configurado y actualizado.

**VITASCAN sigue siendo un prototipo académico.** No es una plataforma para diagnosticar, prescribir, administrar expedientes clínicos oficiales ni almacenar información real de pacientes.

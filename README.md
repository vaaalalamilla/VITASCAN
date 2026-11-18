# VITASCAN · Mi diario de síntomas

Aplicación web educativa para **registrar síntomas diariamente** y consultar historial personal en un dispositivo.

## Seis temas disponibles

VIH-1, VIH-2, hepatitis B, sífilis, gonorrea y virus del papiloma humano (VPH).

## Funcionalidades incluidas

- Registro con fecha y enfermedad o tema de seguimiento.
- Casillas con síntomas frecuentes según el tema; síntoma adicional, intensidad y notas.
- Opción «Hoy no he notado síntomas».
- Historial local, filtrado por enfermedad, edición, eliminación y exportación JSON.
- Indicadores de días y registros guardados, sin interpretar ni diagnosticar síntomas.
- Información educativa por enfermedad con enlaces a fuentes médicas.
- Zona **demostrativa local** de comentarios sin nombre: estos mensajes **no son públicos ni visibles entre usuarios**.
- Búsqueda voluntaria de centros de atención por ciudad o permiso de ubicación.
- Diseño adaptable para computadora y celular y logotipo original.

## Privacidad

Los registros se guardan con `localStorage` del navegador. No existe cuenta personal, servidor ni sincronización. Otras personas que usen el mismo dispositivo y navegador podrían acceder al historial. Borrar los datos del sitio o usar modo privado puede eliminar los registros; se recomienda exportarlos cuando sea necesario. Los JSON exportados también contienen datos personales de salud: deben protegerse.

## Comunidad anónima compartida: pendiente

**No hay comentarios entre visitantes todavía.** Para crear una comunidad pública se requiere un servicio backend y base de datos, permisos, control de abuso y moderación, opciones de reportar/borrar contenido, política de privacidad y medidas para evitar publicar información identificable o recomendaciones médicas peligrosas. No se han simulado comentarios de pacientes reales.

## Aviso médico

VitaScan sirve para organizar notas, no para confirmar infecciones, distinguir VIH-1 de VIH-2, establecer etapas ni decidir tratamientos. Algunas infecciones no presentan síntomas. Se recomienda valoración de personal de salud y pruebas específicas cuando corresponda.

## Publicar

En GitHub → Settings → Pages → Deploy from a branch → `main` → `/(root)`. Dirección prevista: https://vaaalalamilla.github.io/VITASCAN/

## Estructura

- `index.html`: interfaz principal.
- `css/styles.css`: estilos responsive.
- `js/script.js`: datos, formularios y persistencia local.
- `assets/vitascan-logo.jpg`: logo del proyecto.

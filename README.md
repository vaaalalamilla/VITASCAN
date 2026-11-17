# VITASCAN

Prototipo web educativo para consultar información general sobre infecciones mediante fichas individuales y códigos QR.

## Estructura

- `index.html`: estructura de la página, navegación y secciones.
- `css/styles.css`: paleta visual, tarjetas, banners y diseño adaptable.
- `js/script.js`: fichas informativas, filtros, navegación por identificador y generación de códigos QR.

## Cómo funciona el QR

Cada QR contiene una dirección de esta página con un identificador en el fragmento de URL, por ejemplo:

```
https://TU-USUARIO.github.io/VITASCAN/#enfermedades/vih
```

Al abrirla, JavaScript reconoce el identificador y muestra directamente la ficha correspondiente. En la sección “Un código, una ficha informativa” se puede seleccionar una enfermedad, generar el QR y descargarlo como PNG.

Para que los QR funcionen desde otros teléfonos, primero publica el sitio en GitHub Pages y genera/descarga los códigos desde la dirección pública, no desde una vista previa local.

## Publicar en GitHub Pages

1. En GitHub abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Selecciona la rama principal y la carpeta **/(root)**.
4. Guarda y espera a que GitHub publique el sitio.
5. Abre la dirección pública y genera nuevamente los QR.

## Nota importante de salud

Este prototipo ofrece información educativa. No diagnostica, no interpreta pruebas, no determina etapas individuales por síntomas y no sustituye una consulta médica. Los síntomas son orientativos y algunas infecciones pueden no presentar síntomas.

La clasificación “muestras indicadas” no afirma que todas estas infecciones se detecten con saliva. El tipo de muestra y la prueba deben confirmarse con el laboratorio y el personal de salud. Por ejemplo, clamidia y gonorrea suelen detectarse mediante pruebas moleculares en orina o hisopos del sitio correspondiente; el VPH se evalúa con pruebas específicas según la zona y la indicación clínica.

## Equipo Tucancitos

- Director General: Jonathan Mis
- Desarrollo Web: Valeria Cano
- Marketing y Ventas: Isabel González
- Recursos Humanos: Janeth Gonzalez
- Finanzas: Jaqueline Aleman

---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: portafolio (index.html)

Scope: la página única de juantobon.dev. Modo: Experience. Audiencia: reclutadores y empresas que evalúan a Juan como líder técnico (DevOps e IA). Acción: abrir un proyecto y luego contactarlo (LinkedIn o correo). Contenido: 3 proyectos sin cifras ni nombre de la empresa, el stack y el contacto. Solo español.

## Direction contract

THESIS: un campo de color vivo sobre un fondo mate, donde la obra lleva la página y la interfaz flota como tipografía delgada. Rechaza el portafolio de tarjetas y retícula, y también el blueprint de la versión anterior.

OWN-WORLD: fondo negro mate #0E0E0E, o blanco mate #F2F1EE en tema claro. Un shader de fragmento mezcla carmesí-bermellón y aqua/verde azulado como manchas orgánicas con grano fino. Tipografía Bricolage Grotesque variable: una palabra enorme por escena y etiquetas pequeñas espaciadas. Nada de cajas, bordes ni sombras; los enlaces son texto o píldoras redondas.

STORY: el visitante ve quién es Juan y a qué nivel trabaja, entra a Proyectos, pasa sobre cada uno (el campo cambia al color de ese proyecto), lo abre para leer problema, rol y solución, y escribe.

FIRST VIEWPORT: shader a pantalla completa. "Juan Tobón" enorme abajo a la izquierda, con la línea-tesis encima y el rol en etiqueta. Enlaces de escena delgados arriba a la derecha y JT arriba a la izquierda. La acción principal, "Ver proyectos →", va como píldora bajo el nombre.

FORM: Portal de shader (challenger webgl-shader-portal). Interacción firma: el cursor deforma el campo; cambiar de escena dispara una disolución del shader y el color se desplaza según la escena o el proyecto activo. Movimiento: ease-out exponencial; el contenido es visible por defecto (sin loader que bloquee); con reduced-motion el campo se congela y se desactiva el cursor. seed:f1b132ee0cebe791

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

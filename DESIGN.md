---
name: Juan Tobón
description: Un campo de color vivo sobre un fondo mate; la obra lleva la página y la interfaz flota como tipografía delgada.
colors:
  ground: "#0E0E0E"
  ink: "#F2F1EE"
  ink-soft: "rgba(242,241,238,.84)"
  hair: "rgba(242,241,238,.18)"
  crimson: "#E0283C"
  teal: "#19B3A6"
  ground-light: "#F2F1EE"
  ink-light: "#0E0E0E"
  ink-soft-light: "rgba(14,14,14,.72)"
  hair-light: "rgba(14,14,14,.18)"
  crimson-light: "#C01F33"
  teal-light: "#0E8A80"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(64px, min(max(26vw, 15vw + 24px), 24vh), 232px)"
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: "-0.04em"
    fontVariation: "'opsz' 96, 'wdth' 78"
  headline:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(52px, min(10vw, 16vh), 152px)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.04em"
    fontVariation: "'opsz' 96, 'wdth' 78"
  display-short:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(56px, min(max(26vw, 15vw + 24px), 17vh), 232px)"
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: "-0.04em"
    fontVariation: "'opsz' 96, 'wdth' 78"
  headline-short:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(44px, min(10vw, 13vh), 152px)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.04em"
    fontVariation: "'opsz' 96, 'wdth' 78"
  lead-short:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(17px, min(2.4vw, 3.4vh), 30px)"
    fontWeight: 400
    lineHeight: 1.3
    fontVariation: "'opsz' 32"
  contact:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(30px, 6.4vw, 96px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'opsz' 96, 'wdth' 82"
  title:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(26px, 4.4vw, 60px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 72, 'wdth' 90"
  list:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(22px, 3.2vw, 42px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 48, 'wdth' 92"
  lead:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(20px, 2.4vw, 30px)"
    fontWeight: 400
    lineHeight: 1.3
    fontVariation: "'opsz' 32"
  body:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'opsz' 14"
  small:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  mark:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    letterSpacing: "0.02em"
    fontVariation: "'opsz' 24, 'wdth' 85"
  label:
    fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.16em"
rounded:
  pill: "999px"
  round: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  scene-top: "96px"
  scene-bottom: "72px"
  chrome-y: "20px"
  foot-y: "18px"
  pill-gap: "12px"
  tag-gap: "8px"
components:
  button-pill-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-pill-line:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  nav-scene-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    padding: "6px 0"
  nav-scene-link-active:
    textColor: "{colors.ink}"
  tag:
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  work-dot:
    rounded: "{rounded.round}"
    size: "12px"
  theme-toggle:
    rounded: "{rounded.round}"
    size: "34px"
  cursor-ring:
    rounded: "{rounded.round}"
    size: "36px"
  cursor-ring-hover:
    size: "64px"
---

# Design System: Juan Tobón

## Overview

**Creative North Star: "El Campo Vivo"**

Un solo fondo mate, negro o blanco, sobre el que respira un campo de color generado en WebGL: manchas orgánicas de carmesí y aqua que se mezclan con ruido fbm, un grano fino encima y nada más. Todo lo demás es tipografía. La interfaz no tiene superficies propias; flota sobre el campo como texto delgado, palabras enormes y unas pocas formas redondas. La obra (los proyectos) lleva la página; el campo es su clima, y cambia de color según la escena o el proyecto activo.

La densidad es baja y escénica: una escena por pantalla, una palabra enorme por escena, contenido anclado abajo a la izquierda y el cromo (monograma, enlaces de escena, pie) reducido a etiquetas pequeñas espaciadas en los bordes. El movimiento es parte del material: el cursor deforma el campo, cambiar de escena o de tema dispara una disolución del shader, y todas las transiciones usan un ease-out exponencial largo. Con reduced-motion el campo se congela y el cursor personalizado desaparece; el contenido es visible siempre, sin loader.

Rechazos confirmados en el contrato de dirección y en el build: el portafolio de tarjetas y retícula, y el estilo blueprint de la versión anterior.

**Key Characteristics:**
- Fondo mate plano (sin degradados de interfaz) con un campo de shader carmesí/aqua a pantalla completa y grano al 7%.
- Una sola familia, Bricolage Grotesque variable, estirada entre display condensado (wdth 78) y texto (opsz 14).
- Cero cajas: ningún contenedor con fondo, borde o sombra; las únicas formas son círculos y píldoras.
- El color de acento vive en el campo y en puntos pequeños, no en superficies.
- Movimiento con ease-out exponencial `cubic-bezier(.16,1,.3,1)`, y siempre respetando reduced-motion.

## Colors

Mate y bicolor: un neutro casi negro y un neutro hueso que intercambian papeles entre temas, más dos acentos (carmesí-bermellón y aqua) que el shader mezcla como manchas de luz.

### Primary
- **Carmesí Bermellón** (`crimson`; `crimson-light` en tema claro): el acento cálido. Tinta la mancha A del shader, marca la escena activa con un punto de 5px bajo el enlace, colorea el punto del proyecto "Plataforma de agentes", los separadores "·" de la primera fila del stack, el hover del enlace de correo y el fondo de selección de texto.

### Secondary
- **Aqua Verde Azulado** (`teal`; `teal-light` en tema claro): el acento frío. Tinta la mancha B del shader, es el color del anillo de foco (`--focus`), del punto del "Harness agéntico", de los separadores de la fila "IA aplicada" y del hover del enlace de LinkedIn.

### Neutral
- **Negro Mate** (`ground` / `ink-light`): fondo en tema oscuro, tinta en tema claro; también el color del monograma JT y del icono de la app.
- **Blanco Hueso** (`ink` / `ground-light`): tinta en tema oscuro, fondo en tema claro. Las píldoras sólidas usan siempre el neutro opuesto al fondo (`--pill` / `--pill-ink`).
- **Tinta Suave** (`ink-soft`, 84% oscuro / 72% claro): etiquetas, pie, enlaces de escena en reposo, texto de detalle de proyecto y notas.
- **Hilo** (`hair`, 18%): el único trazo del sistema; aro interior de la píldora de contorno y de las etiquetas de stack.

### Named Rules
**The Swap Rule.** Los dos temas son el mismo sistema con los neutros intercambiados (`#0E0E0E` ↔ `#F2F1EE`) y los acentos oscurecidos en claro para conservar contraste. Todo color se escribe contra los custom properties (`--ground`, `--ink`, `--crimson`, `--teal`…), nunca como literal, porque el shader lee esos mismos tokens al cambiar de tema.

**The Field Carries Color Rule.** El color saturado vive en el campo y en marcas pequeñas (puntos de 5–12px, separadores, hover de texto grande). Ninguna superficie de interfaz se rellena de carmesí o aqua.

**The Large-Only Accent Text Rule.** Los acentos como color de texto solo aparecen en texto grande (≥30px, peso 600): el carmesí oscuro da 4.17:1 sobre el negro mate y el aqua claro 3.74:1 sobre el hueso, válidos para texto grande, no para cuerpo.

## Typography

**Display Font:** Bricolage Grotesque variable, autoalojada en `/fonts/bricolage.woff2` (pesos 300–800, anchura 75–100%), con `ui-sans-serif, system-ui, sans-serif` de respaldo.
**Body Font:** la misma familia, en su eje óptico de texto.

**Character:** Una sola voz con dos registros. En display se comprime (wdth 78) y se aprieta (−0.04em) hasta volverse un bloque escultórico; en texto se abre (opsz 14) y respira a 1.55. El contraste lo hacen el tamaño y los ejes variables, no un segundo tipo.

### Hierarchy
- **Display** (700, hasta 232px, interlínea 0.84): el nombre "Juan Tobón" en dos líneas, la segunda sangrada 0.42em (0.2em en móvil). Una sola vez en el sitio.
- **Headline** (700, hasta 152px, 0.86): el título de cada escena ("Proyectos", "Stack", "Hablemos"). Una palabra por escena.
- **Contact** (600, hasta 96px, 1.05): los canales de contacto como texto gigante con subrayado que crece.
- **Title** (600, hasta 60px, 1.0): nombres de proyecto en la lista.
- **List** (500, hasta 42px, 1.15): las tecnologías del stack, en línea con separador "·" de color.
- **Lead** (400, hasta 30px, 1.3, máx. 26ch, `text-wrap: balance`): la línea-tesis sobre el nombre; la primera frase en 600.
- **Body** (400, 16px, 1.55, máx. 60ch): texto de detalle de proyecto en `ink-soft`, con los lemas en negrita 600 en `ink`.
- **Small** (13px): etiquetas de stack y la nota de confidencialidad (máx. 62ch).
- **Label** (500, 12px, 0.16em, MAYÚSCULAS): enlaces de escena, tipo de proyecto, encabezados de fila del stack, canal de contacto y pie.
- **Variantes cortas** (`display-short`, `headline-short`, `lead-short`): en pantallas de 760px de alto o menos, el nombre, los títulos y la tesis se escalan por `vh` para que la escena de inicio quepa completa, botones incluidos, sobre el pie.

### Named Rules
**The One Giant Word Rule.** Cada escena tiene exactamente un elemento en display o headline; el resto baja al menos a la escala Title.

**The Axes Not Families Rule.** La jerarquía se construye con los ejes `opsz` y `wdth` de Bricolage. No se añade una segunda familia, ni monoespaciada ni serif.

## Layout

Escenas a pantalla completa apiladas en el mismo lugar: con JS, cada `section.scene` es `position:absolute; inset:0` y solo la activa es visible; el hash de la URL elige la escena. Sin JS, las escenas se apilan con `min-height:100vh` y se desplazan normalmente.

El contenido se ancla abajo (`margin-top:auto`) dentro de un ancho máximo de 1280px; Proyectos se ancla más arriba (`clamp(0px,14vh,160px)`) para dejar sitio al acordeón. El margen lateral es `gutter` en todo el sitio (cromo, escenas, pie). Las escenas tienen 96px arriba y 72px abajo, reducidos a 76px arriba cuando la altura es ≤760px, y se desvanecen con una máscara de 64px en el borde inferior al desplazarse.

El cromo es fijo: monograma JT arriba a la izquierda, enlaces de escena y conmutador de tema arriba a la derecha, pie con ubicación y copyright abajo. El detalle de proyecto pasa a dos columnas (gap 12px 48px) a partir de 900px. Por debajo de 640px se ocultan el tipo de proyecto y el copyright y se reduce la sangría del nombre. Los tamaños display están limitados por `vh` para caber en pantallas bajas (1366×630).

## Elevation & Depth

Plano. No hay sombras proyectadas ni capas tonales de interfaz: la profundidad la pone el propio campo de shader, que vive detrás (z 0), con el grano encima (z 1), el contenido (z 2), el cromo (z 5) y el anillo del cursor (z 9). `box-shadow` solo se usa con `inset` como trazo de 1–1.5px en formas redondas, nunca como elevación.

### Named Rules
**The Flat Over Field Rule.** Ninguna capa de interfaz tiene fondo propio salvo la píldora sólida. La legibilidad sobre el campo se resuelve con tinta de alto contraste y con la intensidad acotada del shader (mezcla máx. 62% en oscuro, 50% en claro), no con paneles o velos.

## Shapes

Circular y redondo, nunca rectangular. Solo existen dos radios: `pill` (999px) para botones, etiquetas y anillos de foco, y `round` (50%) para puntos, el conmutador de tema y el anillo del cursor. Los trazos son aros interiores (`inset 0 0 0 1px|1.5px`) que siguen esa forma.

El punto es la marca recurrente: 5px bajo la escena activa, 12px junto a cada proyecto (escala 0.6 → 1 al activarse; el DRP lleva un punto partido carmesí/aqua), y el disco mitad lleno del conmutador de tema, que gira 180° entre temas. La única forma no circular es el icono de app, un cuadrado redondeado (radio 25%) impuesto por las máscaras de plataforma.

### Named Rules
**The Round Only Rule.** Las cajas, tarjetas y paneles con esquinas no existen. Si algo necesita contenedor visible, es una píldora; si es una marca, es un círculo.

## Components

### Buttons
Píldoras táctiles y ligeras.
- **Shape:** píldora completa (999px), 14px 24px, gap interno 10px.
- **Primary (sólida):** fondo del neutro opuesto (`--pill`), texto `--pill-ink`, 15px/600. Lleva la flecha SVG de 16px con trazo 1.5.
- **Secondary (contorno):** sin fondo, aro interior de 1.5px en `hair`; en hover el aro pasa a `ink`.
- **Hover / Focus:** sube 2px y la flecha avanza 4px, ambos en 0.5s con ease-out exponencial. Foco: contorno de 2px en `--focus` (aqua) a 4px de distancia, redondeado como píldora.

### Chips
- **Style:** etiquetas de stack dentro del detalle de proyecto: 13px, 5px 12px, píldora, aro interior de 1px en `hair`, texto `ink`, separadas 8px. Son estáticas, sin estados.

### Navigation
- **Style:** enlaces de escena como etiquetas (12px, 500, 0.16em, mayúsculas) en `ink-soft`, sin subrayado.
- **Hover / Active:** el texto sube a `ink`; la escena activa (`aria-current="page"`) muestra el punto carmesí de 5px que crece desde escala 0 en 0.5s.
- **Mobile:** el gap entre enlaces baja a 14px y el tracking a 0.12em; el tamaño se mantiene en la escala Label.
- **Conmutador de tema:** botón circular de 34px con un disco de 14px mitad tinta, mitad vacío.

### Lista de proyectos (componente firma)
Un acordeón sin cajas. Cada fila es un botón a todo el ancho: punto de color, nombre en Title y tipo en Label alineado a la derecha. Al pasar sobre la lista, las otras filas bajan a opacidad 0.38 y la activa se desplaza 10px a la derecha; el campo se vuelve hacia el color del proyecto (`data-tone`, `data-split`). Al abrir, el cuerpo se despliega por `grid-template-rows` 0fr → 1fr en 0.7s; solo un proyecto abierto a la vez.

### Enlaces de contacto
Texto gigante (Contact) con su canal encima en Label. En hover o foco, un subrayado de 2px crece de 0 a 100% en 0.7s y el texto toma el acento (aqua para LinkedIn, carmesí para correo).

### Campo de shader y anillo de cursor
El campo es un shader de fragmento fbm a pantalla completa cuyos uniforms son `--ground`, `--crimson` y `--teal` más `tone` (0 carmesí → 1 aqua), `split` (división en diagonal de ambos), `energy` (deformación por el puntero) y `wipe` (disolución al cambiar de escena o tema). Sin WebGL, lo sustituyen dos degradados radiales con los mismos acentos. El anillo del cursor mide 36px, es un aro de 1.5px en `ink` con `mix-blend-mode: difference`, crece a 64px sobre enlaces y botones, y se desactiva en punteros gruesos y con reduced-motion.

## Do's and Don'ts

### Do:
- **Do** escribir todo color contra los custom properties del tema (`--ground`, `--ink`, `--ink-soft`, `--hair`, `--crimson`, `--teal`, `--focus`) para que el shader y ambos temas los sigan.
- **Do** usar `cubic-bezier(.16,1,.3,1)` para todo movimiento: 0.3s en color, 0.5s en transformaciones, 0.6–0.7s en tema y despliegues, 0.9–1s en la entrada de escena.
- **Do** dar a cada escena nueva una sola palabra en Headline anclada abajo a la izquierda, y dejar que el campo cambie de `tone` para marcarla.
- **Do** usar píldoras (999px) para acciones y círculos (50%) para marcas, con trazos de aro interior de 1–1.5px en `hair` o `ink`.
- **Do** mantener el contenido visible por defecto y congelar el campo con `prefers-reduced-motion`.

### Don't:
- **Don't** construir tarjetas, paneles, retículas de cajas ni contenedores con fondo, borde rectangular o sombra proyectada.
- **Don't** volver al lenguaje blueprint de la versión anterior.
- **Don't** rellenar superficies de interfaz con carmesí o aqua, ni usar los acentos como color de texto por debajo de 30px.
- **Don't** añadir una segunda familia tipográfica; la jerarquía sale de los ejes de Bricolage Grotesque.
- **Don't** poner velos o paneles detrás del texto para leerlo sobre el campo; se ajusta la intensidad del shader.

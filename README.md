# 🎵 Formatos de Audio: Esquema e Infografía Interactiva HUD

Infografía web interactiva diseñada con estética Cyberpunk/HUD (_Heads-Up Display_) para la exploración técnica, teórica y visual de las distintas categorías de formatos de audio digital.

Desarrollado para la asignatura **Informática Aplicada II** (Núcleo 5) por **Juan Martín Rodríguez Bizón** (5° B - IPET 424) bajo la supervisión del profesor **Franco Prigent**.

---

## 🚀 Características Principales

- **Diseño Cyberpunk / HUD Interface:** Interfaz futurista estilizada con efectos de neón, brillo (_glow_), marcos de esquinas y fondo dinámico tipo _grid_.
- **Ondas e Indicadores en Tiempo Real:** Renderizado interactivo mediante la API Canvas de HTML5 que simula visualmente la diferencia entre señales crudas (PCM), señales con compresión psicoacústica (Lossy) y paquetes de datos comprimidos (Lossless).
- **Filtro y Navegación Dinámica:** Botones de navegación para filtrar instantáneamente entre formatos sin compresión, compresión con pérdida y compresión sin pérdida.
- **Modal Interactivo de Teoría:** Ventanas modales dinámicas que despliegan la ficha técnica completa de cada formato (características clave, tasa de bits, uso recomendado y ratio de reducción).
- **Diseño Responsivo:** Adaptado para una correcta visualización en monitores de escritorio y dispositivos móviles.

---

## 📂 Estructura del Proyecto

El proyecto está construido con estándares web modernos (HTML5, Tailwind CSS, JavaScript Vanilla y CSS custom):

```text
├── index.html       # Estructura principal, tarjetas y modal interactivo
├── styles.css       # Estilos HUD, reglas responsivas, canvas y animaciones
├── script.js        # Lógica JS, base de datos de formatos, renderizado Canvas y eventos
└── favicon.png      # Icono del sitio web
```

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Semántica limpia y estructurada.
- **Tailwind CSS (CDN):** Framework de utilidades para layout rápido y responsivo.
- **CSS3 Personalizado:** Animaciones, efectos _glow_, fuentes de Google Fonts (_Orbitron_, _Aldrich_) y estilizado de barras de desplazamiento.
- **JavaScript (ES6+):** Manipulación del DOM, bases de datos internas en objetos JSON y animación continua por `requestAnimationFrame`.
- **FontAwesome 6:** Iconografía técnica y de interfaz.

---

## 💻 Instrucciones de Ejecución

No se requiere ningún paso de compilación o instalación de dependencias Node/NPM.

1. Clona o descarga este repositorio en tu equipo local.
2. Abre el archivo `index.html` directamente en cualquier navegador web moderno (Chrome, Edge, Firefox, Brave, Safari).
3. _(Opcional)_ Si utilizas **Visual Studio Code**, puedes ejecutarlo mediante la extensión **Live Server** para una previsualización en vivo.

---

## 📚 Categorías y Formatos Incluidos

1. **Sin Compresión (RAW / PCM)[cite: 25]:**
    - **WAV:** Estándar PC / Grabación[cite: 25]
    - **PCM:** Base digital cruda[cite: 25]
    - **AIFF:** Estándar Apple[cite: 25]

2. **Compresión Con Pérdida (Lossy)[cite: 25]:**
    - **MP3:** Formato universal de audio[cite: 25]
    - **AAC:** Alta eficiencia (YouTube, iTunes, Bluetooth)[cite: 25]
    - **OGG Vorbis:** Formato abierto y libre de licencias[cite: 25]
    - **WMA:** Formato Windows Media[cite: 25]

3. **Compresión Sin Pérdida (Lossless)[cite: 25]:**
    - **FLAC:** Estándar abierto para audiófilos[cite: 25]
    - **ALAC:** Apple Lossless Audio Codec[cite: 25]
    - **APE:** Monkey's Audio[cite: 25]

---

## 👤 Autor e Información Académica

- **Alumno:** Juan Martín Rodríguez Bizón
- **Curso:** 5° B — IPET 424
- **Materia:** Informática Aplicada II (Núcleo 5)
- **Profesor:** Franco Prigent

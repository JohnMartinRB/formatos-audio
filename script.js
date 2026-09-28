tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                aldrich: ["Aldrich"],
                orbitron: ["Orbitron"],
            },
            colors: {
                cyber: {
                    bg: "#080b14",
                    card: "#0f172a",
                    border: "#1e293b",
                    cyan: "#00f0ff",
                    purple: "#7000ff",
                    pink: "#ff007f",
                    glow: "#00f0ff44",
                },
            },
            boxShadow: {
                "neon-cyan": "0 0 15px rgba(0, 240, 255, 0.4), inset 0 0 15px rgba(0, 240, 255, 0.1)",
                "neon-purple": "0 0 15px rgba(112, 0, 255, 0.4), inset 0 0 15px rgba(112, 0, 255, 0.1)",
                "neon-pink": "0 0 15px rgba(255, 0, 127, 0.4), inset 0 0 15px rgba(255, 0, 127, 0.1)",
            },
        },
    },
};
// Detailed data extracted directly from user notebooks and technical audio fundamentals
const categoryData = {
    raw: {
        title: "Sin Compresión (RAW / PCM)",
        badge: "Captura Cruda",
        icon: "fa-solid fa-microchip",
        description:
            "Representación digital directa de una señal de audio analógica a través del proceso de muestreo y cuantificación (PCM), guardando la onda tal cual fue capturada sin aplicar ningún algoritmo de reducción de datos.",
        features: [
            "Preserva la totalidad de la información espectral y dinámica registrada.",
            "Genera archivos de gran tamaño con un peso constante.",
            "Nulo procesamiento de descompresión en reproducción.",
            "Estándar de referencia para grabación, mezcla y masterización.",
        ],
        use: "Estudios de grabación profesional, producción musical y preservación de archivos maestro.",
        specs: "44.1 kHz - 192 kHz / 16-bit - 32-bit float",
        ratio: "Sin reducción (100% Tamaño)",
    },
    lossy: {
        title: "Con Compresión - Con Pérdida (Lossy)",
        badge: "Modelos Psicoacústicos",
        icon: "fa-solid fa-bolt",
        description:
            "Proceso de compresión que elimina de forma permanente datos de audio considerados inaudibles o irrelevantes para el oído humano (enmascaramiento auditivo) para lograr la máxima reducción de tamaño posible.",
        features: [
            "Irreversibilidad: Datos descartados no se pueden recuperar.",
            "Degradación acumulativa al re-codificar o editar de nuevo.",
            "Archivos sumamente livianos ideales para redes.",
            "Tasa de bits (Bitrate) variable según configuración.",
        ],
        use: "Streaming en línea, podcasts, plataformas web y dispositivos portátiles con almacenamiento limitado.",
        specs: "64 kbps - 320 kbps CBR/VBR",
        ratio: "Reducción aproximada: 70% a 90%",
    },
    lossless: {
        title: "Con Compresión - Sin Pérdida (Lossless)",
        badge: "Empaquetado Reversible",
        icon: "fa-solid fa-shield-halved",
        description:
            "Proceso de compresión que reestructura la información binaria del audio mediante algoritmos de codificación eficientes para reducir su tamaño sin desechar ninguna señal de la onda sonora original.",
        features: [
            "Reversibilidad exacta: Flujo de datos 100% idéntico al original bit por bit.",
            "Fidelidad preservada al 100% sin degradación espectral.",
            "Permite realizar codificaciones y copias sin perder calidad.",
            "Ahorro moderado de espacio respecto al formato crudo.",
        ],
        use: "Colecciones de audiófilos, tiendas de música en alta resolución y respaldo seguro de discografías.",
        specs: "Hasta 192 kHz / 24-bit Hi-Res",
        ratio: "Reducción aproximada: 30% a 60%",
    },
};

const formatData = {
    wav: {
        title: "WAV (Waveform Audio File Format)",
        badge: "Sin Compresión",
        icon: "fa-solid fa-file-wave",
        description:
            "Desarrollado por Microsoft e IBM, es el contenedor estándar para audio PCM en Windows. Almacena muestras digitales sin compresión, garantizando la máxima calidad sonora.",
        features: [
            "Compatibilidad casi universal en software de edición.",
            "Soporta múltiples frecuencias de muestreo y profundidades de bit.",
            "Límite de tamaño clásico de archivo de 4 GB.",
        ],
        use: "Grabación en DAWs (Pro Tools, Ableton, Cubase) y masterización.",
        specs: "1411 kbps (16-bit / 44.1kHz Stereo)",
        ratio: "Tamaño completo (10 MB / min)",
    },
    pcm: {
        title: "PCM / RAW Audio",
        badge: "Código Puro",
        icon: "fa-solid fa-network-wired",
        description:
            "Modulación por Impulsos Codificados. Es el método estándar de digitalización del audio analógico mediante muestras de amplitud tomadas a intervalos regulares.",
        features: [
            "Sin encabezados ni metadata adicional en su estado RAW.",
            "Base técnica fundamental de CDs de audio y archivos WAV/AIFF.",
            "Respuesta de frecuencia y rango dinámico puros.",
        ],
        use: "Procesamiento interno de DSP, chips de audio hardware y discos Compact Disc Audio (CD-DA).",
        specs: "1411.2 kbps (Estándar Red Book)",
        ratio: "Sin compresión matemática",
    },
    aiff: {
        title: "AIFF (Audio Interchange Format)",
        badge: "Estándar Apple",
        icon: "fa-brands fa-apple",
        description:
            "Desarrollado por Apple Inc. basado en el formato IFF. Es el equivalente a WAV en el ecosistema Mac para almacenar datos PCM sin compresión.",
        features: [
            "Excelente integración con la arquitectura de macOS e iOS.",
            "Soporta metadata completa (etiquetas ID3 y marcadores).",
            "Calidad idéntica a la señal capturada.",
        ],
        use: "Producción musical en computadoras Mac y almacenamiento profesional de pistas sin pérdida.",
        specs: "1411 kbps - 4608 kbps (24-bit/96kHz)",
        ratio: "Sin reducción de tamaño",
    },
    mp3: {
        title: "MP3 (MPEG-1 Audio Layer III)",
        badge: "Lossy Universal",
        icon: "fa-solid fa-music",
        description:
            "Revolucionó la industria musical. Utiliza algoritmos psicoacústicos para descartar sonidos incomprobables por el oído humano cerca de frecuencias altas o sonidos fuertes.",
        features: [
            "Compatible con prácticamente el 100% de dispositivos del mercado.",
            "Permite tasas de bits desde 32 kbps hasta 320 kbps.",
            "Alta degradación si se vuelve a exportar repetidamente.",
        ],
        use: "Distribución general de música, reproducción en automóviles y dispositivos antiguos.",
        specs: "128 kbps - 320 kbps",
        ratio: "Compresión 10:1 (Aproximadamente 1 MB / min)",
    },
    aac: {
        title: "AAC (Advanced Audio Coding)",
        badge: "Lossy Moderno",
        icon: "fa-solid fa-music",
        description:
            "Diseñado para ser el sucesor del MP3. Logra una mayor calidad de sonido que MP3 a la misma tasa de transferencia de datos gracias a filtros más eficientes.",
        features: [
            "Mejor manejo de frecuencias superiores a 16 kHz.",
            "Formato predeterminado para YouTube, Apple Music, iPhone y Bluetooth de alta fidelidad.",
            "Soporta hasta 48 canales de audio independientes.",
        ],
        use: "Transmisión de video web, servicios de streaming y dispositivos móviles modernos.",
        specs: "128 kbps - 256 kbps AAC-LC / HE-AAC",
        ratio: "Compresión superior con menor pérdida percibida",
    },
    ogg: {
        title: "OGG Vorbis",
        badge: "Lossy Open-Source",
        icon: "fa-solid fa-code",
        description:
            "Formato de contenedor abierto y libre de patentes desarrollado por la Fundación Xiph.Org. Muy popular por su flexibilidad y calidad a bitrates medios.",
        features: [
            "Libre de derechos y licencias comerciales.",
            "Estructura de bitrate variable (VBR) eficiente.",
            "Especialmente optimizado para transmisión continua.",
        ],
        use: "Plataformas como Spotify, motores de videojuegos (Unity/Unreal) y software libre.",
        specs: "96 kbps - 500 kbps (Q0 - Q10)",
        ratio: "Compresión ~8:1 a 12:1",
    },
    wma: {
        title: "WMA (Windows Media Audio)",
        badge: "Lossy Microsoft",
        icon: "fa-brands fa-windows",
        description:
            "Códec de audio propietario desarrollado por Microsoft para competir con MP3 y RealAudio en los inicios de la multimedia en PC.",
        features: [
            "Optimizada integración en el reproductor de Windows Media.",
            "Soporte nativo para protección de derechos digitales (DRM).",
            "Buena calidad a bitrates bajos de época (64 kbps).",
        ],
        use: "Archivos antiguos de librerías Windows y transmisiones en redes corporativas.",
        specs: "64 kbps - 192 kbps",
        ratio: "Compresión similar a MP3",
    },
    flac: {
        title: "FLAC (Free Lossless Audio Codec)",
        badge: "Lossless Abierto",
        icon: "fa-solid fa-gem",
        description:
            "El formato de compresión sin pérdida de información más extendido. Reduce el tamaño del archivo entre un 40% y 60% sin modificar ni un solo bit del audio original.",
        features: [
            "Código abierto y completamente gratuito.",
            "Recuperación exacta de la señal analógica muestreada.",
            "Soporta audio de alta resolución (Hi-Res) de hasta 32-bit/192kHz.",
        ],
        use: "Distribución de música en alta fidelidad (Bandcamp, Tidal) y digitalización de vinilos y CDs.",
        specs: "800 kbps - 3000 kbps (Variable)",
        ratio: "Reducción de peso: 50% vs WAV",
    },
    alac: {
        title: "ALAC (Apple Lossless Codec)",
        badge: "Lossless Apple",
        icon: "fa-brands fa-apple",
        description:
            "Desarrollado por Apple para ofrecer audio comprimido sin pérdida en sus dispositivos. Aunque inicialmente era cerrado, actualmente es de código abierto.",
        features: [
            "Usa extensión de archivo .m4a.",
            "Compatibilidad perfecta con iPhone, iPad, Mac y Apple Music Lossless.",
            "Descompresión muy rápida en procesadores móviles.",
        ],
        use: "Catálogo sin pérdida de Apple Music y bibliotecas musicales en macOS.",
        specs: "VBR dinámico según complejidad armónica",
        ratio: "Reducción de peso: 40% - 55%",
    },
    ape: {
        title: "APE (Monkey's Audio)",
        badge: "Lossless Alta Tasa",
        icon: "fa-solid fa-cube",
        description:
            "Un formato de compresión sin pérdida con ratios de reducción ligeramente superiores a FLAC, aunque requiere más recursos del procesador para decodificarse.",
        features: [
            "Mayor ratio de compresión en archivos musicales complejos.",
            "Mayor consumo de procesador en tiempo de reproducción.",
            "Menor compatibilidad en reproductores portátiles hardware.",
        ],
        use: "Almacenamiento de respaldos en PC de escritorio y compresión extrema sin pérdida.",
        specs: "Sintaxis de compresión simétrica",
        ratio: "Reducción de peso: 55% - 65%",
    },
};

function filterCategory(cat) {
    const cols = ["raw", "lossy", "lossless"];
    const tabs = ["all", "raw", "lossy", "lossless"];

    // Reset tabs styling
    tabs.forEach((t) => {
        const btn = document.getElementById(`tab-${t}`);
        if (btn) {
            btn.className =
                "px-4 py-1.5 rounded-full font-aldrich tracking-wider transition-all bg-slate-900/80 text-slate-400 border border-slate-700 hover:border-cyan-500";
        }
    });

    // Highlight selected tab
    const activeBtn = document.getElementById(`tab-${cat}`);
    if (activeBtn) {
        activeBtn.className =
            "px-4 py-1.5 rounded-full font-aldrich tracking-wider transition-all bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-neon-cyan";
    }

    // Show/Hide Grid columns
    cols.forEach((c) => {
        const colEl = document.getElementById(`col-${c}`);
        if (cat === "all" || cat === c) {
            colEl.style.display = "block";
            colEl.classList.remove("opacity-20", "scale-95");
        } else {
            colEl.style.display = "none";
        }
    });
}

function openCategoryModal(key) {
    const data = categoryData[key];
    if (!data) return;

    document.getElementById("modal-icon").className =
        `w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xl font-bold font-aldrich`;
    document.getElementById("modal-icon").innerHTML = `<i class="${data.icon}"></i>`;
    document.getElementById("modal-badge").innerText = data.badge;
    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-description").innerText = data.description;

    const featuresContainer = document.getElementById("modal-features");
    featuresContainer.innerHTML = data.features
        .map(
            (f) =>
                `<li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-cyan-400 mt-0.5"></i><span>${f}</span></li>`,
        )
        .join("");

    document.getElementById("modal-use").innerText = data.use;
    document.getElementById("modal-specs").innerText = data.specs;
    document.getElementById("modal-compression-ratio").innerText = data.ratio;

    document.getElementById("modal-backdrop").classList.remove("hidden");
    drawModalWaveform(key);
}

function openFormatModal(key) {
    const data = formatData[key];
    if (!data) return;

    document.getElementById("modal-icon").className =
        `w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400 text-xl font-bold font-aldrich`;
    document.getElementById("modal-icon").innerHTML = `<i class="${data.icon}"></i>`;
    document.getElementById("modal-badge").innerText = data.badge;
    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-description").innerText = data.description;

    const featuresContainer = document.getElementById("modal-features");
    featuresContainer.innerHTML = data.features
        .map(
            (f) =>
                `<li class="flex items-start gap-2"><i class="fa-solid fa-angle-right text-purple-400 mt-0.5"></i><span>${f}</span></li>`,
        )
        .join("");

    document.getElementById("modal-use").innerText = data.use;
    document.getElementById("modal-specs").innerText = data.specs;
    document.getElementById("modal-compression-ratio").innerText = data.ratio;

    document.getElementById("modal-backdrop").classList.remove("hidden");
    drawModalWaveform(key);
}

function closeModal() {
    document.getElementById("modal-backdrop").classList.add("hidden");
}

let animFrameId;

function animateWaveforms() {
    const time = Date.now() * 0.003;

    // Render Canvas 1: RAW Waveform (Clean & Dense Sine)
    const cRaw = document.getElementById("canvas-raw");
    if (cRaw) {
        const ctx = cRaw.getContext("2d");
        cRaw.width = cRaw.offsetWidth;
        cRaw.height = cRaw.offsetHeight;
        ctx.clearRect(0, 0, cRaw.width, cRaw.height);
        ctx.beginPath();
        ctx.strokeStyle = "#00f0ff";
        ctx.lineWidth = 2;

        for (let x = 0; x < cRaw.width; x++) {
            const y = cRaw.height / 2 + Math.sin(x * 0.05 + time) * 18 * Math.cos(x * 0.01 + time * 0.5);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    // Render Canvas 2: Lossy Waveform (Quantized / Stepped)
    const cLossy = document.getElementById("canvas-lossy");
    if (cLossy) {
        const ctx = cLossy.getContext("2d");
        cLossy.width = cLossy.offsetWidth;
        cLossy.height = cLossy.offsetHeight;
        ctx.clearRect(0, 0, cLossy.width, cLossy.height);
        ctx.beginPath();
        ctx.strokeStyle = "#ff007f";
        ctx.lineWidth = 2;

        const step = 8;
        for (let x = 0; x < cLossy.width; x += step) {
            const rawY = cLossy.height / 2 + Math.sin(x * 0.05 + time) * 18 * Math.cos(x * 0.01 + time * 0.5);
            const quantizedY = Math.round(rawY / 6) * 6; // Stepped effect
            ctx.rect(x, quantizedY, step - 1, 3);
        }
        ctx.fillStyle = "#ff007f";
        ctx.fill();
    }

    // Render Canvas 3: Lossless Waveform (Slightly compressed packet blocks)
    const cLossless = document.getElementById("canvas-lossless");
    if (cLossless) {
        const ctx = cLossless.getContext("2d");
        cLossless.width = cLossless.offsetWidth;
        cLossless.height = cLossless.offsetHeight;
        ctx.clearRect(0, 0, cLossless.width, cLossless.height);

        ctx.fillStyle = "rgba(112, 0, 255, 0.6)";
        for (let x = 0; x < cLossless.width; x += 6) {
            const h = Math.abs(Math.sin(x * 0.04 + time) * Math.cos(x * 0.02 + time)) * (cLossless.height - 10);
            ctx.fillRect(x, (cLossless.height - h) / 2, 4, h);
        }
    }

    requestAnimationFrame(animateWaveforms);
}

// Draw waveform inside open Modal
function drawModalWaveform(type) {
    const canvas = document.getElementById("modal-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00f0ff";

    const numBars = Math.floor(canvas.width / 5);
    for (let i = 0; i < numBars; i++) {
        const height = Math.random() * (canvas.height - 10) + 5;
        ctx.fillRect(i * 5, (canvas.height - height) / 2, 3, height);
    }
}

// Start animations on load
window.onload = function () {
    animateWaveforms();
};

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

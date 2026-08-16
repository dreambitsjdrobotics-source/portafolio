const proyectos = [
{
    id: 1,
    titulo: "Consultoría para Mipyme",
    descripcion: "Costos y marketing para manos creativas",
    imagenes: [
        "assets/img/proyectos/p1/hero.webp",      // primera imagen — el hero
        "assets/img/proyectos/p1/detalle1.webp",
        "assets/img/proyectos/p1/detalle2.webp"
    ],
    introduccion: "Manos Creativas (manoscreativas1954) es un emprendimiento dedicado a la confección artesanal de ropa, bolsos y accesorios, con especialidad en cueros y tejidos. Su propietaria, una mujer con años de experiencia en el oficio, buscaba fortalecer dos frentes clave de su negocio: entender realmente cuánto le costaba producir cada pieza y ganar visibilidad en redes sociales para llegar tanto a su público tradicional de mujeres mayores como a un público más joven interesado en sus vestidos de baño tejidos.",
    personajes: [
        "Propietaria del emprendimiento, artesana con amplia trayectoria en confección",
        "Yo como consultor de administración de empresas y estratega de contenido"
    ],
    mi_rol: "Actué como consultor integral, cubriendo dos frentes: por un lado, el diagnóstico y diseño de una estructura de costos que le permitiera a la propietaria fijar precios con criterio real de rentabilidad; por otro, el diseño de una estrategia de contenido para Instagram, incluyendo la elaboración de guiones, la grabación y edición de los videos, con el objetivo de posicionar la marca como una autoridad reconocible en su nicho.",
    retos: "El negocio no contaba con ninguna estructura de costos definida: los precios se fijaban de forma intuitiva, sin diferenciar materia prima, mano de obra y otros gastos asociados a la producción, lo que dificultaba saber con certeza si cada pieza dejaba una ganancia real. En el frente de marketing, el reto fue la ausencia de contenido audiovisual que diera a conocer la marca; era necesario crear videos desde cero que comunicaran el valor de un producto hecho a mano y que conectaran tanto con clientas mayores fieles a la marca como con un público más joven, sin perder la esencia artesanal del negocio.",
    solucion: "Para la estructura de costos, se levantó junto a la propietaria un desglose detallado de cada línea de producto (vestidos de baño, salidas de baño, bolsos y pulseras), identificando materia prima, tiempo de trabajo y otros costos indirectos, para llegar a un precio de venta que reflejara un margen de ganancia claro y sostenible en el tiempo. <br><br> Para la estrategia de contenido, se definieron guiones simples y auténticos que mostraran el proceso de creación de cada pieza, resaltando el trabajo manual como diferencial frente a productos de fábrica. La grabación se realizó con una GoPro y un micrófono DJI Mic Mini para asegurar buena calidad de imagen y audio incluso en condiciones caseras, y la edición se hizo en CapCut, priorizando un formato ágil y cercano, pensado para el consumo en Instagram. <br><br> El resultado fue un conjunto de videos publicados en la cuenta de la marca, junto con una base de precios coherente que la propietaria puede replicar de forma autónoma en futuras piezas.",
    herramientas: [
        {nombre: "Excel", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"},
        {nombre: "GoPro", logo: "assets/img/logos/gopro.svg"},
        {nombre: "DJI Mic Mini", logo: "assets/img/logos/dji.svg"},
        {nombre: "CapCut", logo: "assets/img/logos/capcut.svg"}
    ],
    anexos: [
        { tipo: "web", url: "https://instagram.com/manoscreativas1954", texto: "Ver Instagram" }
    ]
},
    {
        id: 2,
        titulo: "Proyecto oculto",
        descripcion: "Descripción oculta del proyecto",
        imagenes: [
            "assets/img/proyectos/p2/hero.webp",      // primera imagen — el hero
            "assets/img/proyectos/p2/detalle1.webp",
            "assets/img/proyectos/p2/detalle2.webp"
        ],
        introduccion: "contexto del proyecto...",
        personajes: ["Cliente", "Equipo"],
        mi_rol: "Desarrollador principal...",
        retos: "Los principales retos fueron...",
        solucion: "Se resolvió mediante...",
        herramientas: [
            {nombre: "React", logo: "assets/img/logos/react.svg"}
        ],
        anexos: [
            { tipo: "github", url: "https://github.com/...", texto: "Ver código"},
            { tipo: "web", url: "https://...", texto: "Ver proyecto" }
        ]
    },
    {
        id: 3,
        titulo: "Proyecto oculto",
        descripcion: "Descripción oculta del proyecto",
        imagenes: [
            "assets/img/proyectos/p3/hero.webp",      // primera imagen — el hero
            "assets/img/proyectos/p3/detalle1.webp",
            "assets/img/proyectos/p3/detalle2.webp"
        ],
        introduccion: "contexto del proyecto...",
        personajes: ["Cliente", "Equipo"],
        mi_rol: "Desarrollador principal...",
        retos: "Los principales retos fueron...",
        solucion: "Se resolvió mediante...",
        herramientas: [
            {nombre: "React", logo: "assets/img/logos/react.svg"}
        ],
        anexos: [
            { tipo: "github", url: "https://github.com/...", texto: "Ver código"},
            { tipo: "web", url: "https://...", texto: "Ver proyecto" }
        ]
    },
    {
        id: 4,
        titulo: "Proyecto oculto",
        descripcion: "Descripción oculta del proyecto",
        imagenes: [
            "assets/img/proyectos/p4/hero.webp",      // primera imagen — el hero
            "assets/img/proyectos/p4/detalle1.webp",
            "assets/img/proyectos/p4/detalle2.webp"
        ],
        introduccion: "contexto del proyecto...",
        personajes: ["Cliente", "Equipo"],
        mi_rol: "Desarrollador principal...",
        retos: "Los principales retos fueron...",
        solucion: "Se resolvió mediante...",
        herramientas: [
            {nombre: "Python", logo: "assets/img/logos/react.svg"}
        ],
        anexos: [
            { tipo: "github", url: "https://github.com/...", texto: "Ver código"},
            { tipo: "web", url: "https://...", texto: "Ver proyecto" }
        ]
    },
    {
        id: 5,
        titulo: "Robot evita obstáculos",
        descripcion: "Un carro fabricado con arduino hecho en un día",
        imagenes: [
            "assets/img/proyectos/p5/hero.webp",      // primera imagen — el hero
            "assets/img/proyectos/p5/detalle1.webp",
            "assets/img/proyectos/p5/detalle2.webp"
        ],
        introduccion: "Este proyecto nació cuando un estudiante me pidió ayuda para un proyecto escolar. El reto consistía en construir un robot con materiales fáciles de conseguir, específicamente un carro capaz de detectar y evitar obstáculos de manera autónoma.",
        personajes: [
            "Estudiante de colegio destacado, encargado de presentar un proyecto especial", 
            "Yo como mentor y colaborador técnico"],
        mi_rol: "Actué como asesor y tutor técnico. El estudiante ya sabía ensamblar el robot gracias a tutoriales en internet, pero necesitaba entender la programación detrás del funcionamiento. Le enseñé paso a paso la lógica de programación mientras construía mi propio carro de demostración, aceptando el reto de completarlo en menos de un día",
        retos: "El reto principal fue enseñar un código funcional y con buenas prácticas, sin que resultara demasiado avanzado para el nivel del estudiante. Además, fue necesario calibrar los tiempos de giro para que el robot reaccionara con precisión ante los obstáculos, ajustar los sensores para lograr una detección adecuada y a tiempo, y equilibrar físicamente el robot para que se moviera de forma estable.",
        solucion: "Para mantener el código simple pero profesional, organicé el programa siguiendo una estructura clara: primero las constantes de hardware (pines de motores, sensor ultrasónico y servo), luego las variables de control, y finalmente las funciones separadas por responsabilidad (avanzar, girar, medir distancia, mover la cabeza del sensor). <br><br> La detección de obstáculos se resolvió usando un sensor ultrasónico montado en un servomotor, que permite \"mirar\" hacia adelante, izquierda y derecha antes de decidir hacia dónde girar. Cuando el robot detecta un obstáculo muy cerca, se detiene, revisa ambos lados, y si no encuentra un camino libre, ejecuta un giro de media vuelta. <br><br> Esta estructura modular no solo resolvió el problema de navegación, sino que también facilitó enseñarle al estudiante la lógica de programación de forma progresiva, validando cada función con pruebas unitarias antes de integrarlas al sistema completo.",
        herramientas: [
            {nombre: "Arduino", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Arduino_IDE_logo.svg/1280px-Arduino_IDE_logo.svg.png?_=20230510165732"},
            {nombre: "Electrónica", logo: "https://www.svgrepo.com/show/325134/electronics-chip.svg"}
        ],
        anexos: [
            { tipo: "github", url: "https://github.com/...", texto: "Ver código"},
            { tipo: "web", url: "https://youtube.com/shorts/PuMo8utC0-4?si=fQINh4m0--GfWw1u", texto: "Ver proyecto" }
        ]
    }
]

// Lógica para la animación de tipeo
const nombre = "Juan David Jiménez López"
let i = 0
const nombreDom = document.querySelector('.hero-content h1')

if (nombreDom){
    const nombreInterlval = setInterval(function(){
        nombreDom.textContent += nombre[i]
        i++
        if(i === nombre.length){
            clearInterval(nombreInterlval) // para cuando termina
        }
    }, 70)
}




// cagar la tarjetas del carrusel dinamicamente

const slides = document.getElementById('slides')
const indicadores = document.getElementById('indicadores')

if (slides && indicadores ){
proyectos.forEach(function(proyecto, index){

    // Acá se crea el indicador
    indicadores.innerHTML += `
    <button data-bs-target="#carruselProyectos"
            data-bs-slide-to="${index}"
            class="${index === 0 ? 'active' : ''}">
    </button>`

    // Crear el slide 
    slides.innerHTML += `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <div class="proyecto-card">
            <img src="assets/img/proyectos/p${proyecto.id}/hero.webp" alt="${proyecto.titulo}" onerror="this.src='https://placehold.co/600x400'">
            <div class="proyecto-card-degradado"></div>
            <div class="proyecto-card-texto">
                <h3>${proyecto.titulo}</h3>
                <p>${proyecto.descripcion}</p>
                <a href="pages/proyecto-detalle.html?id=${proyecto.id}">Ver más</a>
            </div>    
        </div>
    </div>`
})
}

/////////////////////////////////////////////////////////////////////////////////
// Lógica para proyecto-detalle.html
const contenedor = document.getElementById('detalle-proyecto')

if(contenedor){
    // Aquí se lee el id de la url
    const params = new URLSearchParams(window.location.search)
    const id = parseInt(params.get('id'))

    // Se busca el proyecto en el array
    const proyecto = proyectos.find(function(p) {
        return p.id === id
    })

    //Mostrando el proyecto
    if (proyecto) {
        contenedor.innerHTML = `
        <!-- Hero con primera imagen -->
        <div class="detalle-hero" style="background-image: url('../assets/img/proyectos/p${proyecto.id}/hero.webp')">
            <div class="detalle-hero-texto animado">
                <h1>${proyecto.titulo}</h1>
                <p>${proyecto.descripcion}</p>
            </div>
        </div>

        <!-- Introducción -->
        <section class="detalle-seccion animado">
            <h2>Introducción</h2>
            <div class="detalle-imagen-texto">
                    <p>${proyecto.introduccion}</p>
                <img src="../assets/img/proyectos/p5/imgDetalle.webp" alt="foto Juan David">
            </div>  
        </section>

        <!-- Personajes -->
        <section class="detalle-seccion animado">
            <h2>Personajes</h2>
            <div class="detalle-imagen-texto">
                <img src="../assets/img/proyectos/p5/imgPersonaje.webp" alt="foto Juan David">
                <ul>
                    ${proyecto.personajes.map(function(p) {
                        return `<li>${p}</li>`
                    }).join('')}
                </ul>
            </div>
        </section>

        <!-- Mi rol -->
        <section class="detalle-seccion animado">
            <h2>Mi rol</h2>
            <div class="detalle-imagen-texto">
                <p>${proyecto.mi_rol}</p>
                <img src="../assets/img/proyectos/p5/rol.webp" alt="foto Juan David">
            </div>
        </section>

        <!-- Retos -->
        <section class="fondo-amarillo">
            <div class="detalle-seccion animado">     
                <h2>Retos</h2>
                <div class="detalle-imagen-texto">
                    <img src="../assets/img/proyectos/p5/reto.webp" alt="foto Juan David">
                    <p>${proyecto.retos}</p>
                </div>
            </div>
        </section>

        <!-- Solución -->
        <section class="detalle-seccion animado">
            <h2>Solución</h2>
            <div class="detalle-imagen-texto">
                <p>${proyecto.solucion}</p>
                <img src="../assets/img/proyectos/p5/solucion.webp" alt="foto Juan David">
            </div>
        </section>

        <!-- Herramientas -->
        <section class="fondo-amarillo">
            <div class="detalle-seccion animado">
                <h2>Herramientas</h2>
                <div class="herramientas">
                    ${proyecto.herramientas.map(function(h) {
                        return `<div class="herramienta">
                                    <img src="${h.logo}" alt="${h.nombre}" onerror="https://placehold.co/50x50">
                                    <span>${h.nombre}</span>
                                </div>`
                    }).join('')}
                </div>
            </div>
        </section>

        <!-- Anexos -->
        <section class="detalle-seccion">
            <h2>Anexos</h2>
            <div class="anexo animado">
                ${proyecto.anexos.map(function(a) {
                    return `<a href="${a.url}" target="_blank" class="anexo-btn">${a.texto}</a>`
                }).join('')}
            </div>
        </section>

        <!-- Volver -->
        <div class="detalle-seccion">
            <a href="../index.html#proyectos" class="btn-volver">← Volver al portafolio</a>
        </div>`
    } else {
    contenedor.innerHTML = `<p>Proyecto no encontrado</p>`
    }
}
/////////////////////////////////////////////////////////////////////////////////

const slidesProyectos = document.getElementById('slides-pagina')
const indicadoresPagina = document.getElementById(('indicadores-pagina'))

if(slidesProyectos){
    // Dividir proyectos en grupos de 3
    for(let i = 0; i < proyectos.length; i += 3){


        if(indicadoresPagina){
            indicadoresPagina.innerHTML += `
                <button data-bs-target="#carruselProyectosPagina"
                    data-bs-slide-to="${i / 3}"
                    class="${i === 0 ? 'active' : ''}">
            </button>`
        }

        const grupo = proyectos.slice(i, i + 3)
        
        const tarjetas = grupo.map(function(proyecto){
            return `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="proyecto-card">
                    <img src="../assets/img/proyectos/p${proyecto.id}/hero.webp" alt="${proyecto.titulo}" onerror="this.src='https://placehold.co/600x400'">
                    <div class="proyecto-card-degradado"></div>  
                    <div class="proyecto-card-texto">  
                        <h3>${proyecto.titulo}</h3>
                        <p>${proyecto.descripcion}</p>
                        <a href="proyecto-detalle.html?id=${proyecto.id}&desde=proyectos">Ver más</a>
                    </div>    
                </div>
            </div>`
        }).join('')

        slidesProyectos.innerHTML += `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <div class="row">
                ${tarjetas}
            </div>
        </div>`
    }
}

const barraBuscadora = document.getElementById('buscador')

if (barraBuscadora){
    renderCuadricula(proyectos)
    barraBuscadora.addEventListener('input', function(){
        const textoBusqueda = barraBuscadora.value.toLowerCase()
        const proyectosBuscados = proyectos.filter(function(proyecto){
            return proyecto.herramientas.some(function(h){
                    return h.nombre.toLowerCase().includes(textoBusqueda)
                })
        })
        renderCuadricula(proyectosBuscados)
    })
    
}

function renderCuadricula(lista){
    const cuadricula = document.getElementById('cuadricula')
    if(cuadricula){
        cuadricula.innerHTML = ''
        lista.forEach(function(proyecto, index){
        cuadricula.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 animado">
                <div class="proyecto-card">
                    <img src="../assets/img/proyectos/p${proyecto.id}/hero.webp" alt="${proyecto.titulo}" onerror="this.src='https://placehold.co/600x400'">
                    <div class="proyecto-card-degradado"></div>
                    <div class="proyecto-card-texto">
                        <h3>${proyecto.titulo}</h3>
                        <p>${proyecto.descripcion}</p>
                        <a href="proyecto-detalle.html?id=${proyecto.id}&desde=proyectos">Ver más</a>
                    </div>
                </div>
            </div>`
        })
        observarAnimaciones(cuadricula)
    }
}


// Animaciones al hacer scroll
// Observador reutilizable para las animaciones de scroll
var miObservador

function observarAnimaciones(contenedor){
    const base = contenedor || document
    const elementos = base.querySelectorAll('.animado')

    if(!miObservador){
        miObservador = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    entry.target.classList.add('visible')
                    miObservador.unobserve(entry.target)
                }
            })
        }, { threshold: 0.1 })
    }

    elementos.forEach(function(elemento){
        miObservador.observe(elemento)
    })
}

observarAnimaciones()




// mandar correo
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "3beba88b-7f30-4a9d-b43c-0fa1928556ff");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("¡Mensaje enviado correctamente!");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Ocurrió un error. Inténtalo nuevamente.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

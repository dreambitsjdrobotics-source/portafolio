const proyectos = [
    {
        id: 1,
        titulo: "Proyecto 1",
        descripcion: "Descripción breve del proyecto",
        imagenes: [
            "assets/img/proyectos/p1/hero.webp",      // primera imagen — el hero
            "assets/img/proyectos/p1/detalle1.webp",
            "assets/img/proyectos/p1/detalle2.webp"
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
        id: 2,
        titulo: "Proyecto 2",
        descripcion: "Descripción breve del proyecto",
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
        titulo: "Proyecto 3",
        descripcion: "Descripción breve del proyecto",
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
        titulo: "Proyecto 4",
        descripcion: "Descripción breve del proyecto",
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
            {nombre: "Python", logo: "assets/img/logos/react.svg"}
        ],
        anexos: [
            { tipo: "github", url: "https://github.com/...", texto: "Ver código"},
            { tipo: "web", url: "https://...", texto: "Ver proyecto" }
        ]
    },
    {
        id: 5,
        titulo: "Proyecto 5",
        descripcion: "Descripción breve del proyecto",
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
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
            <a href="pages/proyecto-detalle.html?id=${proyecto.id}">Ver más</a>
        </div>
    </div>`
})
}


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
            <div class="detalle-hero-texto">
                <h1>${proyecto.titulo}</h1>
                <p>${proyecto.descripcion}</p>
            </div>
        </div>

        <!-- Introducción -->
        <section class="detalle-seccion">
            <h2>Introducción</h2>
            <p>${proyecto.introduccion}</p>
        </section>

        <!-- Personajes -->
        <section class="detalle-seccion">
            <h2>Personajes</h2>
            <ul>
                ${proyecto.personajes.map(function(p) {
                    return `<li>${p}</li>`
                }).join('')}
            </ul>
        </section>

        <!-- Mi rol -->
        <section class="detalle-seccion">
            <h2>Mi rol</h2>
            <p>${proyecto.mi_rol}</p>
        </section>

        <!-- Retos -->
        <section class="fondo-amarillo">
            <div class="detalle-seccion">     
                <h2>Retos</h2>
                <p>${proyecto.retos}</p>
            </div>
        </section>

        <!-- Solución -->
        <section class="detalle-seccion">
            <h2>Solución</h2>
            <p>${proyecto.solucion}</p>
        </section>

        <!-- Herramientas -->
        <section class="fondo-amarillo">
            <div class="detalle-seccion">
                <h2>Herramientas</h2>
                <div class="herramientas">
                    ${proyecto.herramientas.map(function(h) {
                        return `<div class="herramienta">
                                    <img src="https://placehold.co/50x50" alt="${h.nombre}">
                                    <span>${h.nombre}</span>
                                </div>`
                    }).join('')}
                </div>
            </div>
        </section>

        <!-- Anexos -->
        <section class="detalle-seccion">
            <h2>Anexos</h2>
            <div class="anexo">
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
                    <h3>${proyecto.titulo}</h3>
                    <p>${proyecto.descripcion}</p>
                    <a href="proyecto-detalle.html?id=${proyecto.id}&desde=proyectos">Ver más</a>
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
        const textoBusqueda = barraBuscadora.value
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
            <div class="col-12 col-md-6 col-lg-4">
                <div class="proyecto-card">
                    <img src="../assets/img/proyectos/p${proyecto.id}/hero.webp" alt="${proyecto.titulo}" onerror="this.src='https://placehold.co/600x400'">
                    <h3>${proyecto.titulo}</h3>
                    <p>${proyecto.descripcion}</p>
                    <a href="proyecto-detalle.html?id=${proyecto.id}&desde=proyectos">Ver más</a>
                </div>
            </div>`
        })
    }
}

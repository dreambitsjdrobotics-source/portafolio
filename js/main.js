const proyectos = [
    {
        id: 1,
        titulo: "Proyecto 1",
        descripcion: "Descripción breve del proyecto",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        imagen: "assets/img/proyecto1.jpg",
        detalle: "Descripción larga y detallada del proyecto"
    },
    {
        id: 2,
        titulo: "Proyecto 2",
        descripcion: "Descripción breve del proyecto",
        tecnologias: ["Python", "Django"],
        imagen: "assets/img/proyecto2.jpg",
        detalle: "Descripción larga y detallada del proyecto"
    },
    {
        id: 3,
        titulo: "Proyecto 3",
        descripcion: "Descripción breve del proyecto",
        tecnologias: ["React", "Node.js"],
        imagen: "assets/img/proyecto3.jpg",
        detalle: "Descripción larga y detallada del proyecto"
    }
]



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
            <img src="https://placehold.co/600x400" alt="${proyecto.titulo}">
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
        <div class="detalle-header">
            <a href="../index.html">← Volver</a>
            <h1>${proyecto.titulo}</h1>
            <img src="https://placehold.co/800x400" alt="${proyecto.titulo}">
            <p>${proyecto.detalle}</p>
            <div class="tecnologias">
                ${proyecto.tecnologias.map(function(tec){
                    return `<span class="badge">${tec}</span>`
                }).join('')}
            </div>
        </div>`
    }
} else {
    contenedor.innerHTML = `<p>Proyecto no encontrado</p>`
}
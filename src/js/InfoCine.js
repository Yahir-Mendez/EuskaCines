// Recupera la información del cine almacenada en localStorage y la convierte a un objeto JavaScript
const Data = JSON.parse(localStorage.getItem("cine"));

// Ejecuta la función 'cineInfo' cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    cineInfo();
});

// Función principal que organiza la visualización de la información del cine
const cineInfo = () => {
    // Muestra la descripción del cine (nombre, descripción y contacto)
    descripcionCine(Data.cine, Data.descripcion, Data.contacto);
    // Muestra los horarios disponibles en cada sala del cine
    horarios(Data.salas);
};

// Función para mostrar la descripción del cine
const descripcionCine = (tit, des, cont) => {
    const title = document.getElementById("cineTitle"); // Selecciona el elemento donde se mostrará el título
    title.innerText = tit.toUpperCase(); // Inserta el nombre del cine en mayúsculas

    const description = document.getElementById("cineParrafo"); // Selecciona el elemento para la descripción
    description.innerText = des; // Inserta la descripción del cine

    const contacto = document.getElementById("cineContact"); // Selecciona el elemento para el contacto
    contacto.innerText = cont.toUpperCase(); // Inserta el contacto en mayúsculas
};

// Función para mostrar los horarios de las salas
const horarios = (salas) => {
    const fragment = document.createDocumentFragment(); // Fragmento para evitar reflow al insertar elementos en el DOM
    const container = document.getElementById("horariosGrid"); // Contenedor principal para los horarios

    // Itera sobre cada sala y filtra los horarios disponibles
    salas.forEach(sala => {
        let s = sala.sala; // Número de la sala
        let hour = sala.horarios; // Array de horarios para la sala

        // Filtra los horarios de la película seleccionada
        let h = filterPelis(hour); 
        if (h != null) { // Si hay horarios disponibles
            // Crea los elementos necesarios para representar la tarjeta del horario
            const boxContainer = document.createElement('div');
            boxContainer.classList.add("billboard__card-item"); // Contenedor principal de la tarjeta

            const link = document.createElement('a');
            link.setAttribute("href", "#"); // Enlace vacío (puede ser actualizado con funcionalidad real)

            const boxCard = document.createElement('div');
            boxCard.classList.add("tiket"); // Contenedor de la información del horario

            const span = document.createElement('span');
            span.classList.add("tiket__info"); // Estilo para el texto de la sala y horario
            span.innerHTML = `Sala ${s} <br/> ${h.hora}`; // Inserta el número de sala y la hora seleccionada

            // Ensambla los elementos creados en el orden correcto
            boxCard.appendChild(span);
            link.appendChild(boxCard);
            boxContainer.appendChild(link);
            fragment.appendChild(boxContainer);
        }
    });

    // Inserta todos los elementos creados en el contenedor principal
    container.appendChild(fragment);
};

// Función que filtra los horarios para mostrar solo los de la película seleccionada
const filterPelis = (horarios) => {
    const selectedPeli = localStorage.getItem("idmovie") || null; // Recupera el ID de la película seleccionada
    let resultado = null; // Inicializa el resultado como nulo

    // Recorre los horarios y busca si el ID coincide con la película seleccionada
    horarios.some(item => {
        if (item.pelicula_id == selectedPeli) { // Si el ID coincide
            resultado = item; // Guarda el horario en 'resultado'
            return true; // Detiene el recorrido
        }
        return false; // Continúa el recorrido si no coincide
    });

    return resultado; // Retorna el horario encontrado o null si no existe
};

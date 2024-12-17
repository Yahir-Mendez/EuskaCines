// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Recupera los datos del cine desde el localStorage
    const cineData = JSON.parse(localStorage.getItem('cine'));

    // Si hay datos del cine en el localStorage
    if (cineData) {
        // Muestra el nombre del cine en mayúsculas
        document.getElementById('cineTitle').textContent = cineData.cine.toUpperCase();
        // Muestra la descripción del cine
        document.getElementById('cineParrafo').textContent = cineData.descripcion;
        // Muestra el contacto del cine en mayúsculas
        document.getElementById('cineContact').textContent = cineData.contacto.toUpperCase();
        // Muestra los horarios de las salas del cine
        horarios(cineData.salas);
    } else {
        // Si no hay datos del cine, muestra un error en la consola
        console.error('No se encontraron datos del cine en localStorage');
    }
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
    // Selecciona el elemento donde se mostrará el título
    const title = document.getElementById("cineTitle");
    // Inserta el nombre del cine en mayúsculas
    title.innerText = tit.toUpperCase();

    // Selecciona el elemento para la descripción
    const description = document.getElementById("cineParrafo");
    // Inserta la descripción del cine
    description.innerText = des;

    // Selecciona el elemento para el contacto
    const contacto = document.getElementById("cineContact");
    // Inserta el contacto en mayúsculas
    contacto.innerText = cont.toUpperCase();
};

// Función para mostrar los horarios de las salas
const horarios = (salas) => {
    // Crea un fragmento para evitar reflow al insertar elementos en el DOM
    const fragment = document.createDocumentFragment();
    // Selecciona el contenedor principal para los horarios
    const container = document.getElementById("horariosGrid");

    // Itera sobre cada sala y filtra los horarios disponibles
    salas.forEach(sala => {
        // Número de la sala
        let s = sala.sala;
        // Array de horarios para la sala
        let hour = sala.horarios;

        // Filtra los horarios de la película seleccionada
        let h = filterPelis(hour);
        // Si hay horarios disponibles
        if (h != null) {
            // Crea los elementos necesarios para representar la tarjeta del horario
            const boxContainer = document.createElement('div');
            // Contenedor principal de la tarjeta
            boxContainer.classList.add("billboard__card-item");

            // Enlace vacío (puede ser actualizado con funcionalidad real)
            const link = document.createElement('a');
            link.setAttribute("href", "/src/pages/pago.html");

            // Contenedor de la información del horario
            const boxCard = document.createElement('div');
            boxCard.classList.add("tiket");

            // Estilo para el texto de la sala y horario
            const span = document.createElement('span');
            span.classList.add("tiket__info");
            // Inserta el número de sala y la hora seleccionada
            span.innerHTML = `Sala ${s} <br/> ${h.hora}`;

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
    // Recupera el ID de la película seleccionada
    const selectedPeli = localStorage.getItem("idmovie") || null;
    // Inicializa el resultado como nulo
    let resultado = null;

    // Recorre los horarios y busca si el ID coincide con la película seleccionada
    horarios.some(item => {
        // Si el ID coincide
        if (item.pelicula_id == selectedPeli) {
            // Guarda el horario en 'resultado'
            resultado = item;
            // Detiene el recorrido
            return true;
        }
        // Continúa el recorrido si no coincide
        return false;
    });

    // Retorna el horario encontrado o null si no existe
    return resultado;
};
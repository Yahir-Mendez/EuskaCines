import { connectedCines } from "../../js/connected.js"; // Importa la función que obtiene los datos de los cines
import activeCine from "../../js/selectedCine.js"; // Importa la función que asigna eventos a los cines seleccionados

// Verifica si hay una película seleccionada en el localStorage
const isSelectedMovie = JSON.parse(localStorage.getItem("movie")) || null;

const Cines = async () => {
    // Obtiene los datos de los cines mediante la función asíncrona connectedCines
    const data = await connectedCines();

    // Determina la ruta de enlace dependiendo si hay una película seleccionada
    let urlLink = "";
    if (isSelectedMovie != null) {
        urlLink = "src/pages/Pelicula.html"; // Si hay película seleccionada, dirige a la página de detalle
    } else {
        urlLink = "src/pages/SelectPelicula.html"; // Si no, redirige a seleccionar una película
    }

    // Selecciona el contenedor donde se insertarán las tarjetas de cines
    const container = document.getElementById("cinesGrid");
    const fragment = document.createDocumentFragment(); // Crea un fragmento para evitar reflow en el DOM

    // Recorre cada clave (id) del objeto de datos de cines
    for (let key in data) {
        // Crea un contenedor individual para cada cine
        const item = document.createElement('div'); 
        item.classList.add("cines__container-item"); // Asigna la clase CSS
        item.setAttribute("id", key); // Asigna un id basado en la clave actual

        // Crea un título con el nombre del cine en mayúsculas
        const title = document.createElement('h2'); 
        title.classList.add("cines__container-item-title");
        const txt = document.createTextNode(data[key].cine.toUpperCase()); 
        title.appendChild(txt); // Inserta el texto en el título

        // Crea un enlace que envolverá la imagen y el título del cine
        const link = document.createElement('a'); 
        link.setAttribute("href", urlLink); // Asigna la ruta correspondiente al enlace

        link.appendChild(title); // Agrega el título dentro del enlace

        // Crea la imagen asociada al cine
        const img = document.createElement('img'); 
        img.classList.add("cines__container-item-img"); // Aplica la clase CSS a la imagen
        img.setAttribute("src", `${data[key].url}`); // Asigna la URL de la imagen proveniente de los datos
        img.setAttribute("alt", `${data[key].cine}`); // Se Inserta el nombre como atributo de alt
        img.setAttribute("width","150"); //asigna explicitamente un width ( para mejorar SEO )
        img.setAttribute("height","150"); //asigna explicitamente un height ( para mejorar SEO )
        // Ensambla la estructura de la tarjeta del cine
        link.appendChild(img); // Inserta la imagen dentro del enlace
        item.appendChild(link); // Inserta el enlace dentro del contenedor de la tarjeta
        fragment.appendChild(item); // Agrega la tarjeta completa al fragmento
    }

    // Inserta todas las tarjetas en el contenedor principal del DOM
    container.appendChild(fragment);
};

const initializeApp = async () => {
    await Cines(); // Llama a la función que renderiza las tarjetas de cines
    activeCine();  // Asigna eventos o acciones a las tarjetas renderizadas
};

// Inicializa la aplicación
initializeApp();
import { connectedCines } from "../../js/connected.js";


const Cines = async () => {
    // Obtiene los datos de los cines a través de la función connectedCines
    const data = await connectedCines();

    // Selecciona el contenedor principal donde se agregarán las tarjetas de cines
    const container = document.getElementById("cinesGrid");
    const fragment = document.createDocumentFragment(); // Se utiliza un fragmento para evitar reflow en el DOM
    
    // Itera sobre las claves del objeto de datos
    for (let key in data) {
        // Crea un contenedor individual para cada cine
        const item = document.createElement('div'); // Se crea un nodo 'div' para cada tarjeta
        item.classList.add("cines__container-item"); // Se asigna la clase para los estilos CSS del contenedor

        // Crea un título para mostrar el nombre del cine
        const title = document.createElement('h2'); // Nodo 'h2' para el nombre del cine
        title.classList.add("cines__container-item-title"); // Se asigna la clase CSS al título
        const txt = document.createTextNode(data[key].cine.toUpperCase()); // Convierte el nombre del cine a mayúsculas
        title.appendChild(txt); // Inserta el texto en el nodo 'h2'

        // Crea un enlace (etiqueta 'a') que envolverá la imagen y el título
        const link = document.createElement('a'); // Se crea un nodo 'a' para el enlace a la página de detalle
        link.setAttribute("href", "/cine.html"); // Se asigna la ruta al enlace

        link.appendChild(title); // Inserta el título dentro del enlace

        // Crea una imagen para representar al cine
        const img = document.createElement('img'); // Nodo 'img' para mostrar la imagen del cine
        img.classList.add("cines__container-item-img"); // Clase CSS para aplicar los estilos a la imagen
        img.setAttribute("src", `${data[key].url}`); // Asigna la URL de la imagen proveniente de los datos

        // Ensambla la tarjeta del cine:
        link.appendChild(img); // Inserta la imagen dentro del enlace
        item.appendChild(link); // Inserta el enlace (con imagen y título) en el contenedor principal de la tarjeta
        fragment.appendChild(item); // Agrega la tarjeta completa al fragmento
    }

    // Inserta el fragmento completo en el contenedor principal del DOM
    container.appendChild(fragment);
};

// Llama a la función principal para renderizar las tarjetas de cines
Cines();

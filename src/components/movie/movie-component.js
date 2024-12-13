import { connectedPeliculas } from '../../js/connected.js'; // Importa la función 'connectedPeliculas' que retorna los datos de películas.
import active from '../../js/selectedPelicula.js'; // Importa la función 'active' para asignar eventos a las películas.

 // Verifica si hay una película seleccionada en el localStorage
 const isSelectedCine = JSON.parse(localStorage.getItem("cine")) || null;

export const MoviesGrid = async () => { 
    // Obtiene el contenedor principal donde se agregarán las tarjetas de películas
    const container = document.getElementById("container-billboard");

    // Determina la ruta de enlace dependiendo si hay un cine  seleccionado
    let urlLink = "";
    if (isSelectedCine != null) {
        urlLink = "/src/pages/Pelicula.html"; // Si hay un cine seleccionado, dirige a la página de detalle
    } else {
        urlLink = "/cines.html"; // Si no, redirige a seleccionar a cine
    }

    // Llama a la función 'connectedPeliculas' y espera a que retorne los datos de las películas
    const data = await connectedPeliculas();

    // Crea un fragmento de documento para evitar múltiples reflows en el DOM durante las iteraciones
    const fragment = document.createDocumentFragment(); 

    // Itera sobre cada clave en el objeto 'data', donde cada clave representa una película
    for (const key in data) { 
        // Crea el contenedor principal de la tarjeta
        const item = document.createElement('div'); 
        item.classList.add("billboard__card-item"); // Clase CSS para los estilos de la tarjeta
        item.classList.add("CardItem"); // Clase adicional para funcionalidad o estilos
        item.setAttribute("id", `${key}`); // Asigna un id único a cada tarjeta basado en la clave

        // Crea un enlace (<a>) que contendrá la imagen y redireccionará a la página de cines
        const link = document.createElement('a'); 
        link.setAttribute("href", urlLink); //  Asigna la ruta correspondiente al enlace

        // Crea una imagen para mostrar la portada de la película
        const img = document.createElement('img'); 
        img.classList.add("billboard__card-item-img"); // Clase CSS para el tamaño y estilos de la imagen
        img.setAttribute("src", `${data[key].url}`); // Establece la URL de la imagen a partir de los datos

        // Construye la estructura de la tarjeta
        link.appendChild(img);    // Inserta la imagen dentro del enlace
        item.appendChild(link);   // Inserta el enlace dentro del contenedor de la tarjeta
        fragment.appendChild(item); // Agrega la tarjeta completa al fragmento
    }

    // Inserta el fragmento completo en el contenedor principal del DOM
    container.appendChild(fragment);
};

// Función principal para inicializar la app
const initializeApp = async () => {
    await MoviesGrid(); // Espera a que las tarjetas se rendericen
    active();           // Llama a la función 'active' para asignar eventos a las tarjetas
};

initializeApp(); // Llama a la función que inicia la aplicación

// Importa la función 'connectedPeliculas' que se conecta a los datos de películas desde un archivo JS
import { connectedPeliculas } from "../../js/connected.js";

// Obtiene el cine seleccionado desde el localStorage, si existe; si no, se asigna null
const isSelectedCine = JSON.parse(localStorage.getItem("cine")) || null;

// Define una función asincrónica llamada 'Slider' para cargar las películas y mostrar el slider
const Slider = async () => {
    // Llama a la función 'connectedPeliculas' para obtener los datos de las películas
    const data = await connectedPeliculas();

    
    // Establece el enlace 'urlLink' dependiendo de si hay un cine seleccionado o no
    const urlLink = isSelectedCine ? "/src/pages/Pelicula.html" : "/cines.html";

    // Variable que almacena el contenido HTML generado para el slider
    let htmlContent = "";

    // Obtiene las primeras 3 películas desde los datos (tomando las primeras 3 claves)
    const keys = Object.keys(data).slice(0, 3); // Toma solo las primeras 3 películas

    // Recorre las primeras 3 claves y genera el HTML para cada película
    keys.forEach(key => {
        htmlContent += `
            <div class="container-slide">
                <div class="slider__image">
                    <!-- Imagen de la película -->
                    <img src="${data[key].urlPortada}" alt="${data[key].nombre}" class="slider__image-img">
                </div>
                <!-- Título de la película -->
                <h2 class="slider__title">${data[key].nombre.toUpperCase()}</h2>
                <!-- Botón de reserva que redirige al enlace adecuado -->
                <div class="slider__box-button CardItem" id="${key}">
                    <button class="slider__button">
                        <!-- Enlace para la reserva, que cambia según si hay un cine seleccionado o no -->
                        <a href="${urlLink}">Reserva Ya</a>
                    </button>
                </div>
            </div>
        `;
    });

    // Obtiene el contenedor con id 'slider' en el HTML
    const container = document.getElementById("slider");

    // Inserta el contenido HTML generado en el contenedor del slider
    container.innerHTML = htmlContent;
};

// Llama a la función 'Slider' para cargar las películas y renderizar el slider en el DOM
Slider();

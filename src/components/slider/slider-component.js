// Importa la función 'connected' desde el archivo 'connected.js' para obtener los datos
import { connectedPeliculas } from "../../js/connected.js";

//se envuelve en una funcion asincrona para consumir la promesa
const Slider = async() =>{
    // Obtiene los datos de la función 'connected()' de forma asincrónica
    const data = await connectedPeliculas();

    // Inicializa una variable para almacenar el contenido HTML que se generará
    let htmlContent = "";

    // Toma las primeras 3 claves del objeto 'data' usando 'Object.keys' y 'slice' para limitar los resultados
    const keys = Object.keys(data).slice(0, 3); //Toma las primeras 3

    // Recorre las primeras 3 claves en el arreglo 'keys' usando 'for of'
    for(const key of keys){
        // Para cada clave (película), se genera un bloque de HTML y se agrega a la variable 'htmlContent'
        htmlContent += `
            <!-- Slider: Contenedor de cada película -->
            <div class="container-slide">
                <!-- Imagen de la película (Portada) -->
                <div class="slider__image">
                    <img src="${data[key].urlPortada}" alt="${data[key].nombre}" class="slider__image-img">
                </div>
                <!-- Título de la película -->
                <h2 class="slider__title">${data[key].nombre.toUpperCase()}</h2>
                <!-- Caja con el botón de reserva -->
                <div class="slider__box-button CardItem" id="${key}">
                    <button class="slider__button">
                        <a href="/src/pages/pelicula.html">Reserva Ya</a>
                    </button>
                </div>
            </div>
        `;
    }

    // Se obtiene el contenedor con id 'slider' donde se insertará el contenido generado
    const container = document.getElementById("slider");

    // Inserta el contenido generado dentro del contenedor con id 'slider'
    container.innerHTML = htmlContent;
}
Slider();

import { connectedPeliculas } from "./connected.js"; // Importa la función para obtener los datos de las películas

// Función principal para activar los eventos en las películas
export default function active() {
    // Obtiene todos los elementos con la clase "CardItem"
    const movies = document.getElementsByClassName("CardItem");

    // Asignar evento a cada película
    Array.from(movies).forEach(movie => {
        movie.addEventListener('click', async function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

            const movieId = this.getAttribute("id"); // Obtener el id de la película seleccionada
            try {
                // Obtener los datos de la película seleccionada
                const Data = await pelicula(movieId);
                // Guardar los datos en localStorage
                localStorage.setItem('movie', JSON.stringify(Data));
                localStorage.setItem('idmovie', movieId);

                // Redirigir a la página correspondiente
                window.location.href = this.querySelector('a').getAttribute('href');
            } catch (error) {
                console.error("Error al obtener los datos de la película: ", error);
            }
        });
    });
}

// Obtener los datos de la película según el id
const pelicula = async (keyMovie) => {
    try {
        // Obtener los datos de las películas
        const data = await connectedPeliculas();
        console.log(data[keyMovie]);
        // Acceder directamente a la película con la clave
        return data[keyMovie] || null; // Devuelve null si no se encuentra la película
    } catch (error) {
        console.error("Error al obtener las películas: ", error);
        return null; // Devuelve null si ocurre un error
    }
};
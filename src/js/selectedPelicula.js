import { connectedPeliculas } from "./connected.js";

export default function active() {
    const movies = document.getElementsByClassName("CardItem");

    // Asignar evento a cada película
    Array.from(movies).forEach(movie => {
        movie.addEventListener('click', async function() {
            // Remover la clase 'selected' de todas las películas
            Array.from(movies).forEach(item => {
                item.classList.remove("selected");
            });

            // Añadir la clase 'selected' a la película clickeada
            this.classList.add("selected");

            const movieId = this.getAttribute("id"); // Obtener el id de la película seleccionada
            try {
                // Obtener los datos de la película seleccionada
                const Data = await pelicula(movieId);
                // Guardar los datos en localStorage
                localStorage.setItem('movie', JSON.stringify(Data));
                localStorage.setItem('idmovie', movieId);
            } catch (error) {
                console.error("Error al obtener los datos de la película: ", error);
            }
        });
    });
}

// Obtener los datos de la película según el id
const pelicula = async (keyMovie) => {
    try {
        const data = await connectedPeliculas();
        // Acceder directamente a la película con la clave
        return data[keyMovie] || null; // Devuelve null si no se encuentra la película
    } catch (error) {
        console.error("Error al obtener las películas: ", error);
        return null; // Devuelve null si ocurre un error
    }
};

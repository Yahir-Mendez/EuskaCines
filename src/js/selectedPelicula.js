import { connectedPeliculas } from "./connected.js";

export default function active(){
    const movies = document.getElementsByClassName("CardItem");
    // Llamar a la función 'selectedPelicula' cuando se haga clic en una película
    Array.from(movies).forEach(movie => {
        movie.addEventListener('click', async function() {
            // Remover la clase 'selected' de todas las películas
            Array.from(movies).forEach(item => {
                item.classList.remove("selected");
            });
            // Añadir la clase 'selected' a la película clickeada
            this.classList.add("selected");
            const movieId = this.getAttribute("id"); // Obtener el id de la película seleccionada
            // Obtener los datos de la película seleccionada
            const Data = await pelicula(movieId);
            // Guardar los datos en localStorage
            localStorage.setItem('movie', JSON.stringify(Data));
            localStorage.setItem('idmovie', movieId);
        });
    });
}
// Obtener los datos de la película según el id
const pelicula = async (keyMovie) => {
    const data = await connectedPeliculas();
    let DataPelicula = null;
    // Buscar la película en los datos obtenidos
    for (let key in data) {
        if (key === keyMovie) {
            DataPelicula = data[key];
            break;
        }
    }
    // Devolver los datos de la película
    return DataPelicula;
};
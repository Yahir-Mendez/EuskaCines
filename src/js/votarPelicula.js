import { getHash } from './hashTiket.js';
document.addEventListener('DOMContentLoaded', () => {


// Obtener el nombre de la película desde el localStorage
const movieItem = localStorage.getItem("movie");
const pelicula = movieItem ? JSON.parse(movieItem).nombre : null;
document.getElementById("movieName").textContent = pelicula;

    const form = document.getElementById('votarPeliculaForm');
    let selectedRating = 0;

    // Manejar la selección de estrellas
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const value = star.getAttribute('data-value');
            stars.forEach(s => s.textContent = '☆');
            for (let i = 0; i < value; i++) {
                stars[i].textContent = '★';
            }
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.textContent = '☆');
            for (let i = 0; i < selectedRating; i++) {
                stars[i].textContent = '★';
            }
        });

        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            stars.forEach(s => s.textContent = '☆');
            for (let i = 0; i < selectedRating; i++) {
                stars[i].textContent = '★';
            }
        });
    });

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Capturar los datos enviados a través del formulario
        const data = new FormData(event.target);
        const email = data.get("email");
        const tiketInput = data.get("tiket");

        // Generar el código del ticket
        const generatedTicketCode = await GeneratorTiket(email, pelicula);

        // Validar si el tiket ingresado es igual al código de tiket generado
        if (!tiketInput.startsWith(generatedTicketCode)) {
            alert("Tiket no Valido");
        } else {
            alert("Tiket valido");
            // Aquí puedes agregar la lógica para guardar la calificación
            alert(`Película: ${pelicula}, Calificación: ${selectedRating}`);
            window.location.href = '/index.html';
        }
    });
});

// Función que recibe el email del usuario y el nombre de la pelicula
//De estos datos se saca el codigo de tiket
const GeneratorTiket = async (email, pelicula) => {
    //Se concatenan los datos
    let cadena = email + pelicula;
    //Se llama a la funcion que devolvera el hash del tiket
    let tiket = await getHash(cadena);
     // Obtener los últimos 6 dígitos del hash
     const codeTiketCine = tiket.slice(-7);
     console.log('Hash:', codeTiketCine);
    // Derivar los dos números decimales de otras partes del hash
    const decimalPart1 = parseInt(tiket.slice(0, 2), 16) % 90 + 10; // Genera un número entre 10 y 99
    const decimalPart2 = parseInt(tiket.slice(2, 4), 16) % 90 + 10; // Genera un número entre 10 y 99
    // Formar el código del ticket
    const ticketCode = `${codeTiketCine}-${decimalPart1}-${decimalPart2}`;
    //retorna el codigo de tiket final
    return ticketCode;
};

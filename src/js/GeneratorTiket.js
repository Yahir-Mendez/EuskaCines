import { getHash } from './hashTiket.js';
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularioPago');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevenir el envío del formulario

            // Obtener los datos del formulario
            const email = document.getElementById('email').value;
            const telephone = document.getElementById('telephone').value;

            // Obtener el nombre de la película desde el localStorage
            const movieData = JSON.parse(localStorage.getItem('movie'));
            const movieName = movieData ? movieData.nombre : 'Película no encontrada';

            // Concatenar email y título de la película
            const concatenatedString = email + movieName;

            // Obtener el hash usando la función proporcionada
            const hash = await getHash(concatenatedString);

            // Imprimir el hash en la consola
            console.log('Hash:', hash);

            // Obtener los últimos 6 dígitos del hash
            const codeTiketCine = hash.slice(-6);

             // Derivar los dos números decimales de otras partes del hash
            const decimalPart1 = parseInt(hash.slice(0, 2), 16) % 90 + 10; 
            const decimalPart2 = parseInt(hash.slice(2, 4), 16) % 90 + 10; 
            // Formar el código del ticket
            const ticketCode = `${codeTiketCine}-${decimalPart1}-${decimalPart2}`;

            // Crear el objeto tiket
            const tiket = {
                email: email,
                telephone: telephone,
                movieName: movieName,
                date: new Date().toLocaleString(), // Fecha y hora actual
                ticketCode: ticketCode
            };

            // Guardar el objeto tiket en el localStorage
            localStorage.setItem('tiket', JSON.stringify(tiket));

            // Redirigir a la página de tiket
            window.location.href = 'tiket.html';
        });
    }

    // Mostrar los datos del ticket en tiket.html
    const tiketData = JSON.parse(localStorage.getItem('tiket'));
    const horarioSala = JSON.parse(localStorage.getItem('SalaHora'));
    const cine = JSON.parse(localStorage.getItem('cine'));
    if (tiketData) {
        document.getElementById('ticket-email').textContent = tiketData.email;
        document.getElementById('ticket-telephone').textContent = tiketData.telephone;
        document.getElementById('cineName').textContent = cine.cine;
        document.getElementById('ticket-movieName').textContent = tiketData.movieName;
        document.getElementById('ticket-date').textContent = tiketData.date;
        document.getElementById('ticket-code').textContent = tiketData.ticketCode;
        document.getElementById('ticket-horarioSala').textContent = horarioSala.hora + ' - Sala ' + horarioSala.sala;
    }
});


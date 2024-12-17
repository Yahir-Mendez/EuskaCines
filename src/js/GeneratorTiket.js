document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form__info');

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
            const ticketPrefix = hash.slice(-6);

            // Generar el código del ticket
            const ticketCode = `${ticketPrefix}-${Math.floor(10 + Math.random() * 90)}-${Math.floor(10 + Math.random() * 90)}`;

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
    if (tiketData) {
        document.getElementById('ticket-email').textContent = tiketData.email;
        document.getElementById('ticket-telephone').textContent = tiketData.telephone;
        document.getElementById('ticket-movieName').textContent = tiketData.movieName;
        document.getElementById('ticket-date').textContent = tiketData.date;
        document.getElementById('ticket-code').textContent = tiketData.ticketCode;
    }
});

const getHash = async function (input) {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray.map((item) => item.toString(16).padStart(2, "0")).join("");
    return hash;
};
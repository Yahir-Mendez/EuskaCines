import { connectedCines } from "./connected.js"; // Importa la función para obtener los datos de los cines

// Función principal para activar los eventos en los cines
export default function activeCine() {
    // Obtiene todos los elementos con la clase "cines__container-item"
    const cines = document.getElementsByClassName("cines__container-item");

    // Convierte el HTMLCollection a un Array para poder usar forEach
    Array.from(cines).forEach(cine => {
        cine.addEventListener('click', async function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

            // Obtener el id del cine seleccionado
            const cineId = this.getAttribute("id");

            // Obtener los datos del cine utilizando el id
            const Data = await cinesDatos(cineId);

            // Guardar los datos del cine en localStorage
            localStorage.setItem('cine', JSON.stringify(Data));

            // Redirigir a la página correspondiente
            window.location.href = this.querySelector('a').getAttribute('href');
        });
    });
}

// Función para obtener los datos del cine por su id
const cinesDatos = async (keyCine) => {
    // Obtener los datos de los cines
    const data = await connectedCines();
    
    // Buscar el cine con el id correspondiente y devolver sus datos
    return data[keyCine] || null; // Devuelve los datos del cine o null si no se encuentra
}
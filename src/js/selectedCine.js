import { connectedCines } from "./connected.js";

export default function activeCine() {
    const cines = document.getElementsByClassName("cines__container-item");

    // Convertir el HTMLCollection a un Array para poder usar forEach
    Array.from(cines).forEach(cine => {
        cine.addEventListener('click', async function() {
            // Eliminar la clase "selected" de todos los cines
            Array.from(cines).forEach(item => {
                item.classList.remove("selected");
            });

            // Añadir la clase "selected" al cine clickeado
            this.classList.add("selected");

            // Obtener el id del cine seleccionado
            const cineId = this.getAttribute("id");

            // Obtener los datos del cine utilizando el id
            const Data = await cinesDatos(cineId);

            // Guardar los datos del cine en localStorage
            localStorage.setItem('cine', JSON.stringify(Data));
        });
    });
}

const cinesDatos = async (keyCine) => {
    // Obtener los datos de los cines
    const data = await connectedCines();
    
    // Buscar el cine con el id correspondiente
    return data[keyCine] || null; // Devuelve los datos del cine o null si no se encuentra
}

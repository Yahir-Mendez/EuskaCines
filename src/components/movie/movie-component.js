import { connectedPeliculas } from '../../js/connected.js'; // Importa la función 'connected' desde el archivo 'connected.js' para obtener los datos
import active from '../../js/selectedPelicula.js';


export const MoviesGrid = async () => { // Se envuelve en una función asincrónica para consumir la promesa retornada por 'connected'
   const container = document.getElementById("container-billboard");
    const data = await connectedPeliculas();
    // Crea un fragmento de documento que se utilizará para evitar modificaciones innecesarias del DOM en cada iteración
    const fragment = document.createDocumentFragment(); // Se crea un fragmento de documento para agregar los elementos sin modificar el DOM directamente

    // Itera sobre cada clave del objeto 'data' (cada película)
    for (const key in data) { 
        // Crea un contenedor 'div' para cada tarjeta
        const item = document.createElement('div'); // Se crea un nodo 'div' para contener cada tarjeta
        item.classList.add("billboard__card-item");
        item.classList.add("CardItem");
        item.setAttribute("id", `${key}`);

        // Crea un enlace (etiqueta 'a') para cada tarjeta
        const link = document.createElement('a'); // Se crea un nodo 'a' (enlace)
       
        link.setAttribute("href", "/cines.html"); // Se asigna el atributo 'href' con el enlace a la página de detalle de cine

        // Crea la imagen para cada tarjeta
        const img = document.createElement('img'); // Se crea un nodo 'img' para mostrar la imagen
        img.classList.add("billboard__card-item-img");
       
        img.setAttribute("src", `${data[key].url}`); // Se asigna la URL de la imagen obtenida de 'data[key].url'

        // Construcción de la tarjeta:
        // Inserta la imagen dentro del enlace
        link.appendChild(img); 
        // Inserta el enlace dentro del contenedor 'item' (que es el contenedor de la tarjeta)
        item.appendChild(link); 
        // Agrega el contenedor de la tarjeta 'item' al fragmento para acumularlo antes de insertarlo en el DOM
        fragment.appendChild(item); 
    }

    // Finalmente, se inserta todo el fragmento (que contiene todas las tarjetas generadas) dentro del contenedor principal
    container.appendChild(fragment); // Se inserta el fragmento completo dentro del contenedor con id 'container-billboard'
}


// Asegurarse de que 'active' se llama después de que 'MoviesGrid' haya terminado
const initializeApp = async () => {
    await MoviesGrid(); // Espera a que se rendericen las tarjetas
    active();           // Llama a la función que asigna eventos
};

initializeApp();

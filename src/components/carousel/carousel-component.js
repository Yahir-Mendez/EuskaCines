import { connectedPeliculas } from '../../js/connected.js'; // Importa los datos del archivo connected.js

const Carousel = async() =>{ //se envuelve en una funcion asincrona para consumir la promesa
    const data = await connectedPeliculas(); // Asigna el retorno de connected() (una promesa) a la constante data
    // Se obtiene un arreglo con las claves del objeto 'data' y se limita a las primeras 6 claves
    const keys = Object.keys(data).slice(0, 6); // Asigna las primeras 6 claves del objeto data a 'keys'

    const container = document.getElementById("carousel-container"); // Se asigna el contenedor donde se insertarán los elementos generados
    const fragment = document.createDocumentFragment(); // Crea un fragmento de documento para evitar modificaciones innecesarias del DOM

    // Itera sobre cada una de las claves en 'keys'
    for (let key of keys) { 
        // Crea un nuevo contenedor de tarjeta
        const item = document.createElement('div'); // Crea un nodo 'div' para contener cada tarjeta
        item.classList.add("carousel__card"); // Se le asigna la clase CSS 'carousel__card' para aplicar los estilos

        // Crea el enlace de la tarjeta
        const link = document.createElement('a'); // Crea un nodo 'a' (enlace)
        link.setAttribute("href", "/cine.html"); // Se asigna el atributo 'href' para redirigir al usuario cuando haga clic

        // Crea la imagen de la tarjeta
        const img = document.createElement('img'); // Crea un nodo 'img' para mostrar una imagen
        img.classList.add("carousel__card-img"); // Se le asigna una clase CSS para aplicar los estilos a la imagen
        img.setAttribute("src", `${data[key].url}`); // Se asigna la URL de la imagen obtenida de 'data[key].url'

        // Construir la tarjeta (construir la estructura HTML de la tarjeta)
        link.appendChild(img); // Inserta la imagen dentro del enlace
        item.appendChild(link); // Inserta el enlace dentro del contenedor de la tarjeta (item)
        fragment.appendChild(item); // Añade el contenedor de la tarjeta (item) al fragmento
    }

    // Finalmente, se inserta todo el fragmento (con las tarjetas generadas) dentro del contenedor principal
    container.appendChild(fragment); // Inserta el fragmento completo dentro del contenedor con id 'carousel-container'
} 

Carousel(); // se llama a la funcion


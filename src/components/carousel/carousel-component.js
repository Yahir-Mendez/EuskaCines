import { connectedPeliculas } from '../../js/connected.js'; // Importa los datos de películas desde el archivo connected.js

const Carousel = async () => { 
    // Función asincrónica que consume la promesa y obtiene los datos
    const data = await connectedPeliculas(); // Recupera el objeto de datos con las películas

    // Obtiene un arreglo con las claves del objeto 'data' y toma solo las primeras 6 claves
    const keys = Object.keys(data).slice(0, 6); 

    // Selecciona el contenedor principal donde se insertarán las tarjetas del carrusel
    const container = document.getElementById("carousel-container"); 
    // Crea un DocumentFragment para construir los elementos en memoria y evitar múltiples repintados del DOM
    const fragment = document.createDocumentFragment(); 

    // Itera sobre las claves seleccionadas (las primeras 6 del objeto data)
    for (let key of keys) { 
        // Crea un contenedor 'div' para la tarjeta individual
        const item = document.createElement('div'); 
        item.classList.add("carousel__card"); // Asigna la clase CSS para aplicar estilos de tarjeta

        // Crea un enlace que redirige al usuario a la página de detalle
        const link = document.createElement('a'); 
        link.setAttribute("href", "/cine.html"); // Establece el enlace de navegación de la tarjeta

        // Crea una imagen y le asigna la URL correspondiente del objeto data
        const img = document.createElement('img'); 
        img.classList.add("carousel__card-img"); // Aplica estilos CSS específicos para la imagen
        img.setAttribute("src", `${data[key].url}`); // Inserta la URL de la imagen desde la propiedad 'url'

        // Construye la estructura de la tarjeta: inserta la imagen en el enlace y el enlace en el contenedor de la tarjeta
        link.appendChild(img); 
        item.appendChild(link); 
        fragment.appendChild(item); // Añade la tarjeta completa al fragmento
    }

    // Inserta el fragmento completo en el contenedor principal del carrusel
    container.appendChild(fragment); 
};

// Llama a la función para inicializar el carrusel en la página
Carousel(); 

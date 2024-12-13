// Función asincrónica para obtener los datos de las películas desde un archivo JSON local
export const connectedPeliculas = async () => {
    const url = "/src/peliculas.json"; // Ruta del archivo JSON que contiene la información de las películas
    const response = await fetch(url); // Realiza una solicitud HTTP GET para obtener los datos
    const data = await response.json(); // Convierte la respuesta a formato JSON
    return data; // Retorna los datos obtenidos
};

// Función asincrónica para obtener los datos de los cines desde un archivo JSON local
export const connectedCines = async () => {
    const url = "/src/cines.json"; // Ruta del archivo JSON que contiene la información de los cines
    const response = await fetch(url); // Realiza una solicitud HTTP GET para obtener los datos
    const data = await response.json(); // Convierte la respuesta a formato JSON
    return data; // Retorna los datos obtenidos
};

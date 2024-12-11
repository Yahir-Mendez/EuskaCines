export const connectedPeliculas = async () =>{
    const url = "/src/peliculas.json";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


export const connectedCines = async() =>{
    const url = "/src/cines.json";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
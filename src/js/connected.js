export const connected = async () =>{
    const url = "/src/fichero.json";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}



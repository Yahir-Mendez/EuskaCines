const Data = JSON.parse(localStorage.getItem("movie"));

const peliculaInfo = () => {
    // Llamar a la función 'pelicula' para obtener los detalles de la película
    const DataPelicula = Data;
    
    // Actualizar el slider con los detalles de la película seleccionada
    slider2(DataPelicula.urlPortada, DataPelicula.nombre.toUpperCase());
    
}

const slider2 = (src, nombre) => {
    const sliderImg = document.getElementById("slider2-image");
    const sliderTitle = document.getElementById("slider2-title"); // Corregir el typo aquí

    // Actualizar la imagen y el título del slider
    sliderImg.setAttribute("src", src);
    sliderTitle.textContent = nombre;
};




peliculaInfo();

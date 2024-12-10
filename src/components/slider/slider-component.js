import { connected } from "../../js/connected.js";

document.addEventListener("DOMContentLoaded", async() =>{

    const data = await connected();
    let htmlContent = "";
    const keys = Object.keys(data).slice(0, 3); //Toma las primeras 4
    for(const key of keys){
        htmlContent += `
            <!-- Slider -->
                    <div class="container-slide" >
                        <div class="slider__image"><img src="${data[key].urlPortada}"  alt="${data[key].nombre.toUpperCase()}" class="slider__image-img"></div>
                        <h2 class="slider__title">${data[key].nombre}</h2>
                        <div class="slider__box-button">
                            <button class="slider__button"><a href="./peliculas/p01/seleccionar-cine.html">Reserva Ya</a></button>
                        </div>
                    </div>
        `;    
    }
    const container = document.getElementById("slider");
    container.innerHTML = htmlContent;
});

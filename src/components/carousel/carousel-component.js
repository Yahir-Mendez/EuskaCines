import { connected } from '../../js/connected.js';
document.addEventListener("DOMContentLoaded", async function(){

    const data = await connected();
    const keys = Object.keys(data).slice(0,6);
    const container = document.getElementById("carousel-container");
    const fragment = document.createDocumentFragment();
    for(let key of keys){
         //item de card
        const item = document.createElement('div');
        item.classList.add("carousel__card");
        //enlace del item
        const link = document.createElement('a');
        link.setAttribute("href","/cine.html");
        //image card
        const img = document.createElement('img');
        img.classList.add("carousel__card-img");
        img.setAttribute("src",`${data[key].url}`);

        //contruir Card
        link.appendChild(img);
        item.appendChild(link);
        fragment.appendChild(item);
    }
    container.appendChild(fragment);
});


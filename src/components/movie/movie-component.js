import { connected } from '../../js/connected.js';
const data = await connected();
//container de Card
const container = document.getElementById('container-billboard');
//evita modificar el DOM en cada iteación
const fragment = document.createDocumentFragment();
for(const key in data){
    //item de card
    const item = document.createElement('div');
    item.classList.add("billboard__card-item");
    //enlace del item
    const link = document.createElement('a');
    link.setAttribute("href","/cine.html");
    //image card
    const img = document.createElement('img');
    img.classList.add("billboard__card-item-img");
    img.setAttribute("src",`${data[key].url}`);

    //contruir Card
    link.appendChild(img);
    item.appendChild(link);
    fragment.appendChild(item);
}
container.appendChild(fragment);